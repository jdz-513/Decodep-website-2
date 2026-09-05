import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const bucketTables = {
  'current-updates': { table: 'current_updates', column: 'poster_url' },
  moments: { table: 'moments', column: 'image_url' },
  collaborations: { table: 'collaborations', column: 'image_url' },
  initiatives: { table: 'initiatives', column: 'image_url' },
} as const

type AllowedBucket = keyof typeof bucketTables

const managedPathPattern = /^\d{4}\/\d{2}\/[a-f0-9-]+\.(jpg|png|webp)$/i

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405)

  try {
    const body = await request.json()
    const bucket = body?.bucket as string
    const path = body?.path as string

    if (!(bucket in bucketTables) || !managedPathPattern.test(path || '') || path.includes('..')) {
      return json({ error: 'Invalid managed image request.' }, 400)
    }

    const config = bucketTables[bucket as AllowedBucket]
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    if (!supabaseUrl || !serviceRoleKey) return json({ error: 'Image delivery is not configured.' }, 500)

    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    })

    const { data: record, error: recordError } = await adminClient
      .from(config.table)
      .select(config.column)
      .eq(config.column, path)
      .eq('published', true)
      .maybeSingle()

    if (recordError) return json({ error: 'Unable to verify published image.' }, 500)
    if (!record) return json({ error: 'Published image not found.' }, 404)

    const { data, error } = await adminClient.storage.from(bucket).createSignedUrl(path, 3600)
    if (error || !data?.signedUrl) return json({ error: 'Unable to create image URL.' }, 500)

    return json({ signedUrl: data.signedUrl, expiresIn: 3600 })
  } catch {
    return json({ error: 'Invalid image delivery request.' }, 400)
  }
})
