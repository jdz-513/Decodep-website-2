import { supabase } from '../lib/supabase'

export type ChallengeStatus = 'UPCOMING' | 'ACTIVE' | 'ONGOING' | 'COMPLETED' | 'CLOSED'

export interface Challenge {
  id: string
  title: string
  description: string
  type: string
  imageUrl: string
  startDate: string | null
  endDate: string | null
  status: ChallengeStatus
  registrationLink: string | null
  featured: boolean
  published: boolean
  createdAt: string
  updatedAt: string
}

type ChallengeRow = {
  id: string
  title: string
  description: string
  type: string
  image_url: string
  start_date: string | null
  end_date: string | null
  status: ChallengeStatus
  registration_link: string | null
  featured: boolean
  published: boolean
  created_at: string
  updated_at: string
}

const toChallenge = (row: ChallengeRow): Challenge => ({
  id: row.id,
  title: row.title,
  description: row.description,
  type: row.type,
  imageUrl: row.image_url,
  startDate: row.start_date,
  endDate: row.end_date,
  status: row.status,
  registrationLink: row.registration_link,
  featured: row.featured,
  published: row.published,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
})

export async function getPublishedChallenges(): Promise<Challenge[]> {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  const { data, error } = await supabase
    .from('challenges')
    .select('id, title, description, type, image_url, start_date, end_date, status, registration_link, featured, published, created_at, updated_at')
    .eq('published', true)
    .order('start_date', { ascending: true, nullsFirst: false })

  if (error) throw error

  return (data as ChallengeRow[]).map(toChallenge)
}