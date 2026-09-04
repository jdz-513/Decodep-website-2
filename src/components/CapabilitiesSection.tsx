import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { whatWeDoCompany } from '../data/officialData'

const capabilities = [
  {
    id: 'ai',
    number: '01',
    title: 'ARTIFICIAL INTELLIGENCE',
    subtitle: 'Applied Machine Intelligence & Smart Workflows',
    description:
      'Practical AI implementations and smart workflow solutions designed to solve real-world problems efficiently through automation, conversational interfaces, and algorithmic pipelines.',
    features: ['Intelligent Automation', 'Applied AI Integration', 'Workflow Intelligence'],
  },
  {
    id: 'web',
    number: '02',
    title: 'WEB ENGINEERING',
    subtitle: 'High-Performance Platforms & Modern Architecture',
    description:
      'High-performance, modern, and responsive web applications engineered with clean code, scalable server architecture, and intuitive user interfaces.',
    features: ['Responsive Platforms', 'Full-Stack Architecture', 'Performance Optimization'],
  },
  {
    id: 'app',
    number: '03',
    title: 'APPLICATION DEVELOPMENT',
    subtitle: 'Cross-Platform Mobile Foundations',
    description:
      'Reliable mobile applications built for seamless usability, solid performance, and long-term scalability across iOS and Android platforms.',
    features: ['Modern UI/UX', 'Cross-Platform Apps', 'Scalable Mobile Foundation'],
  },
  {
    id: 'digital',
    number: '04',
    title: 'DIGITAL SYSTEMS',
    subtitle: 'Scalable Software Support & Product Strategy',
    description:
      'End-to-end technology services, software support, and digital product foundations built for sustainable long-term business growth.',
    features: ['Technology Services', 'Software Support', 'Digital Product Strategy'],
  },
]

export const CapabilitiesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07111F] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1728] border border-white/10 text-xs font-mono tracking-wider text-[#1677FF] uppercase mb-4">
              <span>02 // CAPABILITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              CORE CAPABILITIES
            </h2>
          </div>

          <Link
            to="/company"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1677FF] hover:text-white transition-colors group"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Large Numbered Horizontal Rows */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {capabilities.map((item, idx) => {
            const isHovered = hoveredIdx === idx

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group py-8 sm:py-10 transition-all duration-300 relative cursor-pointer ${
                  isHovered ? 'bg-[#0D1728]/80 px-4 sm:px-6 rounded-lg' : 'px-0'
                }`}
              >
                {/* Left Blue Accent Line on Hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-[#1677FF] transition-all duration-300 rounded-l ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Number & Title */}
                  <div className="lg:col-span-6 flex items-baseline gap-6">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#1677FF] tracking-wider">
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight transition-colors duration-200 ${
                          isHovered ? 'text-white' : 'text-white/90'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono tracking-wider text-[#64748B] uppercase mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description & Features */}
                  <div className="lg:col-span-5 space-y-3">
                    <p className="text-xs sm:text-sm text-[#9AA8BA] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.features.map((feat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono text-white/80 bg-white/[0.04] border border-white/5"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div
                      className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#1677FF] border-[#1677FF] text-white scale-105'
                          : 'text-[#64748B] group-hover:text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default CapabilitiesSection
