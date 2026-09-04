import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react'
import { moments } from '../data/moments'

export const MomentsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const total = moments.length

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play interval: every 4.5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4500)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  // Calculate 3D transformation offset for each slide
  const getSlideStyle = (index: number) => {
    let offset = (index - currentIndex) % total
    if (offset < -Math.floor(total / 2)) offset += total
    if (offset > Math.floor(total / 2)) offset -= total

    // Center active card
    if (offset === 0) {
      return {
        transform: 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto' as const,
        filter: 'drop-shadow(0 15px 25px rgba(15, 23, 42, 0.12))',
      }
    }

    // Left perspective card
    if (offset === -1) {
      return {
        transform:
          'translateX(-68%) translateZ(-90px) rotateY(16deg) scale(0.85)',
        opacity: 0.7,
        zIndex: 20,
        pointerEvents: 'auto' as const,
        cursor: 'pointer',
        filter: 'drop-shadow(0 8px 16px rgba(15, 23, 42, 0.08))',
      }
    }

    // Right perspective card
    if (offset === 1) {
      return {
        transform:
          'translateX(68%) translateZ(-90px) rotateY(-16deg) scale(0.85)',
        opacity: 0.7,
        zIndex: 20,
        pointerEvents: 'auto' as const,
        cursor: 'pointer',
        filter: 'drop-shadow(0 8px 16px rgba(15, 23, 42, 0.08))',
      }
    }

    // Hidden cards (if more than 3 moments exist)
    return {
      transform: 'translateX(0%) translateZ(-200px) scale(0.6)',
      opacity: 0,
      zIndex: 10,
      pointerEvents: 'none' as const,
    }
  }

  const activeMoment = moments[currentIndex]

  return (
    <section
      aria-label="Moments from DECODEP"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-[#111827]/10 overflow-hidden focus:outline-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Header: Title, Subtitle, & Minimal Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200/80 pb-5">
          {/* Header Left */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#1677FF]">
              <Compass className="w-3.5 h-3.5" />
              <span>REAL-WORLD JOURNEY</span>
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0F172A]">
              MOMENTS FROM DECODEP.
            </h2>

            <p className="font-serif text-sm sm:text-base text-slate-600">
              Beyond the screen. Into the real world.
            </p>
          </div>

          {/* Header Right: Minimal Controls & Slide Counter */}
          <div className="flex items-center gap-4 self-start sm:self-end">
            <span className="font-mono text-xs font-semibold text-slate-500 tracking-wider">
              0{currentIndex + 1} / 0{total}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous photo moment"
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer focus:ring-2 focus:ring-[#1677FF]/40 focus:outline-hidden"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next photo moment"
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer focus:ring-2 focus:ring-[#1677FF]/40 focus:outline-hidden"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Photo Carousel Stage */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: '1200px' }}
          className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center overflow-visible select-none"
        >
          {moments.map((moment, index) => {
            const style = getSlideStyle(index)
            const isCenter = index === currentIndex

            return (
              <div
                key={moment.id}
                onClick={() => !isCenter && goToSlide(index)}
                style={style}
                className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200/90 transition-all duration-700 ease-out will-change-transform group"
              >
                {/* Photo Image (Intelligent fit with full aspect-square presentation) */}
                <img
                  src={moment.image}
                  alt={moment.altText || moment.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Glass Gradient for Label Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Top Corner Badge: Number / Index */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-mono font-bold text-white border border-white/10 pointer-events-none">
                  0{index + 1}
                </div>

                {/* Bottom Technical Label */}
                <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-900 border border-slate-200 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
                    <span>{moment.category}</span>
                  </div>
                </div>

                {/* Ambient Selection Ring on Active Item */}
                {isCenter && (
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-[#1677FF]/40 pointer-events-none" />
                )}
              </div>
            )
          })}
        </div>

        {/* Active Moment Context & Progress Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Active Moment Description */}
          <div className="text-center sm:text-left space-y-0.5">
            <h4 className="font-sans text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
              {activeMoment.title}
            </h4>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-[10px] font-mono uppercase tracking-wider text-slate-500">
              <span>{activeMoment.category}</span>
              {activeMoment.date && (
                <>
                  <span>•</span>
                  <span>{activeMoment.date}</span>
                </>
              )}
            </div>
            {activeMoment.description && (
              <p className="font-serif text-xs sm:text-sm text-slate-500">
                {activeMoment.description}
              </p>
            )}
          </div>

          {/* Minimal Progress Dots */}
          <div className="flex items-center gap-1.5">
            {moments.map((_, dotIdx) => {
              const isActive = dotIdx === currentIndex
              return (
                <button
                  key={`moment-dot-${dotIdx}`}
                  onClick={() => goToSlide(dotIdx)}
                  aria-label={`Go to photo moment ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-6 bg-[#1677FF]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default MomentsSection
