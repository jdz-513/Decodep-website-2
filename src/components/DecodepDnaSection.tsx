import React, { useEffect, useRef, useState } from 'react'

interface PillarItem {
  id: string
  number: string
  word: string
  accentColor: string
  glowClass: string
  lineColor: string
}

const pillars: PillarItem[] = [
  {
    id: 'technology',
    number: '01',
    word: 'TECHNOLOGY',
    accentColor: 'text-blue-400',
    glowClass: 'group-hover:text-blue-300 group-hover:drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]',
    lineColor: 'from-blue-500/0 via-blue-500/40 to-blue-500/0',
  },
  {
    id: 'innovation',
    number: '02',
    word: 'INNOVATION',
    accentColor: 'text-amber-400',
    glowClass: 'group-hover:text-amber-300 group-hover:drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]',
    lineColor: 'from-amber-500/0 via-amber-500/40 to-amber-500/0',
  },
  {
    id: 'community',
    number: '03',
    word: 'COMMUNITY',
    accentColor: 'text-cyan-400',
    glowClass: 'group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]',
    lineColor: 'from-cyan-500/0 via-cyan-500/40 to-cyan-500/0',
  },
]

export const DecodepDnaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeHover, setActiveHover] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="decodep-dna"
      className="relative py-28 sm:py-36 md:py-44 px-4 sm:px-6 lg:px-8 bg-[#050811] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Background Architectural Ambient Grid & Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-r from-blue-600/10 via-amber-500/5 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header — Editorial & Minimal */}
        <div
          className={`flex flex-col items-center text-center mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-blue-400 uppercase bg-blue-950/60 px-4 py-1.5 rounded-full border border-blue-800/40 mb-4 backdrop-blur-sm">
            03 / Brand Foundation
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white">
            DECODEP DNA
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base font-mono font-medium tracking-[0.2em] text-slate-400 uppercase">
            DECODE • DEVELOP • DOMINATE
          </p>
        </div>

        {/* Large Typography Stack — Three Foundational Pillars */}
        <div className="space-y-6 sm:space-y-10 md:space-y-12">
          {pillars.map((item, idx) => {
            const isItemVisible = isVisible
            const delay = `${idx * 220}ms`

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveHover(idx)}
                onMouseLeave={() => setActiveHover(null)}
                className={`group relative cursor-default select-none transition-all duration-1000 ease-out ${
                  isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: delay }}
              >
                {/* Hairline Divider with Glow Reveal */}
                <div className="relative h-px w-full bg-slate-800/80 overflow-hidden mb-6 sm:mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.lineColor} transition-transform duration-700 ease-out ${
                      activeHover === idx ? 'scale-x-100 opacity-100' : 'scale-x-75 opacity-40'
                    }`}
                  />
                </div>

                {/* Typography Row */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 px-2 sm:px-4">
                  {/* Index Indicator */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                      {item.number}
                    </span>
                    <span className="h-px w-8 bg-slate-800 group-hover:w-14 group-hover:bg-slate-600 transition-all duration-300 hidden sm:inline-block" />
                  </div>

                  {/* Main Large Visual Word */}
                  <div className="flex-1 text-left md:text-center">
                    <span
                      className={`font-display font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase block transition-all duration-500 ${
                        activeHover === idx
                          ? `${item.accentColor} ${item.glowClass} translate-x-1 md:translate-x-0`
                          : 'text-slate-200/90 group-hover:text-white'
                      }`}
                    >
                      {item.word}
                    </span>
                  </div>

                  {/* Minimal Subtle Pillar Anchor */}
                  <div className="text-right hidden md:block">
                    <span className="font-mono text-xs tracking-widest uppercase text-slate-600 group-hover:text-slate-400 transition-colors">
                      PILLAR
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Ambient Line */}
        <div className="mt-16 sm:mt-24 h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>
    </section>
  )
}

export default DecodepDnaSection
