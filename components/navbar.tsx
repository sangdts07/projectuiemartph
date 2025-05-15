"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fish, Menu, X, ShoppingCart, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCart } from "@/lib/cart-context"
import Cookies from "js-cookie"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { getItemCount } = useCart()
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [itemCount, setItemCount] = useState(0)

  // Get user email from cookie and set client state
  useEffect(() => {
    setIsClient(true)
    const email = Cookies.get("user-email")
    setUserEmail(email || null)

    // Safely get item count after component mounts
    try {
      setItemCount(getItemCount())
    } catch (error) {
      console.error("Error getting item count:", error)
    }
  }, [getItemCount])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/home" className="flex items-center gap-2">
          <Fish className="h-6 w-6 text-primary-700" />
          <span className="text-xl font-bold">OceanMart</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/home"
            className={`text-sm font-medium ${
              isActive("/home") ? "text-primary-700" : "text-gray-600 hover:text-primary-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/fresh"
            className={`text-sm font-medium ${
              isActive("/fresh") ? "text-primary-700" : "text-gray-600 hover:text-primary-700"
            }`}
          >
            Fresh Fish
          </Link>
          <Link
            href="/frozen"
            className={`text-sm font-medium ${
              isActive("/frozen") ? "text-primary-700" : "text-gray-600 hover:text-primary-700"
            }`}
          >
            Frozen Fish
          </Link>
          <Link
            href="/high-supply"
            className={`text-sm font-medium ${
              isActive("/high-supply") ? "text-primary-700" : "text-gray-600 hover:text-primary-700"
            }`}
          >
            High Supply
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium ${
              isActive("/about") ? "text-primary-700" : "text-gray-600 hover:text-primary-700"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${
              isActive("/contact") ? "text-primary-700" : "text-gray-600 hover:text-primary-700"
            }`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            {isClient && itemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-700 text-[10px] font-medium text-white">
                {itemCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Link>

          {isClient && userEmail && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{userEmail}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/logout" className="text-red-500 flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/home" className="flex items-center gap-2" onClick={closeMenu}>
              <Fish className="h-6 w-6 text-primary-700" />
              <span className="text-xl font-bold">OceanMart</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={closeMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 px-4 py-6">
            <Link
              href="/home"
              className={`text-lg font-medium ${isActive("/home") ? "text-primary-700" : "text-gray-600"}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/fresh"
              className={`text-lg font-medium ${isActive("/fresh") ? "text-primary-700" : "text-gray-600"}`}
              onClick={closeMenu}
            >
              Fresh Fish
            </Link>
            <Link
              href="/frozen"
              className={`text-lg font-medium ${isActive("/frozen") ? "text-primary-700" : "text-gray-600"}`}
              onClick={closeMenu}
            >
              Frozen Fish
            </Link>
            <Link
              href="/high-supply"
              className={`text-lg font-medium ${isActive("/high-supply") ? "text-primary-700" : "text-gray-600"}`}
              onClick={closeMenu}
            >
              High Supply
            </Link>
            <Link
              href="/about"
              className={`text-lg font-medium ${isActive("/about") ? "text-primary-700" : "text-gray-600"}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium ${isActive("/contact") ? "text-primary-700" : "text-gray-600"}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            {userEmail && (
              <>
                <div className="h-px bg-gray-200" />
                <div className="py-2">
                  <p className="text-sm text-gray-500">Signed in as:</p>
                  <p className="font-medium">{userEmail}</p>
                </div>
                <Link href="/logout" className="flex items-center text-red-500 font-medium" onClick={closeMenu}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
