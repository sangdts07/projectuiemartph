import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default function HomePage() {
  // Server-side check for authentication
  const cookieStore = cookies()
  const authToken = cookieStore.get("auth-token")

  if (!authToken) {
    redirect("/login")
  }

  // If authenticated, render the home page
  return (
    <div>
      {/* This is just a placeholder. The actual home page content would be imported here */}
      <h1>Welcome to OceanMart Home Page</h1>
      <p>You are now logged in and can access the full application.</p>
    </div>
  )
}
