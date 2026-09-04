import React from 'react'
import { Link } from 'react-router-dom'
import { Handshake, Calendar, MapPin, ArrowRight, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react'
import { collaborationsList } from '../data/officialData'

export const Collaborations: React.FC = () => {
  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-semibold uppercase tracking-wider">
            <Handshake className="w-3.5 h-3.5 text-brand-blue" />
            <span>Official Community & Industry Partnerships</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 uppercase">
            DECODEP COLLABORATIONS
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Collaborative initiatives, formal MoUs, and community partnerships aimed at advancing technical learning, joint hackathons, and developer engagement.
          </p>
        </div>
      </section>

      {/* Collaborations Directory Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <div className="text-xs font-mono text-slate-500 uppercase">
              Showing {collaborationsList.length} Active {collaborationsList.length === 1 ? 'Collaboration' : 'Collaborations'}
            </div>
            <div className="text-xs font-mono text-brand-blue uppercase bg-blue-50 px-2.5 py-1 rounded">
              Verified Framework
            </div>
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborationsList.map((collab) => (
              <div
                key={collab.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Header / Poster */}
                  {collab.posterImage && (
                    <div className="aspect-[16/9] w-full overflow-hidden bg-slate-950 relative border-b border-slate-100">
                      <img
                        src={collab.posterImage}
                        alt={collab.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-mono font-semibold text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                          {collab.collaborationType}
                        </span>
                      </div>
                      {collab.status && (
                        <div className="absolute top-3 right-3">
                          <span className="text-[11px] font-mono font-medium text-emerald-300 bg-emerald-950/80 backdrop-blur-xs px-2 py-0.5 rounded-md border border-emerald-500/30">
                            {collab.status}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h2 className="text-xl font-bold font-display uppercase tracking-tight text-slate-950 group-hover:text-brand-blue transition-colors">
                        {collab.title}
                      </h2>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{collab.partyB.location} • {collab.partyB.representative}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {collab.shortDescription}
                    </p>

                    {/* Factual Scope Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {collab.scopes.slice(0, 3).map((scope, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                        >
                          {scope}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
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
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-950 hover:text-brand-blue transition-colors font-mono"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalable Future Collaborations Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-blue uppercase bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
            Open for Alliances
          </span>
          <h3 className="text-2xl font-bold font-display uppercase text-slate-950">
            Interested in Partnering with DECODEP?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            We collaborate with technology communities, developer ecosystems, educational institutions, and organizations to jointly host hackathons, technical workshops, and innovation challenges.
          </p>
          <div className="pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-brand-dark text-white hover:bg-brand-blue transition-colors shadow-sm"
            >
              <span>Propose Collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collaborations
