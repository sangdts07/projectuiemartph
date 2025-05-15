"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fish, ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { getItemCount } = useCart()
  const itemCount = getItemCount()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                <Fish className="h-6 w-6 text-primary-700" />
                <span>OceanMart</span>
              </Link>
              <Link
                href="/"
                className={`text-lg font-medium ${pathname === "/" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/fresh"
                className={`text-lg font-medium ${pathname === "/fresh" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
                onClick={() => setIsOpen(false)}
              >
                Fresh
              </Link>
              <Link
                href="/frozen"
                className={`text-lg font-medium ${pathname === "/frozen" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
                onClick={() => setIsOpen(false)}
              >
                Frozen
              </Link>
              <Link
                href="/high-supply"
                className={`text-lg font-medium ${pathname === "/high-supply" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
                onClick={() => setIsOpen(false)}
              >
                High Supply
              </Link>
              <Link
                href="/about"
                className={`text-lg font-medium ${pathname === "/about" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-lg font-medium ${pathname === "/contact" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Fish className="h-6 w-6 text-primary-700" />
          <span className="text-lg font-bold">OceanMart</span>
        </Link>
        <nav className="hidden md:flex gap-6 flex-1">
          <Link
            href="/"
            className={`text-sm font-medium ${pathname === "/" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
          >
            Home
          </Link>
          <Link
            href="/fresh"
            className={`text-sm font-medium ${pathname === "/fresh" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
          >
            Fresh
          </Link>
          <Link
            href="/frozen"
            className={`text-sm font-medium ${pathname === "/frozen" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
          >
            Frozen
          </Link>
          <Link
            href="/high-supply"
            className={`text-sm font-medium ${pathname === "/high-supply" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
          >
            High Supply
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium ${pathname === "/about" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${pathname === "/contact" ? "text-primary-700" : "text-gray-500 hover:text-primary-700"}`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary-700 text-[10px] font-medium text-white flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">Create Account</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
