import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Layers, Smartphone, Sparkles, Terminal } from 'lucide-react'

const techPreviewItems = [
  {
    icon: Bot,
    title: 'Artificial Intelligence',
    description: 'Practical AI and smart workflow solutions designed to solve real-world problems.',
    color: 'from-blue-600 to-indigo-600',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    badge: 'Applied AI',
  },
  {
    icon: Layers,
    title: 'Web Development',
    description: 'High-performance, modern, and responsive web platforms engineered with clean code.',
    color: 'from-cyan-600 to-blue-600',
    iconColor: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    badge: 'Modern Web',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Cross-platform mobile applications built for seamless usability and performance.',
    color: 'from-amber-600 to-orange-600',
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    badge: 'Mobile Systems',
  },
  {
    icon: Sparkles,
    title: 'Emerging Technologies',
    description: 'Exploring modern technologies to turn innovative ideas into practical digital solutions.',
    color: 'from-purple-600 to-pink-600',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    badge: 'Future Tech',
  },
]

export const InnovationPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
              Technology Stack & Focus
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase">
              INNOVATION & TECHNOLOGY
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              DECODEP explores modern technologies to build smarter and practical digital solutions.
            </p>
          </div>

          <Link
            to="/innovation"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-dark transition-colors group flex-shrink-0"
          >
            <span>Explore Innovation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 4 Tech Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techPreviewItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-950 uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-brand-blue transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default InnovationPreview
