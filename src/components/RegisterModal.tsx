import React, { useState } from 'react'
import { X, CheckCircle, Trophy, Calendar, Clock, AlertCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { initiatives } from '../data/initiatives'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const featuredInitiative = initiatives.find((item) => item.featured) ?? initiatives[0]
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    teamName: '',
    participationType: 'individual',
    skills: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName.trim() || !formData.email.trim()) return
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      teamName: '',
      participationType: 'individual',
      skills: '',
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-[#FAF8F5] text-[#10141D] rounded-sm max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#C59B27]/40 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Gold Foil Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C59B27] via-[#F7E7BD] to-[#C59B27]" />

        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-[#667588] hover:text-[#10141D] rounded-sm hover:bg-[#EDE5DA] focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 bg-[#FAF2DD] text-[#8F6B0A] border border-[#E8D39E] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-editorial-display font-bold uppercase tracking-tight text-[#10141D]">
                Registration Confirmed
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#556477] max-w-sm mx-auto leading-relaxed">
              Thank you for registering for <strong className="text-[#10141D] font-bold">{featuredInitiative.title}</strong>. Your entry has been recorded. Event details and problem release information will be sent via email.
            </p>

            <div className="p-4 bg-[#FAF2DD] rounded-lg text-xs text-[#556477] text-left space-y-1.5 border border-[#E8D39E]">
              <div className="font-bold text-[#10141D] uppercase text-[10px] tracking-wider border-b border-[#C59B27]/20 pb-1.5 font-mono">
                Event Details:
              </div>
              <div className="flex items-center justify-between">
                <span>Date:</span>
                <span className="font-semibold text-[#10141D]">{featuredInitiative.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Duration:</span>
                <span className="font-semibold text-[#10141D]">{featuredInitiative.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Prize Pool:</span>
                <span className="font-semibold text-[#C59B27]">{featuredInitiative.prize}</span>
              </div>
              <div className="text-[10px] text-[#718096] pt-1">
                * Problem statement will be revealed on event day.
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3 px-4 bg-[#10141D] hover:bg-[#C59B27] text-white font-bold rounded-lg transition-colors text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#C59B27]/10 text-[#9B7617] border border-[#C59B27]/30 text-[10px] font-editorial-mono font-semibold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5" />
                <span>{featuredInitiative.prize} • {featuredInitiative.entry}</span>
              </div>

              <h3 id="modal-title" className="text-2xl sm:text-3xl font-editorial-display font-bold uppercase tracking-tight text-[#10141D]">
                Register for {featuredInitiative.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-editorial-mono text-[#667588]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                  {featuredInitiative.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                  {featuredInitiative.duration}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-sm border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs font-editorial-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs font-editorial-sans"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs font-editorial-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                  Participation Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, participationType: 'individual' })}
                    className={`py-2.5 px-3 rounded-sm border text-xs font-editorial-mono font-bold uppercase tracking-wider transition-all ${
                      formData.participationType === 'individual'
                        ? 'border-[#C59B27] bg-[#C59B27]/15 text-[#10141D]'
                        : 'border-[#10141D]/15 bg-white text-[#667588] hover:bg-[#F3ECE2]'
                    }`}
                  >
                    Individual (1)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, participationType: 'team' })}
                    className={`py-2.5 px-3 rounded-sm border text-xs font-editorial-mono font-bold uppercase tracking-wider transition-all ${
                      formData.participationType === 'team'
                        ? 'border-[#C59B27] bg-[#C59B27]/15 text-[#10141D]'
                        : 'border-[#10141D]/15 bg-white text-[#667588] hover:bg-[#F3ECE2]'
                    }`}
                  >
                    Team of 2
                  </button>
                </div>
              </div>

              {formData.participationType === 'team' && (
                <div>
                  <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                    Team Name & Teammate Details
                  </label>
                  <input
                    type="text"
                    placeholder="Team Name and Teammate Name/Email"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs font-editorial-sans"
                  />
                </div>
              )}

              <div>
                <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                  Primary Technical Stack / Interests
                </label>
                <input
                  type="text"
                  placeholder="e.g. AI / Python, React, Mobile Apps, Full-Stack"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-sm border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs font-editorial-sans"
                />
              </div>

              <div className="flex items-start gap-2 p-3 bg-[#F3ECE2] rounded-sm text-[11px] font-editorial-mono text-[#526071] border border-[#10141D]/08">
                <AlertCircle className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                <span>
                  {featuredInitiative.problemStatement}. 100% Free Entry with cash prizes.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#10141D] hover:bg-[#C59B27] text-white font-bold rounded-lg transition-all shadow-sm text-xs uppercase tracking-wider"
              >
                Submit Registration — Free
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default RegisterModal
