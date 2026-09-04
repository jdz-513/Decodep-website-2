import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Users2, ShieldCheck } from 'lucide-react'

export const DecodepEcosystemSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [activeSide, setActiveSide] = useState<'company' | 'community' | 'center' | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
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
      id="decodep-ecosystem"
      className="relative py-28 sm:py-36 md:py-44 px-4 sm:px-6 lg:px-8 bg-[#050914] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Central Radiance Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[500px] bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 sm:mb-28 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-blue-400 uppercase bg-blue-950/60 px-4 py-1.5 rounded-full border border-blue-800/40 mb-4 inline-block backdrop-blur-sm">
            05 / Unified Ecosystem
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white">
            THE DECODEP ECOSYSTEM
          </h2>

          <p className="mt-4 text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase">
            ONE BRAND • TWO DIRECTIONS
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Horizontal Connected Brand Ecosystem */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-center relative">
          {/* Animated Connecting SVG Wireframe */}
          <div className="absolute inset-0 pointer-events-none -z-0 flex items-center justify-center">
            <svg className="w-full h-24 overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="companyGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="communityGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Company to Core Line */}
              <line
                x1="22%"
                y1="50%"
                x2="42%"
                y2="50%"
                stroke={activeSide === 'company' || activeSide === 'center' ? 'url(#companyGlow)' : '#1e293b'}
                strokeWidth={activeSide === 'company' || activeSide === 'center' ? '3' : '1.5'}
                strokeDasharray={activeSide === 'company' ? '6,6' : 'none'}
                className="transition-all duration-500"
              />

              {/* Core to Community Line */}
              <line
                x1="58%"
                y1="50%"
                x2="78%"
                y2="50%"
                stroke={activeSide === 'community' || activeSide === 'center' ? 'url(#communityGlow)' : '#1e293b'}
                strokeWidth={activeSide === 'community' || activeSide === 'center' ? '3' : '1.5'}
                strokeDasharray={activeSide === 'community' ? '6,6' : 'none'}
                className="transition-all duration-500"
              />
            </svg>
          </div>

          {/* LEFT WING: DECODEP COMPANY */}
          <div
            onMouseEnter={() => setActiveSide('company')}
            onMouseLeave={() => setActiveSide(null)}
            className={`col-span-4 p-8 rounded-3xl border transition-all duration-500 bg-[#080e1e]/80 backdrop-blur-sm ${
              activeSide === 'company'
                ? 'border-blue-500/80 shadow-[0_0_35px_rgba(37,99,235,0.25)] -translate-y-1'
                : 'border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2 mb-4 text-blue-400 font-mono text-xs font-semibold tracking-wider uppercase">
              <Code2 className="w-4 h-4" />
              <span>Technology & Solutions</span>
            </div>

            <h3 className="font-display text-2xl font-black tracking-tight text-white uppercase">
              DECODEP COMPANY
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
              AI • Web • App • Digital Solutions
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <Link
                to="/company"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-white transition-colors group"
              >
                <span>Explore Company</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* CENTER NUCLEUS: DECODEP BRAND CORE */}
          <div
            onMouseEnter={() => setActiveSide('center')}
            onMouseLeave={() => setActiveSide(null)}
            className={`col-span-4 flex flex-col items-center text-center p-8 rounded-full border-2 transition-all duration-500 bg-[#070b14] relative z-10 aspect-square justify-center mx-auto max-w-[260px] ${
              activeSide
                ? 'border-cyan-400 shadow-[0_0_40px_rgba(56,189,248,0.3)] scale-105'
                : 'border-slate-800'
            }`}
          >
            <ShieldCheck className="w-6 h-6 text-cyan-400 mb-2" />
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
              Unified Core
            </span>
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase mt-1">
              DECODEP
            </span>
            <span className="font-mono text-[10px] tracking-widest text-cyan-300 uppercase mt-1">
              ONE BRAND
            </span>
          </div>

          {/* RIGHT WING: DECODEP COMMUNITY */}
          <div
            onMouseEnter={() => setActiveSide('community')}
            onMouseLeave={() => setActiveSide(null)}
            className={`col-span-4 p-8 rounded-3xl border transition-all duration-500 bg-[#080e1e]/80 backdrop-blur-sm ${
              activeSide === 'community'
                ? 'border-amber-500/80 shadow-[0_0_35px_rgba(245,158,11,0.25)] -translate-y-1'
                : 'border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2 mb-4 text-amber-400 font-mono text-xs font-semibold tracking-wider uppercase">
              <Users2 className="w-4 h-4" />
              <span>Builder Ecosystem</span>
            </div>

            <h3 className="font-display text-2xl font-black tracking-tight text-white uppercase">
              DECODEP COMMUNITY
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
              Learn • Build • Collaborate • Grow
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <Link
                to="/community"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-white transition-colors group"
              >
                <span>Explore Community</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW: Vertical Connected Ecosystem */}
        {/* ========================================================================= */}
        <div className="lg:hidden flex flex-col items-center space-y-6 max-w-md mx-auto">
          {/* Company Block */}
          <div className="w-full p-6 sm:p-8 rounded-2xl border border-blue-500/40 bg-[#080e1e]/90 text-left">
            <div className="flex items-center gap-2 mb-2 text-blue-400 font-mono text-xs font-semibold tracking-wider uppercase">
              <Code2 className="w-4 h-4" />
              <span>Technology & Solutions</span>
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-white">DECODEP COMPANY</h3>
            <p className="mt-2 text-xs text-slate-400 font-mono">AI • Web • App • Digital Solutions</p>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <Link to="/company" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <span>Explore Company</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Central Vertical Connector & Core Indicator */}
          <div className="flex flex-col items-center py-2">
            <div className="w-[2px] h-6 bg-gradient-to-b from-blue-500 to-cyan-400" />
            <div className="px-5 py-2 rounded-full border border-cyan-400/60 bg-[#070b14] text-center my-1">
              <span className="font-mono text-xs font-bold tracking-widest text-cyan-300 uppercase">
                DECODEP • ONE BRAND
              </span>
            </div>
            <div className="w-[2px] h-6 bg-gradient-to-b from-cyan-400 to-amber-500" />
          </div>

          {/* Community Block */}
          <div className="w-full p-6 sm:p-8 rounded-2xl border border-amber-500/40 bg-[#080e1e]/90 text-left">
            <div className="flex items-center gap-2 mb-2 text-amber-400 font-mono text-xs font-semibold tracking-wider uppercase">
              <Users2 className="w-4 h-4" />
              <span>Builder Ecosystem</span>
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-white">DECODEP COMMUNITY</h3>
            <p className="mt-2 text-xs text-slate-400 font-mono">Learn • Build • Collaborate • Grow</p>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <Link to="/community" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <span>Explore Community</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DecodepEcosystemSection
