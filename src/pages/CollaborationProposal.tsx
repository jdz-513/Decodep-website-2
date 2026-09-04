import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Handshake,
  FileText,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Send,
  Building2,
  GraduationCap,
  Share2,
  Sparkles,
} from 'lucide-react'
import { brandData } from '../data/officialData'
import { collaborations as collaborationsList } from '../data/collaborations'

const partnershipScopes = [
  {
    icon: Award,
    title: 'Hackathons & Competitions',
    description:
      'Jointly conceptualize, organize, and execute physical or online hackathons, coding sprints, and problem-solving contests with live mentorship and prize structures.',
  },
  {
    icon: Users,
    title: 'Workshops & Technical Talks',
    description:
      'Co-host specialized deep-dive sessions, masterclasses, and hands-on developer training across AI, Web Systems, and modern software engineering.',
  },
  {
    icon: Share2,
    title: 'Cross-Community Outreach',
    description:
      'Amplify community reach through mutual promotions, shared builder ecosystems, announcement broadcasts, and joint networking initiatives.',
  },
  {
    icon: GraduationCap,
    title: 'Student & Campus Engagement',
    description:
      'Bring practical building opportunities to university students, college coding clubs, and aspiring developers through structured challenges.',
  },
  {
    icon: Sparkles,
    title: 'Mentorship & Judging Synergy',
    description:
      'Share industry mentors, technical reviewers, and jury panels to elevate the evaluation and learning experience for all participants.',
  },
  {
    icon: Building2,
    title: 'MoU & Institutional Alliances',
    description:
      'Formalize long-term cooperation through structured Memorandums of Understanding (MoUs) for recurring student empowerment and tech initiatives.',
  },
]

const targetPartners = [
  {
    type: 'Developer Communities',
    summary: 'Open-source collectives, regional developer groups, and technical societies seeking joint hackathon and knowledge collaboration.',
  },
  {
    type: 'Colleges & Universities',
    summary: 'Engineering institutions, departments, and campus clubs seeking practical industry challenges, guest sessions, and student hackathons.',
  },
  {
    type: 'Tech Organizations & Startups',
    summary: 'Ecosystem builders and organizations looking to sponsor challenge tracks, provide problem statements, or discover emerging engineering talent.',
  },
]

export const CollaborationProposal: React.FC = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnerType: 'Developer Community',
    proposalSummary: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.organizationName || !formData.email || !formData.proposalSummary) return
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111827] pt-24 pb-16">
      
      {/* 01 — HERO HEADER */}
      <section className="border-b border-[#111827]/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-semibold uppercase tracking-wider font-mono">
            <Handshake className="w-3.5 h-3.5" />
            <span>Partnership Framework</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#111827] tracking-tight">
            Collaboration Proposal
          </h1>

          <p className="font-serif text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Partner with DECODEP to co-organize hackathons, technical workshops, community initiatives, and collaborative programs that empower the next generation of builders.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#6B7280]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
              Mutual Growth & Impact
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
              Structured MoU Framework
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
              Student & Developer Ecosystem
            </span>
          </div>
        </div>
      </section>

      {/* 02 — PARTNERSHIP MODEL */}
      <section className="border-b border-[#111827]/10 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-2 pb-4 border-b border-[#111827]/10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Cooperation Blueprint
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#111827]">
              How We Collaborate
            </h2>
            <p className="font-serif text-sm text-[#4B5563] max-w-2xl leading-relaxed">
              We believe meaningful partnerships should be win-win, disciplined, and focused on genuine learning value. Whether formalizing an official MoU or organizing a joint event, we provide end-to-end execution support.
            </p>
          </div>

          {/* Target Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetPartners.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-7 rounded-xl border border-[#111827]/10 space-y-3 shadow-xs hover:border-[#C59B27]/60 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#111827]/08">
                  <span className="font-mono text-xs font-bold text-[#C59B27]">0{idx + 1}</span>
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider">Partner Category</span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-[#111827]">
                  {item.type}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — COLLABORATION SCOPES */}
      <section className="border-b border-[#111827]/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-2 pb-4 border-b border-[#111827]/10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Scope of Cooperation
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#111827]">
              Areas of Joint Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipScopes.map((scope, idx) => {
              const Icon = scope.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-xl border border-[#111827]/10 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-sm hover:border-[#C59B27]/50 transition-all"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF2DD] border border-[#E8D39E] flex items-center justify-center text-[#8F6B0A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold uppercase text-[#111827]">
                      {scope.title}
                    </h3>
                    <p className="font-serif text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {scope.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 04 — BILATERAL SYNERGY (WHAT EACH PARTY BRINGS) */}
      <section className="border-b border-[#111827]/10 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-2 pb-4 border-b border-[#111827]/10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Mutual Deliverables
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#111827]">
              Bilateral Roles & Contributions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Party A: DECODEP */}
            <div className="bg-[#FAF8F5] p-7 sm:p-8 rounded-xl border border-[#111827]/10 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#111827]/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27]" />
                <h3 className="font-display text-lg font-bold uppercase text-[#111827]">
                  What DECODEP Contributes
                </h3>
              </div>
              <ul className="space-y-2.5 font-serif text-xs sm:text-sm text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <span className="text-[#C59B27] font-bold mt-0.5">•</span>
                  <span>End-to-end event planning, technical guidelines, and timeline management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C59B27] font-bold mt-0.5">•</span>
                  <span>Curated problem statements and practical challenge frameworks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C59B27] font-bold mt-0.5">•</span>
                  <span>Technical coordination, live mentoring, and evaluation rubrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C59B27] font-bold mt-0.5">•</span>
                  <span>Professional creative banners, certificates, and event branding assets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C59B27] font-bold mt-0.5">•</span>
                  <span>Active cross-promotion across our verified developer network.</span>
                </li>
              </ul>
            </div>

            {/* Party B: Partner */}
            <div className="bg-[#FAF8F5] p-7 sm:p-8 rounded-xl border border-[#111827]/10 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#111827]/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#164E87]" />
                <h3 className="font-display text-lg font-bold uppercase text-[#111827]">
                  What Partners Contribute
                </h3>
              </div>
              <ul className="space-y-2.5 font-serif text-xs sm:text-sm text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <span className="text-[#164E87] font-bold mt-0.5">•</span>
                  <span>Community broadcast and participant engagement across campus/club channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#164E87] font-bold mt-0.5">•</span>
                  <span>Campus venue or co-hosting digital platform support where applicable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#164E87] font-bold mt-0.5">•</span>
                  <span>Nomination of student coordinators, community leads, and volunteer support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#164E87] font-bold mt-0.5">•</span>
                  <span>Mentor, speaker, and industry reviewer recommendations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#164E87] font-bold mt-0.5">•</span>
                  <span>Co-branded promotion on social platforms and announcement channels.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Reference to Existing MoU */}
          {collaborationsList.length > 0 && (
            <div className="p-5 rounded-lg border border-[#C59B27]/30 bg-[#FAF2DD]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#8F6B0A] shrink-0" />
                <div>
                  <h4 className="font-display text-sm font-bold uppercase text-[#111827]">
                    Active Reference Model: {collaborationsList[0].title}
                  </h4>
                  <p className="font-serif text-xs text-[#556477]">
                    View our live bilateral Memorandum of Understanding with {collaborationsList[0].partnerName}.
                  </p>
                </div>
              </div>
              <Link
                to={`/collaborations/${collaborationsList[0].id}`}
                className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-[#111827] hover:text-[#C59B27] transition-colors"
              >
                <span>Read Official MoU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 05 — SUBMIT PROPOSAL / CONTACT DESK */}
      <section id="proposal-form" className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Initiate Collaboration
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#111827]">
              Submit a Collaboration Proposal
            </h2>
            <p className="font-serif text-sm sm:text-base text-[#4B5563] max-w-xl mx-auto leading-relaxed">
              Fill out the details below to introduce your organization, proposal idea, or proposed event timeline. Our leadership team will review and get in touch within 24–48 hours.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#111827]/10 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF2DD] border border-[#E8D39E] flex items-center justify-center text-[#8F6B0A] mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#111827]">
                  Proposal Transmitted Successfully
                </h3>
                <p className="font-serif text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                  Thank you for proposing a collaboration with DECODEP. We have logged your request and will reach out to <strong>{formData.email}</strong> to schedule an initial coordination discussion.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        organizationName: '',
                        contactPerson: '',
                        email: '',
                        phone: '',
                        partnerType: 'Developer Community',
                        proposalSummary: '',
                      })
                    }}
                    className="px-6 py-2.5 bg-[#111827] text-white hover:bg-[#C59B27] hover:text-[#0D1117] rounded-md font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#374151]">
                      Organization / Community Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Tech Club / Coding Community"
                      value={formData.organizationName}
                      onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-[#111827]/15 bg-[#FAF8F5] focus:bg-white text-xs font-sans text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#374151]">
                      Contact Person / Lead *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name & Role"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-[#111827]/15 bg-[#FAF8F5] focus:bg-white text-xs font-sans text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#374151]">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@community.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-[#111827]/15 bg-[#FAF8F5] focus:bg-white text-xs font-sans text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#374151]">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-[#111827]/15 bg-[#FAF8F5] focus:bg-white text-xs font-sans text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#374151]">
                    Organization Type
                  </label>
                  <select
                    value={formData.partnerType}
                    onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-[#111827]/15 bg-[#FAF8F5] focus:bg-white text-xs font-sans text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                  >
                    <option value="Developer Community">Developer Community</option>
                    <option value="College / University Department">College / University Department</option>
                    <option value="Student Technical Club">Student Technical Club</option>
                    <option value="Tech Company / Startup">Tech Company / Startup</option>
                    <option value="Educational Non-Profit">Educational Non-Profit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#374151]">
                    Collaboration Proposal & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe what you would like to collaborate on (e.g. Joint Hackathon, Workshop series, MoU partnership, student outreach) and your prospective timeline."
                    value={formData.proposalSummary}
                    onChange={(e) => setFormData({ ...formData, proposalSummary: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-[#111827]/15 bg-[#FAF8F5] focus:bg-white text-xs font-sans text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-4 text-xs font-mono text-[#6B7280]">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
                      {brandData.email}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                      {brandData.phone}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-[#111827] hover:bg-[#C59B27] hover:text-[#0D1117] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Submit Proposal</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  )
}

export default CollaborationProposal
