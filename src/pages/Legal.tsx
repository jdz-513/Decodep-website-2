import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShieldCheck, ArrowLeft } from 'lucide-react'
import { brandData } from '../data/officialData'

export const Legal: React.FC = () => {
  const location = useLocation()
  const isTerms = location.pathname.includes('/terms')

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#10141D] pt-24 pb-20">
      {/* Top Breadcrumb Link */}
      <section className="py-4 px-6 sm:px-10 lg:px-16 bg-white border-b border-[#10141D]/10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#556477] hover:text-[#C59B27] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-b border-[#10141D]/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-semibold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="font-editorial-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#10141D]">
            {isTerms ? 'Terms of Service' : 'Privacy Policy'}
          </h1>

          <p className="text-xs sm:text-sm text-[#718096]">
            Effective Date: 01 January 2026 • Official Governing Document for {brandData.name} ({brandData.registration.type}, {brandData.registration.status})
          </p>
        </div>
      </section>

      {/* Document Body */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-[#2A3442] leading-relaxed text-sm sm:text-base">
          {isTerms ? (
            <>
              <div className="space-y-2">
                <h2 className="font-editorial-display text-xl font-bold uppercase text-[#10141D]">
                  1. Agreement to Terms
                </h2>
                <p className="text-[#556477]">
                  By accessing or engaging with DECODEP (including our website at {brandData.website}, our community programs, hackathons, workshops, and technology services), you agree to be bound by these Terms of Service. If you do not agree, you must discontinue use of our platforms and services.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-editorial-display text-xl font-bold uppercase text-[#10141D]">
                  2. Technology Services & Client Engagements
                </h2>
                <p className="text-[#556477]">
                  DECODEP provides technology services including Artificial Intelligence implementations, Web Engineering, Application Development, and Digital Systems support. All client deliverables, timelines, warranties, and milestones are governed by bilateral statements of work (SOW) executed between DECODEP and the respective client.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-editorial-display text-xl font-bold uppercase text-[#10141D]">
                  3. Community & Hackathon Participation
                </h2>
                <p className="text-[#556477]">
                  Participants in DECODEP Community initiatives (such as HACKDAY 1.0) agree to uphold ethical coding standards, original work submission, mutual respect, and collaborative sportsmanship. Submissions found to involve plagiarism or unauthorized code use will be disqualified from prize allocations.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-editorial-display text-xl font-bold uppercase text-[#10141D]">
                  4. Intellectual Property
                </h2>
                <p className="text-[#556477]">
                  All proprietary content, brand assets, logos, and website layouts are intellectual property of DECODEP. Client project intellectual property is transferred as stipulated in specific service agreements. Open-source initiatives are governed under their respective declared open-source licenses.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-editorial-display text-xl font-bold uppercase text-[#10141D]">
                  5. Governing Jurisdiction
                </h2>
                <p className="text-[#556477]">
                  These Terms are governed by and construed in accordance with the laws of Tamil Nadu, India, where DECODEP is registered under the Udyam framework.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <h2 className="font-editorial-display text-xl font-bold uppercase text-[#10141D]">
                  1. Information We Collect
                </h2>
                <p className="text-[#556477]">
                  We collect information that you directly provide to us when submitting inquiries through our contact form, registering for community memberships, or enrolling in hackathons like HACKDAY 1.0. This may include your name, email address, phone number, technical interests, and team details.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-editorial-display text-xl font-bold uppercase text-[#10141D]">
                  2. How We Use Your Information
                </h2>
                <p className="text-[#556477]">
                  We utilize collected information solely to:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#556477] pl-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C59B27] font-bold">•</span>
                    <span>Respond to project inquiries and business requests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C59B27] font-bold">•</span>
                    <span>Dispatch event schedules, hackathon problem releases, and entry credentials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C59B27] font-bold">•</span>
                    <span>Maintain official community rosters and bilateral partnership records</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="font-editorial-display text-xl font-bold uppercase text-[#10141D]">
                  3. Information Sharing & Protection
                </h2>
                <p className="text-[#556477]">
                  DECODEP does not sell, rent, or trade your personal data to third parties. We apply industry-standard security protocols to prevent unauthorized access, alteration, or disclosure of your transmitted data.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-editorial-display text-xl font-bold uppercase text-[#10141D]">
                  4. Contact & Inquiries
                </h2>
                <p className="text-[#556477]">
                  For any privacy-related requests or data deletion inquiries, contact our official desk directly at <a href={`mailto:${brandData.email}`} className="text-[#164E87] underline">{brandData.email}</a>.
                </p>
              </div>
            </>
          )}

          <div className="p-5 bg-[#FAF8F5] border border-[#10141D]/10 rounded-xl text-xs text-[#718096]">
            <div className="font-bold text-[#10141D] uppercase">Official Entity Details</div>
            <div className="mt-1">{brandData.name} • {brandData.registration.type} ({brandData.registration.status})</div>
            <div>Location: Erode, Tamil Nadu, India • Direct Email: {brandData.email}</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Legal
