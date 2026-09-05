import { supabase } from '../lib/supabase'
import type { AdminImageBucket } from './adminStorage'
import { getCachedPublicData } from './publicCache'

const managedPathPattern = /^\d{4}\/\d{2}\/[a-f0-9-]+\.(jpg|png|webp)$/i

export function isManagedPublicImagePath(path: string) {
  return managedPathPattern.test(path) && !path.includes('..')
}

export async function resolvePublicImageUrl(bucket: AdminImageBucket, value: string) {
  if (!value || !isManagedPublicImagePath(value)) return value
  if (!supabase) throw new Error('Supabase is not configured.')
  const client = supabase

  return getCachedPublicData(`image:${bucket}:${value}`, async () => {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 8_000)

    try {
      const { data, error } = await client.functions.invoke('signed-content-image', {
        body: { bucket, path: value },
        signal: controller.signal,
      })

      if (error || !data?.signedUrl) throw error || new Error('Unable to resolve managed image URL.')
      return data.signedUrl as string
    } finally {
      window.clearTimeout(timeout)
    }
  }, 50 * 60_000)
}