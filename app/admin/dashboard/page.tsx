"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getUser, clearUser } from "@/lib/auth"
import AdminNav from "@/components/admin/admin-nav"
import PendingApprovals from "@/components/admin/pending-approvals"
import ServiceManagement from "@/components/admin/service-management"
import TeacherSchedule from "@/components/admin/teacher-schedule"

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("approvals")

  useEffect(() => {
    const currentUser = getUser()
    if (!currentUser || currentUser.role !== "admin") {
      router.push("/auth/login")
    } else {
      setUser(currentUser)
      setLoading(false)
    }
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Loading...</p>
      </div>
    )
  }

  const handleLogout = () => {
    clearUser()
    router.push("/auth/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav onLogout={handleLogout} userEmail={user?.email} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-foreground/70 mt-2">
            Welcome back, {user?.email}. Manage enrollments, services, and staff.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("approvals")}
            className={`px-4 py-2 font-medium transition ${
              activeTab === "approvals"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Pending Approvals
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`px-4 py-2 font-medium transition ${
              activeTab === "services"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Services & Orders
          </button>
          <button
            onClick={() => setActiveTab("schedules")}
            className={`px-4 py-2 font-medium transition ${
              activeTab === "schedules"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Teacher Schedules
          </button>
        </div>

        {/* Content */}
        {activeTab === "approvals" && <PendingApprovals />}
        {activeTab === "services" && <ServiceManagement />}
        {activeTab === "schedules" && <TeacherSchedule />}
      </main>
    </div>
  )
}
