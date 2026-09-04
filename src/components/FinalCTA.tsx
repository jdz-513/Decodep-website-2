import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { brandData } from '../data/officialData'

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#111827] text-white text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
          Let's Build What's Next.
        </h2>

        <p className="font-serif text-base sm:text-lg text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
          Have an idea, project requirement, or partnership in mind? Connect directly with the DECODEP team.
        </p>

        {/* Contact Links & CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-md font-mono text-xs font-bold uppercase tracking-wider bg-[#C59B27] text-[#0D1117] hover:bg-[#D4AF37] transition-all shadow-sm active:scale-95"
          >
            <span>Start Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${brandData.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-mono text-xs font-medium text-white bg-[#1F2937] border border-white/10 hover:border-[#C59B27] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#C59B27]" />
            <span>{brandData.email}</span>
          </a>

          <a
            href={`tel:${brandData.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-mono text-xs font-medium text-white bg-[#1F2937] border border-white/10 hover:border-[#C59B27] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C59B27]" />
            <span>{brandData.phone}</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default FinalCTA
