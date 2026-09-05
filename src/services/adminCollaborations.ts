import { supabase } from '../lib/supabase'

export type CollaborationStatus = 'ACTIVE' | 'IN DISCUSSION' | 'UPCOMING' | 'COMPLETED'

export interface AdminCollaboration {
  id: string
  partner: string
  type: string
  description: string
  image_url: string
  date: string | null
  status: CollaborationStatus
  link: string
  published: boolean
  created_at: string
  updated_at: string
}

export interface CollaborationInput {
  partner: string
  type: string
  description: string
  image_url: string
  date: string | null
  status: CollaborationStatus
  link: string
  published: boolean
}

const getSupabaseClient = () => {
  if (!supabase) throw new Error('Supabase is not configured.')
  return supabase
}

const collaborationFields = 'id, partner, type, description, image_url, date, status, link, published, created_at, updated_at'

export async function getAdminCollaborations(): Promise<AdminCollaboration[]> {
  const { data, error } = await getSupabaseClient()
    .from('collaborations')
    .select(collaborationFields)
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data || []) as AdminCollaboration[]
}

export async function createCollaboration(input: CollaborationInput): Promise<AdminCollaboration> {
  const { data, error } = await getSupabaseClient()
    .from('collaborations')
    .insert(input)
    .select(collaborationFields)
    .single()

  if (error) throw error
  return data as AdminCollaboration
}

export async function updateCollaboration(id: string, input: CollaborationInput): Promise<AdminCollaboration> {
  const { data, error } = await getSupabaseClient()
    .from('collaborations')
    .update(input)
    .eq('id', id)
    .select(collaborationFields)
    .single()

  if (error) throw error
  return data as AdminCollaboration
}

export async function setCollaborationPublished(id: string, published: boolean): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('collaborations')
    .update({ published })
    .eq('id', id)

  if (error) throw error
}

export async function deleteCollaboration(id: string): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('collaborations')
    .delete()
    .eq('id', id)

  if (error) throw error
}