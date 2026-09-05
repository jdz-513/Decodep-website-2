import { initiatives as staticInitiatives, InitiativeItem } from '../data/initiatives'
import { supabase } from '../lib/supabase'
import { resolvePublicImageUrl } from './publicImageDelivery'
import { getCachedPublicData } from './publicCache'

type InitiativeRow = {
  id: string
  title: string
  type: string
  description: string
  image_url: string
  date: string | null
  status: InitiativeItem['status']
  link: string
  featured: boolean
  published: boolean
  display_order: number
  created_at: string
  updated_at: string
}

const findStaticMatch = (row: InitiativeRow) =>
  staticInitiatives.find(
    (initiative) => initiative.id === row.id || initiative.title === row.title
  )

const toInitiative = (row: InitiativeRow): InitiativeItem => {
  const staticMatch = findStaticMatch(row)

  return {
    ...staticMatch,
    id: row.id,
    title: row.title,
    category: row.type || staticMatch?.category || 'Initiative',
    description: row.description,
    image: row.image_url || staticMatch?.image || '',
    date: row.date || staticMatch?.date || '',
    tag: staticMatch?.tag,
    startDate: staticMatch?.startDate,
    endDate: staticMatch?.endDate,
    displayDate: staticMatch?.displayDate,
    fullDate: staticMatch?.fullDate,
    duration: staticMatch?.duration || '',
    entry: staticMatch?.entry,
    prize: staticMatch?.prize,
    teamSize: staticMatch?.teamSize || '',
    problemStatement: staticMatch?.problemStatement,
    status: row.status,
    link: row.link || staticMatch?.link || `/initiatives/${row.id}`,
    featured: row.featured,
    published: row.published,
  }
}

const initiativeSelect = 'id, title, type, description, image_url, date, status, link, featured, published, display_order, created_at, updated_at'

export async function getPublishedInitiatives(): Promise<InitiativeItem[]> {
  return getCachedPublicData('initiatives:published', getPublishedInitiativesUncached)
}

async function getPublishedInitiativesUncached(): Promise<InitiativeItem[]> {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  const { data, error } = await supabase
    .from('initiatives')
    .select(initiativeSelect)
    .eq('published', true)
    .order('display_order', { ascending: true })

  if (error) throw error

  return Promise.all((data as InitiativeRow[]).map(async (row) => ({
    ...toInitiative(row),
    image: await resolvePublicImageUrl('initiatives', row.image_url),
  })))
}

