import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  ShieldCheck,
  MapPin,
} from 'lucide-react'
import Logo from './Logo'
import { brandData } from '../data/officialData'

export const Footer: React.FC = () => {
  const directory = [
    { label: 'Company', href: '/company' },
    { label: 'Community', href: '/community' },
    { label: 'Innovation', href: '/innovation' },
    { label: 'Initiatives', href: '/initiatives' },
    { label: 'Collaborations', href: '/collaborations' },
    { label: 'Collaboration Proposal', href: '/proposals' },
    { label: 'About', href: '/about' },
  ]

  const connectLinks = [
    { label: 'Contact Desk', href: '/contact' },
    { label: 'WhatsApp Community', href: 'https://chat.whatsapp.com/KS1XKI8X5dT4Kuxt4uL1S4', external: true },
    { label: 'Instagram', href: 'https://instagram.com/officialdecodep', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/officialdecodep/', external: true },
  ]

  return (
    <footer className="relative bg-[#0D1117] text-[#9CA3AF] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-10">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-4">
            <Logo size="lg" theme="dark" />

            <p className="font-serif text-sm text-[#D1D5DB] leading-relaxed max-w-md">
              A technology ecosystem building digital solutions, empowering developer communities, and creating practical opportunities to learn, build, and grow.
            </p>

            {/* Legal Registration */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
              <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
              <span>{brandData.registration.status} ({brandData.registration.type}) • Erode, Tamil Nadu</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://instagram.com/officialdecodep"
                target="_blank"
                rel="noreferrer"
                aria-label="DECODEP Instagram"
                className="w-8 h-8 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#9CA3AF] hover:text-[#C59B27] hover:border-[#C59B27]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/officialdecodep/"
                target="_blank"
                rel="noreferrer"
                aria-label="DECODEP LinkedIn"
                className="w-8 h-8 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#9CA3AF] hover:text-[#C59B27] hover:border-[#C59B27]/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${brandData.email}`}
                aria-label="Email DECODEP"
                className="w-8 h-8 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#9CA3AF] hover:text-[#C59B27] hover:border-[#C59B27]/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://chat.whatsapp.com/KS1XKI8X5dT4Kuxt4uL1S4"
                target="_blank"
                rel="noreferrer"
                aria-label="DECODEP WhatsApp Community"
                className="w-8 h-8 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#9CA3AF] hover:text-[#C59B27] hover:border-[#C59B27]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C59B27]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {directory.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-xs font-mono text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C59B27]">
              Connect
            </h4>
            <ul className="space-y-2">
              {connectLinks.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-[#9CA3AF] hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C59B27]" />
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-xs font-mono text-[#9CA3AF] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#6B7280]">
          <div>
            © {brandData.year} {brandData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer