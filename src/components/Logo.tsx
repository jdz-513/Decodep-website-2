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
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  }

  const textClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  }

  const content = (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Logo Image */}
      <img
        src="/assets/decodep-logo.png"
        alt="DECODEP Logo"
        className={`${sizeClasses[size]} object-contain rounded-lg transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />

      {/* Brand Text */}
      {showText && (
        <span
          className={`font-display font-black tracking-[0.14em] uppercase transition-colors duration-200 ${textClasses[size]} ${
            theme === 'dark' ? 'text-white' : 'text-[#111827]'
          }`}
        >
          DECODEP
        </span>
      )}
    </div>
  )

  if (linkToHome) {
    return (
      <Link to="/" className="inline-flex items-center focus:outline-none" aria-label="DECODEP Home">
        {content}
      </Link>
    )
  }

  return content
}

export default Logo