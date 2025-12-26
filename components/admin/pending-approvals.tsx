"use client"

import { useState } from "react"

interface PendingApproval {
  id: string
  parentName: string
  childName: string
  age: number
  email: string
  status: "pending" | "approved" | "rejected"
  submittedDate: string
}

export default function PendingApprovals() {
  const [approvals, setApprovals] = useState<PendingApproval[]>([
    {
      id: "1",
      parentName: "John Smith",
      childName: "Emma Smith",
      age: 3,
      email: "john@example.com",
      status: "pending",
      submittedDate: "2025-12-20",
    },
    {
      id: "2",
      parentName: "Sarah Johnson",
      childName: "Lucas Johnson",
      age: 2,
      email: "sarah@example.com",
      status: "pending",
      submittedDate: "2025-12-21",
    },
    {
      id: "3",
      parentName: "Michael Chen",
      childName: "Sophie Chen",
      age: 4,
      email: "michael@example.com",
      status: "approved",
      submittedDate: "2025-12-15",
    },
  ])

  const handleApprove = (id: string) => {
    setApprovals(approvals.map((approval) => (approval.id === id ? { ...approval, status: "approved" } : approval)))
  }

  const handleReject = (id: string) => {
    setApprovals(approvals.map((approval) => (approval.id === id ? { ...approval, status: "rejected" } : approval)))
  }

  const pendingOnly = approvals.filter((a) => a.status === "pending")

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Pending Applications ({pendingOnly.length})</h2>

        {pendingOnly.length === 0 ? (
          <p className="text-foreground/70">No pending applications</p>
        ) : (
          <div className="space-y-4">
            {pendingOnly.map((approval) => (
              <div key={approval.id} className="border border-border rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-foreground">{approval.childName}</h3>
                    <p className="text-sm text-foreground/70">Parent: {approval.parentName}</p>
                    <p className="text-sm text-foreground/70">Age: {approval.age}</p>
                    <p className="text-sm text-foreground/70">{approval.email}</p>
                  </div>
                  <span className="text-xs font-semibold text-foreground/70">{approval.submittedDate}</span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(approval.id)}
                    className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(approval.id)}
                    className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Approved Applications */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Approved Applications</h2>
        <div className="space-y-3">
          {approvals
            .filter((a) => a.status === "approved")
            .map((approval) => (
              <div
                key={approval.id}
                className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg"
              >
                <div>
                  <p className="font-medium text-foreground">{approval.childName}</p>
                  <p className="text-sm text-foreground/70">{approval.parentName}</p>
                </div>
                <span className="text-xs font-semibold text-green-700 dark:text-green-300">✓ Approved</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
