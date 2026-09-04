import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Trophy, Users, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react'
import { currentInitiative } from '../data/officialData'
import RegisterModal from './RegisterModal'

export const FeaturedInitiativeSection: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07111F] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1728] border border-white/10 text-xs font-mono tracking-wider text-[#F5B72C] uppercase mb-4">
              <span>04 // FEATURED INITIATIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              FLAGSHIP HACKATHON
            </h2>
          </div>

          <Link
            to="/initiatives"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F5B72C] hover:text-white transition-colors group"
          >
            <span>ALL INITIATIVES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Editorial Event Campaign Split */}
        <div className="bg-[#0D1728] rounded-xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Campaign Poster Area */}
            <div className="lg:col-span-5 relative bg-[#07111F] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 relative group">
                <img
                  src={currentInitiative.image}
                  alt={`${currentInitiative.title} Official Campaign Poster`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                  <span className="bg-black/80 px-2 py-0.5 rounded border border-white/10">
                    {currentInitiative.title}
                  </span>
                  <span className="bg-[#F5B72C] text-[#07111F] font-bold px-2 py-0.5 rounded">
                    {currentInitiative.prize}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>OFFICIAL POSTER // 2026</span>
                <span className="text-[#F5B72C]">FREE ENTRY</span>
              </div>
            </div>

            {/* Event Specification & Action Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-[#1677FF]/15 text-[#1677FF] border border-[#1677FF]/30">
                    <span>{currentInitiative.tag || 'Community Competition'}</span>
                    <span>•</span>
                    <span>{currentInitiative.status.toUpperCase()}</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                    {currentInitiative.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#9AA8BA] leading-relaxed pt-1">
                    {currentInitiative.description}
                  </p>
                </div>

                {/* Structured Specifications Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-lg bg-[#07111F] border border-white/5">
                    <div className="flex items-center gap-1.5 text-[#1677FF] mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-[10px] text-[#64748B]">DATE</span>
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm">{currentInitiative.date}</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#07111F] border border-white/5">
                    <div className="flex items-center gap-1.5 text-[#1677FF] mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[10px] text-[#64748B]">DURATION</span>
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm">{currentInitiative.duration}</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#07111F] border border-white/5 col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-1.5 text-[#F5B72C] mb-1">
                      <Trophy className="w-3.5 h-3.5" />
                      <span className="text-[10px] text-[#64748B]">PRIZE POOL</span>
                    </div>
                    <div className="font-bold text-[#F5B72C] text-xs sm:text-sm">{currentInitiative.prize}</div>
                  </div>
                </div>

                {/* Format & Problem Statement Notice */}
                <div className="p-4 rounded-lg bg-[#07111F] border border-white/5 space-y-1.5 text-xs font-mono text-[#9AA8BA]">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Users className="w-4 h-4 text-[#1677FF]" />
                    <span>FORMAT: {currentInitiative.teamSize.toUpperCase()}</span>
                  </div>
                  <p className="text-[11px] text-[#64748B]">
                    {currentInitiative.problemStatement} on event day.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setIsRegisterOpen(true)}
                  className="px-7 py-3.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#F5B72C] hover:bg-[#FCD34D] text-[#07111F] transition-all duration-200 shadow-sm active:scale-95 text-center"
                >
                  REGISTER FOR FREE
                </button>

                <Link
                  to="/initiatives"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#07111F] text-white border border-white/10 hover:border-white/25 transition-all text-center"
                >
                  <span>FULL INITIATIVE BRIEF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </section>
  )
}

export default FeaturedInitiativeSection
