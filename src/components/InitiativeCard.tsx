import React from 'react';
import { Calendar, Clock, Trophy, Users, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import type { InitiativeItem } from '../types';

interface InitiativeCardProps {
  initiative: InitiativeItem;
  onRegister: (item: InitiativeItem) => void;
  featured?: boolean;
}

export const InitiativeCard: React.FC<InitiativeCardProps> = ({
  initiative,
  onRegister,
  featured = false,
}) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        featured
          ? 'bg-gradient-to-b from-decodep-midnight via-decodep-navy to-decodep-midnight border-2 border-decodep-gold/50 shadow-glow-gold/40'
          : 'glass-panel glass-panel-hover'
      }`}
    >
      {/* Top Banner Ribbon */}
      <div className="px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider ${
              featured
                ? 'bg-decodep-gold/20 text-decodep-gold border border-decodep-gold/40'
                : 'bg-decodep-blue/20 text-decodep-blue-light border border-decodep-blue/30'
            }`}
          >
            {(initiative.category || initiative.tag || 'Initiative').toUpperCase()}
          </span>
          {featured && (
            <span className="flex items-center gap-1 text-xs font-mono font-semibold text-decodep-gold animate-pulse">
              <Sparkles className="w-3.5 h-3.5" /> FLAGSHIP INITIATIVE
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            {initiative.fee || initiative.entry || 'Free Registration'}
          </span>
          <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80">
            {initiative.format || 'Online'}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {initiative.title}
          </h3>
          {initiative.tagline && (
            <p className="text-sm font-medium text-decodep-blue-light mt-1">
              {initiative.tagline}
            </p>
          )}
          <p className="text-sm text-decodep-text-secondary mt-3 leading-relaxed">
            {initiative.description}
          </p>
        </div>

        {/* Metric Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-decodep-midnight/90 border border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-decodep-blue/20 text-decodep-blue-light">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Date</div>
              <div className="text-xs font-bold text-white">{initiative.date}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-decodep-blue/20 text-decodep-blue-light">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Duration</div>
              <div className="text-xs font-bold text-white">{initiative.duration}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
            <div className="p-2 rounded-lg bg-decodep-gold/20 text-decodep-gold">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Prize Pool</div>
              <div className="text-xs font-bold text-decodep-gold">{initiative.prizePool || initiative.prize || 'Recognition'}</div>
            </div>
          </div>
        </div>

        {/* Highlights List */}
        {initiative.highlights && initiative.highlights.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Initiative Highlights
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-decodep-text-secondary">
              {initiative.highlights.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-decodep-blue-light shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Team and Action */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Users className="w-4 h-4 text-decodep-blue-light" />
            <span>Format: <strong className="text-white">{initiative.teamSize}</strong></span>
          </div>

          <button
            onClick={() => onRegister(initiative)}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 group ${
              featured
                ? 'bg-gradient-to-r from-decodep-gold to-yellow-400 text-decodep-navy hover:from-yellow-300 hover:to-decodep-gold shadow-glow-gold'
                : 'bg-decodep-blue hover:bg-decodep-blue-light text-white shadow-glow-blue'
            }`}
          >
            <span>Register For Free</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
