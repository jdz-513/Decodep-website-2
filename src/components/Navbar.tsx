import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { name: 'Company', path: '/company' },
  { name: 'Community', path: '/community' },
  { name: 'Innovation', path: '/innovation' },
  { name: 'Initiatives', path: '/initiatives' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#111827]/10 py-3'
          : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-[#111827]/08 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" theme="light" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-[#8F6B0A] bg-[#FAF2DD] border border-[#E8D39E]/80 font-bold'
                      : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F2EFE8]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Connect CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-[#111827] text-white hover:bg-[#C59B27] hover:text-[#0D1117] transition-all duration-200 shadow-sm"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#111827] hover:bg-[#EBE7DF] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#111827]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#FAF8F5] border-b border-[#111827]/10 shadow-xl px-6 py-6 transition-all duration-200 z-50">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-[#8F6B0A] bg-[#FAF2DD] border border-[#E8D39E]/80 font-bold'
                      : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F2EFE8]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="pt-3 border-t border-[#111827]/10">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-[#111827] text-white hover:bg-[#C59B27] hover:text-[#0D1117] transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
