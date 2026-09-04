import React, { useEffect, useRef, useState } from 'react'

interface StageItem {
  id: string
  step: string
  title: string
  subtitle: string
  accentColor: string
  glowBg: string
  nodeBorder: string
}

const stages: StageItem[] = [
  {
    id: 'idea',
    step: '01',
    title: 'IDEA',
    subtitle: 'Problem & Vision',
    accentColor: 'text-slate-200',
    glowBg: 'bg-blue-500/20',
    nodeBorder: 'border-blue-400',
  },
  {
    id: 'decode',
    step: '02',
    title: 'DECODE',
    subtitle: 'Analysis & Architecture',
    accentColor: 'text-cyan-300',
    glowBg: 'bg-cyan-500/20',
    nodeBorder: 'border-cyan-400',
  },
  {
    id: 'develop',
    step: '03',
    title: 'DEVELOP',
    subtitle: 'Engineering & Precision',
    accentColor: 'text-blue-400',
    glowBg: 'bg-blue-600/20',
    nodeBorder: 'border-blue-500',
  },
  {
    id: 'impact',
    step: '04',
    title: 'IMPACT',
    subtitle: 'Real-World Value',
    accentColor: 'text-amber-300',
    glowBg: 'bg-amber-500/20',
    nodeBorder: 'border-amber-400',
  },
]

export const IdeaToImpactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState<number>(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Progressive step activation on scroll into view
  useEffect(() => {
    if (!isInView) return

    let current = 0
    const interval = setInterval(() => {
      current += 1
      setActiveStep(current)
      if (current >= stages.length) {
        clearInterval(interval)
      }
    }, 450)

    return () => clearInterval(interval)
  }, [isInView])

  const effectiveStep = hoveredStep !== null ? hoveredStep + 1 : activeStep

  return (
    <section
      ref={sectionRef}
      id="idea-to-impact"
      className="relative py-28 sm:py-36 md:py-44 px-4 sm:px-6 lg:px-8 bg-[#070c18] text-white overflow-hidden border-t border-slate-900/90"
    >
      {/* Dynamic Background Light Fields */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 sm:mb-28 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-950/60 px-4 py-1.5 rounded-full border border-cyan-800/40 mb-4 inline-block backdrop-blur-sm">
            04 / Execution Lifecycle
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white">
            FROM IDEA TO IMPACT
          </h2>

          <p className="mt-4 text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase">
            A CONTINUOUS PROGRESSION OF ENGINEERING & VALUE
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Horizontal Connected Flow with Animated Conduit Path */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative pb-12">
          {/* Background Static Connection Line */}
          <div className="absolute top-[38px] left-[12%] right-[12%] h-[2px] bg-slate-800 -z-0" />

          {/* Animated Active Progress Conduit Line */}
          <div
            className="absolute top-[38px] left-[12%] h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-400 transition-all duration-700 ease-out -z-0"
            style={{
              width: `${Math.max(0, Math.min(100, ((effectiveStep - 1) / (stages.length - 1)) * 76))}%`,
              boxShadow: '0 0 16px rgba(56, 189, 248, 0.6)',
            }}
          />

          {/* 4 Connected Stages Grid */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const isReached = effectiveStep >= idx + 1
              const isHovered = hoveredStep === idx

              return (
                <div
                  key={stage.id}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Top Node Indicator */}
                  <div className="relative mb-8 flex items-center justify-center">
                    {/* Pulsing Aura */}
                    <div
                      className={`absolute w-16 h-16 rounded-full transition-all duration-500 ${
                        isReached || isHovered ? `${stage.glowBg} scale-125 opacity-100` : 'opacity-0 scale-75'
                      }`}
                    />

                    {/* Central Node Circle */}
                    <div
                      className={`w-[76px] h-[76px] rounded-full flex items-center justify-center font-mono font-bold text-sm tracking-wider border-2 transition-all duration-500 bg-[#070c18] relative z-10 ${
                        isReached || isHovered
                          ? `${stage.nodeBorder} text-white shadow-[0_0_25px_rgba(56,189,248,0.4)] scale-105`
                          : 'border-slate-800 text-slate-500'
                      }`}
                    >
                      <span>{stage.step}</span>
                    </div>
                  </div>

                  {/* Stage Title — Large Typography */}
                  <div className="space-y-2">
                    <h3
                      className={`font-display font-black text-2xl xl:text-3xl tracking-tight uppercase transition-all duration-300 ${
                        isReached || isHovered
                          ? `${stage.accentColor} drop-shadow-[0_0_20px_rgba(56,189,248,0.25)] scale-105`
                          : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {stage.title}
                    </h3>

                    {/* Minimal Subtitle */}
                    <p className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW: Vertical Connected Flow Path */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative max-w-md mx-auto">
          {/* Vertical Connecting Spine */}
          <div className="absolute top-8 bottom-8 left-[39px] w-[2px] bg-slate-800" />
          <div
            className="absolute top-8 left-[39px] w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-amber-400 transition-all duration-700 ease-out"
            style={{
              height: `${Math.max(0, Math.min(100, ((effectiveStep - 1) / (stages.length - 1)) * 100))}%`,
              boxShadow: '0 0 12px rgba(56, 189, 248, 0.6)',
            }}
          />

          <div className="space-y-12 relative z-10">
            {stages.map((stage, idx) => {
              const isReached = effectiveStep >= idx + 1
              const isHovered = hoveredStep === idx

              return (
                <div
                  key={stage.id}
                  onClick={() => setHoveredStep(idx)}
                  className={`flex items-center gap-6 group transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Node Circle */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center font-mono font-bold text-sm tracking-wider border-2 transition-all duration-500 bg-[#070c18] ${
                        isReached || isHovered
                          ? `${stage.nodeBorder} text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] scale-105`
                          : 'border-slate-800 text-slate-500'
                      }`}
                    >
                      {stage.step}
                    </div>
                  </div>

                  {/* Stage Text */}
                  <div className="flex-1">
                    <h3
                      className={`font-display font-black text-2xl sm:text-3xl tracking-tight uppercase transition-all duration-300 ${
                        isReached || isHovered ? stage.accentColor : 'text-slate-500'
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IdeaToImpactSection
