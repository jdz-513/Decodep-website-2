import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Hammer,
  Users,
  TrendingUp,
  Sparkles,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Handshake,
  Calendar,
  LucideIcon,
} from 'lucide-react'

import {
  communityData,
  collaborationsList,
  currentInitiative,
} from '../data/officialData'

import JoinCommunityModal from '../components/JoinCommunityModal'
import RegisterModal from '../components/RegisterModal'

export const Community: React.FC = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.12,
      }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const pillarIcons: Record<string, LucideIcon> = {
    Learn: BookOpen,
    Build: Hammer,
    Collaborate: Users,
    Grow: TrendingUp,
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAFB] text-[#080B12]">

      {/* =====================================================
          CONTACT TYPOGRAPHY SYSTEM
          ONLY FONT CHANGE
      ====================================================== */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap');

        .community-display {
          font-family: "Instrument Serif", serif;
          font-weight: 400;
          font-style: normal;
        }

        .community-display-italic {
          font-family: "Instrument Serif", serif;
          font-weight: 400;
          font-style: italic;
        }

        .community-body {
          font-family: "Manrope", sans-serif;
        }

        .community-mono {
          font-family: "DM Mono", monospace;
        }
      `}</style>

      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">

        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(8,11,18,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(8,11,18,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '34px 34px',
          }}
        />

      </div>

      {/* =====================================================
          01 — HERO
      ====================================================== */}

      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-[#DFE6EC] bg-[#F7FAFB] px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pb-28"
      >

        {/* Ambient Light */}

        <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#1677FF]/[0.045] blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#F5B72C]/[0.035] blur-3xl" />

        {/* Editorial Orbital Rings */}

        <div className="pointer-events-none absolute right-[5%] top-[8%] hidden h-[420px] w-[420px] rounded-full border border-[#1677FF]/[0.07] lg:block" />

        <div className="pointer-events-none absolute right-[8%] top-[12%] hidden h-[340px] w-[340px] rounded-full border border-[#F5B72C]/[0.08] lg:block" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div
            className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >

            {/* Top Label */}

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#D9E2E9] bg-[#080B12] px-5 py-2.5 shadow-[0_8px_25px_rgba(8,11,18,0.08)]">

              <Sparkles className="h-4 w-4 text-[#56D8FF]" />

              <span className="community-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                COMMUNITY & INITIATIVES
              </span>

            </div>

            {/* Main Editorial Heading */}

            <h1 className="community-display text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.82] tracking-[-0.055em] text-[#080B12]">

              DECODEP

              <br />

              <span className="community-display-italic text-[#1677FF]">
                Community.
              </span>

            </h1>

            {/* Small Accent */}

            <div className="mx-auto mt-8 flex items-center justify-center gap-3">

              <span className="h-px w-12 bg-[#CBD5DE]" />

              <span className="h-2 w-2 rounded-full bg-[#F5B72C]" />

              <span className="h-px w-12 bg-[#CBD5DE]" />

            </div>

            {/* Description */}

            <p className="community-body mx-auto mt-7 max-w-3xl text-base leading-8 text-[#59687A] sm:text-lg">
              {communityData.summary}
            </p>

            {/* Community Members Highlight */}

            <div className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-2xl border border-[#DCE4EB] bg-white px-5 py-3.5 shadow-[0_10px_30px_rgba(8,11,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(8,11,18,0.09)]">

              {/* Member Icon */}

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1677FF]/[0.08] text-[#1677FF]">
                <Users className="h-5 w-5" />
              </div>

              {/* Number */}

              <div className="text-left">

                <div className="flex items-baseline gap-1">

                  <span className="community-display text-3xl leading-none tracking-[-0.04em] text-[#080B12] sm:text-4xl">
                    1000
                  </span>

                  <span className="community-display-italic text-2xl text-[#1677FF]">
                    +
                  </span>

                </div>

                <div className="community-mono mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-[#8995A3]">
                  COMMUNITY MEMBERS
                </div>

              </div>

              {/* Live Indicator */}

              <div className="ml-2 hidden items-center gap-1.5 border-l border-[#E5EAF0] pl-4 sm:flex">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F5B72C]" />

                <span className="community-mono text-[8px] font-bold uppercase tracking-wider text-[#8A96A4]">
                  GROWING
                </span>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap justify-center gap-3">

              <button
                type="button"
                onClick={() => setIsJoinOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full bg-[#080B12] px-7 py-3.5 community-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(8,11,18,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1677FF]"
              >
                JOIN COMMUNITY

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                to="/initiatives"
                className="group inline-flex items-center gap-2 rounded-full border border-[#D7E0E7] bg-white px-7 py-3.5 community-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#080B12] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B72C]/60"
              >
                VIEW INITIATIVES

                <ArrowRight className="h-3.5 w-3.5 text-[#B67E00] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

          </div>

          {/* Hero System Line */}

          <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-[#DFE6EC] pt-5 sm:flex-row">

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />

              <span className="community-mono text-[9px] font-bold tracking-[0.16em] text-[#7C8998]">
                DECODEP / DEVELOPER ECOSYSTEM
              </span>

            </div>

            <span className="community-mono text-[9px] tracking-[0.14em] text-[#A0AAB5]">
              LEARN • BUILD • COLLABORATE • GROW
            </span>

          </div>

        </div>
      </section>

      {/* =====================================================
          02 — FOUR PILLARS
      ====================================================== */}

      <section className="relative border-b border-[#DFE6EC] bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <span className="community-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#1677FF]">
                01 // FOUNDATIONS
              </span>

              <h2 className="community-display mt-3 text-4xl leading-[0.9] tracking-[-0.04em] text-[#080B12] sm:text-5xl md:text-6xl">

                Learn. Build.

                <br />

                <span className="community-display-italic text-[#1677FF]">
                  Grow together.
                </span>

              </h2>

            </div>

            <p className="community-body max-w-md text-sm leading-7 text-[#697789] lg:col-span-4 lg:pb-1">
              A practical developer ecosystem built around continuous
              learning, real projects, collaboration, and growth.
            </p>

          </div>

          {/* Pillars */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {communityData.pillars.map((pillar, index) => {

              const Icon = pillarIcons[pillar.title] || Sparkles

              const gold =
                pillar.title === 'Grow' ||
                pillar.title === 'Collaborate'

              return (
                <div
                  key={pillar.id}
                  className="group relative overflow-hidden rounded-[20px] border border-[#E0E7ED] bg-[#F9FBFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(8,11,18,0.08)]"
                >

                  {/* Top Line */}

                  <div
                    className={`absolute left-0 top-0 h-[3px] w-full ${
                      gold
                        ? 'bg-[#F5B72C]'
                        : 'bg-[#1677FF]'
                    }`}
                  />

                  {/* Number */}

                  <div className="flex items-center justify-between">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        gold
                          ? 'bg-[#F5B72C]/10 text-[#B67E00]'
                          : 'bg-[#1677FF]/10 text-[#1677FF]'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="community-mono text-[9px] font-bold tracking-widest text-[#A5AFB9]">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="community-display mt-7 text-2xl uppercase tracking-[-0.025em] text-[#080B12] transition-colors group-hover:text-[#1677FF]">
                    {pillar.title}
                  </h3>

                  <p className="community-body mt-3 text-xs leading-6 text-[#687687]">
                    {pillar.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 border-t border-[#E5EBF0] pt-4">

                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        gold
                          ? 'bg-[#F5B72C]'
                          : 'bg-[#1677FF]'
                      }`}
                    />

                    <span className="community-mono text-[8px] font-bold tracking-[0.15em] text-[#9AA5B1]">
                      COMMUNITY PILLAR
                    </span>

                  </div>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          03 — ACTIVITIES
      ====================================================== */}

      <section className="relative border-b border-[#DFE6EC] bg-[#F7FAFB] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* Left Editorial Heading */}

            <div className="lg:col-span-5">

              <span className="community-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#B67E00]">
                02 // INITIATIVES & FORMATS
              </span>

              <h2 className="community-display mt-3 text-5xl leading-[0.85] tracking-[-0.045em] text-[#080B12] sm:text-6xl">

                Community

                <br />

                <span className="community-display-italic text-[#1677FF]">
                  in motion.
                </span>

              </h2>

              <p className="community-body mt-6 max-w-md text-sm leading-7 text-[#687687]">
                We organize hackathons, technical talks, developer projects,
                and collaborative initiatives designed to create real
                engineering experience.
              </p>

            </div>

            {/* Activities */}

            <div className="lg:col-span-7">

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {communityData.activities.map((activity, index) => (

                  <div
                    key={index}
                    className="group flex items-start gap-4 rounded-2xl border border-[#E0E7ED] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1677FF]/30 hover:shadow-[0_12px_30px_rgba(8,11,18,0.06)]"
                  >

                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#1677FF]/[0.07] text-[#1677FF] transition-colors group-hover:bg-[#1677FF] group-hover:text-white">

                      <CheckCircle2 className="h-4 w-4" />

                    </div>

                    <div>

                      <span className="community-mono text-[8px] font-bold tracking-widest text-[#A1ACB8]">
                        FORMAT / 0{index + 1}
                      </span>

                      <h3 className="community-body mt-1.5 text-xs font-semibold leading-5 text-[#253146] sm:text-sm">
                        {activity}
                      </h3>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          04 — ACTIVE HACKDAY
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-[#DFE6EC] bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#F5B72C]/[0.035] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Section Label */}

          <div className="mb-9 flex items-end justify-between">

            <div>

              <span className="community-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#1677FF]">
                03 // FEATURED INITIATIVE
              </span>

              <h2 className="community-display mt-3 text-4xl tracking-[-0.035em] text-[#080B12] sm:text-5xl">

                Build something

                <span className="community-display-italic text-[#FF3158]">
                  real.
                </span>

              </h2>

            </div>

            <Trophy className="hidden h-9 w-9 text-[#F5B72C] sm:block" />

          </div>

          {/* Spotlight */}

          <div className="relative overflow-hidden rounded-[26px] border border-[#DCE4EB] bg-[#F7FAFB] p-6 shadow-[0_15px_45px_rgba(8,11,18,0.06)] sm:p-9 lg:p-11">

            <div className="absolute right-0 top-0 h-full w-[4px] bg-[#F5B72C]" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">

              <div className="lg:col-span-8">

                <div className="inline-flex items-center gap-2 rounded-full border border-[#F5B72C]/25 bg-[#F5B72C]/[0.07] px-3 py-1.5">

                  <Trophy className="h-3.5 w-3.5 text-[#B67E00]" />

                  <span className="community-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#B67E00]">
                    FEATURED COMMUNITY COMPETITION
                  </span>

                </div>

                <h3 className="community-display mt-6 text-4xl leading-[0.9] tracking-[-0.04em] text-[#080B12] sm:text-5xl">
                  {currentInitiative.title}
                </h3>

                <p className="community-body mt-5 max-w-2xl text-sm leading-7 text-[#687687]">
                  {currentInitiative.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <div className="inline-flex items-center gap-2 rounded-lg border border-[#DFE6EC] bg-white px-3 py-2">

                    <Calendar className="h-3.5 w-3.5 text-[#1677FF]" />

                    <span className="community-mono text-[9px] font-bold text-[#647285]">
                      {currentInitiative.date}
                    </span>

                  </div>

                  <div className="rounded-lg border border-[#DFE6EC] bg-white px-3 py-2">

                    <span className="community-mono text-[9px] font-bold text-[#647285]">
                      DURATION: {currentInitiative.duration}
                    </span>

                  </div>

                  <div className="rounded-lg border border-[#F5B72C]/25 bg-[#F5B72C]/[0.06] px-3 py-2">

                    <span className="community-mono text-[9px] font-bold text-[#B67E00]">
                      PRIZE: {currentInitiative.prize}
                    </span>

                  </div>

                </div>

              </div>

              {/* Buttons */}

              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">

                <button
                  type="button"
                  onClick={() => setIsRegisterOpen(true)}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#080B12] px-7 py-4 community-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1677FF] sm:w-auto"
                >
                  REGISTER NOW

                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  to="/initiatives"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D9E1E8] bg-white px-7 py-4 community-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#080B12] transition-all duration-300 hover:border-[#F5B72C]/50 sm:w-auto"
                >
                  VIEW DETAILS

                  <ArrowRight className="h-3.5 w-3.5 text-[#B67E00]" />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          05 — COLLABORATIONS
      ====================================================== */}

      <section className="relative border-b border-[#DFE6EC] bg-[#F7FAFB] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <div className="mb-11 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE4EB] bg-white px-3 py-1.5">

                <Handshake className="h-3.5 w-3.5 text-[#1677FF]" />

                <span className="community-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#637084]">
                  OFFICIAL PARTNERSHIPS
                </span>

              </div>

              <h2 className="community-display mt-4 text-4xl leading-[0.9] tracking-[-0.04em] text-[#080B12] sm:text-5xl">

                Building beyond

                <br />

                <span className="community-display-italic text-[#1677FF]">
                  our own walls.
                </span>

              </h2>

            </div>

            <p className="community-body max-w-md text-sm leading-7 text-[#687687] lg:col-span-4">
              Formal agreements and community partnerships driving shared
              learning, innovation and impact.
            </p>

          </div>

          {/* Collaboration Cards */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {collaborationsList.map((collab, index) => (

              <div
                key={collab.id}
                className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-[20px] border border-[#E0E7ED] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1677FF]/30 hover:shadow-[0_16px_35px_rgba(8,11,18,0.07)]"
              >

                {/* Accent */}

                <div className="h-[3px] w-full bg-[#1677FF]" />

                <div className="flex flex-1 flex-col p-6">

                  {/* Meta */}

                  <div className="flex items-center justify-between gap-3">

                    <span className="community-mono rounded-md border border-[#1677FF]/15 bg-[#1677FF]/[0.06] px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#1677FF]">
                      {collab.collaborationType}
                    </span>

                    {collab.status && (
                      <span className="community-mono flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-wider text-emerald-600">

                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                        {collab.status}

                      </span>
                    )}

                  </div>

                  {/* Content */}

                  <div className="mt-7 flex-1">

                    <span className="community-mono text-[8px] font-bold tracking-widest text-[#A3ADB9]">
                      PARTNERSHIP / 0{index + 1}
                    </span>

                    <h3 className="community-display mt-2 text-2xl uppercase leading-none tracking-[-0.025em] text-[#080B12] transition-colors group-hover:text-[#1677FF]">
                      {collab.partnerName}
                    </h3>

                    <p className="community-body mt-3 line-clamp-3 text-xs leading-6 text-[#6D7989]">
                      {collab.shortDescription}
                    </p>

                  </div>

                  {/* Footer */}

                  <div className="mt-6 flex items-center justify-between border-t border-[#EDF1F4] pt-4">

                    {collab.date ? (
                      <span className="community-mono text-[9px] text-[#8A96A4]">
                        {collab.date}
                      </span>
                    ) : (
                      <span />
                    )}

                    <Link
                      to={`/collaborations/${collab.id}`}
                      className="group/link community-mono inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-[#080B12]"
                    >
                      DETAILS

                      <ArrowRight className="h-3 w-3 text-[#1677FF] transition-transform group-hover/link:translate-x-1" />
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          06 — FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8">

        {/* Editorial Background */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(8,11,18,0.035) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(8,11,18,0.035) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '34px 34px',
            }}
          />

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1677FF]/[0.035] blur-3xl" />

        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE4EB] bg-[#F7FAFB] px-4 py-2">

            <Sparkles className="h-3.5 w-3.5 text-[#F5B72C]" />

            <span className="community-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#687587]">
              JOIN THE ECOSYSTEM
            </span>

          </div>

          <h2 className="community-display text-[clamp(3.4rem,7vw,7rem)] leading-[0.82] tracking-[-0.055em] text-[#080B12]">

            Come to learn.

            <br />

            <span className="community-display-italic text-[#1677FF]">
              Stay to build.
            </span>

          </h2>

          <p className="community-body mx-auto mt-7 max-w-xl text-sm leading-7 text-[#687687] sm:text-base">
            Connect with fellow builders, participate in practical technical
            events, and level up your engineering skills.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">

            <button
              type="button"
              onClick={() => setIsJoinOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-[#080B12] px-7 py-4 community-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_25px_rgba(8,11,18,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1677FF]"
            >
              JOIN COMMUNITY

              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <Link
              to="/initiatives"
              className="group inline-flex items-center gap-2 rounded-full border border-[#DCE4EB] bg-white px-7 py-4 community-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#080B12] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B72C]/50 hover:shadow-sm"
            >
              EXPLORE INITIATIVES

              <ArrowRight className="h-3.5 w-3.5 text-[#B67E00]" />
            </Link>

          </div>

          {/* Bottom Identity */}

          <div className="mt-14 flex flex-col items-center justify-center gap-2 sm:flex-row">

            <span className="h-1.5 w-1.5 rounded-full bg-[#F5B72C]" />

            <span className="community-mono text-[9px] font-bold tracking-[0.16em] text-[#8995A3]">
              DECODEP COMMUNITY
            </span>

            <span className="hidden text-[#CBD2D9] sm:block">
              /
            </span>

            <span className="community-mono text-[9px] tracking-[0.12em] text-[#A1ACB7]">
              BUILDING THE NEXT GENERATION OF DEVELOPERS
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          MODALS
      ====================================================== */}

      <JoinCommunityModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

    </main>
  )
}

export default Community