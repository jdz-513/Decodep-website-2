import React, { useState } from 'react'
import { X, CheckCircle, Users, Send } from 'lucide-react'
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
        className="relative bg-[#0D1728] text-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-modal-title"
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
            <div className="w-16 h-16 bg-[#1677FF]/15 text-[#1677FF] border border-[#1677FF]/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
              Welcome to the Community
            </h3>
            <p className="text-xs sm:text-sm text-[#9AA8BA] max-w-sm mx-auto leading-relaxed">
              You have successfully registered for the <strong className="text-white">DECODEP Community</strong>. You will receive updates about upcoming hackathons, technical workshops, and collaboration opportunities.
            </p>
            <div className="p-4 bg-[#07111F] rounded-xl text-xs text-[#9AA8BA] text-left space-y-1.5 border border-white/10 font-mono">
              <div className="font-semibold text-white uppercase text-[11px]">Community Focus:</div>
              <div>✨ {communityData.pillars.map((p) => p.title).join(' • ')}</div>
              <div>🌐 Real-world technical events & challenges</div>
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#1677FF]/15 text-[#1677FF] border border-[#1677FF]/30 mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>DECODEP Developer Ecosystem</span>
              </div>
              <h3 id="join-modal-title" className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                Join DECODEP Community
              </h3>
              <p className="text-xs text-[#9AA8BA] mt-2">
                Connect with students, developers, and tech enthusiasts. Learn, build, and grow together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#07111F] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#1677FF] text-xs"
                />
              </div>

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                    Your Profile
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#07111F] text-white focus:outline-none focus:ring-1 focus:ring-[#1677FF] text-xs"
                  >
                    <option value="Student / Developer" className="bg-[#0D1728]">Student / Developer</option>
                    <option value="Working Professional" className="bg-[#0D1728]">Working Professional</option>
                    <option value="Mentor / Speaker" className="bg-[#0D1728]">Mentor / Speaker</option>
                    <option value="Tech Enthusiast" className="bg-[#0D1728]">Tech Enthusiast</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                    Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Erode, Chennai, Remote"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#07111F] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#1677FF] text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#9AA8BA] mb-1">
                  Areas of Interest
                </label>
                <input
                  type="text"
                  placeholder="e.g. AI, Web Development, Mobile Apps, Hackathons"
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#07111F] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#1677FF] text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#1677FF] hover:bg-[#388BFF] text-white font-bold rounded-xl transition-all shadow-md active:scale-98 text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2"
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
