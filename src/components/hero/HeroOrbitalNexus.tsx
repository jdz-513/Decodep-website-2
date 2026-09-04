import React, { useEffect, useRef, useState } from 'react'

interface HeroOrbitalNexusProps {}

const HeroOrbitalNexus: React.FC<HeroOrbitalNexusProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  /* ================================================================
     MOUSE PARALLAX
  ================================================================= */

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = (event.clientX - centerX) / (rect.width / 2)
      const mouseY = (event.clientY - centerY) / (rect.height / 2)

      setTilt({
        x: -mouseY * 4,
        y: mouseX * 6,
      })
    }

    const handleMouseLeave = () => {
      setTilt({
        x: 0,
        y: 0,
      })
    }

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    })

    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        aspect-square
        max-w-[520px]
        sm:max-w-[560px]
        lg:max-w-[600px]
        mx-auto
        flex
        items-center
        justify-center
        select-none
      "
      style={{
        perspective: '1200px',
      }}
    >
      {/* ============================================================
          MAIN PARALLAX LAYER
      ============================================================= */}

      <div
        className="
          relative
          w-full
          h-full
          flex
          items-center
          justify-center
          transition-transform
          duration-500
          ease-out
        "
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >

        {/* ==========================================================
            BACKGROUND GLOW
        =========================================================== */}

        <div
          className="
            absolute
            inset-[8%]
            rounded-full
            pointer-events-none
            bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,rgba(255,255,255,0)_68%)]
          "
        />

        {/* ==========================================================
            ORBIT SVG
        =========================================================== */}

        <svg
          viewBox="0 0 600 600"
          className="
            absolute
            inset-0
            w-full
            h-full
            pointer-events-none
            overflow-visible
          "
        >
          <defs>

            <linearGradient
              id="orbitBlueGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#D9E5F2"
                stopOpacity="0.2"
              />

              <stop
                offset="50%"
                stopColor="#1677FF"
                stopOpacity="0.6"
              />

              <stop
                offset="100%"
                stopColor="#D9E5F2"
                stopOpacity="0.2"
              />
            </linearGradient>

            <linearGradient
              id="orbitGoldGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#D9E5F2"
                stopOpacity="0.15"
              />

              <stop
                offset="50%"
                stopColor="#F5B72C"
                stopOpacity="0.7"
              />

              <stop
                offset="100%"
                stopColor="#D9E5F2"
                stopOpacity="0.15"
              />
            </linearGradient>

            <filter
              id="softGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="4"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

          </defs>

          {/* Horizontal Axis */}

          <line
            x1="80"
            y1="300"
            x2="520"
            y2="300"
            stroke="#DCE6F2"
            strokeWidth="1"
            strokeDasharray="4 8"
            opacity="0.7"
          />

          {/* Vertical Axis */}

          <line
            x1="300"
            y1="80"
            x2="300"
            y2="520"
            stroke="#DCE6F2"
            strokeWidth="1"
            strokeDasharray="4 8"
            opacity="0.7"
          />

          {/* Outer Structural Ring */}

          <circle
            cx="300"
            cy="300"
            r="280"
            fill="none"
            stroke="#E6EEF7"
            strokeWidth="1"
          />

          {/* Middle Structural Ring */}

          <circle
            cx="300"
            cy="300"
            r="220"
            fill="none"
            stroke="#E6EEF7"
            strokeWidth="1"
            strokeDasharray="2 8"
          />

          {/* Inner Structural Ring */}

          <circle
            cx="300"
            cy="300"
            r="150"
            fill="none"
            stroke="#E1EAF4"
            strokeWidth="1"
          />
        </svg>

        {/* ==========================================================
            OUTER ORBIT
        =========================================================== */}

        <div
          className="
            absolute
            w-[86%]
            h-[86%]
            rounded-full
            border
            border-[#D9E5F2]
            animate-spin-outer
            pointer-events-none
          "
        >

          {/* Blue Orbit Node */}

          <div
            className="
              absolute
              -top-[5px]
              left-1/2
              -translate-x-1/2
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                w-2.5
                h-2.5
                rounded-full
                bg-[#1677FF]
                shadow-[0_0_12px_rgba(22,119,255,0.45)]
              "
            />

            <div
              className="
                absolute
                w-5
                h-5
                rounded-full
                bg-[#1677FF]/10
                animate-ping
              "
            />
          </div>

          {/* Community Badge */}

          <div
            className="
              absolute
              top-[80%]
              left-[10%]
              -translate-x-1/2
              -translate-y-1/2
              pointer-events-auto
            "
            style={{
              animation: 'spinCounterClockwise 48s linear infinite',
            }}
            onMouseEnter={() => setActiveNode('community')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div
              className="
                flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-white/95
                backdrop-blur-sm
                border
                border-[#DCE6F2]
                shadow-[0_4px_14px_rgba(15,23,42,0.07)]
                hover:shadow-[0_6px_20px_rgba(22,119,255,0.12)]
                hover:border-[#1677FF]/40
                transition-all
                duration-200
                cursor-pointer
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[#1677FF]
                "
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  sm:text-[11px]
                  font-bold
                  tracking-wider
                  text-[#0A1128]
                  uppercase
                "
              >
                COMMUNITY
              </span>
            </div>
          </div>
        </div>

        {/* ==========================================================
            MIDDLE ORBIT
        =========================================================== */}

        <div
          className="
            absolute
            w-[68%]
            h-[68%]
            rounded-full
            border
            border-[#DCE6F2]
            animate-spin-reverse-slow
            pointer-events-none
          "
          style={{
            transform: 'rotate(25deg)',
          }}
        >

          {/* Gold Orbit Node */}

          <div
            className="
              absolute
              top-1/2
              -right-[5px]
              -translate-y-1/2
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                w-2.5
                h-2.5
                rounded-full
                bg-[#F5B72C]
                shadow-[0_0_12px_rgba(245,183,44,0.45)]
              "
            />

            <div
              className="
                absolute
                w-5
                h-5
                rounded-full
                bg-[#F5B72C]/10
                animate-pulse
              "
            />
          </div>

          {/* Innovation Badge */}

          <div
            className="
              absolute
              bottom-[8%]
              left-[75%]
              -translate-x-1/2
              -translate-y-1/2
              pointer-events-auto
            "
            style={{
              animation: 'spinClockwise 36s linear infinite',
            }}
            onMouseEnter={() => setActiveNode('innovation')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div
              className="
                flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-white/95
                backdrop-blur-sm
                border
                border-[#DCE6F2]
                shadow-[0_4px_14px_rgba(15,23,42,0.07)]
                hover:shadow-[0_6px_20px_rgba(245,183,44,0.14)]
                hover:border-[#F5B72C]/50
                transition-all
                duration-200
                cursor-pointer
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[#F5B72C]
                "
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  sm:text-[11px]
                  font-bold
                  tracking-wider
                  text-[#0A1128]
                  uppercase
                "
              >
                INNOVATION
              </span>
            </div>
          </div>
        </div>

        {/* ==========================================================
            INNER ORBIT
        =========================================================== */}

        <div
          className="
            absolute
            w-[48%]
            h-[48%]
            rounded-full
            border
            border-[#D2DEED]
            animate-spin-slow
            pointer-events-none
          "
          style={{
            transform: 'rotate(-15deg)',
          }}
        >

          {/* Blue Node */}

          <div
            className="
              absolute
              -bottom-[4px]
              left-1/2
              -translate-x-1/2
            "
          >
            <div
              className="
                w-2
                h-2
                rounded-full
                bg-[#1677FF]
                shadow-[0_0_8px_rgba(22,119,255,0.45)]
              "
            />
          </div>

          {/* Technology Badge */}

          <div
            className="
              absolute
              top-[10%]
              left-[82%]
              -translate-x-1/2
              -translate-y-1/2
              pointer-events-auto
            "
            style={{
              animation: 'spinCounterClockwise 28s linear infinite',
            }}
            onMouseEnter={() => setActiveNode('technology')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div
              className="
                flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-white/95
                backdrop-blur-sm
                border
                border-[#DCE6F2]
                shadow-[0_4px_14px_rgba(15,23,42,0.07)]
                hover:shadow-[0_6px_20px_rgba(22,119,255,0.12)]
                hover:border-[#1677FF]/40
                transition-all
                duration-200
                cursor-pointer
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[#1677FF]
                "
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  sm:text-[11px]
                  font-bold
                  tracking-wider
                  text-[#0A1128]
                  uppercase
                "
              >
                TECHNOLOGY
              </span>
            </div>
          </div>
        </div>

        {/* ==========================================================
            CENTRAL DECODEP CARD
            MODIFIED FOR HIGH LOGO VISIBILITY
        =========================================================== */}

        <div
          className="
            relative
            z-20

            flex
            flex-col
            items-center
            justify-center

            w-[220px]
            h-[300px]

            sm:w-[250px]
            sm:h-[340px]

            rounded-[28px]

            bg-gradient-to-br
            from-[#0A1128]
            via-[#102554]
            to-[#173F80]

            border
            border-[#4D79B8]/70

            shadow-[0_24px_65px_rgba(10,17,40,0.28)]

            hover:shadow-[0_30px_80px_rgba(22,119,255,0.22)]

            transition-all
            duration-500

            group
            overflow-hidden
          "
          style={{
            transform: 'translateZ(35px)',
          }}
        >

          {/* ========================================================
              PREMIUM CARD LIGHT
          ========================================================= */}

          <div
            className="
              absolute
              inset-0
              pointer-events-none
              bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.20),transparent_48%)]
            "
          />

          {/* ========================================================
              SUBTLE TOP LIGHT
          ========================================================= */}

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-32
              h-20
              bg-white/5
              blur-2xl
              rounded-full
              pointer-events-none
            "
          />

          {/* ========================================================
              INNER BORDER
          ========================================================= */}

          <div
            className="
              absolute
              inset-[7px]
              rounded-[22px]
              border
              border-white/25
              pointer-events-none
            "
          />

          {/* ========================================================
              CORNER MARKERS
          ========================================================= */}

          <div
            className="
              absolute
              top-4
              left-4
              w-3
              h-3
              border-t
              border-l
              border-[#60A5FA]/70
            "
          />

          <div
            className="
              absolute
              top-4
              right-4
              w-3
              h-3
              border-t
              border-r
              border-[#60A5FA]/70
            "
          />

          <div
            className="
              absolute
              bottom-4
              left-4
              w-3
              h-3
              border-b
              border-l
              border-[#60A5FA]/70
            "
          />

          <div
            className="
              absolute
              bottom-4
              right-4
              w-3
              h-3
              border-b
              border-r
              border-[#60A5FA]/70
            "
          />

          {/* ========================================================
              LOGO BACKPLATE
              Makes white logo clearly visible
          ========================================================= */}

          <div
            className="
              absolute
              top-[54px]
              left-1/2
              -translate-x-1/2
              w-36
              h-36
              rounded-full
              bg-white/[0.07]
              blur-xl
              pointer-events-none
            "
          />

          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-center
              w-32
              h-32
              sm:w-36
              sm:h-36
              mt-2
            "
          >
            <img
              src="/assets/decodep-logo-transparent.png"
              alt="DECODEP Emblem"
              className="
                w-full
                h-full
                object-contain

                drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]

                transition-all
                duration-500

                group-hover:scale-105
                group-hover:drop-shadow-[0_8px_18px_rgba(255,255,255,0.18)]
              "
            />
          </div>

          {/* ========================================================
              BRAND NAME
          ========================================================= */}

          <div
            className="
              relative
              z-10
              mt-4
              text-center
              space-y-1
            "
          >
            <span
              className="
                font-display
                font-black
                text-2xl
                sm:text-3xl
                tracking-[0.12em]
                text-white
                uppercase
                block
              "
            >
              DECODEP
            </span>

            <span
              className="
                font-mono
                text-[10px]
                sm:text-[11px]
                font-semibold
                tracking-[0.18em]
                text-[#AFC4E2]
                uppercase
                block
              "
            >
              DIGITAL VENTURE
            </span>
          </div>

          {/* ========================================================
              STATUS LINE
          ========================================================= */}

          <div
            className="
              relative
              z-10
              mt-5
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[#60A5FA]
                shadow-[0_0_8px_rgba(96,165,250,0.75)]
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                sm:text-[9px]
                tracking-[0.18em]
                text-[#AFC4E2]
                uppercase
              "
            >
              BUILD • CONNECT • GROW
            </span>
          </div>

        </div>

        {/* ==========================================================
            TOOLTIP
        =========================================================== */}

        {activeNode && (
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              bottom-[4%]
              w-64
              bg-[#0A1128]
              text-white
              rounded-xl
              p-3
              shadow-2xl
              border
              border-slate-700
              text-center
              z-50
              pointer-events-none
              animate-in
              fade-in
              duration-200
            "
          >
            <div
              className="
                font-mono
                text-[10px]
                uppercase
                font-bold
                text-[#F5B72C]
              "
            >
              {activeNode === 'technology' &&
                'PILLAR 01 // AI & DIGITAL SYSTEMS'}

              {activeNode === 'innovation' &&
                'PILLAR 02 // WEB & MODERN APPS'}

              {activeNode === 'community' &&
                'PILLAR 03 // BUILDER NETWORK'}
            </div>

            <p
              className="
                text-[11px]
                text-slate-300
                mt-1
                leading-snug
              "
            >
              {activeNode === 'technology' &&
                'Engineering intelligent software and applied AI workflows.'}

              {activeNode === 'innovation' &&
                'Crafting scalable web architectures and modern applications.'}

              {activeNode === 'community' &&
                'Empowering developers through hackdays and collaborative initiatives.'}
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default HeroOrbitalNexus