import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowUpRight, Calendar, Radio, Sparkles } from 'lucide-react'
import { currentUpdates, CurrentUpdate, UpdateStatus, UpdateType } from '../data/currentUpdates'
import { getPublishedCurrentUpdates } from '../services/currentUpdates'

export const CurrentUpdates: React.FC = () => {
  const [items, setItems] = useState<CurrentUpdate[] | null>(currentUpdates)

  useEffect(() => {
    let isMounted = true

    getPublishedCurrentUpdates()
      .then((updates) => {
        if (isMounted) setItems(updates)
      })
      .catch(() => {
        if (isMounted) setItems(currentUpdates)
      })

    return () => {
      isMounted = false
    }
  }, [])

  if (!items || items.length === 0) return null

  return <CurrentUpdatesCarousel items={items} />
}

const CurrentUpdatesCarousel: React.FC<{ items: CurrentUpdate[] }> = ({ items }) => {

  // Items array and clone setup for seamless infinite loop (D, A, B, C, D, A)
  const total = items.length

  // Extended array with boundary clones: [last, ...items, first]
  const extendedItems: CurrentUpdate[] = [
    items[total - 1],
    ...items,
    items[0],
  ]

  // trackIndex 1 corresponds to items[0]
  const [trackIndex, setTrackIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  // Calculate current active slide index for display (1 to total)
  const activeDisplayIndex =
    trackIndex === 0
      ? total
      : trackIndex === total + 1
      ? 1
      : trackIndex

  // Currently active update for synchronized ticker details
  const activeUpdate = items[activeDisplayIndex - 1]
  const tickerParts = activeUpdate.ticker.split('•').map((p) => p.trim())
  const tickerRepeats = Array(4).fill(null)

  // Slide navigation handlers
  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setTrackIndex((prev) => prev + 1)
  }, [])

  const prevSlide = useCallback(() => {
    setIsTransitioning(true)
    setTrackIndex((prev) => prev - 1)
  }, [])

  const goToSlide = (slideIndex: number) => {
    setIsTransitioning(true)
    setTrackIndex(slideIndex + 1)
  }

  // Handle seamless wrap-around when reaching extended cloned boundaries
  const handleTransitionEnd = () => {
    if (trackIndex >= total + 1) {
      // Reached the trailing clone of item 1 -> silently snap back to item 1
      setIsTransitioning(false)
      setTrackIndex(1)
    } else if (trackIndex <= 0) {
      // Reached the leading clone of item total -> silently snap back to item total
      setIsTransitioning(false)
      setTrackIndex(total)
    }
  }

  // Auto-play interval: every 4.5 seconds right-to-left
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4500)

    return () => clearInterval(interval)
  }, [isHovered, nextSlide])

  // Status badge styling helper
  const renderStatusBadge = (status: UpdateStatus) => {
    switch (status) {
      case 'LIVE NOW':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {status}
          </span>
        )
      case 'NEW':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#1677FF] border border-blue-200/80">
            <Sparkles className="w-2.5 h-2.5 text-[#1677FF]" />
            {status}
          </span>
        )
      case 'COMING SOON':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {status}
          </span>
        )
      case 'IN DISCUSSION':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {status}
          </span>
        )
      case 'COMPLETED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            {status}
          </span>
        )
      case 'UPCOMING':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-50 text-[#0284C7] border border-sky-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
            {status}
          </span>
        )
    }
  }

  // Category badge styling helper
  const renderCategoryBadge = (type: UpdateType) => {
    return (
      <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-600">
        {type}
      </span>
    )
  }

  return (
    <section className="relative w-full py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-[#111827]/10">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Compact Section Header & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-1">
          {/* Header Left: Section Label & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0F172A]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1677FF]"></span>
              </span>
              <span>CURRENT UPDATES</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-[11px] font-medium tracking-wider text-slate-500 uppercase">
              WHAT'S HAPPENING AT DECODEP.
            </span>
          </div>

          {/* Header Right: Compact Slider Controls & Slide Index */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-slate-500 tracking-wider">
              0{activeDisplayIndex} / 0{total}
            </span>

            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                aria-label="Previous update"
                className="w-7 h-7 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-colors active:scale-95 shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next update"
                className="w-7 h-7 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-colors active:scale-95 shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Poster Slider Banner Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden"
        >
          {/* Top Subtle DECODEP Blue Accent Line */}
          <div className="absolute top-0 left-6 sm:left-10 w-20 h-1 bg-[#1677FF] rounded-b-sm z-20" />

          {/* Sliding Track Viewport */}
          <div className="w-full overflow-hidden">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${trackIndex * 100}%)`,
                transition: isTransitioning
                  ? 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)'
                  : 'none',
              }}
              className="flex flex-row w-full will-change-transform"
            >
              {extendedItems.map((slide, idx) => (
                <div
                  key={`${slide.id}-${idx}`}
                  className="w-full shrink-0 flex-none p-5 sm:p-7 md:p-8 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6 md:gap-8"
                >
                  {/* Left Column: Metadata, Title, Description, Date & CTA */}
                  <div className="flex-1 flex flex-col justify-between space-y-4 w-full">
                    
                    {/* Top Row: Category, Status & Slide Index Watermark */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        {renderCategoryBadge(slide.type)}
                        <span className="text-slate-300">•</span>
                        {renderStatusBadge(slide.status)}
                        {slide.highlightNote && (
                          <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-600 font-mono text-[10px]">
                            {slide.highlightNote}
                          </span>
                        )}
                      </div>

                      {/* Main Title */}
                      <h3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#0F172A] leading-tight">
                        {slide.title}
                      </h3>

                      {/* Description */}
                      <p className="font-serif text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                        {slide.description}
                      </p>
                    </div>

                    {/* Bottom Row: Date & Action CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
                      {slide.date ? (
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-600">
                          <Calendar className="w-3.5 h-3.5 text-[#1677FF]" />
                          <span>{slide.date}</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-400">
                          <Radio className="w-3.5 h-3.5 text-emerald-500" />
                          <span>ECOSYSTEM PROGRAM</span>
                        </div>
                      )}

                      <Link
                        to={slide.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1677FF] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs active:scale-95 group/btn"
                      >
                        <span>{slide.ctaText || 'VIEW DETAILS ↗'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </div>

                  </div>

                  {/* Right Column: Actual Poster Image Showcase (Primary Visual Element) */}
                  <div className="w-full md:w-[280px] lg:w-[320px] shrink-0 h-[260px] sm:h-[280px] md:h-[300px] flex items-center justify-center">
                    <div className="w-full h-full relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-sm flex items-center justify-center p-1.5 group/poster">
                      {/* Subtle Ambient Radial Lighting Behind Poster */}
                      <div className="absolute inset-0 bg-radial from-[#1677FF]/15 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Actual Poster Image with Clean Containment (No Text Clipping) */}
                      <img
                        src={slide.image}
                        alt={`${slide.title} Poster`}
                        loading="lazy"
                        className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover/poster:scale-[1.02]"
                      />

                      {/* Poster Category Corner Pill */}
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-200 border border-white/10 pointer-events-none">
                        {slide.type}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Bottom Progress Bar & Slide Dots */}
          <div className="bg-slate-50/80 border-t border-slate-100 py-2.5 px-6 flex items-center justify-between text-xs">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {items.map((_, dotIdx) => {
                const isActive = dotIdx + 1 === activeDisplayIndex
                return (
                  <button
                    key={`dot-${dotIdx}`}
                    onClick={() => goToSlide(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'w-6 bg-[#1677FF]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                )
              })}
            </div>

            {/* Micro Ticker Hint */}
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
              <span>•</span>
              <span>HOVER TO PAUSE</span>
            </div>
          </div>

        </div>

        {/* Synchronized Live Ticker Strip */}
        <div
          className="relative w-full bg-white rounded-xl border border-slate-200/90 shadow-2xs py-2 sm:py-2.5 px-3 sm:px-4 overflow-hidden select-none"
          title="Live update ticker — synchronized with active poster"
        >
          {/* Subtle Left & Right Edge Fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Continuous Right-to-Left Ticker (Resets and updates per active poster, seamless loop) */}
          <div
            key={activeUpdate.id}
            className="animate-event-ticker flex items-center gap-8 whitespace-nowrap will-change-transform"
          >
            {/* Sequence A */}
            <div className="flex items-center gap-8 font-mono text-[11px] sm:text-xs tracking-wider uppercase">
              {tickerRepeats.map((_, rIdx) => (
                <span key={`a-${rIdx}`} className="flex items-center gap-3">
                  {tickerParts.map((part, pIdx) => (
                    <React.Fragment key={`a-${rIdx}-${pIdx}`}>
                      <span
                        className={
                          pIdx === 0
                            ? 'font-bold text-[#0F172A]'
                            : pIdx === tickerParts.length - 1
                            ? 'font-bold text-[#1677FF]'
                            : 'font-medium text-slate-700'
                        }
                      >
                        {part}
                      </span>
                      {pIdx < tickerParts.length - 1 && (
                        <span className="text-[#1677FF] font-bold">•</span>
                      )}
                    </React.Fragment>
                  ))}
                  <span className="text-[#1677FF] font-bold text-sm">→</span>
                </span>
              ))}
            </div>

            {/* Sequence B (Identical for seamless infinite loop) */}
            <div className="flex items-center gap-8 font-mono text-[11px] sm:text-xs tracking-wider uppercase">
              {tickerRepeats.map((_, rIdx) => (
                <span key={`b-${rIdx}`} className="flex items-center gap-3">
                  {tickerParts.map((part, pIdx) => (
                    <React.Fragment key={`b-${rIdx}-${pIdx}`}>
                      <span
                        className={
                          pIdx === 0
                            ? 'font-bold text-[#0F172A]'
                            : pIdx === tickerParts.length - 1
                            ? 'font-bold text-[#1677FF]'
                            : 'font-medium text-slate-700'
                        }
                      >
                        {part}
                      </span>
                      {pIdx < tickerParts.length - 1 && (
                        <span className="text-[#1677FF] font-bold">•</span>
                      )}
                    </React.Fragment>
                  ))}
                  <span className="text-[#1677FF] font-bold text-sm">→</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CurrentUpdates
