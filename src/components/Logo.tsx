import React from 'react'
import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  linkToHome?: boolean
  theme?: 'light' | 'dark'
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  linkToHome = true,
  theme = 'light',
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
  }

  const textClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  const content = (
    <div
      className={`
        inline-flex
        items-center
        gap-3
        select-none
        group
        ${className}
      `}
    >
      {/* ============================================================
          ACTUAL DECODEP LOGO IMAGE
          Rounded corners are applied directly to the image
      ============================================================ */}

      <img
  src="/assets/decodep-logo.png"
  alt="DECODEP Official Logo"
  className={`
    ${sizeClasses[size]}
    w-auto
    object-contain
    rounded-[12px]
    transition-all
    duration-300
    group-hover:scale-105
    ${
      theme === 'dark'
        ? 'drop-shadow-[0_2px_8px_rgba(255,255,255,0.12)]'
        : 'drop-shadow-[0_2px_8px_rgba(10,17,40,0.16)]'
    }
  `}
  loading="eager"
/>

      {/* ============================================================
          DECODEP WORDMARK
      ============================================================ */}

      {showText && (
        <span
          className={`
            font-display
            ${textClasses[size]}
            font-black
            tracking-[0.12em]
            uppercase
            bg-gradient-to-r
            from-[#0A1128]
            via-[#164A9C]
            to-[#1677FF]
            bg-clip-text
            text-transparent
            transition-all
            duration-300

            ${
              theme === 'dark'
                ? 'from-white via-[#AFC4E2] to-[#60A5FA]'
                : ''
            }

            group-hover:from-[#1677FF]
            group-hover:via-[#2563EB]
            group-hover:to-[#0A1128]
          `}
        >
          DECODEP
        </span>
      )}
    </div>
  )

  {/* ================================================================
      HOME LINK
  ================================================================= */}

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="
          inline-flex
          items-center
          rounded-lg
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#1677FF]
          focus-visible:ring-offset-2
        "
      >
        {content}
      </Link>
    )
  }

  return content
}

export default Logo