"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    sessionStorage.removeItem("user")
    router.push("/auth/login")
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-foreground">Logging out...</p>
    </div>
  )
}
