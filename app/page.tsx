import { redirect } from "next/navigation"

export default function RootPage() {
  redirect("/splash")

  // This won't be rendered
  return null
}
