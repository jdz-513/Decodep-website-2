import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const DECODEP_EMAIL = "officialdecodep@gmail.com";

type FormState = {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

type SocialLinkProps = {
  icon: React.ReactNode;
  platform: string;
  handle: string;
  href: string;
  last?: boolean;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    category: "Business / Project",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      return;
    }

    setIsSending(true);

    /*
      Connect your backend / email service here.

      Example:

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    */

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSending(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);

    setForm({
      name: "",
      email: "",
      phone: "",
      category: "Business / Project",
      message: "",
    });
  };

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#F5F9FA] text-[#080C12]"
      style={{
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      {/* =========================================================
          SECTION 01 — HERO
      ========================================================== */}

      <section className="relative flex min-h-[530px] items-center justify-center overflow-hidden px-6 pt-24 pb-12 sm:px-10 lg:min-h-[555px] lg:px-16">
        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.38]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(8,12,18,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8,12,18,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />

        {/* Ambient light */}
        <div className="pointer-events-none absolute left-[12%] top-[20%] h-[230px] w-[230px] rounded-full bg-[#54D8FF]/10 blur-[100px]" />

        <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-[250px] w-[250px] rounded-full bg-[#1677FF]/[0.06] blur-[110px]" />

        {/* Hero */}
        <div className="relative z-10 mx-auto w-full max-w-[1050px] text-center">
          <div className="mb-7 flex justify-center">
            <div
              className="inline-flex items-center gap-2.5 rounded-full border border-[#0A1017] bg-[#0A1017] px-5 py-2.5 text-[8px] font-semibold uppercase tracking-[0.25em] text-white shadow-[0_10px_28px_rgba(8,12,18,0.11)]"
              style={{ fontFamily: "monospace" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#54D8FF]/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#54D8FF]" />
              </span>

              Official Channels
            </div>
          </div>

          <h1
            className="text-[clamp(3.6rem,8vw,7.5rem)] font-normal leading-[0.83] tracking-[-0.065em]"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Get in Touch
            <br />

            <span className="italic text-[#1677FF]">
              With DECODEP.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[560px] text-[13px] leading-6 text-[#707C84]">
            Have an idea, project, collaboration, or opportunity in mind?
            Let&apos;s connect, exchange ideas, and build what&apos;s next.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            <HeroTag text="TECHNOLOGY" />
            <HeroTag text="COMMUNITY" />
            <HeroTag text="COLLABORATION" />
            <HeroTag text="OPPORTUNITIES" />
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#99A5AC]">
            <span className="h-px w-9 bg-[#CBD7DB]" />
            Start a conversation
            <span className="h-px w-9 bg-[#CBD7DB]" />
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 02 — PREMIUM CONTACT AREA
      ========================================================== */}

      <section className="relative px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[1120px]">

          {/* Small heading */}
          <div className="mb-7 flex items-end justify-between gap-5">
            <div>
              <p
                className="mb-2 text-[8px] font-semibold uppercase tracking-[0.24em] text-[#1677FF]"
                style={{ fontFamily: "monospace" }}
              >
                Direct Access
              </p>

              <h2
                className="text-[clamp(2.4rem,4vw,3.8rem)] font-normal leading-[0.9] tracking-[-0.06em]"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Let&apos;s make{" "}
                <span className="italic text-[#1677FF]">
                  contact count.
                </span>
              </h2>
            </div>
          </div>

          {/* =====================================================
              TWO SEPARATE COMPACT CARDS
          ====================================================== */}

          <div className="grid items-center gap-6 lg:grid-cols-[0.78fr_1fr] lg:gap-8">

            {/* ===================================================
                LEFT CARD
            ==================================================== */}

            <div
              className="group relative overflow-hidden rounded-[25px] border border-[#D5E5E9] shadow-[0_18px_50px_rgba(14,65,82,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(22,119,255,0.11)]"
              style={{
                background:
                  "linear-gradient(145deg, #FFFFFF 0%, #F7FCFD 48%, #1da7d2 100%)",
              }}
            >
              {/* Inner highlight */}
              <div className="pointer-events-none absolute inset-[1px] rounded-[24px] border border-white/70" />

              {/* Cyan glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#54D8FF]/20 blur-[70px] transition-all duration-700 group-hover:bg-[#54D8FF]/30" />

              {/* Blue glow */}
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#1677FF]/[0.06] blur-[70px]" />

              {/* Watermark */}
              <div
                className="pointer-events-none absolute right-[-5px] top-[-22px] select-none text-[135px] leading-none tracking-[-0.12em] text-[#0A1128]/[0.025]"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                D
              </div>

              <div className="relative z-10 p-7 sm:p-8">

                {/* Header */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#7D8991]"
                    style={{ fontFamily: "monospace" }}
                  >
                    CHANNELS 
                  </span>

                  <span
                    className="rounded-full border border-[#D8E6E9] bg-white/75 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.13em] text-[#74818A]"
                    style={{ fontFamily: "monospace" }}
                  >
                    Official
                  </span>
                </div>

                {/* Main */}
                <div className="mt-8">

                  <p
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1677FF]"
                    style={{ fontFamily: "monospace" }}
                  >
                    Communication
                  </p>

                  <h3
                    className="text-[clamp(2.4rem,4vw,3.6rem)] font-normal leading-[0.9] tracking-[-0.06em]"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    Find
                    <br />

                    <span className="italic text-[#1677FF]">
                      DECODEP.
                    </span>
                  </h3>

                  <p className="mt-4 max-w-[310px] text-[10px] leading-5 text-[#7A858D]">
                    Connect with our official channels for projects,
                    collaborations, community and opportunities.
                  </p>
                </div>

                {/* Social links */}
                <div className="mt-6 border-t border-[#DCE8EB]">

                  <SocialLink
                    icon={
                      <Instagram
                        size={15}
                        strokeWidth={1.5}
                      />
                    }
                    platform="Instagram"
                    handle="@officialdecodep"
                    href="https://www.instagram.com/officialdecodep"
                  />

                  <SocialLink
                    icon={
                      <Linkedin
                        size={15}
                        strokeWidth={1.5}
                      />
                    }
                    platform="LinkedIn"
                    handle="DECODEP"
                    href="https://www.linkedin.com/company/officialdecodep/"
                  />

                  <SocialLink
                    icon={
                      <Mail
                        size={15}
                        strokeWidth={1.5}
                      />
                    }
                    platform="Official Email"
                    handle={DECODEP_EMAIL}
                    href={`mailto:${DECODEP_EMAIL}`}
                  />

                  <SocialLink
                    icon={
                      <MessageCircle
                        size={15}
                        strokeWidth={1.5}
                      />
                    }
                    platform="WhatsApp"
                    handle="Direct Enquiries"
                    href="https://chat.whatsapp.com/KS1XKI8X5dT4Kuxt4uL1S4"
                    last
                  />

                </div>

                {/* Status */}
                <div className="mt-5 flex items-center gap-2 border-t border-[#DCE8EB] pt-4">

                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[#28B879]/50" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-[#28B879]" />
                  </span>

                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#71808A]"
                    style={{ fontFamily: "monospace" }}
                  >
                    Available for collaboration
                  </span>

                </div>
              </div>
            </div>

            {/* ===================================================
                RIGHT CARD
            ==================================================== */}

            <div
              className="group relative overflow-hidden rounded-[27px] border border-[#D2E3E7] shadow-[0_20px_55px_rgba(14,65,82,0.075)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(22,119,255,0.12)]"
              style={{
                background:
                  "linear-gradient(145deg, #FFFFFF 0%, #F5FBFC 52%, #e4e00bf0 100%)",
              }}
            >
              {/* Inner highlight */}
              <div className="pointer-events-none absolute inset-[1px] rounded-[26px] border border-white/80" />

              {/* Blue glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#54D8FF]/16 blur-[80px] transition-all duration-700 group-hover:bg-[#54D8FF]/25" />

              {/* Cyan glow */}
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#1677FF]/[0.055] blur-[80px]" />

              {/* Decorative ring */}
              <div className="pointer-events-none absolute right-[-65px] top-[75px] h-[190px] w-[190px] rounded-full border border-[#1677FF]/[0.05]" />

              <div className="relative z-10 p-7 sm:p-8 lg:p-9">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <span
                    className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#7D8991]"
                    style={{ fontFamily: "monospace" }}
                  >
                    CONVERSATION
                  </span>

                  <div className="flex items-center gap-2 rounded-full border border-[#D8E5E8] bg-white/80 px-2.5 py-1.5">

                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-[#28B879]/50" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-[#28B879]" />
                    </span>

                    <span
                      className="text-[7px] font-semibold uppercase tracking-[0.14em] text-[#71808A]"
                      style={{ fontFamily: "monospace" }}
                    >
                      Open
                    </span>

                  </div>
                </div>

                {/* Heading */}
                <div className="mt-8">

                  <p
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1677FF]"
                    style={{ fontFamily: "monospace" }}
                  >
                    Start a Conversation
                  </p>

                  <h3
                    className="text-[clamp(3rem,4vw,4rem)] font-normal leading-[0.89] tracking-[-0.06em]"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    Let&apos;s start
                    <br />

                    <span className="italic text-[#1677FF]">
                      something
                    </span>
                  </h3>

                  <p className="mt-4 max-w-[470px] text-[10px] leading-5 text-[#7A858D]">
                    Tell us what you&apos;re building, planning, or
                    exploring. We&apos;ll take it from there.
                  </p>
                </div>

                {/* Form */}
                {isSubmitted ? (
                  <SuccessState onReset={resetForm} />
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-7"
                  >

                    {/* Name + Email */}
                    <div className="grid gap-4 sm:grid-cols-2">

                      <LightInput
                        label="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />

                      <LightInput
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />

                    </div>

                    {/* Phone + Category */}
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">

                      <LightInput
                        label="Phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />

                      <div>
                        <label
                          className="mb-2 block text-[7px] font-semibold uppercase tracking-[0.18em] text-[#7D8991]"
                          style={{ fontFamily: "monospace" }}
                        >
                          Inquiry Topic
                        </label>

                        <div className="relative">

                          <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-lg border border-[#D6E2E6] bg-white px-3 py-2.5 pr-8 text-[10px] text-[#202932] outline-none transition-all duration-300 focus:border-[#1677FF] focus:shadow-[0_0_0_3px_rgba(22,119,255,0.05)]"
                          >
                            <option>
                              Business / Project
                            </option>

                            <option>
                              Community Collaboration
                            </option>

                            <option>
                              Hackathon / Event
                            </option>

                            <option>
                              General Enquiry
                            </option>
                          </select>

                          <ArrowUpRight
                            size={12}
                            className="pointer-events-none absolute right-3 top-3 rotate-45 text-[#89959D]"
                          />

                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mt-4">

                      <label
                        className="mb-2 block text-[7px] font-semibold uppercase tracking-[0.18em] text-[#7D8991]"
                        style={{ fontFamily: "monospace" }}
                      >
                        Message Details
                      </label>

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="How can we assist you?"
                        className="w-full resize-none rounded-lg border border-[#D6E2E6] bg-white px-3 py-2.5 text-[10px] leading-5 text-[#202932] outline-none transition-all duration-300 placeholder:text-[#A1ACB3] focus:border-[#1677FF] focus:shadow-[0_0_0_3px_rgba(22,119,255,0.05)]"
                      />

                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="group/send mt-5 flex min-h-[45px] w-full items-center justify-center gap-2 rounded-full bg-[#0A1017] px-6 text-[8px] font-bold uppercase tracking-[0.19em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1677FF] hover:shadow-[0_12px_28px_rgba(22,119,255,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSending ? (
                        <>
                          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending
                        </>
                      ) : (
                        <>
                          Send Message

                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.8}
                            className="transition-transform duration-300 group-hover/send:-translate-y-0.5 group-hover/send:translate-x-0.5"
                          />
                        </>
                      )}
                    </button>

                    {/* Footer */}
                    <div className="mt-3 flex items-center justify-between">
                      <span
                        className="text-[10px] uppercase tracking-[0.15em] text-[#98A4AA]"
                        style={{ fontFamily: "monospace" }}
                      >
                        DECODEP / DIRECT
                      </span>

                      <span
                        className="text-[10px] uppercase tracking-[0.15em] text-[#98A4AA]"
                        style={{ fontFamily: "monospace" }}
                      >
                        Response Channel
                      </span>
                    </div>

                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="mt-5 flex items-center justify-between px-1 text-[6px] uppercase tracking-[0.18em] text-[#A0ABB1]">
            <span>DECODEP — TECHNOLOGY × COMMUNITY</span>
            <span>BUILD • CONNECT • GROW</span>
          </div>

        </div>
      </section>
    </main>
  );
}

/* =============================================================
   SOCIAL LINK
============================================================= */

function SocialLink({
  icon,
  platform,
  handle,
  href,
  last = false,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group/social flex items-center justify-between py-3 transition-all duration-300 ${
        last ? "" : "border-b border-[#E2EAED]"
      }`}
    >
      <div className="flex items-center gap-3">

        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D9E5E8] bg-white/75 text-[#65727B] transition-all duration-300 group-hover/social:border-[#1677FF] group-hover/social:bg-[#1677FF] group-hover/social:text-white">
          {icon}
        </div>

        <div>
          <p className="text-[10px] font-semibold text-[#151C23] transition-colors duration-300 group-hover/social:text-[#1677FF]">
            {platform}
          </p>

          <p className="mt-0.5 text-[7px] text-[#8A959D]">
            {handle}
          </p>
        </div>
      </div>

      <div className="flex h-6 w-6 items-center justify-center rounded-full text-[#A1ACB3] transition-all duration-300 group-hover/social:bg-[#EEF7FA] group-hover/social:text-[#1677FF]">
        <ArrowUpRight
          size={12}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5"
        />
      </div>
    </a>
  );
}

/* =============================================================
   LIGHT INPUT
============================================================= */

function LightInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: InputProps) {
  return (
    <div>
      <label
        className="mb-2 block text-[7px] font-semibold uppercase tracking-[0.18em] text-[#7D8991]"
        style={{ fontFamily: "monospace" }}
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-[#D6E2E6] bg-white px-3 py-2.5 text-[10px] text-[#202932] outline-none transition-all duration-300 placeholder:text-[#A1ACB3] focus:border-[#1677FF] focus:shadow-[0_0_0_3px_rgba(22,119,255,0.05)]"
      />
    </div>
  );
}

/* =============================================================
   HERO TAG
============================================================= */

function HeroTag({ text }: { text: string }) {
  return (
    <span
      className="rounded-full border border-[#D7E3E7] bg-white/80 px-3.5 py-1.5 text-[7px] font-semibold tracking-[0.16em] text-[#71808A] backdrop-blur-sm"
      style={{ fontFamily: "monospace" }}
    >
      {text}
    </span>
  );
}

/* =============================================================
   SUCCESS STATE
============================================================= */

function SuccessState({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="mt-7 flex min-h-[270px] flex-col items-center justify-center border-t border-[#DCE7EA] pt-7 text-center">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#CBECDD] bg-[#F2FCF7]">
        <Check
          size={21}
          strokeWidth={1.7}
          className="text-[#22A86A]"
        />
      </div>

      <p
        className="text-[7px] font-semibold uppercase tracking-[0.22em] text-[#22A86A]"
        style={{ fontFamily: "monospace" }}
      >
        Message Dispatched
      </p>

      <h3
        className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[0.92] tracking-[-0.055em]"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        Thanks for
        <br />

        <span className="italic text-[#1677FF]">
          reaching out.
        </span>
      </h3>

      <p className="mt-4 max-w-[320px] text-[10px] leading-5 text-[#7C878F]">
        Your message has been received. The DECODEP team will
        get back to you soon.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 rounded-full border border-[#D1DEE2] px-4 py-2 text-[7px] font-semibold uppercase tracking-[0.16em] text-[#69767F] transition-all duration-300 hover:border-[#1677FF] hover:text-[#1677FF]"
      >
        Send Another Message
      </button>
    </div>
  );
}