import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Trophy, Users, AlertCircle, ArrowRight, Shield } from 'lucide-react'
import { currentInitiative } from '../data/officialData'

interface CurrentInitiativeProps {
  onOpenRegister?: () => void
}

export const CurrentInitiativeSection: React.FC<CurrentInitiativeProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>{currentInitiative.tag}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase">
              CURRENT INITIATIVE
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Active technical competition hosted by DECODEP Community.
            </p>
          </div>

          <Link
            to="/initiatives"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-950 hover:text-brand-blue transition-colors group flex-shrink-0"
          >
            <span>View Initiatives</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Compact Initiative Card with Event Visual */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Event Poster Visual */}
            <div className="lg:col-span-5 relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative shadow-lg">
                <img
                  src={currentInitiative.image}
                  alt={`${currentInitiative.title} Official Poster`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 font-mono">
                  <span className="bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                    {currentInitiative.title}
                  </span>
                  <span className="bg-amber-500/90 text-slate-950 font-bold px-2.5 py-1 rounded-md">
                    {currentInitiative.prize}
                  </span>
                </div>
              </div>
            </div>

            {/* Event Specifications */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold tracking-wider text-brand-gold uppercase">
                  {currentInitiative.entry}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-white mt-1">
                  {currentInitiative.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300">
                  {currentInitiative.description}
                </p>
              </div>

              {/* Factual Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2 text-brand-blue-electric mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold text-white">Date</span>
                  </div>
                  <span className="text-slate-300 font-mono">{currentInitiative.date}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2 text-brand-blue-electric mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold text-white">Duration</span>
                  </div>
                  <span className="text-slate-300 font-mono">{currentInitiative.duration}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2 text-brand-gold mb-1">
                    <Trophy className="w-4 h-4" />
                    <span className="font-semibold text-white">Prize Pool</span>
                  </div>
                  <span className="text-brand-gold font-bold font-mono">{currentInitiative.prize}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 sm:col-span-3">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Users className="w-4 h-4 text-brand-blue-electric" />
                    <span className="font-semibold text-white">Eligibility & Format</span>
                  </div>
                  <span className="text-slate-300">{currentInitiative.teamSize} • {currentInitiative.problemStatement}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenRegister}
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-brand-gold text-slate-950 hover:bg-amber-400 transition-all font-mono active:scale-98 text-center"
                >
                  Register for Free
                </button>
                <Link
                  to="/initiatives"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-slate-900 text-white border border-slate-700 hover:bg-slate-800 transition-colors font-mono text-center flex items-center justify-center gap-2"
                >
                  <span>Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurrentInitiativeSection
