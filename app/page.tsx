import { redirect } from "next/navigation"

export default function RootPage() {
  // This will redirect to the splash page
  redirect("/splash")
}
