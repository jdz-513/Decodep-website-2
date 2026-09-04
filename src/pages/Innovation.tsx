import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bot, Layers, Smartphone, Sparkles, ArrowRight, Cpu } from 'lucide-react'

const techAreas = [
  {
    id: 'ai',
    number: '01',
    title: 'Artificial Intelligence',
    subtitle: 'Applied Machine Intelligence & Smart Workflows',
    icon: Bot,
    description:
      'Exploring and building practical AI solutions that solve real-world problems. We focus on integrating intelligent automation, conversational interfaces, and algorithmic workflows into modern digital products.',
    pillars: [
      { name: 'Intelligent Automation', desc: 'Streamlining repetitive processes with smart agents and workflows.' },
      { name: 'Applied AI Integration', desc: 'Embedding neural APIs, LLMs, and vision models into product pipelines.' },
      { name: 'Data & Model Logic', desc: 'Designing structured workflows that transform raw data into useful insights.' },
    ],
  },
  {
    id: 'web',
    number: '02',
    title: 'Web Engineering',
    subtitle: 'High-Performance Platforms & Modern Architecture',
    icon: Layers,
    description:
      'Engineering fast, accessible, and scalable web applications. We utilize modern component systems, optimized rendering pipelines, and clean API design to deliver seamless digital experiences.',
    pillars: [
      { name: 'Responsive Platforms', desc: 'Cross-device fluid interfaces built with modern layout engines.' },
      { name: 'Full-Stack Architecture', desc: 'Robust client-server integration with scalable API services.' },
      { name: 'Performance Optimization', desc: 'Lightning-fast load times, lightweight bundles, and smooth interactions.' },
    ],
  },
  {
    id: 'app',
    number: '03',
    title: 'App Development',
    subtitle: 'Intuitive Cross-Platform Mobile Applications',
    icon: Smartphone,
    description:
      'Building solid, intuitive mobile applications that run smoothly across iOS and Android. Our focus is on ergonomic UI/UX, responsive state management, and reliable backend synchronization.',
    pillars: [
      { name: 'Modern UI/UX', desc: 'Clean interface hierarchy designed for effortless user engagement.' },
      { name: 'Cross-Platform Core', desc: 'Unified codebase architecture delivering native-grade responsiveness.' },
      { name: 'Scalable Foundation', desc: 'Maintainable structure prepared for iterative feature rollouts.' },
    ],
  },
  {
    id: 'emerging',
    number: '04',
    title: 'Digital Systems & Tech',
    subtitle: 'Future Digital Products & Scalable Solutions',
    icon: Sparkles,
    description:
      'Constantly evaluating modern frameworks, cloud architectures, and developer tooling to turn creative concepts into functional, scalable software.',
    pillars: [
      { name: 'Technology Services', desc: 'Practical consulting and technical execution for modern businesses.' },
      { name: 'Software Support', desc: 'Reliable engineering support and infrastructure maintenance.' },
      { name: 'Product Foundations', desc: 'Laying the technical groundwork for future proprietary digital products.' },
    ],
  },
]

export const Innovation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(techAreas[0].id)
  const currentArea = techAreas.find((a) => a.id === activeTab) || techAreas[0]
  const CurrentIcon = currentArea.icon

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#10141D] pt-24 pb-16">
      {/* Hero */}
      <section className="border-b border-[#10141D]/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Research & Engineering</span>
          </div>

          <h1 className="font-editorial-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#10141D] tracking-tight">
            Innovation & Technology
          </h1>

          <p className="text-base sm:text-lg text-[#556477] max-w-2xl mx-auto leading-relaxed">
            DECODEP explores modern technologies to engineer practical digital solutions. We combine applied AI, web engineering, mobile development, and scalable systems to turn ideas into reliable software.
          </p>
        </div>
      </section>

      {/* Focus Areas Explorer */}
      <section className="border-b border-[#10141D]/10 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B27]">
              Focus Areas
            </span>
            <h2 className="font-editorial-display text-2xl sm:text-3xl font-black uppercase text-[#10141D] mt-1">
              Explore Our Core Capabilities
            </h2>
          </div>

          {/* Tab Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {techAreas.map((area) => {
              const Icon = area.icon
              const isActive = activeTab === area.id

              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setActiveTab(area.id)}
                  className={`p-5 rounded-lg border text-left transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#10141D] text-white border-[#10141D] shadow-md'
                      : 'bg-[#FAF8F5] text-[#4A5568] border-[#10141D]/10 hover:border-[#C59B27]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#C59B27]' : 'text-[#667588]'}`} />
                    <span className="text-xs font-mono font-bold text-[#C59B27]">{area.number}</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#8EA0B4]">
                      Area
                    </div>
                    <div className={`text-sm font-semibold mt-0.5 ${isActive ? 'text-white' : 'text-[#10141D]'}`}>
                      {area.title}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Area Details */}
          <div className="bg-[#FAF8F5] p-6 sm:p-10 rounded-xl border border-[#10141D]/10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#C59B27]/30 flex items-center justify-center">
                    <CurrentIcon className="w-6 h-6 text-[#C59B27]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-[#10141D]">
                      {currentArea.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#164E87] uppercase tracking-wide">
                      {currentArea.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#556477] leading-relaxed pt-1">
                  {currentArea.description}
                </p>

                <div className="pt-2">
                  <Link
                    to="/company"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#10141D] hover:text-[#C59B27] transition-colors"
                  >
                    <span>View Engineering Services</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                {currentArea.pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-white border border-[#10141D]/10"
                  >
                    <div className="text-xs font-bold text-[#10141D] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                      <span>{pillar.name}</span>
                    </div>
                    <p className="text-xs text-[#556477] mt-1 pl-3.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="font-editorial-display text-3xl sm:text-4xl font-black uppercase text-[#10141D]">
            Practicality Over Hype
          </h2>
          <p className="text-sm sm:text-base text-[#556477] leading-relaxed">
            We believe that technology delivers lasting value only when it solves genuine problems with clarity, resilience, and maintainability. Every system we architect starts with understanding the problem and choosing the right tool for sustainable long-term impact.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Innovation
