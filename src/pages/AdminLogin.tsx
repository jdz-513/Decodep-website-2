import React, { useState } from 'react'
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { signInAdmin } from '../services/adminAuth'

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      await signInAdmin(email.trim(), password)
      navigate('/admin', { replace: true })
    } catch {
      setErrorMessage('Unable to verify administrator credentials. Check your details or access authorization.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#10141D] pt-24 pb-20 px-6 flex items-center">
      <section className="w-full max-w-md mx-auto">
        <div className="bg-white border border-[#10141D]/10 rounded-xl shadow-sm p-7 sm:p-9">
          <div className="flex items-center justify-between mb-8">
            <div className="w-11 h-11 rounded-lg bg-[#FAF2DD] border border-[#E8D39E] text-[#8F6B0A] flex items-center justify-center">
              <LockKeyhole className="w-5 h-5" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#8F6B0A]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Authorized access only</span>
            </div>
          </div>

          <div className="space-y-2 mb-7">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">DECODEP CONTROL</p>
            <h1 className="font-editorial-display text-3xl font-black uppercase tracking-tight text-[#10141D]">
              Administrator Login
            </h1>
            <p className="text-sm text-[#556477] leading-relaxed">
              Sign in with an authorized DECODEP administrator account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-email" className="block text-xs font-semibold uppercase tracking-wider text-[#556477] mb-1">
                Email Address
              </label>
              <input
                id="admin-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 text-sm"
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="block text-xs font-semibold uppercase tracking-wider text-[#556477] mb-1">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#10141D]/15 bg-white text-[#10141D] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 text-sm"
              />
            </div>

            {errorMessage && (
              <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#10141D] hover:bg-[#C59B27] text-white font-bold rounded-lg transition-all shadow-sm text-xs uppercase tracking-wider disabled:opacity-60"
            >
              <span>{isSubmitting ? 'Verifying Access...' : 'Sign In Securely'}</span>
              {!isSubmitting && <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default AdminLogin