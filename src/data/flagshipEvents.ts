import { initiatives } from './initiatives'

export interface FlagshipEvent {
  id: string
  name: string
  label?: string
  startDate: string // ISO string or YYYY-MM-DD
  endDate?: string // ISO string or YYYY-MM-DD
  displayDate: string // e.g. "SEP 20, 2026"
  fullDate: string // e.g. "September 20, 2026"
  description: string
  href: string
  entry?: string
  prize?: string
  teamSize?: string
  duration?: string
}

export type EventStatus = 'UPCOMING EVENT' | 'LIVE NOW' | 'COMPLETED'

/**
 * Computes event status dynamically based on current date/time.
 * - Before start date -> "UPCOMING EVENT"
 * - During event window -> "LIVE NOW"
 * - After event -> "COMPLETED"
 */
export function getEventStatus(startDateStr: string, endDateStr?: string): EventStatus {
  const now = new Date()
  const start = new Date(startDateStr)
  // If no explicit end date, assume 24 hours window for a full event day
  const end = endDateStr
    ? new Date(endDateStr)
    : new Date(start.getTime() + 24 * 60 * 60 * 1000)

  if (now < start) {
    return 'UPCOMING EVENT'
  }
  if (now >= start && now <= end) {
    return 'LIVE NOW'
  }
  return 'COMPLETED'
}

/** Derived flagship view over the canonical initiative records. */
export function createFlagshipEvents(source = initiatives): FlagshipEvent[] {
  return source
  .filter((initiative) => initiative.startDate && initiative.fullDate && initiative.displayDate)
  .map((initiative) => ({
    id: initiative.id,
    name: initiative.title,
    label: initiative.tag,
    startDate: initiative.startDate as string,
    endDate: initiative.endDate,
    displayDate: initiative.displayDate as string,
    fullDate: initiative.fullDate as string,
    description: initiative.description,
    href: initiative.link,
    entry: initiative.entry,
    prize: initiative.prize,
    teamSize: initiative.teamSize,
    duration: initiative.duration,
  }))
}

export const flagshipEvents: FlagshipEvent[] = createFlagshipEvents()
