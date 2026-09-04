import React, { useState } from 'react'
import { X, CheckCircle, Trophy, Calendar, Clock, AlertCircle } from 'lucide-react'
import { currentInitiative } from '../data/officialData'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
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
        className="relative bg-[#0D1728] text-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-[#9AA8BA] hover:text-white rounded-full hover:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-[#1677FF]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
              Registration Received
            </h3>
            <p className="text-xs sm:text-sm text-[#9AA8BA] max-w-sm mx-auto leading-relaxed">
              Thank you for registering for <strong className="text-white">{currentInitiative.title}</strong>. We have recorded your submission. You will receive event day access instructions via email.
            </p>
            <div className="p-4 bg-[#07111F] rounded-xl text-xs text-[#9AA8BA] text-left space-y-1.5 border border-white/10 font-mono">
              <div className="font-semibold text-white uppercase text-[11px]">Event Verification:</div>
              <div>📅 Date: {currentInitiative.date}</div>
              <div>⏱️ Duration: {currentInitiative.duration}</div>
              <div>🏆 Prize Pool: {currentInitiative.prize}</div>
              <div>💡 Note: {currentInitiative.problemStatement}</div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="w-full mt-4 py-3 px-4 bg-[#1677FF] hover:bg-[#388BFF] text-white font-semibold rounded-xl transition-colors text-xs uppercase tracking-wider font-mono"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#F5B72C]/15 text-[#F5B72C] border border-[#F5B72C]/30 mb-3">
                <Trophy className="w-3.5 h-3.5" />
                <span>{currentInitiative.prize} • {currentInitiative.entry}</span>
              </div>
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                Register for {currentInitiative.title}
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono text-[#9AA8BA] mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#1677FF]" />
                  {currentInitiative.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#1677FF]" />
                  {currentInitiative.duration}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#07111F] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#1677FF] text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#07111F] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#1677FF] text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#07111F] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#1677FF] text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                  Participation Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-xs font-medium transition-all ${
                      formData.participationType === 'individual'
                        ? 'border-[#1677FF] bg-[#1677FF]/15 text-white font-semibold'
                        : 'border-white/10 bg-[#07111F] text-[#9AA8BA] hover:bg-white/[0.03]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="participationType"
                      value="individual"
                      checked={formData.participationType === 'individual'}
                      onChange={() => setFormData({ ...formData, participationType: 'individual' })}
                      className="sr-only"
                    />
                    <span>Individual</span>
                  </label>
                  <label
                    className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-xs font-medium transition-all ${
                      formData.participationType === 'team'
                        ? 'border-[#1677FF] bg-[#1677FF]/15 text-white font-semibold'
                        : 'border-white/10 bg-[#07111F] text-[#9AA8BA] hover:bg-white/[0.03]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="participationType"
                      value="team"
                      checked={formData.participationType === 'team'}
                      onChange={() => setFormData({ ...formData, participationType: 'team' })}
                      className="sr-only"
                    />
                    <span>Team of 2</span>
                  </label>
                </div>
              </div>

              {formData.participationType === 'team' && (
                <div>
                  <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                    Team Name & Teammate Details
                  </label>
                  <input
                    type="text"
                    placeholder="Team Name & Teammate Name/Email"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#07111F] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#1677FF] text-xs"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                  Primary Technical Interests / Stack
                </label>
                <input
                  type="text"
                  placeholder="e.g. React, Python, AI, Full Stack, Mobile"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#07111F] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#1677FF] text-xs"
                />
              </div>

              <div className="flex items-start gap-2 p-3 bg-[#07111F] rounded-lg text-xs text-[#9AA8BA] border border-white/10">
                <AlertCircle className="w-4 h-4 text-[#F5B72C] flex-shrink-0 mt-0.5" />
                <span>
                  {currentInitiative.problemStatement}. Participation is 100% free with cash awards for winning solutions.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#F5B72C] hover:bg-[#FCD34D] text-[#07111F] font-bold rounded-xl transition-all shadow-md active:scale-98 text-xs uppercase tracking-wider font-mono"
              >
                Submit Free Registration
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default RegisterModal
