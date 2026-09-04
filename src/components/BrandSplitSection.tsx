import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Users } from 'lucide-react'

export const BrandSplitSection: React.FC = () => {
  return (
    <section className="relative bg-[#FAF8F5] bg-grid-subtle text-[#111827] border-b border-[#111827]/10 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-medium uppercase tracking-wider">
            <span>Brand Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
            One Venture. Two Worlds.
          </h2>
        </div>

        {/* Cards Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* CARD 1: TECH */}
          <Link
            to="/company"
            className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#1677FF]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[380px]"
          >
            {/* Top Blue Accent Bar */}
            <div className="absolute top-0 left-8 sm:left-10 w-24 sm:w-28 h-1 bg-[#1677FF] rounded-b-sm" />

            {/* Giant Faint Number Watermark */}
            <div className="absolute -bottom-6 right-3 sm:right-6 font-sans font-black text-[130px] sm:text-[160px] text-slate-100/90 leading-none select-none pointer-events-none z-0">
              01
            </div>

            {/* Top Row: Icon + Meta & Arrow Button */}
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                {/* </> Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center font-mono font-bold text-base shadow-xs shrink-0">
                  &lt;/&gt;
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider text-[#1677FF]">
                    01 <span className="text-slate-400 font-normal">/</span> TECHNOLOGY <span className="text-slate-300">•</span> <span className="text-slate-500 font-medium">BUILD</span>
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-[#64748B] uppercase font-semibold mt-0.5">
                    DIGITAL VENTURE
                  </div>
                </div>
              </div>

              {/* Arrow Up-Right Circle Button */}
              <div className="w-10 h-10 rounded-full border border-slate-200 bg-white group-hover:bg-[#1677FF] group-hover:border-[#1677FF] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Middle Section: Eyebrow, Main Title, Subtitle */}
            <div className="relative z-10 my-8 sm:my-10 space-y-2">
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#64748B] uppercase">
                THE TECHNOLOGY ARM
              </div>
              <h3 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#0F172A]">
                TECH
              </h3>
              <p className="text-base sm:text-lg text-[#475569] font-medium pt-1">
                Digital Solutions & Products
              </p>
            </div>

            {/* Bottom Row: Tags & Action */}
            <div className="relative z-10 pt-5 border-t border-slate-100 flex items-center justify-between gap-2">
              <div className="text-xs font-mono font-semibold tracking-wider text-[#64748B] uppercase flex items-center gap-1.5">
                <span>WEB</span>
                <span className="text-slate-300">•</span>
                <span>MOBILE</span>
                <span className="text-slate-300">•</span>
                <span>DIGITAL</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#1677FF] uppercase group-hover:translate-x-1 transition-transform">
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* CARD 2: COMMUNITY */}
          <Link
            to="/community"
            className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-[#FDE68A] shadow-sm hover:shadow-xl hover:border-[#D97706]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[380px]"
          >
            {/* Top Amber Accent Bar */}
            <div className="absolute top-0 right-8 sm:right-10 w-24 sm:w-28 h-1 bg-[#F59E0B] rounded-b-sm" />

            {/* Giant Faint Number Watermark */}
            <div className="absolute -bottom-6 right-3 sm:right-6 font-sans font-black text-[130px] sm:text-[160px] text-[#FEF3C7]/40 leading-none select-none pointer-events-none z-0">
              02
            </div>

            {/* Top Row: Icon + Meta & Arrow Button */}
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                {/* Users Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shadow-xs shrink-0">
                  <Users className="w-5 h-5 text-[#D97706]" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider text-[#D97706]">
                    02 <span className="text-amber-300 font-normal">/</span> COMMUNITY <span className="text-amber-300">•</span> <span className="text-slate-500 font-medium">GROW</span>
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-[#64748B] uppercase font-semibold mt-0.5">
                    OPEN ECOSYSTEM
                  </div>
                </div>
              </div>

              {/* Arrow Up-Right Circle Button */}
              <div className="w-10 h-10 rounded-full border border-[#FDE68A] bg-[#FEF3C7]/40 group-hover:bg-[#D97706] group-hover:border-[#D97706] text-[#D97706] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Middle Section: Eyebrow, Main Title, Subtitle */}
            <div className="relative z-10 my-8 sm:my-10 space-y-2">
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#64748B] uppercase">
                THE PEOPLE ARM
              </div>
              <h3 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#0F172A]">
                COMMUNITY
              </h3>
              <p className="text-base sm:text-lg text-[#475569] font-medium pt-1">
                Developers & Technology Ecosystem
              </p>
            </div>

            {/* Bottom Row: Tags & Action */}
            <div className="relative z-10 pt-5 border-t border-amber-100/70 flex items-center justify-between gap-2">
              <div className="text-xs font-mono font-semibold tracking-wider text-[#64748B] uppercase flex items-center gap-1.5">
                <span>DEVELOPERS</span>
                <span className="text-amber-400">•</span>
                <span>LEARNING</span>
                <span className="text-amber-400">•</span>
                <span>COLLABORATION</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#D97706] uppercase group-hover:translate-x-1 transition-transform">
                <span>JOIN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  )
}

export default BrandSplitSection