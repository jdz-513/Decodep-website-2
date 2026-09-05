import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Handshake, Calendar, MapPin, ArrowRight } from 'lucide-react'
import { collaborations as staticCollaborations, Collaboration } from '../data/collaborations'
import { getPublishedCollaborations } from '../services/collaborations'

export const Collaborations: React.FC = () => {
  const [collaborationsList, setCollaborationsList] = useState<Collaboration[]>(staticCollaborations)

  useEffect(() => {
    let isMounted = true

    getPublishedCollaborations()
      .then((publishedCollaborations) => {
        if (isMounted) setCollaborationsList(publishedCollaborations)
      })
      .catch(() => {
        if (isMounted) setCollaborationsList(staticCollaborations)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#10141D] pt-24 pb-16">
      {/* Hero */}
      <section className="border-b border-[#10141D]/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0D6] text-[#8F6B0A] text-xs font-semibold uppercase tracking-wider">
            <Handshake className="w-3.5 h-3.5" />
            <span>Partnerships & Alliances</span>
          </div>

          <h1 className="font-editorial-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#10141D] tracking-tight">
            DECODEP Collaborations
          </h1>

          <p className="text-base sm:text-lg text-[#556477] max-w-2xl mx-auto leading-relaxed">
            Collaborative initiatives, formal MoUs, and community partnerships aimed at advancing technical learning, joint hackathons, and developer engagement.
          </p>
        </div>
      </section>

      {/* Directory */}
      <section className="border-b border-[#10141D]/10 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-[#10141D]/10 gap-2">
            <h2 className="text-xl font-editorial-display font-bold uppercase text-[#10141D]">
              Active Partnerships
            </h2>
            <div className="text-xs text-[#718096]">
              {collaborationsList.length} Active {collaborationsList.length === 1 ? 'Agreement' : 'Agreements'}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborationsList.map((collab) => (
              <div
                key={collab.id}
                className="bg-[#FAF8F5] rounded-xl border border-[#10141D]/10 hover:border-[#C59B27] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {collab.posterImage && (
                    <div className="aspect-[16/9] w-full overflow-hidden bg-[#10141D] relative border-b border-[#10141D]/10">
                      <img
                        src={collab.posterImage}
                        alt={collab.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold text-white bg-black/75 px-2.5 py-1 rounded">
                          {collab.collaborationType}
                        </span>
                      </div>
                      {collab.status && (
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] font-bold text-white bg-[#164E87] px-2 py-0.5 rounded">
                            {collab.status}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-[#10141D] group-hover:text-[#164E87] transition-colors">
                        {collab.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#718096] mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>{collab.partyB.location} • {collab.partyB.representative}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#556477] leading-relaxed">
                      {collab.shortDescription}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {collab.scopes.slice(0, 3).map((scope, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-[#10141D] bg-white px-2.5 py-1 rounded border border-[#10141D]/10"
                        >
                          {scope}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#10141D]/08 flex items-center justify-between">
                    {collab.date ? (
                      <span className="text-xs text-[#718096] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>{collab.date}</span>
                      </span>
                    ) : (
                      <span />
                    )}

                    <Link
                      to={`/collaborations/${collab.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#10141D] hover:text-[#C59B27] transition-colors"
                    >
                      <span>MoU Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with us */}
      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-semibold uppercase tracking-wider font-mono">
            <span>Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial-display font-black uppercase text-[#111827]">
            Partner With DECODEP
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            We collaborate with technology communities, developer clubs, educational institutions, and organizations to jointly host hackathons, technical workshops, and innovation challenges.
          </p>
          <div className="pt-2">
            <Link
              to="/proposals"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider bg-[#111827] text-white hover:bg-[#C59B27] hover:text-[#0D1117] transition-all shadow-sm"
            >
              <span>Purpose Collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Collaborations
