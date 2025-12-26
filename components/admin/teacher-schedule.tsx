"use client"

import { useState } from "react"

interface Teacher {
  id: string
  name: string
  email: string
  schedule: {
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
  }
  classSize: number
  maxCapacity: number
}

export default function TeacherSchedule() {
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: "1",
      name: "Ms. Emily Harris",
      email: "emily@example.com",
      schedule: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
      },
      classSize: 8,
      maxCapacity: 10,
    },
    {
      id: "2",
      name: "Mr. David Wilson",
      email: "david@example.com",
      schedule: {
        monday: true,
        tuesday: false,
        wednesday: true,
        thursday: true,
        friday: false,
      },
      classSize: 6,
      maxCapacity: 10,
    },
    {
      id: "3",
      name: "Ms. Sarah Brown",
      email: "sarah@example.com",
      schedule: {
        monday: false,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
      },
      classSize: 9,
      maxCapacity: 10,
    },
  ])

  const toggleDay = (teacherId: string, day: keyof Teacher["schedule"]) => {
    setTeachers(
      teachers.map((teacher) =>
        teacher.id === teacherId
          ? {
              ...teacher,
              schedule: {
                ...teacher.schedule,
                [day]: !teacher.schedule[day],
              },
            }
          : teacher,
      ),
    )
  }

  const days = ["monday", "tuesday", "wednesday", "thursday", "friday"] as const

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-bold text-foreground mb-6">Teacher Schedule Management</h2>

      <div className="space-y-6">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="border border-border rounded-lg p-4 hover:shadow-md transition">
            <div className="mb-4">
              <h3 className="font-bold text-foreground text-lg">{teacher.name}</h3>
              <p className="text-sm text-foreground/70">{teacher.email}</p>
              <p className="text-sm text-foreground/70 mt-1">
                Class Size: {teacher.classSize}/{teacher.maxCapacity}
              </p>
            </div>

            <div className="grid grid-cols-5 gap-2 md:grid-cols-5">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDay(teacher.id, day)}
                  className={`py-2 px-3 rounded-lg font-medium text-sm transition ${
                    teacher.schedule[day]
                      ? "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-950 dark:text-green-300"
                      : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20"
                  }`}
                >
                  {day.slice(0, 3).toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
