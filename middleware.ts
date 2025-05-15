import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the path of the request
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/login" || path === "/register" || path === "/forgot-password" || path === "/splash" || path === "/" // Root path redirects to splash

  // Check if the user is authenticated (has a session token)
  const isAuthenticated = request.cookies.has("auth-token")

  // If at root path, redirect to splash
  if (path === "/") {
    return NextResponse.redirect(new URL("/splash", request.url))
  }

  // If the user is not authenticated and trying to access a protected route, redirect to login
  if (!isAuthenticated && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If the user is authenticated and trying to access login/register/splash, redirect to home page
  if (isAuthenticated && (path === "/login" || path === "/register" || path === "/splash")) {
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
     */
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
}
