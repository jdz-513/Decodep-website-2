import { supabase } from '../lib/supabase'

export interface AdminMoment {
  id: string
  title: string
  category: string
  image_url: string
  description: string
  date: string | null
  link: string
  published: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface MomentInput {
  title: string
  category: string
  image_url: string
  description: string
  date: string | null
  link: string
  published: boolean
  display_order: number
}

const getSupabaseClient = () => {
  if (!supabase) throw new Error('Supabase is not configured.')
  return supabase
}

const momentFields = 'id, title, category, image_url, description, date, link, published, display_order, created_at, updated_at'

export async function getAdminMoments(): Promise<AdminMoment[]> {
  const { data, error } = await getSupabaseClient()
    .from('moments')
    .select(momentFields)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data || []) as AdminMoment[]
}

export async function createMoment(input: MomentInput): Promise<AdminMoment> {
  const { data, error } = await getSupabaseClient()
    .from('moments')
    .insert(input)
    .select(momentFields)
    .single()

  if (error) throw error
  return data as AdminMoment
}

export async function updateMoment(id: string, input: MomentInput): Promise<AdminMoment> {
  const { data, error } = await getSupabaseClient()
    .from('moments')
    .update(input)
    .eq('id', id)
    .select(momentFields)
    .single()

  if (error) throw error
  return data as AdminMoment
}

export async function setMomentPublished(id: string, published: boolean): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('moments')
    .update({ published })
    .eq('id', id)

  if (error) throw error
}

export async function deleteMoment(id: string): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('moments')
    .delete()
    .eq('id', id)

  if (error) throw error
}