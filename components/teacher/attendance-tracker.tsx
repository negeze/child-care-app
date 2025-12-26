"use client"

import { useState } from "react"

interface AttendanceRecord {
  date: string
  studentName: string
  status: "present" | "absent" | "excused"
}

export default function AttendanceTracker() {
  const [attendanceRecords] = useState<AttendanceRecord[]>([
    { date: "2025-12-23", studentName: "Emma Smith", status: "present" },
    { date: "2025-12-23", studentName: "Lucas Johnson", status: "present" },
    { date: "2025-12-23", studentName: "Sophie Chen", status: "present" },
    { date: "2025-12-23", studentName: "Oliver Davis", status: "excused" },
    { date: "2025-12-22", studentName: "Emma Smith", status: "present" },
    { date: "2025-12-22", studentName: "Lucas Johnson", status: "absent" },
    { date: "2025-12-22", studentName: "Sophie Chen", status: "present" },
    { date: "2025-12-22", studentName: "Oliver Davis", status: "present" },
  ])

  const recordsByDate = attendanceRecords.reduce(
    (acc, record) => {
      if (!acc[record.date]) {
        acc[record.date] = []
      }
      acc[record.date].push(record)
      return acc
    },
    {} as Record<string, AttendanceRecord[]>,
  )

  const sortedDates = Object.keys(recordsByDate).sort().reverse()

  return (
    <div className="space-y-6">
      {sortedDates.map((date) => (
        <div key={date} className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h3>

          <div className="space-y-2">
            {recordsByDate[date].map((record, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <span className="text-foreground font-medium">{record.studentName}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    record.status === "present"
                      ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                      : record.status === "absent"
                        ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
                  }`}
                >
                  {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
