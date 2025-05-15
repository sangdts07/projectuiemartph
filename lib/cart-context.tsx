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

// Create a default context value to avoid undefined errors
const defaultContextValue: CartContextType = {
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getItemCount: () => 0,
  getDeliveryDiscount: () => ({ percentage: 0, amount: 0 }),
}

const CartContext = createContext<CartContextType>(defaultContextValue)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isClient, setIsClient] = useState(false)

  // Set client-side flag and load cart from localStorage on initial render
  useEffect(() => {
    setIsClient(true)
    try {
      const savedCart = localStorage.getItem("cart")
      if (savedCart) {
        setItems(JSON.parse(savedCart))
      }
    } catch (e) {
      console.error("Failed to parse saved cart", e)
    }
  }, [])

  // Save cart to localStorage whenever it changes, but only on client
  useEffect(() => {
    if (isClient && items.length > 0) {
      try {
        localStorage.setItem("cart", JSON.stringify(items))
      } catch (e) {
        console.error("Failed to save cart to localStorage", e)
      }
    }
  }, [items, isClient])

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
    if (isClient) {
      try {
        localStorage.removeItem("cart")
      } catch (e) {
        console.error("Failed to clear cart from localStorage", e)
      }
    }
  }

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.fish.price * item.quantity, 0)
  }

  const getItemCount = () => {
    if (!items || items.length === 0) return 0
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
  return context
}
