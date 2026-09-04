import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Hammer, Users, TrendingUp } from 'lucide-react'
import JoinCommunityModal from './JoinCommunityModal'
import { communityData } from '../data/officialData'

export const CommunityEcosystemSection: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)

  const pillarIcons: Record<string, any> = {
    learn: BookOpen,
    build: Hammer,
    collaborate: Users,
    grow: TrendingUp,
  }

  return (
    <section id="community" className="relative border-b border-[#111827]/10 bg-[#FAF8F5] px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#111827]/10">
          <div className="lg:col-span-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-medium uppercase tracking-wider mb-1">
              <span>Developer Ecosystem</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
              DECODEP Community
            </h2>
            <p className="font-serif text-base text-[#4B5563] max-w-2xl leading-relaxed">
              {communityData.summary}
            </p>
          </div>

          {/* 1000+ Members Box */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="bg-white px-5 py-3.5 border border-[#111827]/10 rounded-xl flex items-center gap-3.5 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#164E87] text-white flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[#111827] leading-none">
                  1000<span className="text-[#C59B27]">+</span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#6B7280] font-semibold mt-0.5">
                  Community Members
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {communityData.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.id] || Users

            return (
              <div
                key={pillar.id}
                className="bg-white p-6 rounded-xl border border-[#111827]/10 hover:border-[#164E87]/60 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#111827]/05">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E]/60 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#9CA3AF]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#111827] mt-3">
                    {pillar.title}
                  </h3>

                  <p className="font-serif text-xs sm:text-sm text-[#4B5563] leading-relaxed mt-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Action Row */}
        <div className="p-6 sm:p-8 rounded-lg bg-white border border-[#111827]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-[#111827]">
              Ready to build with the community?
            </h4>
            <p className="font-serif text-xs sm:text-sm text-[#4B5563] mt-0.5">
              Participate in hackathons, workshops, and real software challenges.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsJoinModalOpen(true)}
              className="px-6 py-3 bg-[#111827] hover:bg-[#C59B27] hover:text-[#0D1117] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm"
            >
              Join Community
            </button>
            <Link
              to="/community"
              className="px-6 py-3 bg-[#FAF9F6] hover:bg-[#EBE7DF] text-[#111827] font-mono text-xs font-bold uppercase tracking-wider rounded-md border border-[#111827]/15 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

      </div>

      <JoinCommunityModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </section>
  )
}

export default CommunityEcosystemSection