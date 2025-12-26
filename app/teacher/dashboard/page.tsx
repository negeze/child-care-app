"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getUser, clearUser } from "@/lib/auth"
import TeacherNav from "@/components/teacher/teacher-nav"
import TeacherSchedule from "@/components/teacher/teacher-schedule"
import ClassManagement from "@/components/teacher/class-management"
import AttendanceTracker from "@/components/teacher/attendance-tracker"

export default function TeacherDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("schedule")

  useEffect(() => {
    const currentUser = getUser()
    if (!currentUser || currentUser.role !== "teacher") {
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
      <TeacherNav onLogout={handleLogout} userEmail={user?.email} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Teacher Dashboard</h1>
          <p className="text-foreground/70 mt-2">Welcome, {user?.email}. Manage your schedule and students.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
          <button
            onClick={() => setActiveTab("schedule")}
            className={`px-4 py-2 font-medium transition whitespace-nowrap ${
              activeTab === "schedule"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            My Schedule
          </button>
          <button
            onClick={() => setActiveTab("students")}
            className={`px-4 py-2 font-medium transition whitespace-nowrap ${
              activeTab === "students"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            My Class
          </button>
          <button
            onClick={() => setActiveTab("attendance")}
            className={`px-4 py-2 font-medium transition whitespace-nowrap ${
              activeTab === "attendance"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Attendance
          </button>
        </div>

        {/* Content */}
        {activeTab === "schedule" && <TeacherSchedule />}
        {activeTab === "students" && <ClassManagement />}
        {activeTab === "attendance" && <AttendanceTracker />}
      </main>
    </div>
  )
}
