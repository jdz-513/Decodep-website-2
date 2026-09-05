import React, { useEffect, useState } from 'react'
import { Upload } from 'lucide-react'
import { getAdminImagePreviewUrl, type AdminImageBucket } from '../../services/adminStorage'

interface AdminImageFieldProps {
  bucket: AdminImageBucket
  value: string
  file: File | null
  onValueChange: (value: string) => void
  onFileChange: (file: File | null) => void
  label?: string
}

export const AdminImageField: React.FC<AdminImageFieldProps> = ({ bucket, value, file, onValueChange, onFileChange, label = 'Image URL / path' }) => {
  const [previewUrl, setPreviewUrl] = useState(value)

  useEffect(() => {
    let objectUrl = ''
    if (file) {
      objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
    }

    let isMounted = true
    if (!value) {
      setPreviewUrl('')
      return () => { isMounted = false }
    }

    getAdminImagePreviewUrl(bucket, value)
      .then((url) => { if (isMounted) setPreviewUrl(url) })
      .catch(() => { if (isMounted) setPreviewUrl(value) })

    return () => { isMounted = false }
  }, [bucket, file, value])

  return (
    <div className="sm:col-span-2">
      <label className="text-xs font-semibold text-slate-600">{label}
        <input value={value} onChange={(event) => { onFileChange(null); onValueChange(event.target.value) }} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" />
      </label>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50">
          <Upload className="h-3.5 w-3.5" />
          <span>{file ? 'Replace image' : 'Upload image'}</span>
          <input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={(event) => onFileChange(event.target.files?.[0] || null)} />
        </label>
        {file && <span className="max-w-full truncate text-[10px] text-slate-500">{file.name} · {(file.size / 1024 / 1024).toFixed(2)} MB</span>}
      </div>
      {previewUrl && <img src={previewUrl} alt="Selected image preview" className="mt-3 h-24 w-36 rounded-lg border border-slate-200 bg-slate-900 object-cover" />}
    </div>
  )
}

export default AdminImageField