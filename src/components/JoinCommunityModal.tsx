import React, { useState } from 'react'
import { X, CheckCircle, Users, Send, Sparkles } from 'lucide-react'
import { brandData, communityData } from '../data/officialData'

interface JoinCommunityModalProps {
  isOpen: boolean
  onClose: () => void
}

export const JoinCommunityModal: React.FC<JoinCommunityModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student / Developer',
    interests: '',
    city: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim()) return
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      role: 'Student / Developer',
      interests: '',
      city: '',
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-[#FAF8F5] text-[#10141D] rounded-sm max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#C59B27]/40 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-modal-title"
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
                Welcome to DECODEP
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#556477] max-w-sm mx-auto leading-relaxed">
              You are now enrolled in the <strong className="text-[#10141D] font-bold">DECODEP Developer Community</strong>. You will receive updates on upcoming hackathons, technical workshops, collaborative builds, and mentorship sessions.
            </p>

            <div className="p-4 bg-[#FAF2DD] rounded-lg text-xs text-[#556477] text-left space-y-1.5 border border-[#E8D39E]">
              <div className="font-bold text-[#10141D] uppercase text-[10px] tracking-wider border-b border-[#C59B27]/20 pb-1.5 font-mono">
                Community Pillars:
              </div>
              <div>{communityData.pillars.map((p) => p.title).join(' • ')}</div>
              <div>1000+ Students, Developers & Innovators</div>
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
                <Users className="w-3.5 h-3.5" />
                <span>1000+ BUILDERS • GLOBAL NETWORK</span>
              </div>

              <h3 id="join-modal-title" className="text-2xl sm:text-3xl font-editorial-display font-bold uppercase tracking-tight text-[#10141D]">
                Join DECODEP Community
              </h3>

              <p className="text-xs font-editorial-serif text-[#526071] leading-relaxed">
                Connect with passionate developers, students, mentors, and innovators. Learn through workshops, build real systems, and grow together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Developer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-sm border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs font-editorial-sans"
                />
              </div>

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                    Your Profile
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-[#10141D]/15 bg-white text-[#10141D] focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs font-editorial-sans"
                  >
                    <option value="Student / Developer">Student / Developer</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Mentor / Speaker">Mentor / Speaker</option>
                    <option value="Tech Enthusiast">Tech Enthusiast</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                    Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Erode, Chennai, Remote"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs font-editorial-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-editorial-mono font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                  Primary Technical Interests
                </label>
                <input
                  type="text"
                  placeholder="e.g. AI, Full-Stack Web, Mobile Apps, Hackathons"
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-sm border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs font-editorial-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#10141D] hover:bg-[#C59B27] text-white font-bold rounded-lg transition-all shadow-sm text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Join Community</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default JoinCommunityModal
