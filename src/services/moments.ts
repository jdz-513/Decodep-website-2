import { MomentItem } from '../data/moments'
import { supabase } from '../lib/supabase'
import { resolvePublicImageUrl } from './publicImageDelivery'
import { getCachedPublicData } from './publicCache'

type MomentRow = {
  id: string
  title: string
  category: string
  image_url: string
  description: string
  date: string | null
  link: string
  published: boolean
  display_order: number
  created_at: string
  updated_at: string
}

const toMomentItem = (row: MomentRow): MomentItem => ({
  id: row.id,
  image: row.image_url,
  title: row.title,
  category: row.category,
  date: row.date ?? '',
  description: row.description,
  link: row.link || undefined,
  altText: row.title,
})

export async function getPublishedMoments(): Promise<MomentItem[]> {
  return getCachedPublicData('moments:published', getPublishedMomentsUncached)
}

async function getPublishedMomentsUncached(): Promise<MomentItem[]> {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  const { data, error } = await supabase
    .from('moments')
    .select('id, title, category, image_url, description, date, link, published, display_order, created_at, updated_at')
    .eq('published', true)
    .order('display_order', { ascending: true })

  if (error) throw error

  return Promise.all((data as MomentRow[]).map(async (row) => ({
    ...toMomentItem(row),
    image: await resolvePublicImageUrl('moments', row.image_url),
  })))
}