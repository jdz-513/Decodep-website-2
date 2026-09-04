import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Handshake, Calendar, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react'
import { collaborationsList } from '../data/officialData'

export const EcosystemCollaborationsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07111F] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1728] border border-white/10 text-xs font-mono tracking-wider text-[#1677FF] uppercase mb-4">
              <span>05 // PARTNERSHIPS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              BUILD WITH THE ECOSYSTEM
            </h2>
          </div>

          <Link
            to="/collaborations"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1677FF] hover:text-white transition-colors group"
          >
            <span>ALL COLLABORATIONS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Minimal Horizontal Relationship Network Layout */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {collaborationsList.map((collab, index) => (
            <div
              key={collab.id}
              className="py-8 sm:py-10 hover:bg-[#0D1728]/60 transition-colors duration-200 px-4 sm:px-6 rounded-lg group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Column 1: Partner & MoU Title */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#1677FF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
                    <span>{collab.collaborationType.toUpperCase()}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#1677FF] transition-colors">
                    {collab.partnerName}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{collab.partyB.location}</span>
                  </div>
                </div>

                {/* Column 2: Scope & Description */}
                <div className="lg:col-span-5 space-y-2">
                  <p className="text-xs sm:text-sm text-[#9AA8BA] leading-relaxed">
                    {collab.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {collab.scopes.slice(0, 2).map((scope, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-[#64748B] bg-white/[0.03] border border-white/5"
                      >
                        {scope}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 3: Status, Date & CTA */}
                <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
                  <div className="text-right">
                    {collab.status && (
                      <span className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                        {collab.status}
                      </span>
                    )}
                    {collab.date && (
                      <div className="text-[11px] font-mono text-[#64748B] mt-1">
                        AGREEMENT: {collab.date}
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/collaborations/${collab.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#1677FF] transition-colors"
                  >
                    <span>MOU DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Subtle Bottom Trust Notice */}
        <div className="mt-12 p-6 rounded-xl bg-[#0D1728] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-3 text-[#9AA8BA]">
            <ShieldCheck className="w-4 h-4 text-[#F5B72C] flex-shrink-0" />
            <span>Formally executed bilateral Memorandum of Understanding (MoU) frameworks.</span>
          </div>

          <Link
            to="/contact"
            className="text-xs font-bold uppercase tracking-wider text-[#1677FF] hover:text-white transition-colors flex items-center gap-1 flex-shrink-0"
          >
            <span>PROPOSE COLLABORATION</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default EcosystemCollaborationsSection
