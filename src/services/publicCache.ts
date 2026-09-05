type CacheEntry<T> = {
  value: T
  expiresAt: number
}

const cache = new Map<string, CacheEntry<unknown>>()
const inFlight = new Map<string, Promise<unknown>>()
const DEFAULT_TTL_MS = 60_000

export function getCachedPublicData<T>(
  key: string,
  loader: () => Promise<T>,
  ttlMs = DEFAULT_TTL_MS
): Promise<T> {
  const cached = cache.get(key) as CacheEntry<T> | undefined
  if (cached && cached.expiresAt > Date.now()) return Promise.resolve(cached.value)

  const pending = inFlight.get(key) as Promise<T> | undefined
  if (pending) return pending

  const request = loader()
    .then((value) => {
      cache.set(key, { value, expiresAt: Date.now() + ttlMs })
      return value
    })
    .finally(() => {
      inFlight.delete(key)
    })

  inFlight.set(key, request)
  return request
}