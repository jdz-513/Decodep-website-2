import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { brandData } from '../data/officialData'
import HeroOrbitalNexus from './hero/HeroOrbitalNexus'

export const Hero: React.FC = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[calc(100svh-104px)]
        flex
        items-center
        overflow-hidden
        bg-[#FAFBFC]
        text-[#0A1128]
        border-b
        border-slate-200/80
      "
    >

      {/* ============================================================
          BACKGROUND GRID
      ============================================================ */}

      <div
        className="
          absolute
          inset-0
          tech-grid-light
          opacity-[0.30]
          pointer-events-none
        "
      />


      {/* ============================================================
          AMBIENT LIGHT
      ============================================================ */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[420px]
          h-[320px]

          sm:w-[600px]
          sm:h-[420px]

          md:w-[750px]
          md:h-[500px]

          lg:w-[950px]
          lg:h-[600px]

          rounded-full
          bg-radial
          from-slate-100/80
          via-white/40
          to-transparent
          pointer-events-none
        "
      />


      {/* ============================================================
          STRUCTURAL VERTICAL LINES
      ============================================================ */}

      <div
        className="
          absolute
          inset-y-0
          left-5
          sm:left-8
          md:left-10
          lg:left-16
          w-px
          bg-slate-200/50
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-y-0
          right-5
          sm:right-8
          md:right-10
          lg:right-16
          w-px
          bg-slate-200/50
          pointer-events-none
        "
      />


      {/* ============================================================
          HORIZONTAL TOP LINE
      ============================================================ */}

      <div
        className="
          absolute
          top-10
          sm:top-11
          md:top-12
          left-0
          right-0
          h-px
          bg-slate-200/50
          pointer-events-none
        "
      />


      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1600px]
          mx-auto

          px-8
          sm:px-10
          md:px-12
          lg:px-16
          xl:px-20
          2xl:px-24

          pt-20
          sm:pt-22
          md:pt-24
          lg:pt-20
          xl:pt-22

          pb-8
          sm:pb-10
          md:pb-10
          lg:pb-8
          xl:pb-10
        "
      >

        {/* ==========================================================
            MAIN GRID
        ========================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.12fr_0.88fr]

            items-center

            gap-10
            sm:gap-12
            md:gap-14
            lg:gap-4
            xl:gap-10
          "
        >


          {/* ========================================================
              LEFT — CONTENT
          ======================================================== */}

          <div
            className="
              relative
              z-20
              min-w-0
              flex
              flex-col
              justify-center
              text-left
            "
          >

            {/* ======================================================
                EYEBROW
            ====================================================== */}

            <div
              className="
                flex
                items-center
                gap-2.5
                sm:gap-3

                mb-5
                sm:mb-6

                text-[9px]
                sm:text-[10px]
                md:text-[11px]

                font-mono
                font-semibold

                tracking-[0.14em]
                sm:tracking-[0.18em]
                md:tracking-[0.2em]

                text-[#2563EB]
                uppercase
              "
            >

              <span
                className="
                  w-6
                  sm:w-8
                  md:w-10
                  h-px
                  bg-[#2563EB]
                  shrink-0
                "
              />

              <span className="truncate">
                DECODEP / DIGITAL VENTURE
              </span>

            </div>


            {/* ======================================================
                HEADLINE
            ====================================================== */}

            <h1
              className="
                font-display
                font-black
                uppercase
                text-[#0A1128]

                tracking-[-0.055em]
                leading-[0.91]

                text-[clamp(2.6rem,10vw,3.8rem)]

                sm:text-[clamp(3.3rem,8vw,4.5rem)]

                md:text-[clamp(3.8rem,7vw,5rem)]

                lg:text-[clamp(3.4rem,5vw,4.6rem)]

                xl:text-[clamp(4rem,4.6vw,5.2rem)]

                2xl:text-[5.4rem]

                max-w-[900px]
              "
            >
              DECODE IDEAS.
              <br />
              BUILD WHAT'S NEXT.
            </h1>


            {/* ======================================================
                SUBTITLE
            ====================================================== */}

            <p
              className="
                mt-5
                sm:mt-6
                md:mt-7
                lg:mt-6
                xl:mt-7

                max-w-[760px]

                text-[15px]
                sm:text-base
                md:text-lg
                lg:text-[1.05rem]
                xl:text-xl

                leading-[1.55]
                sm:leading-[1.6]

                text-[#475569]
              "
            >
              A technology ecosystem building digital solutions,
              empowering communities, and creating opportunities to
              learn, build and grow.
            </p>


            {/* ======================================================
                CTA BUTTONS
            ====================================================== */}

            <div
              className="
                mt-6
                sm:mt-7
                md:mt-8

                flex
                flex-col
                sm:flex-row

                gap-3
                sm:gap-3.5

                w-full
              "
            >

              {/* EXPLORE */}

              <Link
                to="/company"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5

                  min-h-12
                  sm:min-h-13
                  lg:min-h-14

                  w-full
                  sm:w-auto

                  px-6
                  sm:px-7
                  lg:px-8

                  rounded-lg

                  bg-[#0A1128]
                  text-white

                  font-mono
                  text-[10px]
                  sm:text-xs

                  font-bold
                  uppercase
                  tracking-wider

                  shadow-sm

                  transition-all
                  duration-200

                  hover:bg-[#16223E]
                  hover:shadow-lg

                  active:scale-[0.98]
                "
              >

                <span>
                  EXPLORE DECODEP
                </span>

                <ArrowRight
                  className="
                    w-3.5
                    h-3.5
                    sm:w-4
                    sm:h-4
                    shrink-0

                    transition-transform
                    duration-200

                    group-hover:translate-x-1
                  "
                />

              </Link>


              {/* COMMUNITY */}

              <Link
                to="/community"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5

                  min-h-12
                  sm:min-h-13
                  lg:min-h-14

                  w-full
                  sm:w-auto

                  px-6
                  sm:px-7
                  lg:px-8

                  rounded-lg

                  bg-white
                  border-2
                  border-[#0A1128]

                  text-[#0A1128]

                  font-mono
                  text-[10px]
                  sm:text-xs

                  font-bold
                  uppercase
                  tracking-wider

                  transition-all
                  duration-200

                  hover:bg-[#0A1128]
                  hover:text-white

                  active:scale-[0.98]
                "
              >

                <span>
                  JOIN COMMUNITY
                </span>

                <ArrowRight
                  className="
                    w-3.5
                    h-3.5
                    sm:w-4
                    sm:h-4
                    shrink-0

                    text-[#F5B72C]

                    transition-transform
                    duration-200

                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>


            {/* ======================================================
                TRUST / BRAND LINE
            ====================================================== */}

            <div
              className="
                mt-6
                sm:mt-7
                lg:mt-8

                pt-4
                sm:pt-5

                border-t
                border-slate-200/80

                flex
                flex-wrap
                items-center

                gap-x-4
                sm:gap-x-5
                lg:gap-x-6

                gap-y-3
              "
            >

              {/* UDYAM */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  sm:gap-2.5
                "
              >

                <ShieldCheck
                  className="
                    w-4
                    h-4
                    text-[#F5B72C]
                    shrink-0
                  "
                />

                <span
                  className="
                    text-[11px]
                    sm:text-xs
                    font-mono
                    font-semibold
                    text-[#0A1128]
                  "
                >
                  {brandData.registration.status}
                </span>

              </div>


              {/* Divider */}

              <span
                className="
                  hidden
                  sm:block
                  text-slate-300
                "
              >
                •
              </span>


              {/* LOCATION */}

              <span
                className="
                  text-[11px]
                  sm:text-xs
                  font-mono
                  font-medium
                  text-[#0A1128]
                "
              >
                TAMIL NADU, INDIA
              </span>


              {/* Divider */}

              <span
                className="
                  hidden
                  md:block
                  text-slate-300
                "
              >
                •
              </span>


              {/* BRAND PHRASE */}

              <span
                className="
                  hidden
                  md:block

                  text-[9px]
                  lg:text-[10px]

                  font-mono
                  tracking-[0.16em]

                  text-slate-400
                "
              >
                BUILD • CONNECT • GROW
              </span>

            </div>

          </div>


          {/* ========================================================
              RIGHT — ORBITAL VISUAL
          ======================================================== */}

          <div
            className="
              relative
              w-full

              flex
              items-center
              justify-center

              min-h-[300px]

              sm:min-h-[360px]

              md:min-h-[420px]

              lg:min-h-[500px]

              xl:min-h-[560px]
            "
          >

            {/* VISUAL GLOW */}

            <div
              className="
                absolute

                w-[250px]
                h-[250px]

                sm:w-[330px]
                sm:h-[330px]

                md:w-[400px]
                md:h-[400px]

                lg:w-[460px]
                lg:h-[460px]

                xl:w-[540px]
                xl:h-[540px]

                rounded-full

                bg-blue-50/60

                blur-3xl

                pointer-events-none
              "
            />


            {/* ORBITAL COMPONENT */}

            <div
              className="
                relative
                z-10

                w-[270px]
                h-[270px]

                sm:w-[340px]
                sm:h-[340px]

                md:w-[400px]
                md:h-[400px]

                lg:w-[460px]
                lg:h-[460px]

                xl:w-[540px]
                xl:h-[540px]

                flex
                items-center
                justify-center
              "
            >

              <div
                className="
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                "
              >
                <HeroOrbitalNexus />
              </div>

            </div>

          </div>

        </div>


        {/* ==========================================================
            BOTTOM MICRO LABEL
        ========================================================== */}

        <div
          className="
            hidden
            lg:flex

            absolute
            bottom-5
            left-1/2

            -translate-x-1/2

            items-center
            gap-3

            text-[9px]
            font-mono

            tracking-[0.22em]

            text-slate-400

            uppercase
          "
        >

          <span
            className="
              w-6
              h-px
              bg-slate-300
            "
          />

          <span>
            DIGITAL ECOSYSTEM
          </span>

          <span
            className="
              w-6
              h-px
              bg-slate-300
            "
          />

        </div>

      </div>

    </section>
  )
}

export default Hero