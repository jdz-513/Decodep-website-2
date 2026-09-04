import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, ArrowUpRight } from 'lucide-react'
import { brandData } from '../data/officialData'

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07111F] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1728] border border-white/10 text-xs font-mono tracking-wider text-[#1677FF] uppercase">
          <span>06 // INITIATE CONVERSATION</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          LET'S BUILD WHAT'S NEXT.
        </h2>

        <p className="text-base sm:text-lg text-[#9AA8BA] max-w-xl mx-auto leading-relaxed">
          Have an idea, a technical business requirement, or an opportunity to collaborate? Connect directly with DECODEP.
        </p>

        {/* Contact Links & CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#07111F] hover:bg-[#1677FF] hover:text-white transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>START CONVERSATION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${brandData.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-xs font-mono font-medium text-white bg-[#0D1728] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#1677FF]" />
            <span>{brandData.email}</span>
          </a>

          <a
            href={`tel:${brandData.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-xs font-mono font-medium text-white bg-[#0D1728] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#F5B72C]" />
            <span>{brandData.phone}</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default FinalCTA
