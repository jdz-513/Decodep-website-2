import React, { useState } from 'react'
import { Calendar, Clock, Trophy, Users, AlertCircle } from 'lucide-react'
import RegisterModal from '../components/RegisterModal'
import { initiatives } from '../data/initiatives'

export const Initiatives: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  const featuredInitiative = initiatives.find((item) => item.featured) ?? initiatives[0]
  const futureEvents = initiatives.filter((item) => !item.featured)

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#10141D] pt-24 pb-16">
      {/* Hero */}
      <section className="border-b border-[#10141D]/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Events & Competitions</span>
          </div>

          <h1 className="font-editorial-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#10141D] tracking-tight">
            DECODEP Initiatives
          </h1>

          <p className="text-base sm:text-lg text-[#556477] max-w-2xl mx-auto leading-relaxed">
            Hands-on technical hackathons and sprint challenges organized by DECODEP Community to foster rapid problem solving, practical engineering, and collaborative building.
          </p>
        </div>
      </section>

      {/* Featured Current Initiative: HACKDAY 1.0 */}
      <section className="border-b border-[#10141D]/10 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#FAF8F5] rounded-xl p-6 sm:p-10 border border-[#C59B27]/30 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Event Poster Column */}
              <div className="lg:col-span-5">
                <div className="rounded-lg overflow-hidden bg-[#10141D] border border-[#C59B27]/30 shadow-md group relative">
                  <img
                    src={featuredInitiative.image}
                    alt={featuredInitiative.title}
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="bg-black/80 px-2.5 py-1 rounded text-white font-medium">
                      {featuredInitiative.title}
                    </span>
                    <span className="bg-[#C59B27] text-white font-bold px-2.5 py-1 rounded">
                      {featuredInitiative.prize}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details Column */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-semibold uppercase mb-3">
                    <span>{featuredInitiative.entry}</span>
                    <span>•</span>
                    <span>{featuredInitiative.status.toUpperCase()}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black font-editorial-display uppercase tracking-tight text-[#10141D]">
                    {featuredInitiative.title}
                  </h2>

                  <p className="mt-2 text-sm text-[#556477] leading-relaxed">
                    {featuredInitiative.description}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-lg bg-white border border-[#10141D]/10">
                    <div className="flex items-center gap-1.5 text-[#C59B27] mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-[10px] text-[#718096] uppercase font-semibold">Date</span>
                    </div>
                    <span className="font-bold text-[#10141D] text-xs sm:text-sm">{featuredInitiative.date}</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white border border-[#10141D]/10">
                    <div className="flex items-center gap-1.5 text-[#C59B27] mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[10px] text-[#718096] uppercase font-semibold">Duration</span>
                    </div>
                    <span className="font-bold text-[#10141D] text-xs sm:text-sm">{featuredInitiative.duration}</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white border border-[#10141D]/10">
                    <div className="flex items-center gap-1.5 text-[#C59B27] mb-1">
                      <Trophy className="w-3.5 h-3.5" />
                      <span className="text-[10px] text-[#718096] uppercase font-semibold">Prize</span>
                    </div>
                    <span className="text-[#C59B27] font-bold text-xs sm:text-sm">{featuredInitiative.prize}</span>
                  </div>
                </div>

                {/* Format Info */}
                <div className="p-3.5 rounded-lg bg-white border border-[#10141D]/10 space-y-1 text-xs text-[#556477]">
                  <div className="flex items-center gap-2 text-[#10141D] font-semibold">
                    <Users className="w-4 h-4 text-[#C59B27]" />
                    <span>Team Format: {featuredInitiative.teamSize}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#718096] text-[11px] pt-1">
                    <AlertCircle className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                    <span>{featuredInitiative.problemStatement} on event day to ensure spontaneous problem solving.</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsRegisterOpen(true)}
                    className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#10141D] hover:bg-[#C59B27] text-white transition-all shadow-sm"
                  >
                    Register for Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Roadmap */}
      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B27]">
              Upcoming Schedule
            </span>
            <h2 className="font-editorial-display text-2xl sm:text-3xl font-black uppercase text-[#10141D] mt-1">
              Future Community Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureEvents.map((evt, idx) => (
              <div
                key={evt.id}
                className="bg-white p-6 rounded-xl border border-[#10141D]/10 space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#10141D]/08">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#164E87]">
                      {evt.category}
                    </span>
                    <span className="text-xs text-[#718096]">
                      {evt.date}
                    </span>
                  </div>

                  <h3 className="font-editorial-display text-xl font-bold uppercase tracking-tight text-[#10141D] mt-3">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#556477] leading-relaxed mt-2">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#10141D]/06 flex items-center justify-between text-xs text-[#718096]">
                  <span>{evt.status}</span>
                  <span className="text-[#C59B27] font-semibold">{evt.link}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </main>
  )
}

export default Initiatives
