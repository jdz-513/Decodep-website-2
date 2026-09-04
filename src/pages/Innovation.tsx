import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bot, Layers, Smartphone, Sparkles, ArrowRight, Cpu } from 'lucide-react'

const techAreas = [
  {
    id: 'ai',
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
    title: 'Web Development',
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
    <div className="pt-24 pb-20 overflow-hidden bg-[#07111F] text-white">
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07111F] border-b border-white/10 relative">
        <div className="absolute inset-0 tech-grid-bg opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1728] border border-white/10 text-xs font-mono tracking-wider text-[#1677FF] uppercase">
            <Cpu className="w-3.5 h-3.5 text-[#1677FF]" />
            <span>MODERN TECHNOLOGY STACK</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
            INNOVATION & TECHNOLOGY
          </h1>

          <p className="text-base sm:text-xl text-[#9AA8BA] max-w-3xl mx-auto leading-relaxed">
            DECODEP explores modern technologies to engineer practical digital solutions. We combine applied AI, web engineering, mobile development, and scalable systems to turn concepts into reality.
          </p>
        </div>
      </section>

      {/* Interactive Visual Explorer */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D1728] border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {techAreas.map((area, idx) => {
              const Icon = area.icon
              const isActive = activeTab === area.id
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setActiveTab(area.id)}
                  className={`p-5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#07111F] text-white border-[#1677FF] shadow-sm'
                      : 'bg-[#0D1728] text-[#9AA8BA] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#1677FF]' : 'text-[#64748B]'}`} />
                    <span className="text-[10px] font-mono text-[#64748B]">0{idx + 1}</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B]">FOCUS AREA</div>
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-tight text-white mt-0.5">{area.title}</div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Area Showcase */}
          <div className="bg-[#07111F] text-white rounded-2xl p-8 sm:p-12 border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0D1728] border border-white/10 flex items-center justify-center">
                    <CurrentIcon className="w-6 h-6 text-[#1677FF]" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white">
                      {currentArea.title}
                    </h2>
                    <p className="text-xs text-[#F5B72C] font-mono uppercase">
                      {currentArea.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#9AA8BA] leading-relaxed pt-2">
                  {currentArea.description}
                </p>

                <div className="pt-4">
                  <Link
                    to="/company"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1677FF] hover:text-white transition-colors"
                  >
                    <span>VIEW ENGINEERING PROCESS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                {currentArea.pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#0D1728] border border-white/10"
                  >
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
                      <span>{pillar.name}</span>
                    </div>
                    <p className="text-xs text-[#9AA8BA] mt-1 pl-3.5">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Technology Philosophy */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07111F]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-wider text-[#1677FF] uppercase bg-[#0D1728] px-3.5 py-1 rounded border border-white/10">
            ENGINEERING PHILOSOPHY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
            PRACTICALITY OVER HYPE
          </h2>
          <p className="text-sm sm:text-base text-[#9AA8BA] leading-relaxed max-w-2xl mx-auto">
            We believe that technology delivers value only when it solves genuine problems with clarity, resilience, and maintainability. Every system we architect starts with understanding the problem and choosing the right tool for sustainable long-term impact.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Innovation
