"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import Navbar from "@/components/navbar"
import { AnimatedButton } from "@/components/animated-button"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart()
  const [isUpdating, setIsUpdating] = useState<Record<string, boolean>>({})

  const handleUpdateQuantity = (fishId: string, newQuantity: number) => {
    setIsUpdating((prev) => ({ ...prev, [fishId]: true }))

    // Simulate a small delay for better UX
    setTimeout(() => {
      updateQuantity(fishId, newQuantity)
      setIsUpdating((prev) => ({ ...prev, [fishId]: false }))
    }, 300)
  }

  const handleRemoveItem = (fishId: string) => {
    setIsUpdating((prev) => ({ ...prev, [fishId]: true }))

    // Simulate a small delay for better UX
    setTimeout(() => {
      removeFromCart(fishId)
    }, 300)
  }

  const subtotal = getCartTotal()
  const shippingFee = subtotal > 1000 ? 0 : 150
  const total = subtotal + shippingFee

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any fish to your cart yet.</p>
              <Link href="/">
                <AnimatedButton animation="float">Browse Products</AnimatedButton>
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.fish.id} className="flex flex-col sm:flex-row gap-4">
                          <div className="relative w-full sm:w-32 h-32 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={item.fish.image || "/placeholder.svg"}
                              alt={item.fish.nameEn}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">{item.fish.nameEn}</h3>
                                <p className="text-sm text-gray-500">{item.fish.nameFil}</p>
                              </div>
                              <p className="font-semibold">₱{(item.fish.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">₱{item.fish.price.toFixed(2)}/kg</p>
                            <div className="flex items-center justify-between mt-auto pt-4">
                              <div className="flex items-center border rounded-md">
                                <AnimatedButton
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => handleUpdateQuantity(item.fish.id, item.quantity - 1)}
                                  disabled={isUpdating[item.fish.id] || item.quantity <= 1}
                                  animation="icon"
                                >
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">Decrease quantity</span>
                                </AnimatedButton>
                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                <AnimatedButton
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => handleUpdateQuantity(item.fish.id, item.quantity + 1)}
                                  disabled={isUpdating[item.fish.id]}
                                  animation="icon"
                                >
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">Increase quantity</span>
                                </AnimatedButton>
                              </div>
                              <AnimatedButton
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0 h-8"
                                onClick={() => handleRemoveItem(item.fish.id)}
                                disabled={isUpdating[item.fish.id]}
                                animation="icon"
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                <span>Remove</span>
                              </AnimatedButton>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₱{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>{shippingFee === 0 ? "Free" : `₱${shippingFee.toFixed(2)}`}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>₱{total.toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {shippingFee === 0
                          ? "Free shipping applied for orders over ₱1,000"
                          : "Free shipping for orders over ₱1,000"}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link href="/checkout">
                        <AnimatedButton className="w-full" animation="checkout">
                          Proceed to Checkout
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </AnimatedButton>
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/">
                        <AnimatedButton variant="outline" className="w-full" animation="outline">
                          Continue Shopping
                        </AnimatedButton>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="w-full py-6 bg-primary-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">OceanMart</h3>
              <p className="text-white opacity-90">Bringing the freshest catch from Philippine waters to your table.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white hover:text-white hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/fresh" className="text-white hover:text-white hover:underline">
                    Fresh Fish
                  </Link>
                </li>
                <li>
                  <Link href="/frozen" className="text-white hover:text-white hover:underline">
                    Frozen Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-white hover:underline">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-white opacity-90">
                123 Seafood Street
                <br />
                Manila, Philippines
                <br />
                Phone: (02) 8123-4567
                <br />
                Email: info@emartfish.ph
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-primary-800 pt-6 text-center text-white">
            <p>© 2025 OceanMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
