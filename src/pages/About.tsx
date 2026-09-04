import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ShieldCheck, ArrowRight, Target, Compass, Award } from 'lucide-react'
import { brandData, visionMissionValues, founderData } from '../data/officialData'

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 overflow-hidden bg-[#07111F] text-white">
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07111F] border-b border-white/10 relative">
        <div className="absolute inset-0 tech-grid-bg opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1728] border border-white/10 text-xs font-mono tracking-wider text-[#1677FF] uppercase">
            <span>IDENTITY • PRINCIPLES • VISION</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
            ABOUT DECODEP
          </h1>

          <p className="text-base sm:text-xl text-[#9AA8BA] max-w-3xl mx-auto leading-relaxed">
            DECODEP is a technology-focused venture dedicated to building practical digital solutions across Artificial Intelligence, Web Development, App Development, and emerging technologies.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D1728] border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-[#07111F] rounded-2xl p-8 sm:p-12 border border-white/10 space-y-6 text-[#9AA8BA] text-sm sm:text-base leading-relaxed">
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
              TRANSFORMING IDEAS INTO USEFUL SOLUTIONS
            </h2>
            <p>
              We aim to transform ideas into useful solutions while creating an ecosystem where students, developers, and technology enthusiasts can learn, build, and collaborate.
            </p>
            <p>
              Through technology services, innovation, and community initiatives, DECODEP is building its foundation for future digital products and scalable solutions.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-3.5 py-1 rounded bg-[#0D1728] border border-white/10 text-xs font-mono text-[#F5B72C]">
                {brandData.tagline}
              </span>
              <span className="px-3.5 py-1 rounded bg-[#0D1728] border border-white/10 text-xs font-mono text-[#9AA8BA]">
                {brandData.registration.status} • {brandData.registration.type}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07111F] border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="mb-16">
            <span className="text-xs font-mono font-bold tracking-wider text-[#1677FF] uppercase">
              01 // CORE DIRECTION
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black uppercase text-white">
              VISION, MISSION & VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="bg-[#0D1728] p-8 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#07111F] text-[#1677FF] border border-white/10 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#1677FF] font-semibold uppercase">
                  Our Vision
                </span>
                <h3 className="text-xl font-bold font-display uppercase text-white mt-1">
                  Practical Ecosystem
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-[#9AA8BA] leading-relaxed">
                  {visionMissionValues.vision}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-[#0D1728] p-8 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#07111F] text-[#F5B72C] border border-white/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#F5B72C] font-semibold uppercase">
                  Our Mission
                </span>
                <h3 className="text-xl font-bold font-display uppercase text-white mt-1">
                  Core Objectives
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#9AA8BA]">
                  {visionMissionValues.mission.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5B72C] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Values */}
            <div className="bg-[#0D1728] p-8 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#07111F] text-[#1677FF] border border-white/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#1677FF] font-semibold uppercase">
                  Our Values
                </span>
                <h3 className="text-xl font-bold font-display uppercase text-white mt-1">
                  Guiding Tenets
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {visionMissionValues.values.map((val, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded bg-[#07111F] border border-white/10 text-xs font-mono text-white/90"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D1728]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#07111F] rounded-2xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden bg-[#0D1728] flex-shrink-0 border border-white/10">
              <img
                src={founderData.image}
                alt={founderData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-[#1677FF] uppercase">
                  FOUNDER
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase text-white mt-0.5">
                  {founderData.name}
                </h2>
                <div className="text-xs font-mono text-[#64748B] mt-0.5">
                  {founderData.role} • {founderData.location}
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-[#9AA8BA] italic leading-relaxed border-l-2 border-[#1677FF] pl-4">
                "{founderData.quote}"
              </blockquote>

              <p className="text-xs text-[#64748B] font-mono">
                {founderData.closing}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
