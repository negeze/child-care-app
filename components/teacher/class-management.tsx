"use client"

import { useState } from "react"

interface Student {
  id: string
  name: string
  age: number
  parentName: string
  status: "present" | "absent" | "excused"
  notes: string
}

export default function ClassManagement() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "Emma Smith",
      age: 3,
      parentName: "John Smith",
      status: "present",
      notes: "Excellent progress with letters",
    },
    {
      id: "2",
      name: "Lucas Johnson",
      age: 2,
      parentName: "Sarah Johnson",
      status: "present",
      notes: "Working on social skills",
    },
    {
      id: "3",
      name: "Sophie Chen",
      age: 4,
      parentName: "Michael Chen",
      status: "present",
      notes: "Leadership skills developing well",
    },
    {
      id: "4",
      name: "Oliver Davis",
      age: 3,
      parentName: "Jennifer Davis",
      status: "excused",
      notes: "Out sick - catching up on activities",
    },
  ])

  const [editingNote, setEditingNote] = useState<{ id: string; note: string } | null>(null)

  const updateNote = (id: string, note: string) => {
    setStudents(students.map((student) => (student.id === id ? { ...student, notes: note } : student)))
    setEditingNote(null)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total Students",
            value: students.length,
            color: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
          },
          {
            label: "Present Today",
            value: students.filter((s) => s.status === "present").length,
            color: "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300",
          },
          {
            label: "Absent",
            value: students.filter((s) => s.status === "absent").length,
            color: "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300",
          },
          {
            label: "Excused",
            value: students.filter((s) => s.status === "excused").length,
            color: "bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300",
          },
        ].map((stat, idx) => (
          <div key={idx} className={`${stat.color} rounded-lg p-4 text-center`}>
            <p className="text-sm font-semibold opacity-80">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Students List */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">My Class</h2>
        <div className="space-y-4">
          {students.map((student) => (
            <div key={student.id} className="border border-border rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg">{student.name}</h3>
                  <p className="text-sm text-foreground/70">
                    Age {student.age} • Parent: {student.parentName}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    student.status === "present"
                      ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                      : student.status === "absent"
                        ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
                  }`}
                >
                  {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                </span>
              </div>

              {editingNote?.id === student.id ? (
                <div className="mb-3 flex gap-2">
                  <textarea
                    value={editingNote.note}
                    onChange={(e) => setEditingNote({ id: student.id, note: e.target.value })}
                    className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
                    rows={2}
                  />
                  <button
                    onClick={() => updateNote(student.id, editingNote.note)}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => setEditingNote({ id: student.id, note: student.notes })}
                  className="mb-3 p-3 bg-secondary/30 rounded-lg cursor-pointer hover:bg-secondary/50 transition"
                >
                  <p className="text-sm text-foreground/80">{student.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
