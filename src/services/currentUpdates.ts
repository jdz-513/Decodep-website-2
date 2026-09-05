import { CurrentUpdate, UpdateStatus, UpdateType } from '../data/currentUpdates'
import { supabase } from '../lib/supabase'
import { resolvePublicImageUrl } from './publicImageDelivery'
import { getCachedPublicData } from './publicCache'

type CurrentUpdateRow = {
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

const toCurrentUpdate = (row: CurrentUpdateRow): CurrentUpdate => ({
  id: row.id,
  type: row.type,
  status: row.status,
  title: row.title,
  description: row.description,
  date: row.date ?? undefined,
  image: row.poster_url,
  href: row.link,
  ctaText: 'VIEW DETAILS ↗',
  highlightNote: row.status,
  ticker: [row.title, row.type, row.status, row.date].filter(Boolean).join(' • '),
})

export async function getPublishedCurrentUpdates(): Promise<CurrentUpdate[]> {
  return getCachedPublicData('current-updates:published', getPublishedCurrentUpdatesUncached)
}

async function getPublishedCurrentUpdatesUncached(): Promise<CurrentUpdate[]> {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  const { data, error } = await supabase
    .from('current_updates')
    .select('id, type, status, title, description, date, poster_url, link, published, display_order, created_at, updated_at')
    .eq('published', true)
    .order('display_order', { ascending: true })

  if (error) throw error

  return Promise.all((data as CurrentUpdateRow[]).map(async (row) => ({
    ...toCurrentUpdate(row),
    image: await resolvePublicImageUrl('current-updates', row.poster_url),
  })))
}