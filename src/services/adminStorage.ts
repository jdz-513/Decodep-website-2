import { supabase } from '../lib/supabase'

export type AdminImageBucket = 'current-updates' | 'moments' | 'collaborations' | 'initiatives'

const MAX_IMAGE_SIZE = 10 * 1024 * 1024
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

const getSupabaseClient = () => {
  if (!supabase) throw new Error('Supabase is not configured.')
  return supabase
}

const extensionForType: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}

export function validateAdminImage(file: File) {
  if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
    throw new Error('Use a JPEG, PNG, or WebP image.')
  }
  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error('Images must be 10 MB or smaller.')
  }
}

export function isManagedImagePath(bucket: AdminImageBucket, path: string) {
  return new RegExp(`^\\d{4}/\\d{2}/[a-f0-9-]+\\.(jpg|png|webp)$`, 'i').test(path) && !path.includes('..')
}

export async function uploadAdminImage(bucket: AdminImageBucket, file: File) {
  validateAdminImage(file)
  const now = new Date()
  const directory = `${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, '0')}`
  const path = `${directory}/${crypto.randomUUID()}.${extensionForType[file.type]}`

  const { error } = await getSupabaseClient().storage.from(bucket).upload(path, file, {
    cacheControl: '3600',
    contentType: file.type,
    upsert: false,
  })

  if (error) throw error
  return { bucket, path }
}

export async function deleteAdminImage(bucket: AdminImageBucket, path: string) {
  if (!isManagedImagePath(bucket, path)) return
  const { error } = await getSupabaseClient().storage.from(bucket).remove([path])
  if (error) throw error
}

export async function getAdminImagePreviewUrl(bucket: AdminImageBucket, path: string) {
  if (!isManagedImagePath(bucket, path)) return path
  const { data, error } = await getSupabaseClient().storage.from(bucket).createSignedUrl(path, 3600)
  if (error) throw error
  return data.signedUrl
}