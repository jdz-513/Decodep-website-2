import { supabase } from '../lib/supabase'

export type AdminOverviewCounts = {
  currentUpdates: number | null
  moments: number | null
  collaborations: number | null
  initiatives: number | null
  challenges: number | null
  newContactMessages: number | null
  newServiceRequests: number | null
}

const tableNames = {
  currentUpdates: 'current_updates',
  moments: 'moments',
  collaborations: 'collaborations',
  initiatives: 'initiatives',
  challenges: 'challenges',
  contactMessages: 'contact_messages',
  serviceRequests: 'service_requests',
} as const

async function getTableCount(tableName: string, status?: string): Promise<number | null> {
  if (!supabase) return null

  let query = supabase
    .from(tableName)
    .select('id', { count: 'exact', head: true })

  if (status) query = query.eq('status', status)

  const { count, error } = await query

  return error ? null : count ?? 0
}

export async function getAdminOverviewCounts(): Promise<AdminOverviewCounts> {
  const entries = await Promise.all([
    ...Object.entries(tableNames)
      .filter(([key]) => key !== 'contactMessages' && key !== 'serviceRequests')
      .map(async ([key, tableName]) => [key, await getTableCount(tableName)] as const),
    ['newContactMessages', await getTableCount(tableNames.contactMessages, 'NEW')] as const,
    ['newServiceRequests', await getTableCount(tableNames.serviceRequests, 'NEW')] as const,
  ])

  return Object.fromEntries(entries) as AdminOverviewCounts
}