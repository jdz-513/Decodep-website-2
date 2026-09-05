import React from 'react'
import { LogOut, Menu, ShieldCheck } from 'lucide-react'
import type { AdminProfile } from '../../services/adminAuth'

interface AdminHeaderProps {
  admin: AdminProfile
  onMenuOpen: () => void
  onLogout: () => void
  isSigningOut: boolean
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ admin, onMenuOpen, onLogout, isSigningOut }) => (
  <header className="flex min-h-20 items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
    <div className="flex items-center gap-3">
      <button type="button" onClick={onMenuOpen} aria-label="Open admin navigation" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden">
        <Menu className="h-4 w-4" />
      </button>
      <div>
        <p className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[#1677FF]">DECODEP ADMIN</p>
        <h1 className="mt-0.5 text-lg font-black tracking-tight text-[#0F172A]">Control Center</h1>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <div className="hidden items-center gap-2 text-right sm:flex">
        <div>
          <p className="max-w-[220px] truncate text-xs font-semibold text-[#0F172A]">{admin.email}</p>
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">{admin.role}</p>
        </div>
        <ShieldCheck className="h-4 w-4 text-[#1677FF]" />
      </div>
      <button type="button" onClick={onLogout} disabled={isSigningOut} aria-label="Log out" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-60">
        <LogOut className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{isSigningOut ? 'Signing out...' : 'Logout'}</span>
      </button>
    </div>
  </header>
)

export default AdminHeader