import React, { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { brandData } from '../data/officialData'

type FormState = {
  name: string
  email: string
  phone: string
  category: string
  message: string
}

const resolveApiEndpoint = (path: string) => {
  const configuredBase =
    (import.meta.env.VITE_CONTACT_API_URL as string | undefined) ||
    (import.meta.env.VITE_API_URL as string | undefined)

  if (!configuredBase) return null

  const base = configuredBase.endsWith('/') ? configuredBase.slice(0, -1) : configuredBase
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${base}${normalizedPath}`
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    category: 'Business / Project',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitError('Please complete the required name, email and message fields.')
      return
    }

    const endpoint = resolveApiEndpoint('/contact')

    if (!endpoint) {
      setSubmitError('The contact API endpoint is not configured yet. Set VITE_CONTACT_API_URL or VITE_API_URL in your environment to enable live submission.')
      return
    }

    setIsSending(true)
    setSubmitError('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          category: form.category,
          message: form.message,
        }),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setIsSubmitted(true)
    } catch (error) {
      setSubmitError('We could not send your message right now. Please try again or contact DECODEP directly via email or phone.')
    } finally {
      setIsSending(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setSubmitError('')
    setForm({
      name: '',
      email: '',
      phone: '',
      category: 'Business / Project',
      message: '',
    })
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#10141D] pt-24 pb-20">
      {/* Hero */}
      <section className="border-b border-[#10141D]/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Contact & Inquiries</span>
          </div>

          <h1 className="font-editorial-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#10141D] tracking-tight">
            Get In Touch With DECODEP
          </h1>

          <p className="text-base sm:text-lg text-[#556477] max-w-2xl mx-auto leading-relaxed">
            Have an idea, project requirement, partnership proposal, or community inquiry? Connect with the DECODEP team through our direct channels.
          </p>
        </div>
      </section>

      {/* Cards & Form */}
      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Official Channels */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-[#10141D]/10 shadow-sm space-y-6">
              <div>
                <h2 className="font-editorial-display text-2xl font-bold uppercase text-[#10141D]">
                  Official Channels
                </h2>
                <p className="text-xs sm:text-sm text-[#556477] mt-1 leading-relaxed">
                  Direct contacts for engineering inquiries, business services, community registrations, and partnerships.
                </p>
              </div>

              {/* Direct List */}
              <div className="space-y-3 text-xs text-[#10141D] divide-y divide-[#10141D]/08">
                <a
                  href={`mailto:${brandData.email}`}
                  className="pt-3 flex items-center justify-between group hover:text-[#C59B27] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#718096] uppercase font-semibold">Email</div>
                      <div className="font-bold">{brandData.email}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C59B27] opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href={`tel:${brandData.phone.replace(/\s+/g, '')}`}
                  className="pt-3 flex items-center justify-between group hover:text-[#C59B27] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#718096] uppercase font-semibold">Phone</div>
                      <div className="font-bold">{brandData.phone}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C59B27] opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href="https://chat.whatsapp.com/KS1XKI8X5dT4Kuxt4uL1S4"
                  target="_blank"
                  rel="noreferrer"
                  className="pt-3 flex items-center justify-between group hover:text-[#C59B27] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] flex items-center justify-center">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#718096] uppercase font-semibold">WhatsApp Community</div>
                      <div className="font-bold">Builder Discussion Hub</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C59B27] opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href="https://www.linkedin.com/company/officialdecodep/"
                  target="_blank"
                  rel="noreferrer"
                  className="pt-3 flex items-center justify-between group hover:text-[#C59B27] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] flex items-center justify-center">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#718096] uppercase font-semibold">LinkedIn</div>
                      <div className="font-bold">DECODEP</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C59B27] opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href="https://www.instagram.com/officialdecodep"
                  target="_blank"
                  rel="noreferrer"
                  className="pt-3 flex items-center justify-between group hover:text-[#C59B27] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] flex items-center justify-center">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#718096] uppercase font-semibold">Instagram</div>
                      <div className="font-bold">@officialdecodep</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C59B27] opacity-60 group-hover:opacity-100" />
                </a>
              </div>

              {/* Status Indicator */}
              <div className="pt-3 border-t border-[#10141D]/10 flex items-center gap-2 text-xs text-[#556477]">
                <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
                <span>Available for client projects & community alliances</span>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#10141D]/10 shadow-sm">
              <div className="pb-4 border-b border-[#10141D]/10 mb-6">
                <h2 className="font-editorial-display text-2xl font-bold uppercase text-[#10141D]">
                  Send Us A Message
                </h2>
                <p className="text-xs sm:text-sm text-[#556477] mt-1">
                  Fill out the form below and our team will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-[#FAF0D6] text-[#8F6B0A] rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-editorial-display text-2xl font-bold uppercase text-[#10141D]">
                    Message Sent
                  </h3>
                  <p className="text-sm text-[#556477] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. The DECODEP team will contact you shortly via email or phone.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-[#10141D] hover:bg-[#C59B27] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#556477] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#556477] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#556477] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#556477] mb-1">
                        Inquiry Type
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#10141D]/15 bg-white text-[#10141D] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 text-sm"
                      >
                        <option value="Business / Project">Business / Client Project</option>
                        <option value="Community Collaboration">Community MoU / Partnership</option>
                        <option value="Hackathon / Event">Hackathon / Speaker Inquiry</option>
                        <option value="General Enquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#556477] mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirements, ideas, or proposal..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3 px-6 bg-[#10141D] hover:bg-[#C59B27] text-white font-bold rounded-lg transition-all shadow-sm text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSending ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}