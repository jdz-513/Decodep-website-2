import { supabase } from '../lib/supabase'

export type ServiceRequestStatus = 'NEW' | 'IN_REVIEW' | 'CONTACTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'

export interface AdminServiceRequest {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  service: string
  project_details: string | null
  status: ServiceRequestStatus
  created_at: string
  updated_at: string
}

const getSupabaseClient = () => {
  if (!supabase) throw new Error('Supabase is not configured.')
  return supabase
}

const requestFields = 'id, name, email, phone, company, service, project_details, status, created_at, updated_at'

export async function getAdminServiceRequests(): Promise<AdminServiceRequest[]> {
  const { data, error } = await getSupabaseClient()
    .from('service_requests')
    .select(requestFields)
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data || []) as AdminServiceRequest[]
}

export async function updateServiceRequestStatus(id: string, status: ServiceRequestStatus): Promise<AdminServiceRequest> {
  const { data, error } = await getSupabaseClient()
    .from('service_requests')
    .update({ status })
    .eq('id', id)
    .select(requestFields)
    .single()

  if (error) throw error
  return data as AdminServiceRequest
}

export async function deleteServiceRequest(id: string): Promise<void> {
  const { error } = await getSupabaseClient()
    .from('service_requests')
    .delete()
    .eq('id', id)

  if (error) throw error
}