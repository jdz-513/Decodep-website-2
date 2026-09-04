import React, { useState } from 'react'
import { Calendar, Clock, Trophy, Users, AlertCircle, ShieldCheck, ArrowRight } from 'lucide-react'
import { currentInitiative } from '../data/officialData'
import RegisterModal from '../components/RegisterModal'

export const Initiatives: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-[#07111F] text-white">
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07111F] border-b border-white/10 relative">
        <div className="absolute inset-0 tech-grid-bg opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1728] border border-white/10 text-xs font-mono tracking-wider text-[#F5B72C] uppercase">
            <Trophy className="w-3.5 h-3.5 text-[#F5B72C]" />
            <span>COMMUNITY COMPETITIONS & SPRINTS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
            DECODEP INITIATIVES
          </h1>

          <p className="text-base sm:text-xl text-[#9AA8BA] max-w-3xl mx-auto leading-relaxed">
            Hands-on technical hackathons and sprint challenges organized by DECODEP Community to foster rapid problem solving, practical engineering, and collaborative building.
          </p>
        </div>
      </section>

      {/* Featured Current Initiative: HACKDAY 1.0 */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D1728] border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#07111F] text-white rounded-2xl p-6 sm:p-12 border border-white/10 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Event Poster */}
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden bg-[#0D1728] border border-white/10 shadow-xl group relative">
                  <img
                    src={currentInitiative.image}
                    alt={currentInitiative.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <span className="bg-black/80 px-2 py-0.5 rounded border border-white/10 text-white">
                      {currentInitiative.title}
                    </span>
                    <span className="bg-[#F5B72C] text-[#07111F] font-bold px-2 py-0.5 rounded">
                      {currentInitiative.prize}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1728] text-[#F5B72C] border border-[#F5B72C]/30 text-xs font-mono font-semibold uppercase mb-3">
                    <span>{currentInitiative.entry}</span>
                    <span>•</span>
                    <span>{currentInitiative.status.toUpperCase()}</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
                    {currentInitiative.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-[#9AA8BA] leading-relaxed">
                    {currentInitiative.description}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-[#0D1728] border border-white/10">
                    <div className="flex items-center gap-2 text-[#1677FF] mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold text-white">Date</span>
                    </div>
                    <span className="text-[#9AA8BA]">{currentInitiative.date}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0D1728] border border-white/10">
                    <div className="flex items-center gap-2 text-[#1677FF] mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold text-white">Duration</span>
                    </div>
                    <span className="text-[#9AA8BA]">{currentInitiative.duration}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0D1728] border border-white/10 col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-2 text-[#F5B72C] mb-1">
                      <Trophy className="w-4 h-4" />
                      <span className="font-semibold text-white">Prize Pool</span>
                    </div>
                    <span className="text-[#F5B72C] font-bold text-sm">{currentInitiative.prize}</span>
                  </div>
                </div>

                {/* Eligibility & Problem Statement */}
                <div className="p-4 rounded-xl bg-[#0D1728] border border-white/10 space-y-2 text-xs font-mono text-[#9AA8BA]">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Users className="w-4 h-4 text-[#1677FF]" />
                    <span>TEAM FORMAT: {currentInitiative.teamSize.toUpperCase()}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#64748B]">
                    <AlertCircle className="w-4 h-4 text-[#F5B72C] flex-shrink-0 mt-0.5" />
                    <span>{currentInitiative.problemStatement} to ensure a fair and spontaneous hackathon environment.</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsRegisterOpen(true)}
                    className="w-full sm:w-auto px-8 py-4 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#F5B72C] hover:bg-[#FCD34D] text-[#07111F] transition-all shadow-sm active:scale-98"
                  >
                    REGISTER FOR FREE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scalable Architecture Framework Notice */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07111F]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-[#64748B] uppercase">
            INITIATIVES ROADMAP
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase text-white">
            FUTURE TECHNICAL INITIATIVES
          </h3>
          <p className="text-xs sm:text-sm text-[#9AA8BA] max-w-xl mx-auto leading-relaxed">
            Future hackathons, technical conferences, and joint community challenges will be announced here upon official schedule confirmation.
          </p>
        </div>
      </section>

      {/* Modal */}
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  )
}

export default Initiatives
