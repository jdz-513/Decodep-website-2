import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { brandData } from '../data/officialData'
import HeroOrbitalNexus from './hero/HeroOrbitalNexus'

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100svh-80px)] flex items-center overflow-hidden bg-[#FAF8F5] text-[#111827] border-b border-[#111827]/10 pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-medium uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
              <span>{brandData.tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#111827] tracking-tight leading-[1.05]">
              Decode Ideas.
              <br />
              <span className="text-[#164E87] font-normal italic font-serif">
                Build what's next.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-serif text-base sm:text-lg lg:text-xl text-[#4B5563] leading-relaxed max-w-2xl">
              A technology ecosystem building digital solutions, empowering developer communities, and creating practical opportunities to learn, build, and grow.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/company"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#111827] hover:bg-[#C59B27] hover:text-[#0D1117] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all rounded-md shadow-sm active:scale-95"
              >
                <span>Explore Tech</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27]" />
              </Link>

              <Link
                to="/community"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#F2EFE8] text-[#111827] font-mono text-xs font-bold uppercase tracking-wider transition-all border border-[#111827]/15 rounded-md shadow-sm active:scale-95"
              >
                <span>Join Community</span>
                <ArrowRight className="w-4 h-4 text-[#164E87]" />
              </Link>
            </div>

            {/* Registration status */}
            <div className="pt-4 border-t border-[#111827]/08 flex flex-wrap items-center gap-4 text-xs font-mono text-[#6B7280]">
              <div className="flex items-center gap-1.5 font-semibold text-[#111827]">
                <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                <span>{brandData.registration.status}</span>
              </div>
              <span>•</span>
              <span>{brandData.registration.type}</span>
              <span>•</span>
              <span>Tamil Nadu, India</span>
            </div>

          </div>

          {/* Right Column: Orbital Nexus */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[440px] aspect-square flex items-center justify-center">
              <HeroOrbitalNexus />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero