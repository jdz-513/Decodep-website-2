import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
  BookOpen,
  Hammer,
  Users,
  TrendingUp,
  ShieldCheck,
  LucideIcon,
} from 'lucide-react'

interface FloatingNode {
  id: string
  label: string
  sublabel: string
  icon: LucideIcon
}

const companyNodes: FloatingNode[] = [
  {
    id: 'ai',
    label: 'AI',
    sublabel: 'Applied Intelligence',
    icon: Cpu,
  },
  {
    id: 'web',
    label: 'Web',
    sublabel: 'Modern Platforms',
    icon: Globe,
  },
  {
    id: 'app',
    label: 'App',
    sublabel: 'Cross-Platform',
    icon: Smartphone,
  },
  {
    id: 'digital',
    label: 'Digital Solutions',
    sublabel: 'Scalable Systems',
    icon: Sparkles,
  },
]

const communityNodes: FloatingNode[] = [
  {
    id: 'learn',
    label: 'Learn',
    sublabel: 'Workshops & Talks',
    icon: BookOpen,
  },
  {
    id: 'build',
    label: 'Build',
    sublabel: 'Real Projects',
    icon: Hammer,
  },
  {
    id: 'collaborate',
    label: 'Collaborate',
    sublabel: 'Peer Network',
    icon: Users,
  },
  {
    id: 'grow',
    label: 'Grow',
    sublabel: 'Skills & Journey',
    icon: TrendingUp,
  },
]

export const CompanyCommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const [isInView, setIsInView] = useState(false)

  const [activeSide, setActiveSide] = useState<
    'company' | 'community' | 'center' | null
  >(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.15,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="brand-ecosystem-architecture"
      className="relative overflow-hidden border-y border-[#E8ECF2] bg-[#FAFBFC] px-4 py-20 text-[#0A1128] sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Technical Grid */}
        <div
          className="absolute inset-0 opacity-[0.38]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(10,17,40,0.045) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(10,17,40,0.045) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Blue Ambient Glow */}
        <div className="absolute left-[20%] top-[20%] h-72 w-72 rounded-full bg-[#1677FF]/[0.035] blur-3xl" />

        {/* Gold Ambient Glow */}
        <div className="absolute right-[15%] bottom-[15%] h-72 w-72 rounded-full bg-[#F5B72C]/[0.035] blur-3xl" />

        {/* Decorative Rings */}
        <div className="absolute left-1/2 top-[48%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A1128]/[0.035]" />

        <div className="absolute left-1/2 top-[48%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1677FF]/[0.05]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className={`mx-auto mb-14 max-w-3xl text-center transition-all duration-1000 sm:mb-16 ${
            isInView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-3.5 py-1.5 shadow-[0_4px_15px_rgba(10,17,40,0.04)]">

            <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#617084]">
              02 / BRAND ARCHITECTURE
            </span>

          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-[#0A1128] sm:text-4xl md:text-5xl lg:text-6xl">
            ONE BRAND.
            <br />

            <span className="text-[#1677FF]">
              TWO DIRECTIONS.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xs font-mono uppercase tracking-[0.13em] leading-6 text-[#7A8797] sm:text-sm">
            TECHNOLOGY TO BUILD.
            <span className="mx-2 text-[#F5B72C]">•</span>
            COMMUNITY TO GROW.
          </p>

        </div>

        {/* =====================================================
            DESKTOP ARCHITECTURE
        ====================================================== */}

        <div className="relative hidden min-h-[570px] lg:block">

          {/* =================================================
              CONNECTION LINES
          ================================================== */}

          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 1200 570"
            preserveAspectRatio="none"
          >
            {/* Center → Company */}
            <path
              d="M 540 285 C 470 285, 410 285, 350 285"
              fill="none"
              stroke={
                activeSide === 'company' || activeSide === 'center'
                  ? '#1677FF'
                  : '#DCE3EC'
              }
              strokeWidth={
                activeSide === 'company' || activeSide === 'center'
                  ? '2.5'
                  : '1.5'
              }
              className="transition-all duration-500"
            />

            {/* Center → Community */}
            <path
              d="M 660 285 C 730 285, 790 285, 850 285"
              fill="none"
              stroke={
                activeSide === 'community' || activeSide === 'center'
                  ? '#F5B72C'
                  : '#DCE3EC'
              }
              strokeWidth={
                activeSide === 'community' || activeSide === 'center'
                  ? '2.5'
                  : '1.5'
              }
              className="transition-all duration-500"
            />

            {/* Company top branches */}
            <path
              d="M 280 235 L 170 135"
              fill="none"
              stroke={
                activeSide === 'company'
                  ? '#1677FF'
                  : '#E1E6ED'
              }
              strokeDasharray="4 5"
              strokeWidth="1"
              className="transition-colors duration-500"
            />

            <path
              d="M 280 235 L 390 135"
              fill="none"
              stroke={
                activeSide === 'company'
                  ? '#1677FF'
                  : '#E1E6ED'
              }
              strokeDasharray="4 5"
              strokeWidth="1"
              className="transition-colors duration-500"
            />

            {/* Company bottom branches */}
            <path
              d="M 280 335 L 170 435"
              fill="none"
              stroke={
                activeSide === 'company'
                  ? '#1677FF'
                  : '#E1E6ED'
              }
              strokeDasharray="4 5"
              strokeWidth="1"
              className="transition-colors duration-500"
            />

            <path
              d="M 280 335 L 390 435"
              fill="none"
              stroke={
                activeSide === 'company'
                  ? '#1677FF'
                  : '#E1E6ED'
              }
              strokeDasharray="4 5"
              strokeWidth="1"
              className="transition-colors duration-500"
            />

            {/* Community top branches */}
            <path
              d="M 920 235 L 810 135"
              fill="none"
              stroke={
                activeSide === 'community'
                  ? '#F5B72C'
                  : '#E1E6ED'
              }
              strokeDasharray="4 5"
              strokeWidth="1"
              className="transition-colors duration-500"
            />

            <path
              d="M 920 235 L 1030 135"
              fill="none"
              stroke={
                activeSide === 'community'
                  ? '#F5B72C'
                  : '#E1E6ED'
              }
              strokeDasharray="4 5"
              strokeWidth="1"
              className="transition-colors duration-500"
            />

            {/* Community bottom branches */}
            <path
              d="M 920 335 L 810 435"
              fill="none"
              stroke={
                activeSide === 'community'
                  ? '#F5B72C'
                  : '#E1E6ED'
              }
              strokeDasharray="4 5"
              strokeWidth="1"
              className="transition-colors duration-500"
            />

            <path
              d="M 920 335 L 1030 435"
              fill="none"
              stroke={
                activeSide === 'community'
                  ? '#F5B72C'
                  : '#E1E6ED'
              }
              strokeDasharray="4 5"
              strokeWidth="1"
              className="transition-colors duration-500"
            />

            {/* Vertical top architecture */}
            <line
              x1="600"
              y1="15"
              x2="600"
              y2="160"
              stroke="#DCE3EC"
              strokeWidth="1"
              strokeDasharray="4 5"
            />

          </svg>

          {/* =================================================
              TOP ARCHITECTURE LABEL
          ================================================== */}

          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">

            <div className="flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-3 py-1.5 shadow-sm">

              <ShieldCheck className="h-3.5 w-3.5 text-[#1677FF]" />

              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[#59677A]">
                UNIFIED DECODEP ECOSYSTEM
              </span>

            </div>

          </div>

          {/* =================================================
              COMPANY WING
          ================================================== */}

          <div
            className="absolute left-0 top-[115px] z-10 w-[390px]"
            onMouseEnter={() => setActiveSide('company')}
            onMouseLeave={() => setActiveSide(null)}
          >

            {/* Top Nodes */}
            <div className="mb-7 flex justify-between gap-3">

              {companyNodes.slice(0, 2).map((node, index) => {
                const Icon = node.icon

                return (
                  <div
                    key={node.id}
                    className={`flex items-center gap-2.5 rounded-xl border bg-white px-3 py-2.5 shadow-[0_5px_20px_rgba(10,17,40,0.045)] transition-all duration-500 ${
                      activeSide === 'company'
                        ? 'border-[#1677FF]/40 -translate-y-1 shadow-[0_10px_25px_rgba(22,119,255,0.10)]'
                        : 'border-[#E1E6ED]'
                    } ${
                      isInView
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-5 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                    }}
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1677FF]/[0.07] text-[#1677FF]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase text-[#0A1128]">
                        {node.label}
                      </div>

                      <div className="mt-0.5 text-[9px] text-[#7A8797]">
                        {node.sublabel}
                      </div>
                    </div>

                  </div>
                )
              })}

            </div>

            {/* Main Company Card */}
            <div
              className={`rounded-2xl border bg-white p-7 text-center shadow-[0_12px_35px_rgba(10,17,40,0.06)] transition-all duration-500 ${
                activeSide === 'company'
                  ? '-translate-y-1 border-[#1677FF]/50 shadow-[0_18px_45px_rgba(22,119,255,0.12)]'
                  : 'border-[#DDE4EC]'
              } ${
                isInView
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >

              <span className="inline-flex rounded-md border border-[#1677FF]/15 bg-[#1677FF]/[0.06] px-2.5 py-1 font-mono text-[9px] font-bold tracking-widest text-[#1677FF]">
                01 / TECHNOLOGY DIRECTION
              </span>

              <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight text-[#0A1128]">
                DECODEP TECH
              </h3>

              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#7A8797]">
                Structured • Precise • Enterprise
              </p>

              <div className="mt-5 border-t border-[#EEF1F5] pt-4">

                <Link
                  to="/company"
                  className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1677FF]"
                >
                  <span>Explore DECODEP</span>

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

            {/* Bottom Nodes */}
            <div className="mt-7 flex justify-between gap-3">

              {companyNodes.slice(2, 4).map((node, index) => {
                const Icon = node.icon

                return (
                  <div
                    key={node.id}
                    className={`flex items-center gap-2.5 rounded-xl border bg-white px-3 py-2.5 shadow-[0_5px_20px_rgba(10,17,40,0.045)] transition-all duration-500 ${
                      activeSide === 'company'
                        ? 'border-[#1677FF]/40 translate-y-1 shadow-[0_10px_25px_rgba(22,119,255,0.10)]'
                        : 'border-[#E1E6ED]'
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 100}ms`,
                    }}
                  >

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                        node.id === 'digital'
                          ? 'bg-[#F5B72C]/[0.09] text-[#C58A00]'
                          : 'bg-[#1677FF]/[0.07] text-[#1677FF]'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase text-[#0A1128]">
                        {node.label}
                      </div>

                      <div className="mt-0.5 text-[9px] text-[#7A8797]">
                        {node.sublabel}
                      </div>
                    </div>

                  </div>
                )
              })}

            </div>

          </div>

          {/* =================================================
              CENTER CORE
          ================================================== */}

          <div
            className="absolute left-1/2 top-[195px] z-30 -translate-x-1/2"
            onMouseEnter={() => setActiveSide('center')}
            onMouseLeave={() => setActiveSide(null)}
          >

            {/* Outer Ring */}
            <div
              className={`absolute -inset-12 rounded-full border border-[#1677FF]/[0.07] transition-all duration-700 ${
                activeSide
                  ? 'scale-110 border-[#1677FF]/15'
                  : 'scale-100'
              }`}
            />

            {/* Inner Ring */}
            <div
              className={`absolute -inset-7 rounded-full border border-[#DCE3EC] transition-all duration-500 ${
                activeSide
                  ? 'scale-105 border-[#1677FF]/20'
                  : 'scale-100'
              }`}
            />

            {/* Core */}
            <div
              className={`relative flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 bg-white text-center shadow-[0_15px_45px_rgba(10,17,40,0.10)] transition-all duration-500 ${
                activeSide === 'center'
                  ? 'scale-105 border-[#1677FF] shadow-[0_0_45px_rgba(22,119,255,0.16)]'
                  : activeSide === 'company'
                  ? 'border-[#1677FF]/70'
                  : activeSide === 'community'
                  ? 'border-[#F5B72C]/70'
                  : 'border-[#D8E0E9]'
              } ${
                isInView
                  ? 'scale-100 opacity-100'
                  : 'scale-75 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >

              <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-[#1677FF]/[0.07]">
                <ShieldCheck className="h-4 w-4 text-[#1677FF]" />
              </div>

              <span className="font-mono text-[8px] font-bold tracking-[0.18em] text-[#8793A2]">
                UNIFIED CORE
              </span>

              <span className="mt-0.5 font-display text-xl font-black uppercase tracking-tight text-[#0A1128]">
                DECODEP
              </span>

              <span className="mt-0.5 font-mono text-[8px] font-bold tracking-[0.18em] text-[#1677FF]">
                ONE BRAND
              </span>

            </div>

          </div>

          {/* =================================================
              COMMUNITY WING
          ================================================== */}

          <div
            className="absolute right-0 top-[115px] z-10 w-[390px]"
            onMouseEnter={() => setActiveSide('community')}
            onMouseLeave={() => setActiveSide(null)}
          >

            {/* Top Nodes */}
            <div className="mb-7 flex justify-between gap-3">

              {communityNodes.slice(0, 2).map((node, index) => {
                const Icon = node.icon

                return (
                  <div
                    key={node.id}
                    className={`flex items-center gap-2.5 rounded-xl border bg-white px-3 py-2.5 shadow-[0_5px_20px_rgba(10,17,40,0.045)] transition-all duration-500 ${
                      activeSide === 'community'
                        ? 'border-[#F5B72C]/45 -translate-y-1 shadow-[0_10px_25px_rgba(245,183,44,0.10)]'
                        : 'border-[#E1E6ED]'
                    } ${
                      isInView
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-5 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                    }}
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5B72C]/[0.08] text-[#C58A00]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase text-[#0A1128]">
                        {node.label}
                      </div>

                      <div className="mt-0.5 text-[9px] text-[#7A8797]">
                        {node.sublabel}
                      </div>
                    </div>

                  </div>
                )
              })}

            </div>

            {/* Main Community Card */}
            <div
              className={`rounded-2xl border bg-white p-7 text-center shadow-[0_12px_35px_rgba(10,17,40,0.06)] transition-all duration-500 ${
                activeSide === 'community'
                  ? '-translate-y-1 border-[#F5B72C]/55 shadow-[0_18px_45px_rgba(245,183,44,0.12)]'
                  : 'border-[#DDE4EC]'
              } ${
                isInView
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-0'
              }`}
              style={{ transitionDelay: '350ms' }}
            >

              <span className="inline-flex rounded-md border border-[#F5B72C]/20 bg-[#F5B72C]/[0.07] px-2.5 py-1 font-mono text-[9px] font-bold tracking-widest text-[#B67E00]">
                02 / COMMUNITY DIRECTION
              </span>

              <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight text-[#0A1128]">
                DECODEP COMMUNITY
              </h3>

              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#7A8797]">
                Open • Collaborative • Dynamic
              </p>

              <div className="mt-5 border-t border-[#EEF1F5] pt-4">

                <Link
                  to="/community"
                  className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#B67E00]"
                >
                  <span>Explore Community</span>

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

            {/* Bottom Nodes */}
            <div className="mt-7 flex justify-between gap-3">

              {communityNodes.slice(2, 4).map((node, index) => {
                const Icon = node.icon

                return (
                  <div
                    key={node.id}
                    className={`flex items-center gap-2.5 rounded-xl border bg-white px-3 py-2.5 shadow-[0_5px_20px_rgba(10,17,40,0.045)] transition-all duration-500 ${
                      activeSide === 'community'
                        ? 'border-[#F5B72C]/45 translate-y-1 shadow-[0_10px_25px_rgba(245,183,44,0.10)]'
                        : 'border-[#E1E6ED]'
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 100}ms`,
                    }}
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5B72C]/[0.08] text-[#C58A00]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase text-[#0A1128]">
                        {node.label}
                      </div>

                      <div className="mt-0.5 text-[9px] text-[#7A8797]">
                        {node.sublabel}
                      </div>
                    </div>

                  </div>
                )
              })}

            </div>

          </div>

        </div>

        {/* =====================================================
            MOBILE / TABLET
        ====================================================== */}

        <div className="relative mx-auto flex max-w-xl flex-col items-center lg:hidden">

          {/* DECODEP CORE */}
          <div
            className={`relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-[#1677FF]/50 bg-white text-center shadow-[0_12px_35px_rgba(10,17,40,0.08)] transition-all duration-700 ${
              isInView
                ? 'scale-100 opacity-100'
                : 'scale-75 opacity-0'
            }`}
          >

            <ShieldCheck className="mb-1 h-4 w-4 text-[#1677FF]" />

            <span className="font-mono text-[8px] font-bold tracking-[0.18em] text-[#8793A2]">
              ONE BRAND
            </span>

            <span className="font-display text-lg font-black uppercase text-[#0A1128]">
              DECODEP
            </span>

          </div>

          {/* Connector */}
          <div className="h-10 w-px bg-gradient-to-b from-[#1677FF] to-[#DCE3EC]" />

          {/* =================================================
              COMPANY MOBILE
          ================================================== */}

          <div
            className={`w-full rounded-2xl border border-[#DDE4EC] bg-white p-5 shadow-[0_10px_30px_rgba(10,17,40,0.05)] transition-all duration-700 ${
              isInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >

            <div className="text-center">

              <span className="inline-flex rounded-md border border-[#1677FF]/15 bg-[#1677FF]/[0.06] px-2.5 py-1 font-mono text-[9px] font-bold tracking-widest text-[#1677FF]">
                01 / TECHNOLOGY DIRECTION
              </span>

              <h3 className="mt-3 font-display text-xl font-black uppercase text-[#0A1128]">
                DECODEP TECH
              </h3>

              <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-[#7A8797]">
                Structured • Precise • Enterprise
              </p>

            </div>

            {/* Nodes */}
            <div className="mt-5 grid grid-cols-2 gap-2">

              {companyNodes.map((node) => {
                const Icon = node.icon

                return (
                  <div
                    key={node.id}
                    className="flex items-center gap-2 rounded-lg border border-[#E7EBF0] bg-[#FAFBFC] p-2.5"
                  >

                    <Icon
                      className={`h-3.5 w-3.5 flex-shrink-0 ${
                        node.id === 'digital'
                          ? 'text-[#C58A00]'
                          : 'text-[#1677FF]'
                      }`}
                    />

                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase text-[#0A1128]">
                        {node.label}
                      </div>

                      <div className="mt-0.5 text-[8px] leading-tight text-[#7A8797]">
                        {node.sublabel}
                      </div>
                    </div>

                  </div>
                )
              })}

            </div>

            <div className="mt-4 border-t border-[#EEF1F5] pt-4 text-center">

              <Link
                to="/company"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#1677FF]"
              >
                Explore DECODEP
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

            </div>

          </div>

          {/* Connector */}
          <div className="h-10 w-px bg-gradient-to-b from-[#1677FF] to-[#F5B72C]" />

          {/* =================================================
              COMMUNITY MOBILE
          ================================================== */}

          <div
            className={`w-full rounded-2xl border border-[#E4DFD2] bg-white p-5 shadow-[0_10px_30px_rgba(10,17,40,0.05)] transition-all duration-700 ${
              isInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >

            <div className="text-center">

              <span className="inline-flex rounded-md border border-[#F5B72C]/20 bg-[#F5B72C]/[0.07] px-2.5 py-1 font-mono text-[9px] font-bold tracking-widest text-[#B67E00]">
                02 / COMMUNITY DIRECTION
              </span>

              <h3 className="mt-3 font-display text-xl font-black uppercase text-[#0A1128]">
                DECODEP COMMUNITY
              </h3>

              <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-[#7A8797]">
                Open • Collaborative • Dynamic
              </p>

            </div>

            {/* Nodes */}
            <div className="mt-5 grid grid-cols-2 gap-2">

              {communityNodes.map((node) => {
                const Icon = node.icon

                return (
                  <div
                    key={node.id}
                    className="flex items-center gap-2 rounded-lg border border-[#E7EBF0] bg-[#FAFBFC] p-2.5"
                  >

                    <Icon className="h-3.5 w-3.5 flex-shrink-0 text-[#C58A00]" />

                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase text-[#0A1128]">
                        {node.label}
                      </div>

                      <div className="mt-0.5 text-[8px] leading-tight text-[#7A8797]">
                        {node.sublabel}
                      </div>
                    </div>

                  </div>
                )
              })}

            </div>

            <div className="mt-4 border-t border-[#EEF1F5] pt-4 text-center">

              <Link
                to="/community"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#B67E00]"
              >
                Explore Community
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#E5E9EF] pt-5 text-center sm:flex-row sm:text-left">

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />

            <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[#7B8796]">
              DECODEP / BRAND ECOSYSTEM
            </span>

          </div>

          <span className="font-mono text-[9px] tracking-wider text-[#A1ACB7]">
            BUILD • LEARN • COLLABORATE • GROW
          </span>

        </div>

      </div>
    </section>
  )
}

export default CompanyCommunitySection