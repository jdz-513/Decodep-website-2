import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Handshake, Calendar, MapPin, Sparkles } from 'lucide-react'
import { collaborations as defaultCollaborations, Collaboration } from '../data/collaborations'

interface CollaborationSectionProps {
  items?: Collaboration[]
}

export const CollaborationSection: React.FC<CollaborationSectionProps> = ({
  items = defaultCollaborations,
}) => {
  return (
    <section id="collaborations" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] text-[#111827] border-b border-[#111827]/10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2 pb-5 border-b border-[#111827]/10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-medium uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#C59B27]" />
            <span>Partnerships & Alliances</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111827]">
            COLLABORATIONS
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#4B5563] max-w-2xl leading-relaxed">
            Community collaborations, technology partnerships, hackathons, and ecosystem alliances advancing hands-on engineering, shared learning, and developer outreach.
          </p>
        </div>

        {/* Collaborations Grid: Data-Driven Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((collab) => {
            const isDiscussion = collab.status?.toUpperCase().includes('DISCUSSION')
            const displayTitle = collab.title || `DECODEP Community × ${collab.partner}`
            const hasLink = Boolean(collab.link && collab.link.trim() !== '')

            return (
              <div
                key={collab.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Meta: Status line */}
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 font-medium">
                      <Handshake className="w-3.5 h-3.5 text-[#1677FF]" />
                      <span>{collab.type}</span>
                    </div>

                    {isDiscussion ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>IN DISCUSSION</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/70 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active MoU</span>
                      </span>
                    )}
                  </div>

                  {/* Partner Header with Logo & Title */}
                  <div className="flex items-start gap-3.5 pt-1">
                    {collab.image && (
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-200/80 shrink-0 p-1 flex items-center justify-center shadow-xs">
                        <img
                          src={collab.image}
                          alt={collab.partner}
                          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="min-w-0 flex-1 space-y-1">
                      <h3 className="font-sans text-base font-bold text-[#0F172A] leading-snug group-hover:text-[#1677FF] transition-colors">
                        {displayTitle}
                      </h3>
                      {collab.location && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-sans">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{collab.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="font-sans text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {collab.description}
                  </p>

                  {/* Scope Tags: Compact & Neat */}
                  {collab.scopes && collab.scopes.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {collab.scopes.slice(0, 3).map((scope, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-sans font-medium text-slate-600 bg-slate-50 border border-slate-200/70"
                        >
                          {scope}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Row: Date & Action */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <div className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{collab.date}</span>
                  </div>

                  {hasLink ? (
                    <Link
                      to={collab.link!}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0F172A] group-hover:text-[#1677FF] transition-colors shrink-0 group/link"
                    >
                      <span>{collab.linkText || 'View Agreement'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                      <span>{collab.linkText || 'In Discussion'}</span>
                    </span>
                  )}
                </div>

              </div>
            )
          })}
        </div>

        {/* Purpose Collaboration Partner Box: Directly routes to /proposals */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
          <div className="space-y-0.5">
            <strong className="font-sans text-sm sm:text-base font-bold text-[#0F172A]">
              Interested in collaborating with DECODEP?
            </strong>
            <p className="font-sans text-xs sm:text-sm text-slate-500">
              We partner on hackathons, technical workshops, campus sessions, and developer outreach.
            </p>
          </div>

          <Link
            to="/proposals"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] hover:bg-[#1677FF] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs active:scale-95 shrink-0"
          >
            <span>Purpose Collaboration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  )
}

export const EcosystemCollaborationsSection = CollaborationSection
export default CollaborationSection
