import React, { useEffect, useState } from 'react'
import { Activity, BriefcaseBusiness, FileText, Handshake, Image, Lightbulb, Mail, ShieldCheck, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AdminLayout from '../components/admin/AdminLayout'
import AdminStatCard from '../components/admin/AdminStatCard'
import AdminCurrentUpdates from '../components/admin/AdminCurrentUpdates'
import AdminMoments from '../components/admin/AdminMoments'
import AdminCollaborations from '../components/admin/AdminCollaborations'
import AdminInitiatives from '../components/admin/AdminInitiatives'
import AdminContactMessages from '../components/admin/AdminContactMessages'
import AdminServiceRequests from '../components/admin/AdminServiceRequests'
import { getAuthorizedAdmin, getCurrentUser, signOutAdmin, type AdminProfile } from '../services/adminAuth'
import { getAdminOverviewCounts, type AdminOverviewCounts } from '../services/adminDashboard'

export const Admin: React.FC = () => {
  const navigate = useNavigate()
  const [admin, setAdmin] = useState<AdminProfile | null>(null)
  const [counts, setCounts] = useState<AdminOverviewCounts | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [isSigningOut, setIsSigningOut] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadDashboard = async () => {
      try {
        const user = await getCurrentUser()
        if (!user) throw new Error('No authenticated user.')

        const authorizedAdmin = await getAuthorizedAdmin(user.id)
        if (!authorizedAdmin) throw new Error('Administrator authorization is unavailable.')

        const overviewCounts = await getAdminOverviewCounts()
        if (isMounted) {
          setAdmin(authorizedAdmin)
          setCounts(overviewCounts)
        }
      } catch {
        if (isMounted) setLoadError('We could not load the administrator workspace. Please refresh and try again.')
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    void loadDashboard()

    return () => {
      isMounted = false
    }
  }, [])

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await signOutAdmin()
    } finally {
      navigate('/admin/login', { replace: true })
      setIsSigningOut(false)
    }
  }

  if (isLoading) {
    return <main className="min-h-screen bg-slate-50 px-6 py-24 text-center text-xs font-mono uppercase tracking-wider text-slate-500">Loading admin workspace...</main>
  }

  if (!admin || !counts) {
    return <main className="min-h-screen bg-slate-50 px-6 py-24 text-center text-sm text-slate-600">{loadError || 'Administrator workspace unavailable.'}</main>
  }

  const stats = [
    { label: 'Current Updates', value: counts.currentUpdates, icon: FileText, accent: 'bg-blue-50 text-[#1677FF]' },
    { label: 'Moments', value: counts.moments, icon: Image, accent: 'bg-violet-50 text-violet-600' },
    { label: 'Collaborations', value: counts.collaborations, icon: Handshake, accent: 'bg-amber-50 text-amber-700' },
    { label: 'Initiatives', value: counts.initiatives, icon: Lightbulb, accent: 'bg-emerald-50 text-emerald-700' },
    { label: 'Challenges', value: counts.challenges, icon: Trophy, accent: 'bg-rose-50 text-rose-600' },
    { label: 'New Contact Messages', value: counts.newContactMessages, icon: Mail, accent: 'bg-cyan-50 text-cyan-700' },
    { label: 'New Service Requests', value: counts.newServiceRequests, icon: BriefcaseBusiness, accent: 'bg-orange-50 text-orange-700' },
  ]

  return (
    <AdminLayout admin={admin} onLogout={handleSignOut} isSigningOut={isSigningOut}>
      <main className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <section className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1677FF]">Overview</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#0F172A] sm:text-3xl">Good to see you, DECODEP.</h2>
              <p className="mt-1 text-sm text-slate-500">A focused view of your connected ecosystem content.</p>
            </div>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 sm:self-auto">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{admin.role}</span>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => <AdminStatCard key={stat.label} {...stat} />)}
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1677FF]">Monitor</p>
                  <h3 className="mt-1 text-lg font-black tracking-tight text-[#0F172A]">Recent Activity</h3>
                </div>
                <Activity className="h-5 w-5 text-slate-300" />
              </div>
              <div className="flex min-h-28 items-center justify-center text-center text-sm text-slate-500">
                Activity insights will appear here once connected.
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1677FF]">Identity</p>
              <h3 className="mt-1 text-lg font-black tracking-tight text-[#0F172A]">Administrator Profile</h3>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Email</span>
                  <span className="max-w-[65%] truncate font-semibold text-[#0F172A]">{admin.email}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-500">Role</span>
                  <span className="font-mono text-xs font-bold uppercase text-[#1677FF]">{admin.role}</span>
                </div>
              </div>
            </div>
          </section>

          <AdminCurrentUpdates />
          <AdminMoments />
          <AdminCollaborations />
          <AdminInitiatives />
          <AdminContactMessages />
          <AdminServiceRequests />
        </div>
      </main>
    </AdminLayout>
  )
}

export default Admin