import { UpdateStatus, UpdateType } from '../data/currentUpdates'
import { supabase } from '../lib/supabase'

export interface AdminCurrentUpdate {
  id: string
  type: UpdateType
  status: UpdateStatus
  title: string
  description: string
  date: string | null
  poster_url: string
  link: string
  published: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface CurrentUpdateInput {
  type: UpdateType
  status: UpdateStatus
  title: string
  description: string
  date: string | null
  poster_url: string
  link: string
  published: boolean
  display_order: number
}

const getSupabaseClient = () => {
  if (!supabase) throw new Error('Supabase is not configured.')
  return supabase
}

const currentUpdateFields = 'id, type, status, title, description, date, poster_url, link, published, display_order, created_at, updated_at'

export async function getAdminCurrentUpdates(): Promise<AdminCurrentUpdate[]> {
  const { data, error } = await getSupabaseClient()
    .from('current_updates')
    .select(currentUpdateFields)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data || []) as AdminCurrentUpdate[]
}

export async function createCurrentUpdate(input: CurrentUpdateInput): Promise<AdminCurrentUpdate> {
  const { data, error } = await getSupabaseClient()
    .from('current_updates')
    .insert(input)
    .select(currentUpdateFields)
    .single()

  if (error) throw error
  return data as AdminCurrentUpdate
}

export async function updateCurrentUpdate(id: string, input: CurrentUpdateInput): Promise<AdminCurrentUpdate> {
  const { data, error } = await getSupabaseClient()
    .from('current_updates')
    .update(input)
    .eq('id', id)
    .select(currentUpdateFields)
    .single()

  if (error) throw error
  return data as AdminCurrentUpdate
}

export async function setCurrentUpdatePublished(id: string, published: boolean): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('current_updates')
    .update({ published })
    .eq('id', id)

  if (error) throw error
}

export async function deleteCurrentUpdate(id: string): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('current_updates')
    .delete()
    .eq('id', id)

  if (error) throw error
}