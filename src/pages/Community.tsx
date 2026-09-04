import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Hammer,
  Users,
  TrendingUp,
  Trophy,
  CheckCircle2,
  Plus,
  Minus,
} from 'lucide-react'
import {
  communityData,
} from '../data/officialData'
import JoinCommunityModal from '../components/JoinCommunityModal'
import RegisterModal from '../components/RegisterModal'
import CollaborationSection from '../components/CollaborationSection'
import FlagshipChallengeSection from '../components/FlagshipChallengeSection'

const faqs = [
  {
    q: 'Who can join the DECODEP Community?',
    a: 'DECODEP Community is open to students, developers, engineers, and tech enthusiasts who want to build real projects, learn practical skills, and collaborate on software challenges.',
  },
  {
    q: 'Are hackathons and events free to enter?',
    a: 'Yes! Our flagship initiatives, including HACKDAY 1.0, are 100% free of charge with open registration for individuals and teams, complete with cash awards for winning solutions.',
  },
  {
    q: 'What technologies does the community explore?',
    a: 'We actively build across Applied AI, Full-Stack Web Development (React, Next.js, Node.js), Mobile App Development, and Cloud infrastructure.',
  },
  {
    q: 'How do community collaborations (MoUs) work?',
    a: 'We partner with other tech communities (such as GO.HUB Community) under formal MoUs to jointly organize hackathons, exchange speaker networks, and expand opportunities for our members.',
  },
]

export const Community: React.FC = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const pillarIcons: Record<string, any> = {
    learn: BookOpen,
    build: Hammer,
    collaborate: Users,
    grow: TrendingUp,
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111827] pt-24 pb-16">
      
      {/* 01 — HERO */}
      <section className="border-b border-[#111827]/10 px-6 py-16 sm:px-10 sm:py-24 lg:px-16 text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-medium uppercase tracking-wider">
          <span>Builder Ecosystem</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111827]">
          DECODEP Community
        </h1>

        <p className="font-serif text-base sm:text-xl text-[#4B5563] leading-relaxed">
          {communityData.summary}
        </p>

        {/* 1000+ Members Box */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex items-center gap-3.5 px-5 py-3 bg-white border border-[#111827]/10 rounded-xl shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#164E87] text-white flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-display text-xl font-bold text-[#111827] leading-none">
                1000<span className="text-[#C59B27]">+</span>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-[#6B7280] font-semibold mt-0.5">
                Community Members
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIsJoinOpen(true)}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#111827] hover:bg-[#C59B27] hover:text-[#0D1117] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Join Community
          </button>
          <Link
            to="/initiatives"
            className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-[#F2EFE8] text-[#111827] font-mono text-xs font-bold uppercase tracking-wider rounded-md border border-[#111827]/15 transition-colors"
          >
            View Initiatives
          </Link>
        </div>
      </section>

      {/* 02 — FOUR PILLARS */}
      <section className="border-b border-[#111827]/10 bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-1 pb-4 border-b border-[#111827]/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-medium uppercase tracking-wider mb-2">
              <span>Foundation</span>
            </div>
            <h2 className="font-display text-3xl font-black uppercase text-[#111827]">
              Our Pillars
            </h2>
            <p className="font-serif text-sm text-[#4B5563]">Foundational principles of our builder ecosystem</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityData.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[pillar.id] || Users

              return (
                <div
                  key={pillar.id}
                  className="bg-[#FAF8F5] p-6 rounded-xl border border-[#111827]/10 space-y-3 hover:border-[#164E87]/60 transition-colors"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#111827]/05">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#9CA3AF]">0{idx + 1}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase text-[#111827]">{pillar.title}</h3>
                  <p className="font-serif text-xs sm:text-sm text-[#4B5563] leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 03 — ACTIVITIES & FORMATS */}
      <section className="border-b border-[#111827]/10 px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-medium uppercase tracking-wider mb-1">
              <span>Engagement</span>
            </div>
            <h2 className="font-display text-3xl font-black uppercase text-[#111827]">
              Community Activities
            </h2>
            <p className="font-serif text-sm text-[#4B5563]">
              We organize hackathons, technical workshops, challenges, and collaborative initiatives designed to build real engineering experience.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {communityData.activities.map((act, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-[#111827]/10 flex items-start gap-3.5 shadow-xs"
              >
                <div className="w-7 h-7 rounded-md bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-serif text-sm font-medium text-[#111827]">{act}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — FLAGSHIP CHALLENGE */}
      <FlagshipChallengeSection />

      {/* 05 — COLLABORATIONS (DATA-DRIVEN) */}
      <CollaborationSection />

      {/* 06 — FAQ */}
      <section id="faq" className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-display text-3xl font-black uppercase text-[#111827]">
            Community FAQ
          </h2>
          <p className="font-serif text-sm text-[#4B5563]">Frequently asked questions about membership and events</p>
        </div>

        <div className="divide-y divide-[#111827]/08 border-t border-b border-[#111827]/08">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx

            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-display text-base sm:text-lg font-bold uppercase text-[#111827] hover:text-[#C59B27] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="w-6 h-6 rounded-md bg-white border border-[#111827]/10 flex items-center justify-center text-xs shrink-0 ml-4">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <p className="pt-2 font-serif text-sm text-[#4B5563] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Modals */}
      <JoinCommunityModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </main>
  )
}

export default Community