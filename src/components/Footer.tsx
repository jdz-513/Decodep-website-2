import React from "react";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

const DECODEP_NAME = "DECODEP";
const DECODEP_YEAR = 2026;
const DECODEP_EMAIL = "officialdecodep@gmail.com";

const Footer: React.FC = () => {
  const navigation = [
    { label: "Company", href: "/company" },
    { label: "Community", href: "/community" },
    { label: "Innovation", href: "/innovation" },
    { label: "Initiatives", href: "/initiatives" },
    { label: "Collaborations", href: "/collaborations" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const connectLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com/officialdecodep",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/officialdecodep/",
      external: true,
    },
    {
      label: "Join Community",
      href: "https://chat.whatsapp.com/KS1XKI8X5dT4Kuxt4uL1S4",
      external: false,
    },
    {
      label: "Partner with Us",
      href: "/contact",
      external: false,
    },
    {
      label: "Community FAQ",
      href: "/community#faq",
      external: false,
    },
    {
      label: "Contact Support",
      href: "/contact",
      external: false,
    },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/[0.08] bg-[#080D16] text-[#9AA8BA]">

      {/* =========================================================
          TECHNICAL GRID
      ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* =========================================================
          AMBIENT GLOWS
      ========================================================= */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#1677FF]/[0.07] blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/[0.05] blur-[100px]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative mx-auto max-w-[1750px] px-6 sm:px-8 lg:px-12">

        {/* =======================================================
            MAIN FOOTER CONTENT
        ======================================================= */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-12 md:gap-8 lg:py-14">

          {/* =====================================================
              BRAND
          ===================================================== */}
          <div className="md:col-span-5 lg:col-span-6">

            {/* Logo / Brand */}
            <a
              href="/"
              className="group inline-flex items-center gap-3"
            >
             <div className="flex items-center gap-4">
  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220]">
    <img
      src="dist/assets/decodep-logo-hd-transparent.png"
      alt="DECODEP Logo"
      className="h-50 w-50 object-contain"
    />
  </div>

  <span className="text-2xl font-bold tracking-[0.18em] text-white">
    DECODEP
  </span>
</div>
            </a>

            {/* Tagline */}
            <p className="mt-6 max-w-md text-[15px] leading-7 text-[#AAB7C8]">
              Decode ideas. Build what&apos;s next.
            </p>

            {/* Description */}
            <p className="mt-2 max-w-lg text-[12px] leading-6 text-[#64748B]">
              A technology ecosystem building digital solutions,
              empowering communities, and creating opportunities
              to learn, build and grow.
            </p>

            {/* =================================================
                SOCIAL ICONS
            ================================================= */}
            <div className="mt-7 flex items-center gap-2.5">

              {/* Instagram */}
              <a
                href="https://instagram.com/officialdecodep"
                target="_blank"
                rel="noreferrer"
                aria-label="DECODEP Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-[#1677FF]/40 hover:bg-[#1677FF]/10"
              >
                <Instagram
                  size={16}
                  strokeWidth={1.6}
                  className="text-[#8FA1B5] transition-colors group-hover:text-[#5EA0FF]"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/officialdecodep/"
                target="_blank"
                rel="noreferrer"
                aria-label="DECODEP LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-[#1677FF]/40 hover:bg-[#1677FF]/10"
              >
                <Linkedin
                  size={16}
                  strokeWidth={1.6}
                  className="text-[#8FA1B5] transition-colors group-hover:text-[#5EA0FF]"
                />
              </a>

              {/* Email */}
              <a
                href={`mailto:${DECODEP_EMAIL}`}
                aria-label="Email DECODEP"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-[#1677FF]/40 hover:bg-[#1677FF]/10"
              >
                <Mail
                  size={16}
                  strokeWidth={1.6}
                  className="text-[#8FA1B5] transition-colors group-hover:text-[#5EA0FF]"
                />
              </a>

              {/* Community */}
              <a
                href="/community"
                aria-label="DECODEP Community"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-[#1677FF]/40 hover:bg-[#1677FF]/10"
              >
                <MessageCircle
                  size={16}
                  strokeWidth={1.6}
                  className="text-[#8FA1B5] transition-colors group-hover:text-[#5EA0FF]"
                />
              </a>

            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}
          <div className="md:col-span-3 lg:col-span-3">

            <h4 className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[#42D7E8]">
              Navigation
            </h4>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-[13px] text-[#8FA1B5] transition-colors duration-200 hover:text-white"
                  >
                    <span>{item.label}</span>

                    {item.label === "Community" && (
                      <ArrowUpRight
                        size={12}
                        strokeWidth={1.6}
                        className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              CONNECT
          ===================================================== */}
          <div className="md:col-span-4 lg:col-span-3">

            <h4 className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[#42D7E8]">
              Connect
            </h4>

            <ul className="mt-5 space-y-3">
              {connectLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-[#8FA1B5] transition-colors duration-200 hover:text-white"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.5}
                      className="opacity-40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
        <div className="flex flex-col gap-4 border-t border-white/[0.09] py-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#64748B]">
            © {DECODEP_YEAR} {DECODEP_NAME}. All rights reserved.
          </p>

          {/* =====================================================
              ECOSYSTEM STATUS
          ===================================================== */}
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#53D6E4]">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#53D6E4] opacity-40" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#53D6E4]" />
            </span>

            <span>DECODEP Ecosystem Active</span>
          </div>

          {/* =====================================================
              LEGAL
          ===================================================== */}
          <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-[0.06em] text-[#64748B]">

            <a
              href="/privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;