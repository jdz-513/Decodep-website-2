import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Code2,
  Users,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export const BrandSplitSection: React.FC = () => {
  return (
    <section
      id="brand-architecture"
      className="
        relative
        overflow-hidden
        bg-[#FAFBFC]
        text-[#0A1128]
        border-b
        border-slate-200/80
        py-12
        sm:py-14
        lg:py-16
      "
    >

      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        className="
          absolute
          inset-0
          tech-grid-light
          opacity-[0.22]
          pointer-events-none
        "
      />

      {/* Soft central glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(37,99,235,0.045),transparent_68%)]
          pointer-events-none
        "
      />

      {/* Vertical architecture lines */}

      <div
        className="
          absolute
          left-6
          top-0
          h-full
          w-px
          bg-slate-200/60
          pointer-events-none
          sm:left-8
          lg:left-12
        "
      />

      <div
        className="
          absolute
          right-6
          top-0
          h-full
          w-px
          bg-slate-200/60
          pointer-events-none
          sm:right-8
          lg:right-12
        "
      />


      {/* ============================================================
          CONTAINER
      ============================================================ */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1420px]
          px-8
          sm:px-10
          lg:px-14
          xl:px-16
        "
      >

        {/* ============================================================
            HEADER
        ============================================================ */}

        <div
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* Left */}

          <div>

            <div className="mb-3 flex items-center gap-3">

              <span className="h-px w-8 bg-[#1677FF]" />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#64748B]
                "
              >
                01 / BRAND ARCHITECTURE
              </span>

            </div>


            <h2
              className="
                font-display
                text-[clamp(2.5rem,5vw,4.2rem)]
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.06em]
              "
            >
              ONE CORE.
              <br />

              <span className="text-[#1677FF]">
                TWO PATHS.
              </span>
            </h2>

          </div>
        </div>


        {/* ============================================================
            CORE + PATHS
        ============================================================ */}

        <div className="relative mt-9 lg:mt-11">


          {/* ========================================================
              DESKTOP CONNECTOR
          ======================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              lg:block
            "
          >

            {/* Top line */}

            <div
              className="
                absolute
                left-0
                top-0
                h-10
                w-px
                bg-gradient-to-b
                from-[#1677FF]
                to-slate-300
              "
            />

            {/* Core */}

            <div
              className="
                absolute
                left-1/2
                top-10
                flex
                h-11
                w-11
                -translate-x-1/2
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                shadow-[0_5px_20px_rgba(10,17,40,0.08)]
              "
            >
              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0A1128]
                "
              >
                <Sparkles
                  className="h-3.5 w-3.5 text-white"
                />
              </div>
            </div>

            {/* Bottom branch */}

            <div
              className="
                absolute
                left-0
                top-[62px]
                h-[calc(100%-62px)]
                w-px
                bg-slate-300
              "
            />

          </div>


          {/* ========================================================
              CARDS
          ======================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              lg:grid-cols-2
              lg:gap-20
            "
          >

            {/* ======================================================
                COMPANY
            ====================================================== */}

            <Link
              to="/company"
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-[0_8px_30px_rgba(10,17,40,0.04)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#BFD7FF]
                hover:shadow-[0_18px_45px_rgba(22,119,255,0.11)]
              "
            >

              {/* Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[3px]
                  w-24
                  bg-[#1677FF]
                  transition-all
                  duration-500
                  group-hover:w-40
                "
              />


              {/* Background Number */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -right-3
                  bottom-[-28px]
                  select-none
                  font-display
                  text-[150px]
                  font-black
                  leading-none
                  tracking-[-0.08em]
                  text-slate-100/70
                  transition-all
                  duration-500
                  group-hover:text-[#EEF5FF]
                "
              >
                01
              </span>


              <div className="relative z-10 p-5 sm:p-6 lg:p-7">

                {/* Top */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#D6E6FF]
                        bg-[#EEF5FF]
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    >
                      <Code2
                        className="h-4.5 w-4.5 text-[#1677FF]"
                      />
                    </div>


                    <div>

                      <div className="flex items-center gap-2">

                        <span
                          className="
                            font-mono
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#1677FF]
                          "
                        >
                          01 / TECHNOLOGY
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#1677FF]" />

                        <span
                          className="
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-wider
                            text-[#94A3B8]
                          "
                        >
                          BUILD
                        </span>

                      </div>

                      <p
                        className="
                          mt-0.5
                          text-[9px]
                          uppercase
                          tracking-wide
                          text-[#94A3B8]
                        "
                      >
                        Digital Venture
                      </p>

                    </div>

                  </div>


                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      transition-all
                      duration-300
                      group-hover:border-[#BFD7FF]
                      group-hover:bg-[#EEF5FF]
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        text-[#94A3B8]
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#1677FF]
                      "
                    />
                  </div>

                </div>


                {/* Main */}

                <div className="mt-7">

                  <p
                    className="
                      mb-2
                      font-mono
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#94A3B8]
                    "
                  >
                    THE TECHNOLOGY ARM
                  </p>


                  <h3
                    className="
                      font-display
                      text-[clamp(2rem,3.5vw,3rem)]
                      font-black
                      uppercase
                      leading-[0.86]
                      tracking-[-0.055em]
                      text-[#0A1128]
                    "
                  >
                    
                    <br />
                    TECH
                  </h3>


                  <p
                    className="
                      mt-3
                      max-w-md
                      text-xs
                      leading-5
                      text-[#64748B]
                      sm:text-sm
                    "
                  >
                   Digital Solutions & Products
                  </p>

                </div>


                {/* Bottom */}

                <div
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-200
                    pt-3.5
                  "
                >

                  <div className="flex items-center gap-2">

                    <span className="font-mono text-[8px] text-[#475569]">
                      WEB
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#1677FF]" />

                    <span className="font-mono text-[8px] text-[#475569]">
                      MOBILE
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#1677FF]" />

                    <span className="font-mono text-[8px] text-[#475569]">
                      DIGITAL
                    </span>

                  </div>


                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      font-mono
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#1677FF]
                      transition-all
                      duration-300
                      group-hover:gap-2.5
                    "
                  >
                    Explore
                    <ArrowRight className="h-3 w-3" />
                  </span>

                </div>

              </div>

            </Link>


            {/* ======================================================
                COMMUNITY
            ====================================================== */}

            <Link
              to="/community"
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-[0_8px_30px_rgba(10,17,40,0.04)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#F4DE9D]
                hover:shadow-[0_18px_45px_rgba(245,183,44,0.11)]
              "
            >

              {/* Accent */}

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-[3px]
                  w-24
                  bg-[#F5B72C]
                  transition-all
                  duration-500
                  group-hover:w-40
                "
              />


              {/* Background Number */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -right-3
                  bottom-[-28px]
                  select-none
                  font-display
                  text-[150px]
                  font-black
                  leading-none
                  tracking-[-0.08em]
                  text-slate-100/70
                  transition-all
                  duration-500
                  group-hover:text-[#FFF8E8]
                "
              >
                02
              </span>


              <div className="relative z-10 p-5 sm:p-6 lg:p-7">

                {/* Top */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#F7E5AE]
                        bg-[#FFF8E8]
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    >
                      <Users
                        className="h-4.5 w-4.5 text-[#B47D00]"
                      />
                    </div>


                    <div>

                      <div className="flex items-center gap-2">

                        <span
                          className="
                            font-mono
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#B47D00]
                          "
                        >
                          02 / COMMUNITY
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#F5B72C]" />

                        <span
                          className="
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-wider
                            text-[#94A3B8]
                          "
                        >
                          GROW
                        </span>

                      </div>

                      <p
                        className="
                          mt-0.5
                          text-[9px]
                          uppercase
                          tracking-wide
                          text-[#94A3B8]
                        "
                      >
                        Open Ecosystem
                      </p>

                    </div>

                  </div>


                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      transition-all
                      duration-300
                      group-hover:border-[#F4DE9D]
                      group-hover:bg-[#FFF8E8]
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        text-[#94A3B8]
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#B47D00]
                      "
                    />
                  </div>

                </div>


                {/* Main */}

                <div className="mt-7">

                  <p
                    className="
                      mb-2
                      font-mono
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#94A3B8]
                    "
                  >
                    THE PEOPLE ARM
                  </p>


                  <h3
                    className="
                      font-display
                      text-[clamp(2rem,3.5vw,3rem)]
                      font-black
                      uppercase
                      leading-[0.86]
                      tracking-[-0.055em]
                      text-[#0A1128]
                    "
                  >
                    
                    <br />
                    COMMUNITY
                  </h3>


                  <p
                    className="
                      mt-3
                      max-w-md
                      text-xs
                      leading-5
                      text-[#64748B]
                      sm:text-sm
                    "
                  >
                   Developers & Technology Ecosystem
                  </p>

                </div>


                {/* Bottom */}

                <div
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-200
                    pt-3.5
                  "
                >

                  <div className="flex items-center gap-2">

                    <span className="font-mono text-[8px] text-[#475569]">
                      DEVELOPERS
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#F5B72C]" />

                    <span className="font-mono text-[8px] text-[#475569]">
                      LEARNING
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#F5B72C]" />

                    <span className="font-mono text-[8px] text-[#475569]">
                      COLLABORATION
                    </span>

                  </div>


                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      font-mono
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#B47D00]
                      transition-all
                      duration-300
                      group-hover:gap-2.5
                    "
                  >
                    Join
                    <ArrowRight className="h-3 w-3" />
                  </span>

                </div>

              </div>

            </Link>

          </div>

        </div>


        {/* ============================================================
            BOTTOM SYSTEM LABEL
        ============================================================ */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            border-slate-200
            pt-3
          "
        >

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />

            <span
              className="
                font-mono
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#94A3B8]
              "
            >
              ONE BRAND / TWO COMPLEMENTARY PATHS
            </span>

          </div>


          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[#94A3B8]
            "
          >
            DECODEP / 01
          </span>

        </div>

      </div>

    </section>
  )
}

export default BrandSplitSection