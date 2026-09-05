import { supabase } from '../lib/supabase'

export type ContactMessageStatus = 'NEW' | 'READ' | 'REPLIED' | 'ARCHIVED'

export interface AdminContactMessage {
  id: string
  name: string
  email: string
  phone: string | null
  category: string
  message: string
  status: ContactMessageStatus
  created_at: string
  updated_at: string
}

const getSupabaseClient = () => {
  if (!supabase) throw new Error('Supabase is not configured.')
  return supabase
}

const messageFields = 'id, name, email, phone, category, message, status, created_at, updated_at'

export async function getAdminContactMessages(): Promise<AdminContactMessage[]> {
  const { data, error } = await getSupabaseClient()
    .from('contact_messages')
    .select(messageFields)
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data || []) as AdminContactMessage[]
}

export async function updateContactMessageStatus(id: string, status: ContactMessageStatus): Promise<AdminContactMessage> {
  const { data, error } = await getSupabaseClient()
    .from('contact_messages')
    .update({ status })
    .eq('id', id)
    .select(messageFields)
    .single()

  if (error) throw error
  return data as AdminContactMessage
}

export async function deleteContactMessage(id: string): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('contact_messages')
    .delete()
    .eq('id', id)

  if (error) throw error
}