import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the path of the request
  const path = request.nextUrl.pathname

  // Check if the user is authenticated (has a session token)
  const isAuthenticated = request.cookies.has("auth-token")

  // Special case for root path - always redirect to splash
  if (path === "/") {
    return NextResponse.redirect(new URL("/splash", request.url))
  }

  // Define public paths that don't require authentication
  const isPublicPath = ["/login", "/register", "/forgot-password", "/splash"].includes(path)

  // If the user is not authenticated and trying to access a protected route, redirect to login
  if (!isAuthenticated && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If the user is authenticated and trying to access login/register/splash, redirect to home
  if (isAuthenticated && isPublicPath) {
    return NextResponse.redirect(new URL("/home", request.url))
  }

  // Otherwise, continue with the request
  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public assets)
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|images/|api/).*)",
  ],
}
