import React from 'react'
import { Target, Compass, Award } from 'lucide-react'
import { brandData, visionMissionValues, founderData } from '../data/officialData'

export const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111827] pt-24 pb-16">
      
      {/* 01 — HERO / IDENTITY */}
      <section className="border-b border-[#111827]/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-semibold uppercase tracking-wider font-mono">
            <span>Identity & Principles</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#111827] tracking-tight">
            About DECODEP
          </h1>

          <p className="font-serif text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            DECODEP is a technology venture dedicated to building practical digital solutions across Artificial Intelligence, Web Development, App Development, and emerging technologies.
          </p>
        </div>
      </section>

      {/* 02 — NARRATIVE & STORY */}
      <section className="border-b border-[#111827]/10 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#FAF8F5] p-6 sm:p-10 rounded-xl border border-[#111827]/10 space-y-4 text-[#4B5563] text-sm sm:text-base leading-relaxed">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27] block">
              Our Story & Purpose
            </span>

            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#111827]">
              Transforming Ideas Into Useful Solutions
            </h2>

            <p className="font-serif">
              We aim to transform ideas into useful solutions while creating an ecosystem where students, developers, and technology enthusiasts can learn, build, and collaborate through real-world technology challenges.
            </p>

            <p className="font-serif">
              Through technology services, innovation exploration, and community hackathons, DECODEP is building a disciplined foundation for future scalable digital products.
            </p>

            <div className="pt-4 border-t border-[#111827]/10 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8D39E] text-[#8F6B0A] font-mono font-bold">
                {brandData.tagline}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#111827]/10 text-[#111827] font-mono">
                {brandData.pillars.join(' • ')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — VISION, MISSION & VALUES */}
      <section className="border-b border-[#111827]/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Guiding Principles
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#111827] mt-1">
              Vision, Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="bg-white p-7 sm:p-8 rounded-xl border border-[#111827]/10 flex flex-col justify-between space-y-4 shadow-xs hover:border-[#C59B27]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#111827]/08">
                  <Compass className="w-5 h-5 text-[#C59B27]" />
                  <span className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-wider">Vision</span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-[#111827] mt-3">
                  Practical Ecosystem
                </h3>
                <p className="font-serif text-xs sm:text-sm text-[#4B5563] leading-relaxed mt-2">
                  {visionMissionValues.vision}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-7 sm:p-8 rounded-xl border border-[#111827]/10 flex flex-col justify-between space-y-4 shadow-xs hover:border-[#C59B27]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#111827]/08">
                  <Target className="w-5 h-5 text-[#C59B27]" />
                  <span className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-wider">Mission</span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-[#111827] mt-3">
                  Core Objectives
                </h3>
                <ul className="mt-3 space-y-2 text-xs font-serif text-[#4B5563]">
                  {visionMissionValues.mission.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C59B27] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white p-7 sm:p-8 rounded-xl border border-[#111827]/10 flex flex-col justify-between space-y-4 shadow-xs hover:border-[#C59B27]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#111827]/08">
                  <Award className="w-5 h-5 text-[#C59B27]" />
                  <span className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-wider">Values</span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-[#111827] mt-3">
                  Guiding Tenets
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {visionMissionValues.values.map((val, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#FAF8F5] border border-[#111827]/10 rounded-md text-xs font-mono text-[#111827] font-semibold"
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

      {/* 04 — LEADERSHIP & FOUNDER */}
      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Leadership
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#111827] mt-1">
              Founder & Architect
            </h2>
          </div>

          <div className="bg-[#FAF8F5] p-6 sm:p-10 rounded-xl border border-[#111827]/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
            <div className="md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-xl overflow-hidden border border-[#C59B27]/40 shadow-sm">
                <img
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-[#111827] mt-3">
                {founderData.name}
              </h3>
              <div className="text-xs font-mono text-[#6B7280] mt-0.5">
                {founderData.role} • {founderData.location}
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              <blockquote className="font-serif italic text-base sm:text-lg text-[#111827] leading-relaxed border-l-2 border-[#C59B27] pl-4">
                "{founderData.quote}"
              </blockquote>
              <p className="font-mono text-xs text-[#6B7280] pt-1">
                {founderData.closing}
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default About
