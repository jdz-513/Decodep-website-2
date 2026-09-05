import React, { useEffect, useState } from 'react'
import { Check, Edit3, Eye, EyeOff, Image as ImageIcon, Lightbulb, Plus, Save, Trash2, X } from 'lucide-react'
import {
  createInitiative,
  deleteInitiative,
  getAdminInitiatives,
  setInitiativePublished,
  updateInitiative,
  type AdminInitiative,
  type InitiativeInput,
  type InitiativeStatus,
} from '../../services/adminInitiatives'
import AdminImageField from './AdminImageField'
import { deleteAdminImage, isManagedImagePath, uploadAdminImage } from '../../services/adminStorage'

const initiativeStatuses: InitiativeStatus[] = ['UPCOMING', 'ONGOING', 'COMPLETED']

const emptyForm: InitiativeInput = {
  title: '',
  type: '',
  description: '',
  image_url: '',
  date: null,
  status: 'UPCOMING',
  link: '',
  featured: false,
  published: false,
  display_order: 0,
}

const toForm = (initiative: AdminInitiative): InitiativeInput => ({
  title: initiative.title,
  type: initiative.type,
  description: initiative.description,
  image_url: initiative.image_url,
  date: initiative.date,
  status: initiative.status,
  link: initiative.link,
  featured: initiative.featured,
  published: initiative.published,
  display_order: initiative.display_order,
})

export const AdminInitiatives: React.FC = () => {
  const [initiatives, setInitiatives] = useState<AdminInitiative[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [notice, setNotice] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<InitiativeInput>(emptyForm)
  const [isSaving, setIsSaving] = useState(false)
  const [actionId, setActionId] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const loadInitiatives = async () => {
    setIsLoading(true)
    setErrorMessage('')
    try {
      setInitiatives(await getAdminInitiatives())
    } catch (error) {
      console.error('[DECODEP ADMIN INITIATIVES]', error)
      setErrorMessage('Unable to load Initiatives. Check your administrator access and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void loadInitiatives()
  }, [])

  const startCreate = () => {
    setEditingId('new')
    setForm(emptyForm)
    setNotice('')
    setErrorMessage('')
    setSelectedFile(null)
  }

  const startEdit = (initiative: AdminInitiative) => {
    setEditingId(initiative.id)
    setForm(toForm(initiative))
    setNotice('')
    setErrorMessage('')
    setSelectedFile(null)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setForm(emptyForm)
    setSelectedFile(null)
  }

  const updateField = <K extends keyof InitiativeInput>(field: K, value: InitiativeInput[K]) => {
    setForm((previous) => ({ ...previous, [field]: value }))
  }

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.title.trim() || !form.type.trim() || !form.description.trim()) {
      setErrorMessage('Title, type and description are required.')
      return
    }

    setIsSaving(true)
    setErrorMessage('')
    setNotice('')
    const input = {
      ...form,
      title: form.title.trim(),
      type: form.type.trim(),
      description: form.description.trim(),
      image_url: form.image_url.trim(),
      date: form.date?.trim() || null,
      link: form.link.trim(),
    }
    const previousImage = editingId && editingId !== 'new' ? initiatives.find((item) => item.id === editingId)?.image_url : undefined
    let uploadedPath = ''

    try {
      if (selectedFile) {
        const uploaded = await uploadAdminImage('initiatives', selectedFile)
        input.image_url = uploaded.path
        uploadedPath = uploaded.path
      }
      if (editingId === 'new') {
        const created = await createInitiative(input)
        setInitiatives((previous) => [...previous, created].sort((a, b) => a.display_order - b.display_order))
        setNotice('Initiative created successfully.')
      } else if (editingId) {
        const updated = await updateInitiative(editingId, input)
        setInitiatives((previous) => previous.map((item) => item.id === updated.id ? updated : item))
        setNotice('Initiative updated successfully.')
        if (previousImage && selectedFile && isManagedImagePath('initiatives', previousImage)) {
          try { await deleteAdminImage('initiatives', previousImage) } catch (cleanupError) { console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError) }
        }
      }
      cancelEdit()
    } catch (error) {
      if (uploadedPath) { try { await deleteAdminImage('initiatives', uploadedPath) } catch (cleanupError) { console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError) } }
      console.error('[DECODEP ADMIN INITIATIVES]', error)
      setErrorMessage('The Initiative could not be saved. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const handlePublishToggle = async (initiative: AdminInitiative) => {
    setActionId(initiative.id)
    setErrorMessage('')
    setNotice('')
    try {
      await setInitiativePublished(initiative.id, !initiative.published)
      setInitiatives((previous) => previous.map((item) => item.id === initiative.id ? { ...item, published: !item.published } : item))
      setNotice(initiative.published ? 'Initiative unpublished.' : 'Initiative published.')
    } catch (error) {
      console.error('[DECODEP ADMIN INITIATIVES]', error)
      setErrorMessage('The publish state could not be changed.')
    } finally {
      setActionId(null)
    }
  }

  const handleDelete = async (initiative: AdminInitiative) => {
    if (!window.confirm(`Delete "${initiative.title}"? This cannot be undone.`)) return

    setActionId(initiative.id)
    setErrorMessage('')
    setNotice('')
    try {
      await deleteInitiative(initiative.id)
      setInitiatives((previous) => previous.filter((item) => item.id !== initiative.id))
      if (isManagedImagePath('initiatives', initiative.image_url)) {
        try {
          await deleteAdminImage('initiatives', initiative.image_url)
          setNotice('Initiative and managed image deleted.')
        } catch (cleanupError) {
          console.error('[DECODEP ADMIN IMAGE CLEANUP]', cleanupError)
          setNotice('Initiative deleted. Image cleanup will require maintenance.')
        }
      } else {
        setNotice('Initiative deleted.')
      }
    } catch (error) {
      console.error('[DECODEP ADMIN INITIATIVES]', error)
      setErrorMessage('The Initiative could not be deleted.')
    } finally {
      setActionId(null)
    }
  }

  return (
    <section id="initiatives" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1677FF]">Content management</p>
          <h3 className="mt-1 text-lg font-black tracking-tight text-[#0F172A]">Initiatives</h3>
        </div>
        <button type="button" onClick={startCreate} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1677FF]"><Plus className="h-3.5 w-3.5" /><span>Add Initiative</span></button>
      </div>

      {notice && <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700"><Check className="h-3.5 w-3.5" />{notice}</div>}
      {errorMessage && <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{errorMessage}</div>}

      {editingId && (
        <form onSubmit={handleSave} className="mt-5 grid grid-cols-1 gap-4 rounded-lg border border-blue-100 bg-blue-50/40 p-4 sm:grid-cols-2">
          <div className="sm:col-span-2 flex items-center justify-between gap-3"><h4 className="text-sm font-bold text-[#0F172A]">{editingId === 'new' ? 'Add Initiative' : 'Edit Initiative'}</h4><button type="button" onClick={cancelEdit} aria-label="Close Initiative form" className="rounded-md p-1.5 text-slate-500 hover:bg-white"><X className="h-4 w-4" /></button></div>
          <label className="text-xs font-semibold text-slate-600">Title *<input required value={form.title} onChange={(event) => updateField('title', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Type / Category *<input required value={form.type} onChange={(event) => updateField('type', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Status<select value={form.status} onChange={(event) => updateField('status', event.target.value as InitiativeStatus)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">{initiativeStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
          <label className="text-xs font-semibold text-slate-600">Date<input value={form.date || ''} onChange={(event) => updateField('date', event.target.value || null)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600">Display order<input type="number" min="0" value={form.display_order} onChange={(event) => updateField('display_order', Number(event.target.value))} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <AdminImageField bucket="initiatives" value={form.image_url} file={selectedFile} onValueChange={(value) => updateField('image_url', value)} onFileChange={setSelectedFile} label="Image URL / path" />
          <label className="text-xs font-semibold text-slate-600 sm:col-span-2">Link<input value={form.link} onChange={(event) => updateField('link', event.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <label className="text-xs font-semibold text-slate-600 sm:col-span-2">Description *<textarea required rows={3} value={form.description} onChange={(event) => updateField('description', event.target.value)} className="mt-1 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /></label>
          <div className="flex flex-wrap gap-5 sm:col-span-2"><label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600"><input type="checkbox" checked={form.featured} onChange={(event) => updateField('featured', event.target.checked)} className="h-4 w-4 accent-[#1677FF]" />Featured</label><label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600"><input type="checkbox" checked={form.published} onChange={(event) => updateField('published', event.target.checked)} className="h-4 w-4 accent-[#1677FF]" />Published</label></div>
          <div className="flex justify-end gap-2 sm:col-span-2"><button type="button" onClick={cancelEdit} className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600">Cancel</button><button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 rounded-lg bg-[#1677FF] px-4 py-2 text-xs font-bold text-white disabled:opacity-60"><Save className="h-3.5 w-3.5" />{isSaving ? 'Saving...' : 'Save Initiative'}</button></div>
        </form>
      )}

      <div className="mt-5 space-y-3">
        {isLoading ? <p className="py-8 text-center text-sm text-slate-500">Loading Initiatives...</p> : initiatives.length === 0 ? <p className="py-8 text-center text-sm text-slate-500">No Initiatives found.</p> : initiatives.map((initiative) => (
          <div key={initiative.id} className="grid grid-cols-1 gap-3 rounded-lg border border-slate-100 p-4 sm:grid-cols-[auto_minmax(0,1.5fr)_auto_auto] sm:items-center">
            {initiative.image_url ? <img src={initiative.image_url} alt="" className="h-14 w-20 rounded-md border border-slate-200 bg-slate-900 object-cover" /> : <div className="flex h-14 w-20 items-center justify-center rounded-md border border-dashed border-slate-200 text-slate-300"><ImageIcon className="h-5 w-5" /></div>}
            <div className="min-w-0"><p className="truncate text-sm font-bold text-[#0F172A]">{initiative.title}</p><p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-slate-500">{initiative.type} · {initiative.status} · {initiative.date || 'No date'}</p><p className="mt-1 text-[10px] text-slate-400">Updated {new Date(initiative.updated_at).toLocaleDateString()}</p></div>
            <div className="flex flex-wrap gap-1.5"><span className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider ${initiative.published ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{initiative.published ? 'Published' : 'Draft'}</span>{initiative.featured && <span className="w-fit rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700">Featured</span>}</div>
            <div className="flex flex-wrap gap-2"><button type="button" onClick={() => startEdit(initiative)} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50"><Edit3 className="h-3 w-3" />Edit</button><button type="button" disabled={actionId === initiative.id} onClick={() => void handlePublishToggle(initiative)} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] font-bold uppercase text-slate-600 hover:bg-slate-50 disabled:opacity-60">{initiative.published ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}{initiative.published ? 'Unpublish' : 'Publish'}</button><button type="button" disabled={actionId === initiative.id} onClick={() => void handleDelete(initiative)} aria-label={`Delete ${initiative.title}`} className="inline-flex items-center gap-1.5 rounded-md border border-red-100 px-2.5 py-1.5 text-[10px] font-bold uppercase text-red-600 hover:bg-red-50 disabled:opacity-60"><Trash2 className="h-3 w-3" />Delete</button></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminInitiatives