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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFBFC]/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-[#FAFBFC]/80 backdrop-blur-sm border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" theme="light" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-[#0A1128] bg-slate-100 border border-slate-200/80 font-bold'
                      : 'text-slate-600 hover:text-[#0A1128] hover:bg-slate-100/70'
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#0A1128] hover:bg-[#16223E] text-white transition-all duration-200 active:scale-95 shadow-sm group"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F5B72C] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0A1128] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#0A1128]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#FAFBFC] border-b border-slate-200 shadow-xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-[#0A1128] bg-slate-100 border border-slate-200 font-bold'
                      : 'text-slate-600 hover:text-[#0A1128] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="pt-4 mt-2 border-t border-slate-200">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#0A1128] text-white hover:bg-[#16223E] transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F5B72C]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
