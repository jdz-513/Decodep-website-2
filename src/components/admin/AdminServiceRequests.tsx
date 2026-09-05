import React, { useEffect, useState } from 'react'
import { BriefcaseBusiness, Check, Eye, Trash2, X } from 'lucide-react'
import {
  deleteServiceRequest,
  getAdminServiceRequests,
  updateServiceRequestStatus,
  type AdminServiceRequest,
  type ServiceRequestStatus,
} from '../../services/adminServiceRequests'

const statuses: ServiceRequestStatus[] = ['NEW', 'IN_REVIEW', 'CONTACTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED']

export const AdminServiceRequests: React.FC = () => {
  const [requests, setRequests] = useState<AdminServiceRequest[]>([])
  const [selected, setSelected] = useState<AdminServiceRequest | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [actionId, setActionId] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    let isMounted = true
    getAdminServiceRequests()
      .then((records) => { if (isMounted) setRequests(records) })
      .catch((error) => {
        console.error('[DECODEP ADMIN SERVICE REQUESTS]', error)
        if (isMounted) setErrorMessage('Unable to load service requests. Check your administrator access and try again.')
      })
      .finally(() => { if (isMounted) setIsLoading(false) })
    return () => { isMounted = false }
  }, [])

  const handleStatusChange = async (request: AdminServiceRequest, status: ServiceRequestStatus) => {
    setActionId(request.id)
    setErrorMessage('')
    setNotice('')
    try {
      const updated = await updateServiceRequestStatus(request.id, status)
      setRequests((previous) => previous.map((item) => item.id === updated.id ? updated : item))
      setSelected(updated)
      setNotice('Service request status updated.')
    } catch (error) {
      console.error('[DECODEP ADMIN SERVICE REQUESTS]', error)
      setErrorMessage('The service request status could not be updated.')
    } finally {
      setActionId(null)
    }
  }

  const handleDelete = async (request: AdminServiceRequest) => {
    if (!window.confirm(`Delete the service request from "${request.name}"? This cannot be undone.`)) return
    setActionId(request.id)
    setErrorMessage('')
    setNotice('')
    try {
      await deleteServiceRequest(request.id)
      setRequests((previous) => previous.filter((item) => item.id !== request.id))
      setSelected(null)
      setNotice('Service request deleted.')
    } catch (error) {
      console.error('[DECODEP ADMIN SERVICE REQUESTS]', error)
      setErrorMessage('The service request could not be deleted.')
    } finally {
      setActionId(null)
    }
  }

  return (
    <section id="service-requests" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4"><div><p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1677FF]">Private pipeline</p><h3 className="mt-1 text-lg font-black tracking-tight text-[#0F172A]">Service Requests</h3></div><BriefcaseBusiness className="h-5 w-5 text-slate-300" /></div>
      {notice && <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700"><Check className="h-3.5 w-3.5" />{notice}</div>}
      {errorMessage && <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{errorMessage}</div>}
      <div className="mt-5 space-y-3">
        {isLoading ? <p className="py-8 text-center text-sm text-slate-500">Loading service requests...</p> : requests.length === 0 ? <p className="py-8 text-center text-sm text-slate-500">No service requests yet.</p> : requests.map((request) => (
          <div key={request.id} className="grid grid-cols-1 gap-3 rounded-lg border border-slate-100 p-4 sm:grid-cols-[minmax(0,1.4fr)_auto_auto] sm:items-center"><div className="min-w-0"><p className="truncate text-sm font-bold text-[#0F172A]">{request.name}</p><p className="mt-1 truncate text-xs text-slate-500">{request.service}{request.company ? ` · ${request.company}` : ''}</p><p className="mt-1 text-[10px] text-slate-400">{new Date(request.created_at).toLocaleString()}</p></div><span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">{request.status}</span><div className="flex flex-wrap gap-2"><button type="button" onClick={() => { setSelected(request); setErrorMessage(''); setNotice('') }} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50"><Eye className="h-3 w-3" />View</button><button type="button" disabled={actionId === request.id} onClick={() => void handleDelete(request)} className="inline-flex items-center gap-1.5 rounded-md border border-red-100 px-2.5 py-1.5 text-[10px] font-bold uppercase text-red-600 hover:bg-red-50 disabled:opacity-60"><Trash2 className="h-3 w-3" />Delete</button></div></div>
        ))}
      </div>

      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4" role="dialog" aria-modal="true" aria-label="Service request details"><div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl bg-white p-5 shadow-xl sm:p-6"><div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4"><div><p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1677FF]">Request details</p><h4 className="mt-1 text-lg font-black text-[#0F172A]">{selected.name}</h4></div><button type="button" onClick={() => setSelected(null)} aria-label="Close service request details" className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100"><X className="h-4 w-4" /></button></div><div className="mt-5 space-y-4 text-sm"><div className="grid grid-cols-1 gap-3 sm:grid-cols-2"><div><p className="text-[10px] font-mono uppercase text-slate-400">Email</p><p className="mt-1 break-all font-semibold text-[#0F172A]">{selected.email}</p></div><div><p className="text-[10px] font-mono uppercase text-slate-400">Phone</p><p className="mt-1 font-semibold text-[#0F172A]">{selected.phone || 'Not provided'}</p></div><div><p className="text-[10px] font-mono uppercase text-slate-400">Company</p><p className="mt-1 font-semibold text-[#0F172A]">{selected.company || 'Not provided'}</p></div><div><p className="text-[10px] font-mono uppercase text-slate-400">Service</p><p className="mt-1 font-semibold text-[#0F172D]">{selected.service}</p></div><div><p className="text-[10px] font-mono uppercase text-slate-400">Submitted</p><p className="mt-1 font-semibold text-[#0F172A]">{new Date(selected.created_at).toLocaleString()}</p></div></div><div><p className="text-[10px] font-mono uppercase text-slate-400">Project details</p><p className="mt-1 whitespace-pre-wrap rounded-lg bg-slate-50 p-3 leading-relaxed text-slate-700">{selected.project_details || 'No project details provided.'}</p></div><div><label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Status<select value={selected.status} disabled={actionId === selected.id} onChange={(event) => void handleStatusChange(selected, event.target.value as ServiceRequestStatus)} className="mt-1 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-[#0F172A]">{statuses.map((status) => <option key={status}>{status}</option>)}</select></label></div></div><div className="mt-6 flex justify-end"><button type="button" disabled={actionId === selected.id} onClick={() => void handleDelete(selected)} className="inline-flex items-center gap-2 rounded-lg border border-red-100 px-4 py-2 text-xs font-bold uppercase text-red-600 hover:bg-red-50 disabled:opacity-60"><Trash2 className="h-3.5 w-3.5" />Delete Request</button></div></div></div>}
    </section>
  )
}

export default AdminServiceRequests