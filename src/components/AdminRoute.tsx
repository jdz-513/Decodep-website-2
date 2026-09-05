import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  getAuthorizedAdmin,
  getCurrentSession,
  onAuthStateChange,
  signOutAdmin,
  type AdminProfile,
} from '../services/adminAuth'

interface AdminRouteProps {
  children: React.ReactNode
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [admin, setAdmin] = useState<AdminProfile | null>(null)

  useEffect(() => {
    let isMounted = true
    let unsubscribe: () => void = () => undefined

    const loadAuthorization = async () => {
      try {
        const session = await getCurrentSession()
        if (!session) {
          if (isMounted) {
            setAdmin(null)
            setIsLoading(false)
          }
          return
        }

        const authorizedAdmin = await getAuthorizedAdmin(session.user.id)
        if (!authorizedAdmin) {
          try {
            await signOutAdmin()
          } catch {
            // Access remains denied even if remote sign-out is unavailable.
          }
        }

        if (isMounted) {
          setAdmin(authorizedAdmin)
          setIsLoading(false)
        }
      } catch {
        if (isMounted) {
          setAdmin(null)
          setIsLoading(false)
        }
      }
    }

    try {
      const { data } = onAuthStateChange(() => {
        void loadAuthorization()
      })
      unsubscribe = () => data.subscription.unsubscribe()
    } catch {
      // The initial authorization check below provides the final denied state.
    }

    void loadAuthorization()

    return () => {
      isMounted = false
      unsubscribe()
    }
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#FAF8F5] text-[#10141D] pt-24 pb-20 flex items-center justify-center px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-[#718096]">Verifying administrator access...</p>
      </main>
    )
  }

  if (!admin) return <Navigate to="/admin/login" replace />

  return <>{children}</>
}

export default AdminRoute