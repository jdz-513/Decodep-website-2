import React from 'react'
import type { LucideIcon } from 'lucide-react'

interface AdminStatCardProps {
  label: string
  value: number | null
  icon: LucideIcon
  accent: string
}

export const AdminStatCard: React.FC<AdminStatCardProps> = ({ label, value, icon: Icon, accent }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="truncate text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">{label}</p>
        <p className="mt-2 text-2xl font-black tracking-tight text-[#0F172A]">
          {value === null ? 'Not connected' : value}
        </p>
      </div>
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent}`}>
        <Icon className="h-4 w-4" />
      </div>
    </div>
  </div>
)

export default AdminStatCard