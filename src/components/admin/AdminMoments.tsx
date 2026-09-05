import React, { useEffect, useState } from 'react'
import { Check, Edit3, Eye, EyeOff, Image as ImageIcon, Plus, Save, Trash2, X } from 'lucide-react'
import {
  createMoment,
  deleteMoment,
  getAdminMoments,
  setMomentPublished,
  updateMoment,
  type AdminMoment,
  type MomentInput,
} from '../../services/adminMoments'
import AdminImageField from './AdminImageField'
import { deleteAdminImage, isManagedImagePath, uploadAdminImage } from '../../services/adminStorage'

const emptyForm: MomentInput = {
  title: '',
  category: '',
  image_url: '',
  description: '',
  date: null,
  link: '',
  published: false,
  display_order: 0,
}

const toForm = (moment: AdminMoment): MomentInput => ({
  title: moment.title,
  category: moment.category,
  image_url: moment.image_url,
  description: moment.description,
  date: moment.date,
  link: moment.link,
  published: moment.published,
  display_order: moment.display_order,
})

export const AdminMoments: React.FC = () => {
  const [moments, setMoments] = useState<AdminMoment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [notice, setNotice] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<MomentInput>(emptyForm)
  const [isSaving, setIsSaving] = useState(false)
  const [actionId, setActionId] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const loadMoments = async () => {
    setIsLoading(true)
    setErrorMessage('')
    try {
      setMoments(await getAdminMoments())
    } catch (error) {
      console.error('[DECODEP ADMIN MOMENTS]', error)
      setErrorMessage('Unable to load Moments. Check your administrator access and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void loadMoments()
  }, [])

  const startCreate = () => {
    setEditingId('new')
    setForm(emptyForm)
    setNotice('')
    setErrorMessage('')
    setSelectedFile(null)
  }

  const startEdit = (moment: AdminMoment) => {
    setEditingId(moment.id)
    setForm(toForm(moment))
    setNotice('')
    setErrorMessage('')
    setSelectedFile(null)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setForm(emptyForm)
    setSelectedFile(null)
  }

  const updateField = <K extends keyof MomentInput>(field: K, value: MomentInput[K]) => {
    setForm((previous) => ({ ...previous, [field]: value }))
  }

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.title.trim() || !form.category.trim() || !form.description.trim()) {
      setErrorMessage('Title, category and description are required.')
      return
    }

    setIsSaving(true)
    setErrorMessage('')
    setNotice('')
    const input = {
      ...form,
      title: form.title.trim(),
      category: form.category.trim(),
      image_url: form.image_url.trim(),
      description: form.description.trim(),
      date: form.date?.trim() || null,
      link: form.link.trim(),
    }
    const previousImage = editingId && editingId !== 'new' ? moments.find((item) => item.id === editingId)?.image_url : undefined
    let uploadedPath = ''

    try {
      if (selectedFile) {
        const uploaded = await uploadAdminImage('moments', selectedFile)
        input.image_url = uploaded.path
        uploadedPath = uploaded.path
      }
      if (editingId === 'new') {
        const created = await createMoment(input)
        setMoments((previous) => [...previous, created].sort((a, b) => a.display_order - b.display_order))
        setNotice('Moment created successfully.')
      } else if (editingId) {
        const updated = await updateMoment(editingId, input)
        setMoments((previous) => previous.map((item) => item.id === updated.id ? updated : item))
        setNotice('Moment updated successfully.')
        if (previousImage && selectedFile && isManagedImagePath('moments', previousImage)) {
          try { await deleteAdminImage('moments', previousImage) } catch (cleanupError) { console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError) }
        }
      }
      cancelEdit()
    } catch (error) {
      if (uploadedPath) { try { await deleteAdminImage('moments', uploadedPath) } catch (cleanupError) { console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError) } }
      console.error('[DECODEP ADMIN MOMENTS]', error)
      setErrorMessage('The Moment could not be saved. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const handlePublishToggle = async (moment: AdminMoment) => {
    setActionId(moment.id)
    setErrorMessage('')
    setNotice('')
    try {
      await setMomentPublished(moment.id, !moment.published)
      setMoments((previous) => previous.map((item) => item.id === moment.id ? { ...item, published: !item.published } : item))
      setNotice(moment.published ? 'Moment unpublished.' : 'Moment published.')
    } catch (error) {
      console.error('[DECODEP ADMIN MOMENTS]', error)
      setErrorMessage('The publish state could not be changed.')
    } finally {
      setActionId(null)
    }
  }

  const handleDelete = async (moment: AdminMoment) => {
    if (!window.confirm(`Delete "${moment.title}"? This cannot be undone.`)) return

    setActionId(moment.id)
    setErrorMessage('')
    setNotice('')
    try {
      await deleteMoment(moment.id)
      setMoments((previous) => previous.filter((item) => item.id !== moment.id))
      if (isManagedImagePath('moments', moment.image_url)) {
        try {
          await deleteAdminImage('moments', moment.image_url)
          setNotice('Moment and managed image deleted.')
        } catch (cleanupError) {
          console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError)
          setNotice('Moment deleted. Image cleanup will require maintenance.')
        }
      } else {
        setNotice('Moment deleted.')
      }
    } catch (error) {
      console.error('[DECODEP ADMIN MOMENTS]', error)
      setErrorMessage('The Moment could not be deleted.')
    } finally {
      setActionId(null)
    }
  }

  return (
    <section id="moments" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1677FF]">Content management</p>
          <h3 className="mt-1 text-lg font-black tracking-tight text-[#0F172A]">Moments</h3>
        </div>
        <button type="button" onClick={startCreate} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1677FF]">
          <Plus className="h-3.5 w-3.5" />
          <span>Add Moment</span>
        </button>
      </div>

      {notice && <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700"><Check className="h-3.5 w-3.5" />{notice}</div>}
      {errorMessage && <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{errorMessage}</div>}

      {editingId && (
        <form onSubmit={handleSave} className="mt-5 grid grid-cols-1 gap-4 rounded-lg border border-blue-100 bg-blue-50/40 p-4 sm:grid-cols-2">
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <h4 className="text-sm font-bold text-[#0F172A]">{editingId === 'new' ? 'Add Moment' : 'Edit Moment'}</h4>
            <button type="button" onClick={cancelEdit} aria-label="Close Moment form" className="rounded-md p-1.5 text-slate-500 hover:bg-white"><X className="h-4 w-4" /></button>
          </div>
          <label className="text-xs font-semibold text-slate-600">Title *<input required value={form.title} onChange={(event) => updateField('title', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Category *<input required value={form.category} onChange={(event) => updateField('category', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Date<input value={form.date || ''} onChange={(event) => updateField('date', event.target.value || null)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Display order<input type="number" min="0" value={form.display_order} onChange={(event) => updateField('display_order', Number(event.target.value))} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <AdminImageField bucket="moments" value={form.image_url} file={selectedFile} onValueChange={(value) => updateField('image_url', value)} onFileChange={setSelectedFile} label="Image URL / path" />
          <label className="text-xs font-semibold text-slate-600 sm:col-span-2">Link<input value={form.link} onChange={(event) => updateField('link', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600 sm:col-span-2">Description *<textarea required rows={3} value={form.description} onChange={(event) => updateField('description', event.target.value)} className="mt-1 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 sm:col-span-2"><input type="checkbox" checked={form.published} onChange={(event) => updateField('published', event.target.checked)} className="h-4 w-4 accent-[#1677FF]" />Published</label>
          <div className="flex justify-end gap-2 sm:col-span-2"><button type="button" onClick={cancelEdit} className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600">Cancel</button><button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 rounded-lg bg-[#1677FF] px-4 py-2 text-xs font-bold text-white disabled:opacity-60"><Save className="h-3.5 w-3.5" />{isSaving ? 'Saving...' : 'Save Moment'}</button></div>
        </form>
      )}

      <div className="mt-5 space-y-3">
        {isLoading ? <p className="py-8 text-center text-sm text-slate-500">Loading Moments...</p> : moments.length === 0 ? <p className="py-8 text-center text-sm text-slate-500">No Moments found.</p> : moments.map((moment) => (
          <div key={moment.id} className="grid grid-cols-1 gap-3 rounded-lg border border-slate-100 p-4 sm:grid-cols-[auto_minmax(0,1.5fr)_auto_auto] sm:items-center">
            {moment.image_url ? <img src={moment.image_url} alt="" className="h-14 w-20 rounded-md border border-slate-200 bg-slate-900 object-cover" /> : <div className="flex h-14 w-20 items-center justify-center rounded-md border border-dashed border-slate-200 text-slate-300"><ImageIcon className="h-5 w-5" /></div>}
            <div className="min-w-0"><p className="truncate text-sm font-bold text-[#0F172A]">{moment.title}</p><p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-slate-500">{moment.category} · {moment.date || 'No date'}</p><p className="mt-1 text-[10px] text-slate-400">Updated {new Date(moment.updated_at).toLocaleDateString()}</p></div>
            <span className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider ${moment.published ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{moment.published ? 'Published' : 'Draft'}</span>
            <div className="flex flex-wrap gap-2"><button type="button" onClick={() => startEdit(moment)} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50"><Edit3 className="h-3 w-3" />Edit</button><button type="button" disabled={actionId === moment.id} onClick={() => void handlePublishToggle(moment)} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50 disabled:opacity-60">{moment.published ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}{moment.published ? 'Unpublish' : 'Publish'}</button><button type="button" disabled={actionId === moment.id} onClick={() => void handleDelete(moment)} aria-label={`Delete ${moment.title}`} className="inline-flex items-center gap-1.5 rounded-md border border-red-100 px-2.5 py-1.5 text-[10px] font-bold uppercase text-red-600 hover:bg-red-50 disabled:opacity-60"><Trash2 className="h-3 w-3" />Delete</button></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminMoments