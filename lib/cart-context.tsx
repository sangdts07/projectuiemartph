"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Fish } from "@/lib/fish-data"

export interface CartItem {
  fish: Fish
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (fish: Fish, quantity: number) => void
  removeFromCart: (fishId: string) => void
  updateQuantity: (fishId: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getItemCount: () => number
  getDeliveryDiscount: (daysInAdvance: number) => {
    percentage: number
    amount: number
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse saved cart", e)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addToCart = (fish: Fish, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.fish.id === fish.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.fish.id === fish.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        return [...prevItems, { fish, quantity }]
      }
    })
  }

  const removeFromCart = (fishId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.fish.id !== fishId))
  }

  const updateQuantity = (fishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(fishId)
      return
    }
    setItems((prevItems) => prevItems.map((item) => (item.fish.id === fishId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.fish.price * item.quantity, 0)
  }

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0)
  }

  const getDeliveryDiscount = (daysInAdvance: number) => {
    // Base discount starts at 7 days
    if (daysInAdvance < 7) {
      return { percentage: 0, amount: 0 }
    }

    // Calculate discount percentage based on days in advance
    // 7 days: 5% discount
    // 14 days: 10% discount
    // 21 days: 15% discount
    // 30+ days: 20% discount (max)
    let discountPercentage = 0

    if (daysInAdvance >= 30) {
      discountPercentage = 20
    } else if (daysInAdvance >= 21) {
      discountPercentage = 15
    } else if (daysInAdvance >= 14) {
      discountPercentage = 10
    } else if (daysInAdvance >= 7) {
      discountPercentage = 5
    }

    const total = getCartTotal()
    const discountAmount = (total * discountPercentage) / 100

    return {
      percentage: discountPercentage,
      amount: discountAmount,
    }
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getItemCount,
        getDeliveryDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
