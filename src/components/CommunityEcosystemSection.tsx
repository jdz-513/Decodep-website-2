import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Hammer,
  Trophy,
  Users,
  Network,
  Sparkles,
  Terminal,
} from 'lucide-react'
import JoinCommunityModal from './JoinCommunityModal'

export const CommunityEcosystemSection: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)

  const ecosystemAspects = [
    {
      id: 'learn',
      title: 'TECHNICAL WORKSHOPS',
      category: 'LEARNING',
      icon: BookOpen,
      description:
        'Hands-on practical sessions covering full-stack architectures, modern AI models, and real developer workflows.',
      accent: 'blue',
    },
    {
      id: 'build',
      title: 'OPEN PROJECTS',
      category: 'PROJECTS',
      icon: Hammer,
      description:
        'Turn conceptual ideas into deployed functional software with peer reviews and engineering mentoring.',
      accent: 'gold',
    },
    {
      id: 'hackathons',
      title: 'HACKDAYS & SPRINTS',
      category: 'HACKATHONS',
      icon: Trophy,
      description:
        'High-intensity competitive sprint formats designed to test speed, problem decomposition, and working code.',
      accent: 'blue',
    },
    {
      id: 'collab',
      title: 'PEER COLLABORATION',
      category: 'COLLABORATION',
      icon: Users,
      description:
        'Engage with developer peers, mentors, speakers, and industry enthusiasts across active joint initiatives.',
      accent: 'gold',
    },
    {
      id: 'network',
      title: 'ECOSYSTEM ALLIANCES',
      category: 'NETWORKING',
      icon: Network,
      description:
        'Cross-community outreach, formal partnership MoUs, and inter-community technical engagements.',
      accent: 'blue',
    },
  ]

  return (
    <section
      id="community"
      className="relative overflow-hidden border-b border-[#E6EAF0] bg-[#FAFBFC] px-4 py-20 text-[#0A1128] sm:px-6 sm:py-24 lg:px-8"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Technical Grid */}
        <div className="tech-grid-light absolute inset-0 opacity-[0.4]" />

        {/* Blue Glow */}
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#1677FF]/[0.045] blur-3xl" />

        {/* Gold Glow */}
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#F5B72C]/[0.035] blur-3xl" />

        {/* Orbital Rings */}
        <div className="absolute right-[5%] top-[8%] h-72 w-72 rounded-full border border-[#1677FF]/[0.08]" />

        <div className="absolute right-[8%] top-[11%] h-60 w-60 rounded-full border border-[#F5B72C]/[0.08]" />

        <div className="absolute right-[12%] top-[15%] h-44 w-44 rounded-full border border-[#1677FF]/[0.06]" />

        {/* Nodes */}
        <span className="absolute right-[19%] top-[8%] h-2 w-2 rounded-full bg-[#1677FF]/40" />

        <span className="absolute right-[5%] top-[34%] h-1.5 w-1.5 rounded-full bg-[#F5B72C]/50" />

        <span className="absolute right-[25%] top-[29%] h-1 w-1 rounded-full bg-[#1677FF]/40" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:mb-14 lg:grid-cols-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">

            {/* Section Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDE3EC] bg-white px-3 py-1.5 shadow-sm">

              <span className="h-1.5 w-1.5 rounded-full bg-[#F5B72C]" />

              <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-[#526174]">
                03 // DEVELOPER COMMUNITY
              </span>

            </div>

            {/* Heading */}
            <h2 className="font-display text-5xl font-black uppercase leading-[0.86] tracking-[-0.045em] text-[#0A1128] sm:text-6xl md:text-7xl lg:text-[5.5rem]">

              BUILD.

              <br />

              <span className="text-[#1677FF]">
                LEARN.
              </span>

              <br />

              COLLABORATE
              <span className="text-[#F5B72C]">.</span>

            </h2>

          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-6 lg:pb-1">

            <div className="max-w-xl">

              <p className="text-sm leading-7 text-[#5D6B7D] sm:text-base">
                DECODEP Community brings together developers, students, and
                technology enthusiasts to solve genuine challenges, gain
                practical experience, and accelerate engineering growth.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-7 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={() => setIsJoinModalOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#0A1128] px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-white shadow-[0_8px_25px_rgba(10,17,40,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1677FF]"
                >
                  <span>
                    JOIN THE COMMUNITY
                  </span>

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <Link
                  to="/community"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#DCE2EA] bg-white px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-[#0A1128] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1677FF]/40 hover:shadow-md"
                >
                  <span>
                    COMMUNITY OVERVIEW
                  </span>

                  <ArrowRight className="h-3.5 w-3.5 text-[#1677FF] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            ECOSYSTEM GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {ecosystemAspects.map((aspect, idx) => {

            const Icon = aspect.icon
            const isGold = aspect.accent === 'gold'

            return (
              <div
                key={aspect.id}
                className="group relative overflow-hidden rounded-xl border border-[#E2E7EE] bg-white p-5 shadow-[0_5px_20px_rgba(10,17,40,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1677FF]/30 hover:shadow-[0_16px_35px_rgba(10,17,40,0.08)]"
              >

                {/* Left Hover Accent */}
                <div
                  className={`absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100 ${
                    isGold
                      ? 'bg-[#F5B72C]'
                      : 'bg-[#1677FF]'
                  }`}
                />

                {/* Top Row */}
                <div className="mb-5 flex items-center justify-between">

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                      isGold
                        ? 'border-[#F5B72C]/20 bg-[#F5B72C]/[0.08] text-[#C58A00]'
                        : 'border-[#1677FF]/15 bg-[#1677FF]/[0.07] text-[#1677FF]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="font-mono text-[10px] font-bold tracking-widest text-[#A1ACBA]">
                    0{idx + 1}
                  </span>

                </div>

                {/* Category */}
                <div className="mb-2 flex items-center gap-2">

                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isGold
                        ? 'bg-[#F5B72C]'
                        : 'bg-[#1677FF]'
                    }`}
                  />

                  <span className="font-mono text-[9px] font-bold tracking-[0.14em] text-[#7A8797]">
                    {aspect.category}
                  </span>

                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-black uppercase tracking-tight text-[#0A1128] transition-colors duration-300 group-hover:text-[#1677FF]">
                  {aspect.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs leading-6 text-[#687687]">
                  {aspect.description}
                </p>

                {/* Bottom Status */}
                <div className="mt-6 flex items-center justify-between border-t border-[#EEF1F5] pt-4">

                  <span className="font-mono text-[9px] font-bold tracking-wider text-[#A0AAB7]">
                    STATUS: ACTIVE
                  </span>

                  <div
                    className={`h-1.5 w-1.5 rounded-full ${
                      isGold
                        ? 'bg-[#F5B72C]'
                        : 'bg-[#1677FF]'
                    }`}
                  />

                </div>

              </div>
            )
          })}

          {/* =================================================
              COMMUNITY DIRECTORY
          ================================================== */}

          <div className="group relative overflow-hidden rounded-xl border border-[#E2E7EE] bg-white p-5 text-[#0A1128] shadow-[0_5px_20px_rgba(10,17,40,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1677FF]/30 hover:shadow-[0_16px_35px_rgba(10,17,40,0.08)]">

            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#1677FF]/[0.06] blur-2xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">

              {/* Top */}
              <div>

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1677FF]/15 bg-[#1677FF]/[0.07] text-[#1677FF]">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <Terminal className="h-4 w-4 text-[#C4CBD5]" />

                </div>

                <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-[#1677FF]">
                  COMMUNITY DIRECTORY
                </span>

                <p className="mt-3 text-xs leading-6 text-[#687687]">
                  Open to all developers, engineering students, mentors,
                  and partner communities.
                </p>

              </div>

              {/* Stats */}
              <div className="mt-7 space-y-2 border-t border-[#EEF1F5] pt-4">

                <div className="flex items-center justify-between font-mono text-[9px]">

                  <span className="text-[#7B8796]">
                    PARTICIPATION
                  </span>

                  <span className="font-bold text-[#0A1128]">
                    100% FREE
                  </span>

                </div>

                <div className="flex items-center justify-between font-mono text-[9px]">

                  <span className="text-[#7B8796]">
                    FOCUS
                  </span>

                  <span className="font-bold text-[#1677FF]">
                    PRACTICAL ENGINEERING
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM SYSTEM LINE
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-3 border-t border-[#E3E8EF] pt-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[#7B8796]">
              DECODEP COMMUNITY // ECOSYSTEM ACTIVE
            </span>

          </div>

          <span className="font-mono text-[9px] tracking-wider text-[#A0AAB7]">
            LEARN • BUILD • COLLABORATE • GROW
          </span>

        </div>

      </div>

      {/* =====================================================
          JOIN COMMUNITY MODAL
      ====================================================== */}

      <JoinCommunityModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

    </section>
  )
}

export default CommunityEcosystemSection