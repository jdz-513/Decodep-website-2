import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const capabilities = [
  {
    id: 'ai',
    number: '01',
    title: 'Artificial Intelligence',
    subtitle: 'Applied Machine Intelligence & Smart Workflows',
    description:
      'Practical AI implementations and smart workflow solutions designed to solve real-world problems efficiently through automation, conversational interfaces, and algorithmic pipelines.',
    features: ['Smart Automation', 'Applied AI Integration', 'Workflow Intelligence'],
  },
  {
    id: 'web',
    number: '02',
    title: 'Web Engineering',
    subtitle: 'High-Performance Platforms & Modern Architecture',
    description:
      'High-performance, modern, and responsive web applications engineered with clean code, scalable server architecture, and intuitive user interfaces.',
    features: ['Responsive Platforms', 'Full-Stack Architecture', 'Performance Optimization'],
  },
  {
    id: 'app',
    number: '03',
    title: 'Application Development',
    subtitle: 'Cross-Platform Mobile Foundations',
    description:
      'Reliable mobile applications built for seamless usability, solid performance, and long-term scalability across iOS and Android platforms.',
    features: ['Modern UI/UX', 'Cross-Platform Apps', 'Scalable Mobile Foundation'],
  },
  {
    id: 'digital',
    number: '04',
    title: 'Digital Systems & Tech',
    subtitle: 'Scalable Software Support & Product Foundations',
    description:
      'End-to-end technology services, software support, and digital product foundations built for sustainable long-term business growth.',
    features: ['Technology Services', 'Software Support', 'Digital Product Strategy'],
  },
]

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] text-[#111827] border-b border-[#111827]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#111827]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-medium uppercase tracking-wider mb-2">
              <span>Engineering Catalog</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
              Core Capabilities
            </h2>
            <p className="font-serif text-sm text-[#4B5563] mt-1">Our primary technology engineering disciplines</p>
          </div>

          <Link
            to="/company"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#111827] hover:text-[#C59B27] transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#C59B27]" />
          </Link>
        </div>

        {/* Catalog List */}
        <div className="divide-y divide-[#111827]/08">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="py-7 sm:py-8 transition-colors hover:bg-white px-4 sm:px-6 rounded-xl border border-transparent hover:border-[#111827]/10 group shadow-none hover:shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Number & Title */}
                <div className="lg:col-span-5 flex items-start gap-4">
                  <span className="font-mono text-base font-bold text-[#C59B27] pt-0.5">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#111827] group-hover:text-[#164E87] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-[#6B7280] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description & Chips */}
                <div className="lg:col-span-6 space-y-2.5">
                  <p className="font-serif text-sm text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.features.map((feat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded text-xs font-mono text-[#374151] bg-[#FAF8F5] border border-[#111827]/10"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <div className="lg:col-span-1 flex justify-end">
                  <Link
                    to="/company"
                    className="w-9 h-9 rounded-full border border-[#111827]/15 flex items-center justify-center text-[#6B7280] group-hover:text-[#111827] group-hover:border-[#111827] transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CapabilitiesSection
