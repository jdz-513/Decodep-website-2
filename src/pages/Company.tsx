import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MoveUpRight,
} from "lucide-react";

import {
  brandData,
  whatWeDoCompany,
  howWeWorkSteps,
  visionMissionValues,
  founderData,
} from "../data/officialData";

const Company: React.FC = () => {
  return (
    <main className="decodep-page min-h-screen overflow-hidden bg-[#FAFBFC] text-[#0A1128]">

      {/* =========================================================
          DECODEP TECH — PREMIUM VISUAL SYSTEM
      ========================================================= */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap');

        :root {
          --dp-navy: #0A1128;
          --dp-dark: #080F23;
          --dp-blue: #1677FF;
          --dp-gold: #F5B72C;
          --dp-text: #526784;
          --dp-muted: #71839B;
          --dp-line: rgba(10,17,40,.09);
        }

        /* =====================================================
           TYPOGRAPHY
        ===================================================== */

        .dp-display {
          font-family: "Archivo Black", sans-serif;
          font-weight: 900;
          font-style: normal;
        }

        .dp-body {
          font-family: "Manrope", sans-serif;
        }

        .dp-mono {
          font-family: "DM Mono", monospace;
        }

        .dp-serif {
          font-family: "Instrument Serif", serif;
        }

        /* =====================================================
           HERO TECH BACKGROUND
        ===================================================== */

        .dp-tech-grid {
          background-image:
            linear-gradient(
              rgba(10,17,40,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(10,17,40,.035) 1px,
              transparent 1px
            );
          background-size: 64px 64px;
          mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 65%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 65%,
            transparent 100%
          );
        }

        .dp-hero-glow-blue {
          background:
            radial-gradient(
              circle,
              rgba(22,119,255,.09) 0%,
              rgba(22,119,255,.035) 32%,
              transparent 70%
            );
        }

        .dp-hero-glow-gold {
          background:
            radial-gradient(
              circle,
              rgba(245,183,44,.075) 0%,
              rgba(245,183,44,.025) 35%,
              transparent 70%
            );
        }

        .dp-orbit {
          position: absolute;
          border: 1px solid rgba(22,119,255,.075);
          border-radius: 50%;
          pointer-events: none;
          transform: rotate(-18deg);
        }

        .dp-orbit-gold {
          border-color: rgba(245,183,44,.055);
        }

        .dp-orbit-inner {
          position: absolute;
          border: 1px solid rgba(22,119,255,.045);
          border-radius: 50%;
          pointer-events: none;
          transform: rotate(-18deg);
        }

        .dp-node {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--dp-blue);
          box-shadow:
            0 0 0 7px rgba(22,119,255,.055),
            0 0 24px rgba(22,119,255,.28);
        }

        .dp-node-gold {
          background: var(--dp-gold);
          box-shadow:
            0 0 0 7px rgba(245,183,44,.055),
            0 0 24px rgba(245,183,44,.25);
        }

        .dp-node-pulse {
          animation: dpNodePulse 4.5s ease-in-out infinite;
        }

        @keyframes dpNodePulse {
          0%,
          100% {
            transform: scale(.75);
            opacity: .45;
          }

          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }

        /* =====================================================
           TECH CROSSHAIR
        ===================================================== */

        .dp-crosshair::before,
        .dp-crosshair::after {
          content: "";
          position: absolute;
          pointer-events: none;
        }

        .dp-crosshair::before {
          left: -8px;
          right: -8px;
          top: 50%;
          height: 1px;
          background: rgba(22,119,255,.08);
        }

        .dp-crosshair::after {
          top: -8px;
          bottom: -8px;
          left: 50%;
          width: 1px;
          background: rgba(22,119,255,.08);
        }

        /* =====================================================
           SECTION SYSTEM
        ===================================================== */

        .dp-section {
          position: relative;
          overflow: hidden;
        }

        .dp-section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .dp-section-label::before {
          content: "";
          width: 22px;
          height: 1px;
          background: var(--dp-blue);
        }

        /* =====================================================
           SERVICE ROWS
        ===================================================== */

        .dp-service {
          position: relative;
          transition:
            background .35s ease,
            padding-left .35s ease,
            padding-right .35s ease;
        }

        .dp-service:hover {
          background: rgba(255,255,255,.82);
          padding-left: 12px;
          padding-right: 12px;
        }

        .dp-service-number {
          transition:
            color .3s ease,
            transform .3s ease;
        }

        .dp-service:hover .dp-service-number {
          color: var(--dp-blue);
          transform: translateX(4px);
        }

        .dp-service-title {
          transition:
            color .3s ease,
            transform .3s ease;
        }

        .dp-service:hover .dp-service-title {
          color: var(--dp-blue);
          transform: translateX(3px);
        }

        .dp-service-line {
          transition: width .45s cubic-bezier(.2,.8,.2,1);
        }

        .dp-service:hover .dp-service-line {
          width: 100%;
        }

        .dp-feature {
          transition:
            border-color .3s ease,
            color .3s ease,
            background .3s ease;
        }

        .dp-service:hover .dp-feature {
          border-color: rgba(22,119,255,.18);
        }

        /* =====================================================
           HOW WE WORK
        ===================================================== */

        .dp-step {
          position: relative;
          transition:
            background .3s ease,
            padding-left .3s ease;
        }

        .dp-step:hover {
          background: #FAFBFC;
          padding-left: 8px;
        }

        .dp-step-number {
          transition:
            color .3s ease,
            transform .3s ease;
        }

        .dp-step:hover .dp-step-number {
          color: var(--dp-blue);
          transform: translateX(3px);
        }

        .dp-step-accent {
          transition: width .45s ease;
        }

        .dp-step:hover .dp-step-accent {
          width: 100%;
        }

        /* =====================================================
           PRINCIPLE CARDS
        ===================================================== */

        .dp-principle {
          position: relative;
          transition:
            background .35s ease,
            box-shadow .35s ease,
            transform .35s ease;
        }

        .dp-principle:hover {
          background: white;
          box-shadow: 0 18px 50px rgba(10,17,40,.055);
          transform: translateY(-3px);
        }

        /* =====================================================
           FOUNDER
        ===================================================== */

        .dp-founder-card {
          position: relative;
          transition:
            border-color .4s ease,
            box-shadow .4s ease,
            transform .4s ease;
        }

        .dp-founder-card:hover {
          border-color: rgba(22,119,255,.24);
          box-shadow: 0 30px 80px rgba(10,17,40,.09);
          transform: translateY(-3px);
        }

        .dp-founder-photo-wrap {
          position: relative;
          overflow: hidden;
        }

        .dp-founder-photo {
          transition:
            transform 1s cubic-bezier(.2,.8,.2,1),
            filter .7s ease;
        }

        .dp-founder-card:hover .dp-founder-photo {
          transform: scale(1.045);
          filter:
            contrast(1.04)
            saturate(1.08)
            brightness(1.02);
        }

        .dp-founder-photo::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .dp-founder-scan {
          position: absolute;
          left: 0;
          top: -10%;
          width: 100%;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(22,119,255,.8),
              transparent
            );
          box-shadow: 0 0 20px rgba(22,119,255,.25);
          animation: founderScan 6s ease-in-out infinite;
        }

        @keyframes founderScan {
          0% {
            top: -5%;
            opacity: 0;
          }

          15% {
            opacity: .45;
          }

          50% {
            opacity: .8;
          }

          85% {
            opacity: .45;
          }

          100% {
            top: 105%;
            opacity: 0;
          }
        }

        .dp-founder-glow {
          animation: founderGlow 5s ease-in-out infinite;
        }

        @keyframes founderGlow {
          0%,
          100% {
            opacity: .12;
          }

          50% {
            opacity: .38;
          }
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .dp-button {
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            background .3s ease,
            border-color .3s ease;
        }

        .dp-button:hover {
          transform: translateY(-2px);
        }

        .dp-button-arrow {
          transition: transform .3s ease;
        }

        .dp-button:hover .dp-button-arrow {
          transform: translateX(4px);
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .dp-dark-grid {
          background-image:
            linear-gradient(
              rgba(255,255,255,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.035) 1px,
              transparent 1px
            );
          background-size: 72px 72px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 767px) {
          .dp-tech-grid {
            background-size: 46px 46px;
          }

          .dp-orbit {
            opacity: .65;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .dp-node-pulse,
          .dp-founder-scan,
          .dp-founder-glow {
            animation: none;
          }

          .dp-service,
          .dp-step,
          .dp-principle,
          .dp-founder-card,
          .dp-founder-photo,
          .dp-button {
            transition: none;
          }
        }
      `}</style>


   {/* =========================================================
    COMPANY HERO — LIGHT / PREMIUM VERSION
========================================================= */}

<section className="relative overflow-hidden border-b border-slate-200 bg-[#FAFBFC] text-[#0A1128]">

  {/* =======================================================
      BACKGROUND DESIGN
  ======================================================= */}

  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Soft blue glow */}
    <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#1677FF]/[0.035] blur-[100px]" />

    {/* Center glow */}
    <div className="absolute left-1/2 top-[45%] h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#1677FF]/[0.018] blur-[100px]" />

    {/* ===================================================
        RIGHT ORBITAL SYSTEM
    =================================================== */}

    <div className="absolute -right-[170px] -top-[130px] h-[620px] w-[760px] rotate-[-15deg] rounded-[50%] border border-[#1677FF]/[0.08]" />

    <div className="absolute -right-[115px] -top-[75px] h-[520px] w-[650px] rotate-[-15deg] rounded-[50%] border border-[#1677FF]/[0.055]" />

    <div className="absolute -right-[55px] -top-[15px] h-[420px] w-[540px] rotate-[-15deg] rounded-[50%] border border-[#1677FF]/[0.04]" />

    {/* Gold orbit */}
    <div className="absolute right-[4%] top-[20%] h-[320px] w-[320px] rounded-full border border-[#F5B72C]/[0.05]" />

    {/* ===================================================
        LEFT BOTTOM ORBIT
    =================================================== */}

    <div className="absolute -bottom-[390px] -left-[330px] h-[620px] w-[620px] rounded-full border border-[#1677FF]/[0.05]" />

    <div className="absolute -bottom-[330px] -left-[270px] h-[500px] w-[500px] rounded-full border border-[#1677FF]/[0.03]" />

    {/* ===================================================
        TECH NODES
    =================================================== */}

    <span
      className="absolute right-[23%] top-[28%] h-2 w-2 rounded-full bg-[#1677FF]"
      style={{
        boxShadow:
          "0 0 0 7px rgba(22,119,255,.05), 0 0 22px rgba(22,119,255,.22)",
      }}
    />

    <span
      className="absolute right-[12%] top-[56%] h-2 w-2 rounded-full bg-[#1677FF]"
      style={{
        boxShadow:
          "0 0 0 7px rgba(22,119,255,.05), 0 0 22px rgba(22,119,255,.22)",
      }}
    />

    <span
      className="absolute right-[29%] top-[72%] h-2 w-2 rounded-full bg-[#F5B72C]"
      style={{
        boxShadow:
          "0 0 0 7px rgba(245,183,44,.05), 0 0 22px rgba(245,183,44,.2)",
      }}
    />

    {/* Small technical points */}
    <span className="absolute left-[18%] top-[25%] h-1 w-1 rounded-full bg-[#1677FF]/40" />

    <span className="absolute left-[11%] bottom-[22%] h-1 w-1 rounded-full bg-[#F5B72C]/50" />

  </div>


  {/* =======================================================
      MAIN CONTENT
  ======================================================= */}

  <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

    <div
      className="
        flex
        min-h-[590px]
        flex-col
        items-center
        justify-center
        pt-20
        pb-4
        text-center

        sm:min-h-[620px]
        sm:pt-24
        sm:pb-5

        lg:min-h-[650px]
        lg:pt-24
        lg:pb-6
      "
    >

      {/* ===================================================
          TOP BADGE
      =================================================== */}

      <div className="mb-8 inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white/85 px-5 py-3 shadow-[0_8px_30px_rgba(10,17,40,.035)] backdrop-blur-sm">

        <span className="h-2.5 w-2.5 rounded-full bg-[#F5B72C] shadow-[0_0_14px_rgba(245,183,44,.4)]" />

        <span className="dp-mono text-[9px] font-semibold uppercase tracking-[.24em] text-[#526784] sm:text-[10px]">
          DECODEP&nbsp; // &nbsp;TECHNOLOGY VENTURE
        </span>

      </div>


      {/* ===================================================
          MAIN TITLE
      =================================================== */}

      <h1 className="dp-display select-none uppercase tracking-[-.085em]">

        <span className="block text-[clamp(4rem,9vw,8.5rem)] leading-[.8] text-[#0A1128]">
          DECODEP
        </span>

        <span className="block text-[clamp(4rem,9vw,8.5rem)] leading-[.8] text-[#1677FF]">
          TECH<span className="text-[#F5B72C]"></span>
        </span>

      </h1>


      {/* ===================================================
          DESCRIPTION
      =================================================== */}

      <p className="dp-body mt-10 max-w-[950px] text-base leading-7 text-[#526784] sm:mt-11 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-9">

        A technology-focused venture dedicated to building practical
        digital solutions across Artificial Intelligence, Web Development,
        App Development, and emerging technologies.

      </p>


      {/* ===================================================
          REGISTRATION
      =================================================== */}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

        <div className="inline-flex items-center gap-2.5 rounded-md border border-slate-200 bg-white px-5 py-3 shadow-[0_8px_25px_rgba(10,17,40,.035)]">

          <ShieldCheck className="h-4 w-4 text-[#F5B72C]" />

          <span className="dp-mono text-[8px] font-semibold uppercase tracking-[.16em] text-[#526784] sm:text-[9px]">
            {brandData.registration.status}
          </span>

        </div>

        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

        <span className="dp-mono text-[8px] uppercase tracking-[.18em] text-slate-400 sm:text-[9px]">
          {brandData.registration.type}
        </span>

      </div>


      {/* ===================================================
          CTA BUTTONS
      =================================================== */}

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">

        {/* Explore Services */}

        <button
          onClick={() => {
            document
              .getElementById("what-we-do")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
            group
            inline-flex
            h-14
            items-center
            justify-center
            gap-5
            rounded-lg
            bg-[#F5B72C]
            px-9
            text-[#0A1128]
            shadow-[0_12px_35px_rgba(245,183,44,.14)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_16px_40px_rgba(245,183,44,.22)]
          "
        >

          <span className="dp-mono text-[9px] font-bold uppercase tracking-[.15em]">
            EXPLORE SERVICES
          </span>

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </button>


        {/* Let's Connect */}

        <button
          onClick={() => {
            window.location.href = "mailto:officialdecodep@gmail.com";
          }}
          className="
            group
            inline-flex
            h-14
            items-center
            justify-center
            gap-5
            rounded-lg
            border
            border-slate-300
            bg-white/75
            px-9
            text-[#0A1128]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#1677FF]/40
            hover:bg-white
            hover:shadow-[0_12px_35px_rgba(10,17,40,.07)]
          "
        >

          <span className="dp-mono text-[9px] font-bold uppercase tracking-[.15em]">
            LET'S CONNECT
          </span>

          <ArrowRight
            className="
              h-4
              w-4
              text-[#1677FF]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </button>

      </div>


      {/* ===================================================
          BOTTOM SYSTEM LINE
      =================================================== */}

      <div className="mt-12 flex w-full max-w-[1180px] items-center gap-4 sm:mt-14">

        <div className="h-px flex-1 bg-slate-200" />

        <span className="dp-mono hidden text-[7px] uppercase tracking-[.22em] text-slate-400 sm:block">
          DECODE
        </span>

        <span className="h-1 w-1 rounded-full bg-[#1677FF]" />

        <span className="dp-mono text-[7px] uppercase tracking-[.22em] text-slate-400">
          DEVELOP
        </span>

        <span className="h-1 w-1 rounded-full bg-[#F5B72C]" />

        <span className="dp-mono hidden text-[7px] uppercase tracking-[.22em] text-slate-400 sm:block">
          DOMINATE
        </span>

        <div className="h-px flex-1 bg-slate-200" />

      </div>

    </div>

  </div>

</section>

      {/* =========================================================
          02 — ABOUT DECODEP
      ========================================================= */}

      <section className="dp-section border-b border-slate-200 bg-white">

        {/* Background */}

        <div className="pointer-events-none absolute right-[-250px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#1677FF]/[.035]" />

        <div className="pointer-events-none absolute right-[-175px] top-1/2 h-[370px] w-[370px] -translate-y-1/2 rounded-full border border-[#F5B72C]/[.025]" />


        <div className="relative mx-auto max-w-[1400px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">

            {/* Heading */}

            <div className="lg:col-span-4">

              <div className="dp-section-label">

                <span className="dp-mono text-[8px] font-semibold uppercase tracking-[.2em] text-[#1677FF]">
                  01 / BACKGROUND
                </span>

              </div>

              <h2 className="dp-display mt-4 text-4xl uppercase leading-[.8] tracking-[-.065em] sm:text-5xl lg:text-[56px]">

                ABOUT
                <br />

                DECODEP<span className="text-[#1677FF]"></span>

              </h2>

            </div>


            {/* Content */}

            <div className="lg:col-span-8">

              <p className="dp-body max-w-4xl text-lg leading-8 text-[#526784] sm:text-xl sm:leading-9">

                DECODEP is a technology-focused venture dedicated to building
                practical digital solutions for real-world needs.

              </p>


              <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 sm:grid-cols-2">

                <p className="dp-body text-sm leading-7 text-[#64748B]">

                  Our engineering focus spans Artificial Intelligence,
                  Web Development, App Development and emerging technologies.

                </p>

                <p className="dp-body text-sm leading-7 text-[#64748B]">

                  We aim to transform ideas into useful solutions while
                  creating an ecosystem where students, developers and
                  technology enthusiasts can learn, build and collaborate.

                </p>

              </div>


              <div className="mt-6 flex items-center gap-3">

                <span className="h-px w-10 bg-[#1677FF]" />

                <span className="dp-mono text-[7px] uppercase tracking-[.18em] text-slate-400">
                  PRACTICAL TECHNOLOGY • REAL-WORLD NEEDS
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          03 — WHAT WE DO
      ========================================================= */}

      <section
        id="what-we-do"
        className="dp-section border-b border-slate-200 bg-[#FAFBFC]"
      >

        {/* Background */}

        <div className="pointer-events-none absolute -left-[330px] top-[12%] h-[600px] w-[600px] rounded-full border border-[#1677FF]/[.045]" />

        <div className="pointer-events-none absolute -left-[260px] top-[22%] h-[460px] w-[460px] rounded-full border border-[#1677FF]/[.035]" />

        <div className="pointer-events-none absolute -left-[190px] top-[33%] h-[320px] w-[320px] rounded-full border border-[#F5B72C]/[.03]" />


        <div className="relative mx-auto max-w-[1400px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* Header */}

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">

              <div className="dp-section-label">

                <span className="dp-mono text-[8px] font-semibold uppercase tracking-[.2em] text-[#1677FF]">
                  02 / CAPABILITIES
                </span>

              </div>

              <h2 className="dp-display mt-4 text-4xl uppercase leading-[.78] tracking-[-.065em] sm:text-5xl lg:text-6xl">

                WHAT
                <br />

                WE DO<span className="text-[#1677FF]"></span>

              </h2>

            </div>


            <p className="dp-body max-w-xl text-sm leading-7 text-[#64748B] lg:col-span-5">

              {whatWeDoCompany.summary}

            </p>

          </div>


          {/* Services */}

          <div className="mt-8 border-t border-slate-200">

            {whatWeDoCompany.services.map((service, index) => (

              <div
                key={service.id}
                className="dp-service group relative grid grid-cols-1 gap-5 border-b border-slate-200 py-6 sm:grid-cols-[55px_1fr_1.1fr] sm:items-start sm:py-7"
              >

                {/* Number */}

                <div className="dp-service-number dp-display text-xl text-slate-200">
                  0{index + 1}
                </div>


                {/* Title */}

                <div>

                  <span className="dp-mono text-[7px] font-semibold uppercase tracking-[.18em] text-[#1677FF]">
                    {service.tag}
                  </span>

                  <h3 className="dp-service-title dp-display mt-2 max-w-xl text-lg uppercase leading-tight tracking-[-.035em] sm:text-xl">
                    {service.title}
                  </h3>

                  <div className="mt-3 h-px w-8 bg-slate-200 transition-all duration-500 group-hover:w-16 group-hover:bg-[#1677FF]" />

                </div>


                {/* Description */}

                <div>

                  <p className="dp-body max-w-xl text-sm leading-6 text-[#64748B]">
                    {service.description}
                  </p>


                  <div className="mt-3 flex flex-wrap gap-1.5">

                    {service.features.map((feature, featureIndex) => (

                      <span
                        key={featureIndex}
                        className="dp-feature rounded-full border border-slate-200 bg-white px-2.5 py-1 dp-mono text-[7px] text-slate-500 group-hover:bg-[#FAFBFC]"
                      >
                        {feature}
                      </span>

                    ))}

                  </div>

                </div>


                {/* Hover accent */}

                <div className="dp-service-line absolute bottom-0 left-0 h-px w-0 bg-[#1677FF]" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          04 — HOW WE WORK
      ========================================================= */}

      <section className="dp-section border-b border-slate-200 bg-white">

        {/* Background */}

        <div className="pointer-events-none absolute right-[-290px] top-[4%] h-[600px] w-[600px] rounded-full border border-[#1677FF]/[.03]" />

        <div className="pointer-events-none absolute right-[-215px] top-[13%] h-[450px] w-[450px] rounded-full border border-[#F5B72C]/[.025]" />


        <div className="relative mx-auto max-w-[1400px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:gap-14">

            {/* Left */}

            <div className="lg:col-span-4">

              <div className="dp-section-label">

                <span className="dp-mono text-[8px] font-semibold uppercase tracking-[.2em] text-[#1677FF]">
                  03 / METHODOLOGY
                </span>

              </div>

              <h2 className="dp-display mt-4 text-4xl uppercase leading-[.78] tracking-[-.065em] sm:text-5xl">

                HOW
                <br />

                WE WORK<span className="text-[#1677FF]"></span>

              </h2>

              <p className="dp-body mt-5 max-w-sm text-sm leading-7 text-[#64748B]">

                We start by understanding the problem deeply, explore the
                right technology, design a practical solution, build with
                care, and continuously improve through real-world feedback.

              </p>

            </div>


            {/* Steps */}

            <div className="lg:col-span-8">

              <div className="border-t border-slate-200">

                {howWeWorkSteps.map((step) => (

                  <div
                    key={step.step}
                    className="dp-step group relative grid grid-cols-[42px_1fr] gap-4 border-b border-slate-200 py-5 sm:grid-cols-[58px_1fr] sm:gap-5 sm:py-6"
                  >

                    <div className="dp-step-number dp-mono pt-1 text-[8px] font-semibold text-slate-400">
                      {step.step}
                    </div>


                    <div>

                      <h3 className="dp-display text-base uppercase tracking-[-.025em] transition-colors duration-300 group-hover:text-[#1677FF] sm:text-lg">
                        {step.title}
                      </h3>

                      <p className="dp-body mt-2 max-w-2xl text-sm leading-6 text-[#64748B]">
                        {step.description}
                      </p>

                    </div>


                    <div className="dp-step-accent absolute bottom-0 left-0 h-px w-0 bg-[#1677FF]" />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          05 — WHAT DRIVES US
      ========================================================= */}

      <section className="dp-section border-b border-slate-200 bg-[#FAFBFC]">

        {/* Background */}

        <div className="pointer-events-none absolute right-[-280px] top-[-170px] h-[650px] w-[650px] rounded-full border border-[#1677FF]/[.035]" />

        <div className="pointer-events-none absolute right-[-205px] top-[-95px] h-[500px] w-[500px] rounded-full border border-[#F5B72C]/[.025]" />


        <div className="relative mx-auto max-w-[1400px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* Heading */}

          <div className="mb-7">

            <div className="dp-section-label">

              <span className="dp-mono text-[8px] font-semibold uppercase tracking-[.2em] text-[#F5B72C]">
                04 / PRINCIPLES
              </span>

            </div>

            <h2 className="dp-display mt-4 text-4xl uppercase leading-[.78] tracking-[-.065em] sm:text-5xl">

              WHAT
              <br />

              DRIVES US<span className="text-[#F5B72C]"></span>

            </h2>

          </div>


          {/* Principle system */}

          <div className="grid grid-cols-1 border-y border-slate-200 md:grid-cols-3">

            {/* Vision */}

            <div className="dp-principle border-b border-slate-200 p-6 md:border-b-0 md:border-r lg:p-7">

              <span className="dp-mono text-[7px] font-semibold uppercase tracking-[.19em] text-[#1677FF]">
                OUR VISION
              </span>

              <h3 className="dp-display mt-4 text-xl uppercase leading-[.9] tracking-[-.04em]">

                PRACTICAL
                <br />
                ECOSYSTEM

              </h3>

              <p className="dp-body mt-5 text-sm leading-6 text-[#64748B]">
                {visionMissionValues.vision}
              </p>

            </div>


            {/* Mission */}

            <div className="dp-principle border-b border-slate-200 p-6 md:border-b-0 md:border-r lg:p-7">

              <span className="dp-mono text-[7px] font-semibold uppercase tracking-[.19em] text-[#F5B72C]">
                OUR MISSION
              </span>

              <h3 className="dp-display mt-4 text-xl uppercase leading-[.9] tracking-[-.04em]">

                ACTION
                <br />
                & IMPACT

              </h3>

              <ul className="mt-5 space-y-3">

                {visionMissionValues.mission.map((item, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-2.5"
                  >

                    <CheckCircle2 className="mt-1 h-3 w-3 shrink-0 text-[#F5B72C]" />

                    <span className="dp-body text-sm leading-5 text-[#64748B]">
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </div>


            {/* Values */}

            <div className="dp-principle p-6 lg:p-7">

              <span className="dp-mono text-[7px] font-semibold uppercase tracking-[.19em] text-[#1677FF]">
                CORE VALUES
              </span>

              <h3 className="dp-display mt-4 text-xl uppercase leading-[.9] tracking-[-.04em]">

                GUIDING
                <br />
                PRINCIPLES

              </h3>

              <div className="mt-5 flex flex-wrap gap-1.5">

                {visionMissionValues.values.map((value, index) => (

                  <span
                    key={index}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 dp-mono text-[7px] text-slate-500 transition-all duration-300 hover:border-[#1677FF]/30 hover:text-[#1677FF]"
                  >
                    {value}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          06 — FOUNDER MESSAGE
      ========================================================= */}

      <section className="dp-section border-b border-slate-200 bg-white">

        {/* Background */}

        <div className="pointer-events-none absolute bottom-[-230px] left-[-190px] h-[520px] w-[520px] rounded-full border border-[#1677FF]/[.025]" />

        <div className="pointer-events-none absolute bottom-[-170px] left-[-130px] h-[390px] w-[390px] rounded-full border border-[#F5B72C]/[.02]" />


        <div className="relative mx-auto max-w-[1400px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* Heading */}

          <div className="mb-7">

            <div className="dp-section-label">

              <span className="dp-mono text-[8px] font-semibold uppercase tracking-[.2em] text-[#1677FF]">
                05 / LEADERSHIP
              </span>

            </div>

            <h2 className="dp-display mt-4 text-4xl uppercase leading-none tracking-[-.06em] sm:text-5xl">

              FOUNDER MESSAGE<span className="text-[#1677FF]"></span>

            </h2>

          </div>


          {/* Founder Card */}

          <div className="dp-founder-card overflow-hidden border border-slate-200 bg-[#FAFBFC]">

            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">

              {/* =================================================
                  FOUNDER PHOTO
              ================================================= */}

              <div className="dp-founder-photo-wrap h-[390px] bg-[#E7ECF3] lg:h-[450px]">

                <img
                  src={founderData.image}
                  alt={founderData.name}
                  className="dp-founder-photo h-full w-full object-cover object-top"
                />


                {/* Image gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050B18]/85 via-transparent to-[#1677FF]/[.05]" />


                {/* Blue cinematic glow */}

                <div className="dp-founder-glow pointer-events-none absolute bottom-[-90px] left-1/2 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#1677FF]/20 blur-[75px]" />


                {/* Scan line */}

                <div className="dp-founder-scan pointer-events-none" />


                {/* Right accent */}

                <div className="pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-[#1677FF] shadow-[0_0_20px_rgba(22,119,255,.45)]" />


                {/* Top identifier */}

                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#0A1128]/30 px-3 py-1.5 backdrop-blur-md">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF] shadow-[0_0_10px_rgba(22,119,255,.8)]" />

                  <span className="dp-mono text-[6px] uppercase tracking-[.18em] text-white/85">
                    DECODEP
                  </span>

                </div>


                {/* Role */}

                <div className="absolute bottom-5 left-5">

                  <span className="rounded bg-[#0A1128] px-3 py-1.5 dp-mono text-[7px] font-semibold uppercase tracking-[.14em] text-white shadow-lg">
                    {founderData.role}
                  </span>

                </div>

              </div>


              {/* =================================================
                  FOUNDER MESSAGE
              ================================================= */}

              <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">

                <div>

                  <div className="dp-mono text-[7px] uppercase tracking-[.18em] text-slate-400">
                    {founderData.name}
                  </div>


                  <div className="mt-7 border-l-2 border-[#1677FF] pl-5 sm:pl-6">

                    <p className="dp-serif text-[24px] italic leading-[1.4] text-[#526784] sm:text-[28px] lg:text-[31px]">

                      "{founderData.quote}"

                    </p>

                  </div>

                </div>


                <div className="mt-8 border-t border-slate-200 pt-4">

                  <p className="dp-mono max-w-3xl text-[7px] leading-5 text-slate-400">
                    {founderData.closing}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          07 — BUSINESS & REGISTRATION
      ========================================================= */}

      <section className="dp-section border-b border-slate-200 bg-[#FAFBFC]">

        {/* Background */}

        <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#F5B72C]/[.04]" />

        <div className="pointer-events-none absolute right-[-105px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-[#1677FF]/[.03]" />


        <div className="relative mx-auto max-w-[1400px] px-6 py-11 sm:px-10 sm:py-13 lg:px-16 lg:py-15">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">

            {/* Left */}

            <div className="lg:col-span-4">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#F4DE9D] bg-[#FFF9EA] px-3 py-1.5">

                <ShieldCheck className="h-3 w-3 text-[#B47D00]" />

                <span className="dp-mono text-[7px] font-semibold uppercase tracking-[.14em] text-[#A36E00]">
                  OFFICIAL LEGAL STATUS
                </span>

              </div>


              <h2 className="dp-display mt-4 text-3xl uppercase leading-[.84] tracking-[-.06em] sm:text-4xl">

                BUSINESS
                <br />

                & REGISTRATION<span className="text-[#F5B72C]"></span>

              </h2>

            </div>


            {/* Right */}

            <div className="lg:col-span-8">

              <p className="dp-body text-sm leading-7 text-[#526784] sm:text-base sm:leading-8">

                {brandData.registration.description}

              </p>


              <div className="mt-5 grid grid-cols-1 border-y border-slate-200 sm:grid-cols-2">

                <div className="border-b border-slate-200 py-4 sm:border-b-0 sm:border-r sm:pr-6">

                  <div className="dp-mono text-[7px] uppercase tracking-[.17em] text-slate-400">
                    STATUS
                  </div>

                  <div className="dp-display mt-2 text-sm uppercase">
                    {brandData.registration.status}
                  </div>

                </div>


                <div className="py-4 sm:pl-6">

                  <div className="dp-mono text-[7px] uppercase tracking-[.17em] text-slate-400">
                    TYPE
                  </div>

                  <div className="dp-display mt-2 text-sm uppercase">
                    {brandData.registration.type}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


     {/* =========================================================
    08 — FINAL CTA — LIGHT PREMIUM VERSION
========================================================= */}

<section className="dp-section relative overflow-hidden border-b border-slate-200 bg-[#FAFBFC] text-[#0A1128]">

  {/* =====================================================
      BACKGROUND SYSTEM
  ===================================================== */}

  <div className="pointer-events-none absolute inset-0">

    {/* Technical grid */}

    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(10,17,40,.035) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(10,17,40,.035) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "64px 64px",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
      }}
    />

    {/* Blue glow */}

    <div className="absolute -right-[180px] -top-[180px] h-[650px] w-[650px] rounded-full bg-[#1677FF]/[.035] blur-[100px]" />

    {/* Gold glow */}

    <div className="absolute right-[18%] top-[30%] h-[280px] w-[280px] rounded-full bg-[#F5B72C]/[.025] blur-[80px]" />


    {/* =================================================
        ORBITAL SYSTEM
    ================================================= */}

    <div className="absolute -right-[280px] -top-[260px] h-[720px] w-[720px] rounded-full border border-[#1677FF]/[.065]" />

    <div className="absolute -right-[210px] -top-[190px] h-[580px] w-[580px] rounded-full border border-[#1677FF]/[.05]" />

    <div className="absolute -right-[130px] -top-[110px] h-[430px] w-[430px] rounded-full border border-[#F5B72C]/[.045]" />


    {/* Bottom-left orbit */}

    <div className="absolute -bottom-[360px] -left-[300px] h-[600px] w-[600px] rounded-full border border-[#1677FF]/[.04]" />

    <div className="absolute -bottom-[290px] -left-[230px] h-[460px] w-[460px] rounded-full border border-[#F5B72C]/[.025]" />


    {/* =================================================
        TECH NODES
    ================================================= */}

    <span
      className="absolute right-[9%] top-[20%] h-2 w-2 rounded-full bg-[#1677FF]"
      style={{
        boxShadow:
          "0 0 0 7px rgba(22,119,255,.045), 0 0 22px rgba(22,119,255,.2)",
      }}
    />

    <span
      className="absolute right-[23%] top-[48%] h-2 w-2 rounded-full bg-[#1677FF]"
      style={{
        boxShadow:
          "0 0 0 7px rgba(22,119,255,.045), 0 0 22px rgba(22,119,255,.2)",
      }}
    />

    <span
      className="absolute left-[43%] bottom-[16%] h-2 w-2 rounded-full bg-[#F5B72C]"
      style={{
        boxShadow:
          "0 0 0 7px rgba(245,183,44,.045), 0 0 22px rgba(245,183,44,.2)",
      }}
    />


    {/* Vertical guide lines */}

    <div className="absolute left-[8%] top-0 h-full w-px bg-[#0A1128]/[.035]" />

    <div className="absolute right-[8%] top-0 h-full w-px bg-[#0A1128]/[.035]" />

  </div>


  {/* =====================================================
      CTA CONTENT
  ===================================================== */}

  <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

    <div className="flex min-h-[520px] flex-col justify-center py-14 sm:min-h-[560px] sm:py-16 lg:min-h-[580px] lg:py-16">


      {/* =================================================
          LABEL
      ================================================= */}

      <div className="flex items-center gap-3">

        <span className="h-px w-9 bg-[#F5B72C]" />

        <span className="dp-mono text-[8px] font-semibold uppercase tracking-[.24em] text-[#B47D00] sm:text-[9px]">
          READY TO BUILD?
        </span>

      </div>


      {/* =================================================
          MAIN HEADING
      ================================================= */}

      <h2 className="dp-display mt-5 max-w-[950px] select-none text-[clamp(3.7rem,8vw,8rem)] uppercase leading-[.76] tracking-[-.085em]">

        <span className="block text-[#0A1128]">
          LET'S
        </span>

        <span className="block text-[#1677FF]">
          WORK
        </span>

        <span className="block text-[#0A1128]">
          TOGETHER<span className="text-[#F5B72C]"></span>
        </span>

      </h2>


      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <div className="mt-7 grid grid-cols-1 gap-7 border-t border-slate-200 pt-7 lg:grid-cols-12 lg:items-end">

        <p className="dp-body max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8 lg:col-span-7">

          Have an idea, a business requirement or an opportunity to
          collaborate? Let's turn it into something useful with DECODEP.

        </p>


        {/* =================================================
            BUTTONS
        ================================================= */}

        <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">

          <Link
            to="/contact"
            className="dp-button group inline-flex h-12 items-center gap-4 rounded-md bg-[#0A1128] px-6 text-white shadow-[0_10px_30px_rgba(10,17,40,.12)] hover:bg-[#1677FF]"
          >

            <span className="dp-mono text-[8px] font-semibold uppercase tracking-[.16em]">
              CONTACT DECODEP
            </span>

            <ArrowRight className="dp-button-arrow h-3.5 w-3.5" />

          </Link>


          <Link
            to="/community"
            className="dp-button group inline-flex h-12 items-center gap-4 rounded-md border border-slate-300 bg-white px-6 text-[#0A1128] hover:border-[#1677FF]/40 hover:text-[#1677FF] hover:shadow-[0_10px_30px_rgba(10,17,40,.06)]"
          >

            <span className="dp-mono text-[8px] font-semibold uppercase tracking-[.16em]">
              EXPLORE COMMUNITY
            </span>

            <MoveUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

          </Link>

        </div>

      </div>


      {/* =================================================
          BOTTOM SYSTEM LINE
      ================================================= */}

      <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-4">

        <span className="dp-mono text-[7px] uppercase tracking-[.2em] text-slate-400">
          DECODEP TECH
        </span>

        <div className="h-1 w-1 rounded-full bg-[#1677FF]" />

        <span className="dp-mono text-[7px] uppercase tracking-[.2em] text-slate-400">
          DECODE
        </span>

        <div className="h-1 w-1 rounded-full bg-[#F5B72C]" />

        <span className="dp-mono text-[7px] uppercase tracking-[.2em] text-slate-400">
          DEVELOP
        </span>

        <div className="h-1 w-1 rounded-full bg-[#1677FF]" />

        <span className="dp-mono text-[7px] uppercase tracking-[.2em] text-slate-400">
          DOMINATE
        </span>

        <div className="ml-auto hidden h-px flex-1 bg-slate-200 sm:block" />

      </div>

    </div>

  </div>

</section>

    </main>
  );
};

export default Company;