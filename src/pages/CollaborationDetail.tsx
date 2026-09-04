import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Handshake, Calendar, MapPin, CheckCircle2, ShieldCheck, Mail, Phone, Users, ExternalLink } from 'lucide-react'
import { collaborationsList } from '../data/officialData'

export const CollaborationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const collab = collaborationsList.find((c) => c.id === id)

  if (!collab) {
    return <Navigate to="/collaborations" replace />
  }

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Top Breadcrumb / Back Link */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/collaborations"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-brand-blue transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Collaborations</span>
          </Link>
        </div>
      </section>

      {/* Main Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-brand-blue border border-blue-200 uppercase">
              <Handshake className="w-3.5 h-3.5" />
              <span>{collab.collaborationType}</span>
            </span>
            {collab.status && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{collab.status}</span>
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 uppercase">
            {collab.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
            {collab.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-slate-500">
            {collab.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-blue" />
                <span>Agreement Date: {collab.date}</span>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span>{collab.partyA.location} & {collab.partyB.location}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Detailed Agreement Overview & Poster Visual */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Visual Poster */}
            {collab.posterImage && (
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl sticky top-28">
                  <img
                    src={collab.posterImage}
                    alt={collab.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-950 text-white text-xs font-mono flex items-center justify-between border-t border-slate-800">
                    <span>{collab.partnerName}</span>
                    <span className="text-brand-gold font-bold">Official MoU</span>
                  </div>
                </div>
              </div>
            )}

            {/* Factual MoU Clauses & Party Breakdown */}
            <div className={`space-y-8 ${collab.posterImage ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
              {/* Purpose */}
              {collab.purpose && (
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-3">
                  <span className="text-xs font-mono font-semibold tracking-wider text-brand-blue uppercase">
                    01 / Agreement Purpose
                  </span>
                  <h2 className="text-xl font-bold font-display uppercase text-slate-950">
                    Purpose & Scope
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {collab.purpose}
                  </p>
                </div>
              )}

              {/* Authorized Parties */}
              <div className="space-y-4">
                <span className="text-xs font-mono font-semibold tracking-wider text-brand-blue uppercase">
                  02 / Authorized Representatives
                </span>
                <h2 className="text-xl font-bold font-display uppercase text-slate-950">
                  Participating Parties
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Party A */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div className="text-xs font-mono font-semibold text-brand-blue uppercase bg-blue-50 px-2.5 py-1 rounded inline-block">
                      Party A
                    </div>
                    <div className="font-bold text-slate-950 text-base">{collab.partyA.name}</div>
                    <div className="text-xs text-slate-500">{collab.partyA.entity}</div>
                    <div className="pt-2 border-t border-slate-100 text-xs space-y-1 text-slate-600">
                      <div><strong className="text-slate-900">Representative:</strong> {collab.partyA.representative}</div>
                      <div><strong className="text-slate-900">Designation:</strong> {collab.partyA.designation}</div>
                      <div><strong className="text-slate-900">Location:</strong> {collab.partyA.location}</div>
                      {collab.partyA.contact && (
                        <div><strong className="text-slate-900">Official Contact:</strong> {collab.partyA.contact}</div>
                      )}
                    </div>
                  </div>

                  {/* Party B */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div className="text-xs font-mono font-semibold text-amber-700 uppercase bg-amber-50 px-2.5 py-1 rounded inline-block">
                      Party B
                    </div>
                    <div className="font-bold text-slate-950 text-base">{collab.partyB.name}</div>
                    <div className="text-xs text-slate-500">{collab.partyB.entity}</div>
                    <div className="pt-2 border-t border-slate-100 text-xs space-y-1 text-slate-600">
                      <div><strong className="text-slate-900">Representative:</strong> {collab.partyB.representative}</div>
                      <div><strong className="text-slate-900">Designation:</strong> {collab.partyB.designation}</div>
                      <div><strong className="text-slate-900">Location:</strong> {collab.partyB.location}</div>
                      {collab.partyB.contact && (
                        <div><strong className="text-slate-900">Official Contact:</strong> {collab.partyB.contact}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scopes of Collaboration */}
              <div className="space-y-4">
                <span className="text-xs font-mono font-semibold tracking-wider text-brand-blue uppercase">
                  03 / Collaborative Scope
                </span>
                <h2 className="text-xl font-bold font-display uppercase text-slate-950">
                  Agreed Scope of Activities
                </h2>

                <div className="space-y-2.5">
                  {collab.scopes.map((scope, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Initial Joint Initiative */}
              {collab.initialInitiative && (
                <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-slate-800 space-y-2">
                  <div className="font-bold text-amber-950 uppercase font-mono tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-700" />
                    <span>Initial Major Joint Initiative</span>
                  </div>
                  <p className="leading-relaxed">
                    {collab.initialInitiative}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CollaborationDetail
