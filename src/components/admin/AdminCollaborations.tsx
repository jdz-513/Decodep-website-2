import React, { useEffect, useState } from 'react'
import { Check, Edit3, Eye, EyeOff, Handshake, Plus, Save, Trash2, X } from 'lucide-react'
import {
  createCollaboration,
  deleteCollaboration,
  getAdminCollaborations,
  setCollaborationPublished,
  updateCollaboration,
  type AdminCollaboration,
  type CollaborationInput,
  type CollaborationStatus,
} from '../../services/adminCollaborations'
import AdminImageField from './AdminImageField'
import { deleteAdminImage, isManagedImagePath, uploadAdminImage } from '../../services/adminStorage'

const collaborationStatuses: CollaborationStatus[] = ['ACTIVE', 'IN DISCUSSION', 'UPCOMING', 'COMPLETED']

const emptyForm: CollaborationInput = {
  partner: '',
  type: '',
  description: '',
  image_url: '',
  date: null,
  status: 'ACTIVE',
  link: '',
  published: false,
}

const toForm = (collaboration: AdminCollaboration): CollaborationInput => ({
  partner: collaboration.partner,
  type: collaboration.type,
  description: collaboration.description,
  image_url: collaboration.image_url,
  date: collaboration.date,
  status: collaboration.status,
  link: collaboration.link,
  published: collaboration.published,
})

export const AdminCollaborations: React.FC = () => {
  const [collaborations, setCollaborations] = useState<AdminCollaboration[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [notice, setNotice] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<CollaborationInput>(emptyForm)
  const [isSaving, setIsSaving] = useState(false)
  const [actionId, setActionId] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const loadCollaborations = async () => {
    setIsLoading(true)
    setErrorMessage('')
    try {
      setCollaborations(await getAdminCollaborations())
    } catch (error) {
      console.error('[DECODEP ADMIN COLLABORATIONS]', error)
      setErrorMessage('Unable to load Collaborations. Check your administrator access and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void loadCollaborations()
  }, [])

  const startCreate = () => {
    setEditingId('new')
    setForm(emptyForm)
    setNotice('')
    setErrorMessage('')
    setSelectedFile(null)
  }

  const startEdit = (collaboration: AdminCollaboration) => {
    setEditingId(collaboration.id)
    setForm(toForm(collaboration))
    setNotice('')
    setErrorMessage('')
    setSelectedFile(null)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setForm(emptyForm)
    setSelectedFile(null)
  }

  const updateField = <K extends keyof CollaborationInput>(field: K, value: CollaborationInput[K]) => {
    setForm((previous) => ({ ...previous, [field]: value }))
  }

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.partner.trim() || !form.type.trim() || !form.description.trim()) {
      setErrorMessage('Partner, type and description are required.')
      return
    }

    setIsSaving(true)
    setErrorMessage('')
    setNotice('')
    const input = {
      ...form,
      partner: form.partner.trim(),
      type: form.type.trim(),
      description: form.description.trim(),
      image_url: form.image_url.trim(),
      date: form.date?.trim() || null,
      link: form.link.trim(),
    }
    const previousImage = editingId && editingId !== 'new' ? collaborations.find((item) => item.id === editingId)?.image_url : undefined
    let uploadedPath = ''

    try {
      if (selectedFile) {
        const uploaded = await uploadAdminImage('collaborations', selectedFile)
        input.image_url = uploaded.path
        uploadedPath = uploaded.path
      }
      if (editingId === 'new') {
        const created = await createCollaboration(input)
        setCollaborations((previous) => [created, ...previous])
        setNotice('Collaboration created successfully.')
      } else if (editingId) {
        const updated = await updateCollaboration(editingId, input)
        setCollaborations((previous) => previous.map((item) => item.id === updated.id ? updated : item))
        setNotice('Collaboration updated successfully.')
        if (previousImage && selectedFile && isManagedImagePath('collaborations', previousImage)) {
          try { await deleteAdminImage('collaborations', previousImage) } catch (cleanupError) { console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError) }
        }
      }
      cancelEdit()
    } catch (error) {
      if (uploadedPath) { try { await deleteAdminImage('collaborations', uploadedPath) } catch (cleanupError) { console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError) } }
      console.error('[DECODEP ADMIN COLLABORATIONS]', error)
      setErrorMessage('The Collaboration could not be saved. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const handlePublishToggle = async (collaboration: AdminCollaboration) => {
    setActionId(collaboration.id)
    setErrorMessage('')
    setNotice('')
    try {
      await setCollaborationPublished(collaboration.id, !collaboration.published)
      setCollaborations((previous) => previous.map((item) => item.id === collaboration.id ? { ...item, published: !item.published } : item))
      setNotice(collaboration.published ? 'Collaboration unpublished.' : 'Collaboration published.')
    } catch (error) {
      console.error('[DECODEP ADMIN COLLABORATIONS]', error)
      setErrorMessage('The publish state could not be changed.')
    } finally {
      setActionId(null)
    }
  }

  const handleDelete = async (collaboration: AdminCollaboration) => {
    if (!window.confirm(`Delete "${collaboration.partner}"? This cannot be undone.`)) return

    setActionId(collaboration.id)
    setErrorMessage('')
    setNotice('')
    try {
      await deleteCollaboration(collaboration.id)
      setCollaborations((previous) => previous.filter((item) => item.id !== collaboration.id))
      if (isManagedImagePath('collaborations', collaboration.image_url)) {
        try {
          await deleteAdminImage('collaborations', collaboration.image_url)
          setNotice('Collaboration and managed image deleted.')
        } catch (cleanupError) {
          console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError)
          setNotice('Collaboration deleted. Image cleanup will require maintenance.')
        }
      } else {
        setNotice('Collaboration deleted.')
      }
    } catch (error) {
      console.error('[DECODEP ADMIN COLLABORATIONS]', error)
      setErrorMessage('The Collaboration could not be deleted.')
    } finally {
      setActionId(null)
    }
  }

  return (
    <section id="collaborations" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1677FF]">Content management</p>
          <h3 className="mt-1 text-lg font-black tracking-tight text-[#0F172A]">Collaborations</h3>
        </div>
        <button type="button" onClick={startCreate} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1677FF]"><Plus className="h-3.5 w-3.5" /><span>Add Collaboration</span></button>
      </div>

      {notice && <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700"><Check className="h-3.5 w-3.5" />{notice}</div>}
      {errorMessage && <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{errorMessage}</div>}

      {editingId && (
        <form onSubmit={handleSave} className="mt-5 grid grid-cols-1 gap-4 rounded-lg border border-blue-100 bg-blue-50/40 p-4 sm:grid-cols-2">
          <div className="sm:col-span-2 flex items-center justify-between gap-3"><h4 className="text-sm font-bold text-[#0F172A]">{editingId === 'new' ? 'Add Collaboration' : 'Edit Collaboration'}</h4><button type="button" onClick={cancelEdit} aria-label="Close Collaboration form" className="rounded-md p-1.5 text-slate-500 hover:bg-white"><X className="h-4 w-4" /></button></div>
          <label className="text-xs font-semibold text-slate-600">Partner / Name *<input required value={form.partner} onChange={(event) => updateField('partner', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Type *<input required value={form.type} onChange={(event) => updateField('type', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Status<select value={form.status} onChange={(event) => updateField('status', event.target.value as CollaborationStatus)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">{collaborationStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
          <label className="text-xs font-semibold text-slate-600">Date<input value={form.date || ''} onChange={(event) => updateField('date', event.target.value || null)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <AdminImageField bucket="collaborations" value={form.image_url} file={selectedFile} onValueChange={(value) => updateField('image_url', value)} onFileChange={setSelectedFile} label="Image URL / path" />
          <label className="text-xs font-semibold text-slate-600 sm:col-span-2">Link<input value={form.link} onChange={(event) => updateField('link', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600 sm:col-span-2">Description *<textarea required rows={3} value={form.description} onChange={(event) => updateField('description', event.target.value)} className="mt-1 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 sm:col-span-2"><input type="checkbox" checked={form.published} onChange={(event) => updateField('published', event.target.checked)} className="h-4 w-4 accent-[#1677FF]" />Published</label>
          <div className="flex justify-end gap-2 sm:col-span-2"><button type="button" onClick={cancelEdit} className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600">Cancel</button><button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 rounded-lg bg-[#1677FF] px-4 py-2 text-xs font-bold text-white disabled:opacity-60"><Save className="h-3.5 w-3.5" />{isSaving ? 'Saving...' : 'Save Collaboration'}</button></div>
        </form>
      )}

      <div className="mt-5 space-y-3">
        {isLoading ? <p className="py-8 text-center text-sm text-slate-500">Loading Collaborations...</p> : collaborations.length === 0 ? <p className="py-8 text-center text-sm text-slate-500">No Collaborations found.</p> : collaborations.map((collaboration) => (
          <div key={collaboration.id} className="grid grid-cols-1 gap-3 rounded-lg border border-slate-100 p-4 sm:grid-cols-[auto_minmax(0,1.5fr)_auto_auto] sm:items-center">
            {collaboration.image_url ? <img src={collaboration.image_url} alt="" className="h-14 w-20 rounded-md border border-slate-200 bg-slate-900 object-cover" /> : <div className="flex h-14 w-20 items-center justify-center rounded-md border border-dashed border-slate-200 text-slate-300"><Handshake className="h-5 w-5" /></div>}
            <div className="min-w-0"><p className="truncate text-sm font-bold text-[#0F172A]">{collaboration.partner}</p><p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-slate-500">{collaboration.type} · {collaboration.status} · {collaboration.date || 'No date'}</p><p className="mt-1 text-[10px] text-slate-400">Updated {new Date(collaboration.updated_at).toLocaleDateString()}</p></div>
            <span className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider ${collaboration.published ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{collaboration.published ? 'Published' : 'Draft'}</span>
            <div className="flex flex-wrap gap-2"><button type="button" onClick={() => startEdit(collaboration)} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50"><Edit3 className="h-3 w-3" />Edit</button><button type="button" disabled={actionId === collaboration.id} onClick={() => void handlePublishToggle(collaboration)} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50 disabled:opacity-60">{collaboration.published ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}{collaboration.published ? 'Unpublish' : 'Publish'}</button><button type="button" disabled={actionId === collaboration.id} onClick={() => void handleDelete(collaboration)} aria-label={`Delete ${collaboration.partner}`} className="inline-flex items-center gap-1.5 rounded-md border border-red-100 px-2.5 py-1.5 text-[10px] font-bold uppercase text-red-600 hover:bg-red-50 disabled:opacity-60"><Trash2 className="h-3 w-3" />Delete</button></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminCollaborations