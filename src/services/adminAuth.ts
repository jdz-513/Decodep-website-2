import type { AuthChangeEvent, Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

export type AdminRole = 'admin' | 'super_admin'

export interface AdminProfile {
  id: string
  email: string
  role: AdminRole
}

const getSupabaseClient = () => {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  return supabase
}

export async function signInAdmin(email: string, password: string) {
  const { data, error } = await getSupabaseClient().auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error
  if (!data.user || !data.session) throw new Error('Supabase did not return an authenticated session.')

  const admin = await getAuthorizedAdmin(data.user.id)
  if (!admin) {
    await signOutAdmin()
    throw new Error('This account is not authorized to access the DECODEP admin area.')
  }

  return { ...data, admin }
}

export async function signOutAdmin() {
  const { error } = await getSupabaseClient().auth.signOut()
  if (error) throw error
}

export async function getCurrentSession(): Promise<Session | null> {
  const { data, error } = await getSupabaseClient().auth.getSession()
  if (error) throw error
  return data.session
}

export async function getCurrentUser(): Promise<User | null> {
  const { data, error } = await getSupabaseClient().auth.getUser()
  if (error) throw error
  return data.user
}

export async function getAuthorizedAdmin(userId: string): Promise<AdminProfile | null> {
  const { data, error } = await getSupabaseClient()
    .from('admins')
    .select('id, email, role')
    .eq('id', userId)
    .maybeSingle()

  if (error) throw error
  if (!data || (data.role !== 'admin' && data.role !== 'super_admin')) return null

  return data as AdminProfile
}

export function onAuthStateChange(
  callback: (event: AuthChangeEvent, session: Session | null) => void
) {
  return getSupabaseClient().auth.onAuthStateChange(callback)
}