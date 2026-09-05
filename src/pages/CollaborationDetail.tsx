import React, { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  Handshake,
  Calendar,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { collaborations as staticCollaborations, Collaboration } from '../data/collaborations'
import { getCollaborationById } from '../services/collaborations'

export const CollaborationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const staticMatch = staticCollaborations.find(
    (collaboration) => collaboration.id === id || collaboration.link === `/collaborations/${id}`
  )
  const [collab, setCollab] = useState<Collaboration | null>(staticMatch || null)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    let isMounted = true

    getCollaborationById(id || '')
      .then((publishedCollaboration) => {
        if (isMounted) {
          setCollab(publishedCollaboration)
          setHasLoaded(true)
        }
      })
      .catch(() => {
        if (isMounted) {
          setCollab(staticMatch || null)
          setHasLoaded(true)
        }
      })

    return () => {
      isMounted = false
    }
  }, [id])

  if (!collab && !hasLoaded) return null

  if (!collab) {
    return <Navigate to="/collaborations" replace />
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#10141D] pt-24 pb-20">
      {/* Top Breadcrumb Link */}
      <section className="py-4 px-6 sm:px-10 lg:px-16 bg-white border-b border-[#10141D]/10">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/collaborations"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#556477] hover:text-[#C59B27] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Collaborations</span>
          </Link>
        </div>
      </section>

      {/* Main MoU Header */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-b border-[#10141D]/10">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-semibold uppercase">
              <Handshake className="w-3.5 h-3.5" />
              <span>{collab.collaborationType}</span>
            </div>
            {collab.status && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{collab.status}</span>
              </span>
            )}
          </div>

          <h1 className="font-editorial-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#10141D] uppercase">
            {collab.title}
          </h1>

          <p className="text-base sm:text-lg text-[#556477] leading-relaxed max-w-3xl">
            {collab.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#718096]">
            {collab.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C59B27]" />
                <span>MoU Signed: {collab.date}</span>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C59B27]" />
              <span>{collab.partyA.location} & {collab.partyB.location}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Detailed Agreement Overview & Poster Visual */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 bg-white border-b border-[#10141D]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Poster Column */}
            {collab.posterImage && (
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-xl overflow-hidden bg-[#10141D] border border-[#C59B27]/30 shadow-md sticky top-28">
                  <img
                    src={collab.posterImage}
                    alt={collab.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3.5 bg-[#10141D] text-white text-xs flex items-center justify-between border-t border-white/10">
                    <span>{collab.partnerName}</span>
                    <span className="text-[#C59B27] font-semibold">Official MoU Document</span>
                  </div>
                </div>
              </div>
            )}

            {/* MoU Clauses */}
            <div className={`space-y-6 ${collab.posterImage ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
              {/* Purpose */}
              {collab.purpose && (
                <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#10141D]/10 space-y-2">
                  <h2 className="text-lg font-bold uppercase text-[#10141D]">
                    Purpose & Scope
                  </h2>
                  <p className="text-sm text-[#556477] leading-relaxed">
                    {collab.purpose}
                  </p>
                </div>
              )}

              {/* Participating Parties */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold uppercase text-[#10141D]">
                  Participating Parties
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Party A */}
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#10141D]/10 space-y-2">
                    <div className="text-[10px] font-bold text-[#164E87] uppercase bg-[#EBF3FA] px-2.5 py-1 rounded inline-block">
                      Party A
                    </div>
                    <div className="font-bold text-[#10141D] text-base">{collab.partyA.name}</div>
                    <div className="text-xs text-[#718096]">{collab.partyA.entity}</div>
                    <div className="pt-2 border-t border-[#10141D]/08 text-xs space-y-1 text-[#556477]">
                      <div><strong>Representative:</strong> {collab.partyA.representative}</div>
                      <div><strong>Designation:</strong> {collab.partyA.designation}</div>
                      <div><strong>Location:</strong> {collab.partyA.location}</div>
                      {collab.partyA.contact && (
                        <div><strong>Contact:</strong> {collab.partyA.contact}</div>
                      )}
                    </div>
                  </div>

                  {/* Party B */}
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#10141D]/10 space-y-2">
                    <div className="text-[10px] font-bold text-[#8F6B0A] uppercase bg-[#FAF0D6] px-2.5 py-1 rounded inline-block">
                      Party B
                    </div>
                    <div className="font-bold text-[#10141D] text-base">{collab.partyB.name}</div>
                    <div className="text-xs text-[#718096]">{collab.partyB.entity}</div>
                    <div className="pt-2 border-t border-[#10141D]/08 text-xs space-y-1 text-[#556477]">
                      <div><strong>Representative:</strong> {collab.partyB.representative}</div>
                      <div><strong>Designation:</strong> {collab.partyB.designation}</div>
                      <div><strong>Location:</strong> {collab.partyB.location}</div>
                      {collab.partyB.contact && (
                        <div><strong>Contact:</strong> {collab.partyB.contact}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scopes of Collaboration */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold uppercase text-[#10141D]">
                  Agreed Scope of Activities
                </h2>

                <div className="space-y-2">
                  {collab.scopes.map((scope, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#10141D]/10 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                      <span className="text-xs sm:text-sm text-[#2A3442]">{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Initial Major Initiative */}
              {collab.initialInitiative && (
                <div className="p-5 rounded-xl bg-[#FAF2DD] border border-[#E8D39E] text-xs sm:text-sm text-[#2A3442] space-y-1.5">
                  <div className="font-bold text-[#10141D] uppercase text-xs flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C59B27]" />
                    <span>Initial Major Joint Initiative</span>
                  </div>
                  <p className="leading-relaxed text-[#4A5568]">
                    {collab.initialInitiative}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/proposals"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#111827] hover:bg-[#C59B27] hover:text-[#0D1117] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Propose Collaboration</span>
                </Link>
                <Link
                  to="/collaborations"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-[#F2EFE8] text-[#111827] font-mono text-xs font-bold uppercase tracking-wider border border-[#111827]/15 transition-colors"
                >
                  <span>All Collaborations</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CollaborationDetail
