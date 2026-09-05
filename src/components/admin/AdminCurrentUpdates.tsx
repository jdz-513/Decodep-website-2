import React, { useEffect, useState } from 'react'
import { Check, Edit3, Eye, EyeOff, Plus, Save, Trash2, X } from 'lucide-react'
import {
  createCurrentUpdate,
  deleteCurrentUpdate,
  getAdminCurrentUpdates,
  setCurrentUpdatePublished,
  updateCurrentUpdate,
  type AdminCurrentUpdate,
  type CurrentUpdateInput,
} from '../../services/adminCurrentUpdates'
import { UpdateStatus, UpdateType } from '../../data/currentUpdates'
import AdminImageField from './AdminImageField'
import { deleteAdminImage, isManagedImagePath, uploadAdminImage } from '../../services/adminStorage'

const updateTypes: UpdateType[] = ['EVENT', 'COLLABORATION', 'ANNOUNCEMENT', 'ACHIEVEMENT', 'COMMUNITY', 'INITIATIVE']
const updateStatuses: UpdateStatus[] = ['UPCOMING', 'LIVE NOW', 'NEW', 'COMING SOON', 'IN DISCUSSION', 'COMPLETED']

const emptyForm: CurrentUpdateInput = {
  type: 'EVENT',
  status: 'UPCOMING',
  title: '',
  description: '',
  date: null,
  poster_url: '',
  link: '',
  published: false,
  display_order: 0,
}

const toForm = (update: AdminCurrentUpdate): CurrentUpdateInput => ({
  type: update.type,
  status: update.status,
  title: update.title,
  description: update.description,
  date: update.date,
  poster_url: update.poster_url,
  link: update.link,
  published: update.published,
  display_order: update.display_order,
})

export const AdminCurrentUpdates: React.FC = () => {
  const [updates, setUpdates] = useState<AdminCurrentUpdate[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [notice, setNotice] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<CurrentUpdateInput>(emptyForm)
  const [isSaving, setIsSaving] = useState(false)
  const [actionId, setActionId] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const loadUpdates = async () => {
    setIsLoading(true)
    setErrorMessage('')
    try {
      setUpdates(await getAdminCurrentUpdates())
    } catch (error) {
      console.error('[DECODEP ADMIN CURRENT UPDATES]', error)
      setErrorMessage('Unable to load Current Updates. Check your administrator access and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void loadUpdates()
  }, [])

  const startCreate = () => {
    setEditingId('new')
    setForm(emptyForm)
    setNotice('')
    setErrorMessage('')
    setSelectedFile(null)
  }

  const startEdit = (update: AdminCurrentUpdate) => {
    setEditingId(update.id)
    setForm(toForm(update))
    setNotice('')
    setErrorMessage('')
    setSelectedFile(null)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setForm(emptyForm)
    setSelectedFile(null)
  }

  const updateField = <K extends keyof CurrentUpdateInput>(field: K, value: CurrentUpdateInput[K]) => {
    setForm((previous) => ({ ...previous, [field]: value }))
  }

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.title.trim() || !form.description.trim()) {
      setErrorMessage('Title and description are required.')
      return
    }

    setIsSaving(true)
    setErrorMessage('')
    setNotice('')
    const input = { ...form, title: form.title.trim(), description: form.description.trim(), date: form.date?.trim() || null, poster_url: form.poster_url.trim(), link: form.link.trim() }
    const previousImage = editingId && editingId !== 'new' ? updates.find((item) => item.id === editingId)?.poster_url : undefined
    let uploadedPath = ''

    try {
      if (selectedFile) {
        const uploaded = await uploadAdminImage('current-updates', selectedFile)
        input.poster_url = uploaded.path
        uploadedPath = uploaded.path
      }
      if (editingId === 'new') {
        const created = await createCurrentUpdate(input)
        setUpdates((previous) => [...previous, created].sort((a, b) => a.display_order - b.display_order))
        setNotice('Current Update created successfully.')
      } else if (editingId) {
        const updated = await updateCurrentUpdate(editingId, input)
        setUpdates((previous) => previous.map((item) => item.id === updated.id ? updated : item))
        setNotice('Current Update updated successfully.')
        if (previousImage && selectedFile && isManagedImagePath('current-updates', previousImage)) {
          try { await deleteAdminImage('current-updates', previousImage) } catch (cleanupError) { console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError) }
        }
      }
      cancelEdit()
    } catch (error) {
      if (uploadedPath) { try { await deleteAdminImage('current-updates', uploadedPath) } catch (cleanupError) { console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError) } }
      console.error('[DECODEP ADMIN CURRENT UPDATES]', error)
      setErrorMessage('The update could not be saved. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const handlePublishToggle = async (update: AdminCurrentUpdate) => {
    setActionId(update.id)
    setErrorMessage('')
    setNotice('')
    try {
      await setCurrentUpdatePublished(update.id, !update.published)
      setUpdates((previous) => previous.map((item) => item.id === update.id ? { ...item, published: !item.published } : item))
      setNotice(update.published ? 'Update unpublished.' : 'Update published.')
    } catch (error) {
      console.error('[DECODEP ADMIN CURRENT UPDATES]', error)
      setErrorMessage('The publish state could not be changed.')
    } finally {
      setActionId(null)
    }
  }

  const handleDelete = async (update: AdminCurrentUpdate) => {
    if (!window.confirm(`Delete "${update.title}"? This cannot be undone.`)) return

    setActionId(update.id)
    setErrorMessage('')
    setNotice('')
    try {
      await deleteCurrentUpdate(update.id)
      setUpdates((previous) => previous.filter((item) => item.id !== update.id))
      if (isManagedImagePath('current-updates', update.poster_url)) {
        try {
          await deleteAdminImage('current-updates', update.poster_url)
          setNotice('Update and managed image deleted.')
        } catch (cleanupError) {
          console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError)
          setNotice('Update deleted. Image cleanup will require maintenance.')
        }
      } else {
        setNotice('Update deleted.')
      }
    } catch (error) {
      console.error('[DECODEP ADMIN CURRENT UPDATES]', error)
      setErrorMessage('The update could not be deleted.')
    } finally {
      setActionId(null)
    }
  }

  return (
    <section id="current-updates" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1677FF]">Content management</p>
          <h3 className="mt-1 text-lg font-black tracking-tight text-[#0F172A]">Current Updates</h3>
        </div>
        <button type="button" onClick={startCreate} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1677FF]">
          <Plus className="h-3.5 w-3.5" />
          <span>Add Update</span>
        </button>
      </div>

      {notice && <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700"><Check className="h-3.5 w-3.5" />{notice}</div>}
      {errorMessage && <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{errorMessage}</div>}

      {editingId && (
        <form onSubmit={handleSave} className="mt-5 grid grid-cols-1 gap-4 rounded-lg border border-blue-100 bg-blue-50/40 p-4 sm:grid-cols-2">
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <h4 className="text-sm font-bold text-[#0F172A]">{editingId === 'new' ? 'Add Current Update' : 'Edit Current Update'}</h4>
            <button type="button" onClick={cancelEdit} aria-label="Close update form" className="rounded-md p-1.5 text-slate-500 hover:bg-white"><X className="h-4 w-4" /></button>
          </div>
          <label className="text-xs font-semibold text-slate-600">Title *<input required value={form.title} onChange={(event) => updateField('title', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Date<input value={form.date || ''} onChange={(event) => updateField('date', event.target.value || null)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Type<select value={form.type} onChange={(event) => updateField('type', event.target.value as UpdateType)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">{updateTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
          <label className="text-xs font-semibold text-slate-600">Status<select value={form.status} onChange={(event) => updateField('status', event.target.value as UpdateStatus)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">{updateStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
          <label className="text-xs font-semibold text-slate-600">Display order<input type="number" min="0" value={form.display_order} onChange={(event) => updateField('display_order', Number(event.target.value))} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <AdminImageField bucket="current-updates" value={form.poster_url} file={selectedFile} onValueChange={(value) => updateField('poster_url', value)} onFileChange={setSelectedFile} label="Image URL / path" />
          <label className="text-xs font-semibold text-slate-600 sm:col-span-2">Link<input value={form.link} onChange={(event) => updateField('link', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600 sm:col-span-2">Description *<textarea required rows={3} value={form.description} onChange={(event) => updateField('description', event.target.value)} className="mt-1 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 sm:col-span-2"><input type="checkbox" checked={form.published} onChange={(event) => updateField('published', event.target.checked)} className="h-4 w-4 accent-[#1677FF]" />Published</label>
          <div className="flex justify-end gap-2 sm:col-span-2"><button type="button" onClick={cancelEdit} className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600">Cancel</button><button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 rounded-lg bg-[#1677FF] px-4 py-2 text-xs font-bold text-white disabled:opacity-60"><Save className="h-3.5 w-3.5" />{isSaving ? 'Saving...' : 'Save Update'}</button></div>
        </form>
      )}

      <div className="mt-5 space-y-3">
        {isLoading ? <p className="py-8 text-center text-sm text-slate-500">Loading updates...</p> : updates.length === 0 ? <p className="py-8 text-center text-sm text-slate-500">No Current Updates found.</p> : updates.map((update) => (
          <div key={update.id} className="grid grid-cols-1 gap-3 rounded-lg border border-slate-100 p-4 sm:grid-cols-[minmax(0,1.5fr)_auto_auto_auto] sm:items-center">
            <div className="min-w-0"><p className="truncate text-sm font-bold text-[#0F172A]">{update.title}</p><p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-slate-500">{update.type} · {update.status} · {update.date || 'No date'}</p><p className="mt-1 text-[10px] text-slate-400">Updated {new Date(update.updated_at).toLocaleDateString()}</p></div>
            <span className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider ${update.published ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{update.published ? 'Published' : 'Draft'}</span>
            <div className="flex flex-wrap gap-2"><button type="button" onClick={() => startEdit(update)} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50"><Edit3 className="h-3 w-3" />Edit</button><button type="button" disabled={actionId === update.id} onClick={() => void handlePublishToggle(update)} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50 disabled:opacity-60">{update.published ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}{update.published ? 'Unpublish' : 'Publish'}</button></div>
            <button type="button" disabled={actionId === update.id} onClick={() => void handleDelete(update)} aria-label={`Delete ${update.title}`} className="inline-flex w-fit items-center gap-1.5 rounded-md border border-red-100 px-2.5 py-1.5 text-[10px] font-bold uppercase text-red-600 hover:bg-red-50 disabled:opacity-60"><Trash2 className="h-3 w-3" />Delete</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminCurrentUpdates