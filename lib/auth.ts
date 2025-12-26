export function getUser() {
  if (typeof window === "undefined") return null
  const userStr = sessionStorage.getItem("user")
  if (!userStr) return null
  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

export function setUser(email: string, password: string, role: "admin" | "teacher") {
  if (typeof window === "undefined") return
  sessionStorage.setItem("user", JSON.stringify({ email, password, role }))
}

export function clearUser() {
  if (typeof window === "undefined") return
  sessionStorage.removeItem("user")
}
