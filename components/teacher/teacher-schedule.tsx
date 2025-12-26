"use client"

export default function TeacherSchedule() {
  const schedule = {
    monday: { start: "8:30 AM", end: "5:30 PM", status: "Working" },
    tuesday: { start: "8:30 AM", end: "5:30 PM", status: "Working" },
    wednesday: { start: "8:30 AM", end: "5:30 PM", status: "Working" },
    thursday: { start: "8:30 AM", end: "5:30 PM", status: "Working" },
    friday: { start: "8:30 AM", end: "2:00 PM", status: "Working" },
    saturday: { start: "-", end: "-", status: "Off" },
    sunday: { start: "-", end: "-", status: "Off" },
  }

  const days = Object.entries(schedule)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {days.map(([day, info]) => (
          <div
            key={day}
            className={`border border-border rounded-lg p-6 ${
              info.status === "Off" ? "bg-foreground/5" : "bg-card hover:shadow-md transition"
            }`}
          >
            <h3 className="font-bold text-foreground text-lg capitalize mb-2">{day}</h3>
            {info.status === "Off" ? (
              <p className="text-foreground/70 font-semibold">Day Off</p>
            ) : (
              <div className="space-y-1">
                <p className="text-foreground/70">
                  <span className="font-semibold">Start:</span> {info.start}
                </p>
                <p className="text-foreground/70">
                  <span className="font-semibold">End:</span> {info.end}
                </p>
                <p className="text-sm mt-3 px-2 py-1 bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 rounded w-fit font-medium">
                  {info.status}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          {[
            { date: "Dec 24", event: "Christmas Party", time: "2:00 PM" },
            { date: "Dec 27", event: "New Year Prep Activity", time: "10:00 AM" },
            { date: "Jan 10", event: "Parent-Teacher Conferences", time: "4:00 PM" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">{item.event}</p>
                <p className="text-sm text-foreground/70">
                  {item.date} at {item.time}
                </p>
              </div>
              <span className="text-lg">📅</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
