"use client"

interface TeacherNavProps {
  onLogout: () => void
  userEmail?: string
}

export default function TeacherNav({ onLogout, userEmail }: TeacherNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
              ♥
            </div>
            <span className="font-bold text-lg text-foreground">Bright Kids Care</span>
            <span className="ml-4 px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded">Teacher</span>
          </div>
          <button onClick={onLogout} className="px-4 py-2 text-foreground hover:bg-foreground/10 rounded-lg transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
