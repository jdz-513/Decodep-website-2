import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  Handshake,
  Image,
  Lightbulb,
  Mail,
  Settings,
  Trophy,
  X,
} from 'lucide-react'

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { label: 'Overview', icon: BarChart3, active: true },
  { label: 'Current Updates', icon: FileText, available: true },
  { label: 'Moments', icon: Image, available: true },
  { label: 'Collaborations', icon: Handshake, available: true },
  { label: 'Initiatives', icon: Lightbulb, available: true },
  { label: 'Challenges', icon: Trophy },
  { label: 'Messages', icon: Mail, available: true },
  { label: 'Service Requests', icon: BriefcaseBusiness, available: true },
]

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close admin navigation"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:static lg:z-auto lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-5">
          <Link to="/admin" onClick={onClose} className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F172A] text-xs font-black text-white">D</div>
            <div>
              <div className="text-sm font-black tracking-tight text-[#0F172A]">DECODEP</div>
              <div className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-[#1677FF]">Admin Control</div>
            </div>
          </Link>
          <button type="button" onClick={onClose} aria-label="Close admin navigation" className="rounded-md p-2 text-slate-500 hover:bg-slate-100 lg:hidden">
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          <p className="px-3 pb-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Workspace</p>
          {navigation.map(({ label, icon: Icon, active, available }) => {
            const isActive = active && location.pathname === '/admin'
            return (
              <div key={label} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${isActive ? 'bg-blue-50 font-semibold text-[#1677FF]' : 'text-slate-500'}`}>
                <Icon className="h-4 w-4 shrink-0" />
                <span className="min-w-0 flex-1 truncate">{label}</span>
                {!active && !available && <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Soon</span>}
                {isActive && <ChevronRight className="h-3.5 w-3.5" />}
              </div>
            )
          })}
        </nav>

        <div className="border-t border-slate-200 p-3">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-500">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
            <span className="ml-auto text-[9px] font-mono uppercase tracking-wider text-slate-400">Soon</span>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
            <Boxes className="h-3.5 w-3.5" />
            <span>Phase 3 foundation</span>
          </div>
        </div>
      </aside>
    </>
  )
}

export default AdminSidebar