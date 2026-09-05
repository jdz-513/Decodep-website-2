import { supabase } from '../lib/supabase'

export type ContactMessageInput = {
  name: string
  email: string
  phone: string
  category: string
  message: string
}

export type ServiceRequestInput = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  projectDetails: string
}

const getSupabaseClient = () => {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  return supabase
}

export async function submitServiceRequest(input: ServiceRequestInput) {
  const { error } = await getSupabaseClient().from('service_requests').insert({
    name: input.name,
    email: input.email,
    phone: input.phone || null,
    company: input.company || null,
    service: input.service,
    project_details: input.projectDetails,
    status: 'NEW',
  })

  if (error) throw error
}

export async function submitContactMessage(input: ContactMessageInput) {
  const { error } = await getSupabaseClient().from('contact_messages').insert({
    name: input.name,
    email: input.email,
    phone: input.phone || null,
    category: input.category,
    message: input.message,
    status: 'NEW',
  })

  if (error) throw error
}
