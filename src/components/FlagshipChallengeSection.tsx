import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar, Sparkles, Trophy, Users, Clock } from 'lucide-react'
import { flagshipEvents, getEventStatus, EventStatus } from '../data/flagshipEvents'

export const FlagshipChallengeSection: React.FC = () => {
  // Primary active flagship event (01 / 03)
  const currentEventIndex = 0
  const event = flagshipEvents[currentEventIndex]
  const status: EventStatus = getEventStatus(event.startDate, event.endDate)

  // Status badge styling helper
  const renderStatusBadge = (statusType: EventStatus) => {
    if (statusType === 'LIVE NOW') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {statusType}
        </span>
      )
    }
    if (statusType === 'COMPLETED') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          {statusType}
        </span>
      )
    }
    // Default: UPCOMING EVENT
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-50 text-[#0284C7] border border-sky-200/70">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
        {statusType}
      </span>
    )
  }

  // Generate continuous ticker items
  const tickerItem = `${event.name}  •  ${status}  •  ${event.displayDate}`
  const tickerSequence = Array(6).fill(tickerItem)

  return (
    <section className="relative w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-[#111827]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact Horizontal Event Banner */}
        <div className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden">
          
          {/* Top Subtle Cyan/Blue Tech Accent */}
          <div className="absolute top-0 left-6 sm:left-10 w-20 h-1 bg-[#1677FF] rounded-b-sm" />

          {/* Main Content Area */}
          <div className="p-6 sm:p-7 md:p-8 space-y-5">
            
            {/* Top Bar: Technical Label + Status + Index */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-slate-600">
                  <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
                  <span>FLAGSHIP CHALLENGE</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">•</span>
                {renderStatusBadge(status)}
              </div>

              {/* Event Index */}
              <div className="font-mono text-xs font-semibold text-slate-500 tracking-wider">
                0{currentEventIndex + 1} / 0{flagshipEvents.length}
              </div>
            </div>

            {/* Horizontal Middle Layout */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-1">
              
              {/* Left & Center: Title, Date, Description & Meta */}
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0F172A]">
                    {event.name}
                  </h3>
                  
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-[#1677FF]" />
                    <span>{event.fullDate}</span>
                  </div>
                </div>

                <p className="font-serif text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  {event.description}
                </p>

                {/* Verified Event Specs */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {event.entry && (
                    <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-mono text-[11px] font-semibold">
                      {event.entry}
                    </span>
                  )}
                  {event.duration && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {event.duration}
                    </span>
                  )}
                  {event.teamSize && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-mono text-[11px]">
                      <Users className="w-3 h-3 text-slate-400" />
                      {event.teamSize}
                    </span>
                  )}
                  {event.prize && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200/80 text-amber-800 font-mono text-[11px] font-bold">
                      <Trophy className="w-3 h-3 text-amber-600" />
                      {event.prize}
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Compact CTA Button */}
              <div className="shrink-0 flex items-center lg:self-center pt-2 lg:pt-0">
                <Link
                  to={event.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] hover:bg-[#1677FF] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs active:scale-95"
                >
                  <span>EXPLORE CHALLENGE</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* Continuous Moving Event Ticker Bar */}
          <div className="border-t border-slate-100 bg-slate-50/75 py-2 px-4 overflow-hidden relative select-none">
            <div className="animate-event-ticker flex items-center gap-8 whitespace-nowrap">
              {/* Loop Sequence A */}
              <div className="flex items-center gap-8 text-[11px] font-mono font-medium tracking-wider text-slate-500 uppercase">
                {tickerSequence.map((item, idx) => (
                  <span key={`a-${idx}`} className="flex items-center gap-3">
                    <span className="font-semibold text-slate-700">{item}</span>
                    <span className="text-[#1677FF] font-bold">→</span>
                  </span>
                ))}
              </div>

              {/* Loop Sequence B (Identical for Seamless Infinite Scroll) */}
              <div className="flex items-center gap-8 text-[11px] font-mono font-medium tracking-wider text-slate-500 uppercase">
                {tickerSequence.map((item, idx) => (
                  <span key={`b-${idx}`} className="flex items-center gap-3">
                    <span className="font-semibold text-slate-700">{item}</span>
                    <span className="text-[#1677FF] font-bold">→</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default FlagshipChallengeSection
