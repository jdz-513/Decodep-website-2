import { collaborations as staticCollaborations, Collaboration } from '../data/collaborations'
import { supabase } from '../lib/supabase'
import { resolvePublicImageUrl } from './publicImageDelivery'
import { getCachedPublicData } from './publicCache'

type CollaborationRow = {
  id: string
  partner: string
  type: string
  description: string
  image_url: string
  date: string | null
  status: Collaboration['status']
  link: string
  published: boolean
  created_at: string
  updated_at: string
}

const findStaticMatch = (row: CollaborationRow) =>
  staticCollaborations.find(
    (collaboration) =>
      collaboration.id === row.id ||
      collaboration.link === row.link ||
      row.link.endsWith(`/collaborations/${collaboration.id}`)
  )

const toCollaboration = (row: CollaborationRow): Collaboration => {
  const staticMatch = findStaticMatch(row)
  const image = row.image_url || staticMatch?.image || ''
  const title = staticMatch?.title || `DECODEP Community × ${row.partner}`
  const description = row.description || staticMatch?.description || ''

  return {
    ...staticMatch,
    id: row.id,
    partner: row.partner,
    title,
    type: row.type,
    description,
    image,
    date: row.date || staticMatch?.date || '',
    status: row.status,
    scopes: staticMatch?.scopes || [],
    link: row.link || staticMatch?.link || `/collaborations/${row.id}`,
    linkText: staticMatch?.linkText || (row.status === 'IN DISCUSSION' ? 'In Discussion' : 'View Agreement'),
    partnerName: staticMatch?.partnerName || row.partner,
    partnerLogo: image || staticMatch?.partnerLogo,
    collaborationType: staticMatch?.collaborationType || row.type,
    shortDescription: description,
    nature: staticMatch?.nature || row.type,
    posterImage: image || staticMatch?.posterImage,
    partyA: staticMatch?.partyA || {
      name: 'DECODEP Community',
      entity: 'An initiative of DECODEP',
      representative: 'DECODEP Team',
      designation: 'Community Leadership',
      location: 'Tamil Nadu, India',
    },
    partyB: staticMatch?.partyB || {
      name: row.partner,
      entity: row.type,
      representative: 'Partner Team',
      designation: 'Community Leadership',
      location: 'Tamil Nadu, India',
    },
    purpose: staticMatch?.purpose,
    initialInitiative: staticMatch?.initialInitiative,
    rolesPartyA: staticMatch?.rolesPartyA,
    rolesPartyB: staticMatch?.rolesPartyB,
  }
}

const collaborationSelect = 'id, partner, type, description, image_url, date, status, link, published, created_at, updated_at'

export async function getPublishedCollaborations(): Promise<Collaboration[]> {
  return getCachedPublicData('collaborations:published', getPublishedCollaborationsUncached)
}

async function getPublishedCollaborationsUncached(): Promise<Collaboration[]> {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  const { data, error } = await supabase
    .from('collaborations')
    .select(collaborationSelect)
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) throw error

  return Promise.all((data as CollaborationRow[]).map(async (row) => ({
    ...toCollaboration(row),
    image: await resolvePublicImageUrl('collaborations', row.image_url),
  })))
}

export async function getCollaborationById(id: string): Promise<Collaboration | null> {
  const collaborations = await getPublishedCollaborations()

  return (
    collaborations.find(
      (collaboration) =>
        collaboration.id === id || collaboration.link === `/collaborations/${id}`
    ) || null
  )
}