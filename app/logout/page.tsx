"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Clear all authentication cookies
    Cookies.remove("auth-token")
    Cookies.remove("user-email")
    Cookies.remove("user-name")

    // Redirect to login page
    setTimeout(() => {
      router.push("/login")
    }, 500)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-600">Logging out...</p>
      </div>
    </div>
  )
}
