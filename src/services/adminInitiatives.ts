import { supabase } from '../lib/supabase'

export type InitiativeStatus = 'UPCOMING' | 'ONGOING' | 'COMPLETED'

export interface AdminInitiative {
  id: string
  title: string
  type: string
  description: string
  image_url: string
  date: string | null
  status: InitiativeStatus
  link: string
  featured: boolean
  published: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface InitiativeInput {
  title: string
  type: string
  description: string
  image_url: string
  date: string | null
  status: InitiativeStatus
  link: string
  featured: boolean
  published: boolean
  display_order: number
}

const getSupabaseClient = () => {
  if (!supabase) throw new Error('Supabase is not configured.')
  return supabase
}

const initiativeFields = 'id, title, type, description, image_url, date, status, link, featured, published, display_order, created_at, updated_at'

export async function getAdminInitiatives(): Promise<AdminInitiative[]> {
  const { data, error } = await getSupabaseClient()
    .from('initiatives')
    .select(initiativeFields)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data || []) as AdminInitiative[]
}

export async function createInitiative(input: InitiativeInput): Promise<AdminInitiative> {
  const { data, error } = await getSupabaseClient()
    .from('initiatives')
    .insert(input)
    .select(initiativeFields)
    .single()

  if (error) throw error
  return data as AdminInitiative
}

export async function updateInitiative(id: string, input: InitiativeInput): Promise<AdminInitiative> {
  const { data, error } = await getSupabaseClient()
    .from('initiatives')
    .update(input)
    .eq('id', id)
    .select(initiativeFields)
    .single()

  if (error) throw error
  return data as AdminInitiative
}

export async function setInitiativePublished(id: string, published: boolean): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('initiatives')
    .update({ published })
    .eq('id', id)

  if (error) throw error
}

export async function deleteInitiative(id: string): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('initiatives')
    .delete()
    .eq('id', id)

  if (error) throw error
}