"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Fish } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Cookies from "js-cookie"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Check if user is already logged in
  useEffect(() => {
    const token = Cookies.get("auth-token")
    if (token) {
      router.push("/")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, set a cookie and redirect to home
      // In a real app, this would validate credentials with a backend
      const expiryDate = rememberMe ? 30 : 1 // days
      Cookies.set("auth-token", "demo-token-value", { expires: expiryDate })
      Cookies.set("user-email", email, { expires: expiryDate })

      setIsLoading(false)
      router.push("/")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <Fish className="h-8 w-8 text-primary-700" />
              <span className="text-2xl font-bold">OceanMart</span>
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Sign in to your account</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="p-3 bg-red-50 text-red-500 text-sm rounded-md">{error}</div>}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-primary-700 hover:text-primary-600">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary-700 hover:text-primary-600 font-medium">
              Create an account
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setIsLoading(true)
                setTimeout(() => {
                  Cookies.set("auth-token", "google-token-value", { expires: 30 })
                  Cookies.set("user-email", "google-user@example.com", { expires: 30 })
                  setIsLoading(false)
                  router.push("/")
                }, 1500)
              }}
            >
              Google
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setIsLoading(true)
                setTimeout(() => {
                  Cookies.set("auth-token", "facebook-token-value", { expires: 30 })
                  Cookies.set("user-email", "facebook-user@example.com", { expires: 30 })
                  setIsLoading(false)
                  router.push("/")
                }, 1500)
              }}
            >
              Facebook
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
