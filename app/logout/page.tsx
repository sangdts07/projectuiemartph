"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Remove all authentication cookies
    Cookies.remove("auth-token")
    Cookies.remove("user-email")
    Cookies.remove("user-name")

    // Redirect to login page
    router.push("/login")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Logging out...</h1>
        <p>You are being redirected to the login page.</p>
      </div>
    </div>
  )
}
