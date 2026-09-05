import React, { useState } from 'react'
import type { AdminProfile } from '../../services/adminAuth'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

interface AdminLayoutProps {
  admin: AdminProfile
  isSigningOut: boolean
  onLogout: () => void
  children: React.ReactNode
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ admin, isSigningOut, onLogout, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-[#0F172A] lg:flex">
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="min-w-0 flex-1">
        <AdminHeader admin={admin} onMenuOpen={() => setIsSidebarOpen(true)} onLogout={onLogout} isSigningOut={isSigningOut} />
        {children}
      </div>
    </div>
  )
}

export default AdminLayout