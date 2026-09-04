import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Handshake, Calendar, ShieldCheck, MapPin } from 'lucide-react'
import { collaborationsList } from '../data/officialData'

export const CollaborationsPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-semibold mb-3">
              <Handshake className="w-3.5 h-3.5" />
              <span>Ecosystem Alliances</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase">
              COLLABORATIONS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Strategic partnerships and community alliances empowering developer growth and practical innovation.
            </p>
          </div>

          <Link
            to="/collaborations"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-dark transition-colors group flex-shrink-0"
          >
            <span>View All Collaborations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Collaborations Grid (Supports 1, 5, 10+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborationsList.map((collab) => (
            <div
              key={collab.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-card-hover hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-xs font-mono font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {collab.collaborationType}
                  </span>
                  {collab.status && (
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {collab.status}
                    </span>
                  )}
                </div>

                {/* Partner Visual / Name */}
                <div className="flex items-center gap-3.5 mb-4">
                  {collab.posterImage && (
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 flex-shrink-0 shadow-xs">
                      <img
                        src={collab.posterImage}
                        alt={collab.partnerName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-950 uppercase tracking-tight">
                      {collab.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{collab.partyB.location}</span>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {collab.shortDescription}
                </p>
              </div>

              {/* Bottom Metadata & View Details Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                {collab.date ? (
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{collab.date}</span>
                  </span>
                ) : (
                  <span />
                )}

                <Link
                  to={`/collaborations/${collab.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-950 hover:text-brand-blue transition-colors group-hover:translate-x-0.5"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollaborationsPreview
