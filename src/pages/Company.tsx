import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, CheckCircle2, Cpu, Globe, Smartphone, Layers } from 'lucide-react'
import { brandData, whatWeDoCompany, howWeWorkSteps } from '../data/officialData'
import { submitServiceRequest } from '../services/privateForms'

const serviceIcons = [Cpu, Globe, Smartphone, Layers]

const serviceOptions = [
  'AI Solutions',
  'Web Development',
  'App Development',
  'Digital Solutions',
  'Community Partnership',
  'Other',
]

export const Company: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AI Solutions',
    projectDetails: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.service.trim() || !form.projectDetails.trim()) {
      setSubmitError('Please fill in your name, email, and project details.')
      return
    }

    setIsSending(true)
    setSubmitError('')

    try {
      await submitServiceRequest({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        service: form.service,
        projectDetails: form.projectDetails.trim(),
      })

      setIsSubmitted(true)
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'AI Solutions',
        projectDetails: '',
      })
    } catch (error) {
      setSubmitError('We could not send your service request right now. Please try again or contact DECODEP directly via email or phone.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111827] pt-24 pb-16">
      
      {/* 01 — HERO */}
      <section className="border-b border-[#111827]/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-semibold uppercase tracking-wider font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Technology Venture</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111827]">
          DECODEP Tech
        </h1>

        <p className="font-serif text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
          A technology-focused venture dedicated to building practical digital solutions across Artificial Intelligence, Web Development, App Development, and emerging technologies.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#6B7280] pt-1">
          <div className="inline-flex items-center gap-1.5 font-semibold text-[#111827]">
            <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
            <span>{brandData.registration.status}</span>
          </div>
          <span>•</span>
          <span>{brandData.registration.type}</span>
          <span>•</span>
          <span>Tamil Nadu, India</span>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#111827] hover:bg-[#C59B27] hover:text-[#0D1117] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm cursor-pointer"
          >
            Explore Services
          </button>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-[#F2EFE8] text-[#111827] font-mono text-xs font-bold uppercase tracking-wider rounded-md border border-[#111827]/15 transition-colors"
          >
            Start a Discussion
          </Link>
        </div>
      </section>

      {/* 02 — BUSINESS & REGISTRATION STATUS */}
      <section className="border-b border-[#111827]/10 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Legal Transparency
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#111827]">
              Business & Registration
            </h2>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] rounded-md font-mono text-xs font-semibold">
                {brandData.registration.status} • {brandData.registration.type}
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 font-serif text-sm sm:text-base text-[#4B5563] leading-relaxed">
            <p className="text-base sm:text-lg text-[#111827] font-serif">
              {brandData.registration.description}
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#111827]/10">
                <span className="text-[#6B7280] block text-[10px] uppercase">Entity Type</span>
                <span className="font-bold text-[#111827] mt-1 block">{brandData.registration.type}</span>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#111827]/10">
                <span className="text-[#6B7280] block text-[10px] uppercase">Government Registry</span>
                <span className="font-bold text-[#111827] mt-1 block">{brandData.registration.status}</span>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#111827]/10">
                <span className="text-[#6B7280] block text-[10px] uppercase">Headquarters</span>
                <span className="font-bold text-[#111827] mt-1 block">Erode, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — SERVICES (WHAT WE DO) */}
      <section id="services" className="border-b border-[#111827]/10 px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="space-y-2 pb-4 border-b border-[#111827]/10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#111827]">
              What We Do
            </h2>
            <p className="font-serif text-sm text-[#4B5563] max-w-2xl leading-relaxed">
              {whatWeDoCompany.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDoCompany.services.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length]
              return (
                <div
                  key={service.id}
                  className="bg-white p-7 rounded-xl border border-[#111827]/10 space-y-5 flex flex-col justify-between shadow-xs hover:border-[#C59B27]/50 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] rounded text-xs font-mono font-bold uppercase">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{service.tag}</span>
                      </div>
                      <span className="font-mono text-xs text-[#9CA3AF]">0{idx + 1}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#111827]">
                      {service.title}
                    </h3>

                    <p className="font-serif text-sm text-[#4B5563] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#111827]/08">
                    {service.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded text-xs font-mono text-[#374151] bg-[#FAF8F5] border border-[#111827]/10"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 04 — HOW WE WORK */}
      <section className="border-b border-[#111827]/10 bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Engineering Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#111827]">
              How We Work
            </h2>
            <p className="font-serif text-sm text-[#4B5563] leading-relaxed">
              We start by understanding the problem deeply, explore the right technology, design a practical solution, build with care, and continuously improve through real-world feedback.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#111827]/08">
            {howWeWorkSteps.map((step) => (
              <div key={step.step} className="py-5 grid grid-cols-[48px_1fr] gap-4 items-start">
                <span className="font-mono text-sm font-bold text-[#C59B27] bg-[#FAF2DD] border border-[#E8D39E] w-9 h-9 rounded-md flex items-center justify-center">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-[#111827]">
                    {step.title}
                  </h3>
                  <p className="font-serif text-sm text-[#4B5563] mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05 — PROJECT DISCUSSION CTA */}
      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-5 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] text-xs font-semibold uppercase tracking-wider font-mono">
            <span>Client Services</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#111827]">
            Build Practical Digital Solutions
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            Have a project or technology requirement? Discuss your objectives with our engineering team to architect reliable, modern digital solutions.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111827] hover:bg-[#C59B27] hover:text-[#0D1117] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm"
            >
              <span>Start a Project Discussion</span>
              <ArrowRight className="w-4 h-4 text-[#C59B27]" />
            </Link>
            <Link
              to="/proposals"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-[#F2EFE8] text-[#111827] font-mono text-xs font-bold uppercase tracking-wider rounded-md border border-[#111827]/15 transition-colors"
            >
              <span>Purpose Collaboration</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 06 — CLIENT SERVICE REQUEST */}
      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 border-t border-[#111827]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
              Service Request
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#111827]">
              Share Your Project Brief
            </h2>
          </div>

          {isSubmitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
              <p className="font-display text-2xl font-black uppercase text-[#111827]">Request Submitted</p>
              <p className="mt-2 font-serif text-sm text-[#4B5563]">
                Thanks for sharing your project details. DECODEP will review the request and follow up through the contact information provided.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl border border-[#111827]/10 bg-[#FAF8F5] p-6 sm:p-8">
              <div>
                <label className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                  Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#111827]/15 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#111827]/15 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#111827]/15 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                  Company / Organization
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#111827]/15 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
                  placeholder="Your organization"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                  Service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#111827]/15 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                  Project Details / Message *
                </label>
                <textarea
                  name="projectDetails"
                  rows={5}
                  value={form.projectDetails}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-[#111827]/15 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
                  placeholder="Tell us about your product, scope, goals, timeline, or the kind of problem you want to solve."
                />
              </div>

              {submitError && (
                <div className="md:col-span-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                  {submitError}
                </div>
              )}

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#111827] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#C59B27] hover:text-[#0D1117] disabled:opacity-60"
                >
                  {isSending ? 'Sending Request...' : 'Submit Service Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

    </main>
  )
}

export default Company