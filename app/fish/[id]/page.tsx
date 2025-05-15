"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Minus, Plus, ShoppingCart, Heart, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allFish } from "@/lib/fish-data"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"
import FishCard from "@/components/fish-card"
import { AnimatedButton } from "@/components/animated-button"

export default function FishDetailPage({ params }: { params: { id: string } }) {
  const fish = allFish.find((f) => f.id === params.id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  if (!fish) {
    notFound()
  }

  const relatedFish = allFish.filter((f) => f.category === fish.category && f.id !== fish.id).slice(0, 4)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      addToCart(fish, quantity)
      setIsAdding(false)

      toast({
        title: "Added to cart",
        description: `${quantity} kg of ${fish.nameEn} (${fish.nameFil}) has been added to your cart.`,
        duration: 3000,
      })
    }, 500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={fish.image || "/placeholder.svg"}
                alt={fish.nameEn}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
                quality={85}
              />
              {fish.isHighSupply && <Badge className="absolute top-4 right-4 bg-primary-700">High Supply</Badge>}
              {fish.isOnSale && <Badge className="absolute top-4 left-4 bg-red-500">Sale</Badge>}
            </div>
            <div className="flex flex-col space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{fish.nameEn}</h1>
                <p className="text-xl text-gray-500">{fish.nameFil}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">₱{fish.price.toFixed(2)}/kg</span>
                  {fish.oldPrice && (
                    <span className="text-xl text-gray-500 line-through">₱{fish.oldPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
              <p className="text-gray-600">{fish.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Origin:</span>
                  <span>{fish.origin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Category:</span>
                  <span className="capitalize">{fish.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Weight Range:</span>
                  <span>
                    {fish.weight.min} - {fish.weight.max} kg per piece
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Supply Level:</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${fish.supplyLevel > 7 ? "bg-primary-700" : fish.supplyLevel > 4 ? "bg-secondary-700" : "bg-red-500"}`}
                      style={{ width: `${fish.supplyLevel * 10}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <AnimatedButton
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-none"
                    animation="icon"
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </AnimatedButton>
                  <span className="w-12 text-center">{quantity}</span>
                  <AnimatedButton
                    variant="ghost"
                    size="icon"
                    onClick={incrementQuantity}
                    className="h-10 w-10 rounded-none"
                    animation="icon"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </AnimatedButton>
                </div>
                <AnimatedButton
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  animation="add-to-cart"
                  isLoading={isAdding}
                >
                  {isAdding ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </>
                  )}
                </AnimatedButton>
                <AnimatedButton variant="outline" size="icon" animation="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </AnimatedButton>
              </div>
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="cooking">Cooking Tips</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="space-y-4 pt-4">
                  <p>
                    {fish.nameEn} (Filipino: {fish.nameFil}) is a popular fish in the Philippines, sourced from{" "}
                    {fish.origin}. It belongs to the {fish.category} category and is known for its{" "}
                    {fish.category === "freshwater" ? "mild and clean" : "rich and distinctive"} flavor.
                  </p>
                  <p>
                    This fish typically weighs between {fish.weight.min} and {fish.weight.max} kg per piece, making it
                    perfect for{" "}
                    {fish.weight.max > 1
                      ? "family meals and special occasions"
                      : "individual servings and everyday cooking"}
                    .
                  </p>
                </TabsContent>
                <TabsContent value="cooking" className="space-y-4 pt-4">
                  <h3 className="font-medium">Recommended Cooking Methods:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Grilling: Brush with calamansi and soy sauce for authentic Filipino flavor</li>
                    <li>Steaming: Perfect for preserving the natural taste and texture</li>
                    <li>Sinigang: Add to sour tamarind soup with vegetables</li>
                    <li>Paksiw: Cook in vinegar with garlic and ginger</li>
                    {fish.category === "saltwater" && (
                      <li>Kinilaw: Filipino ceviche with vinegar, calamansi, and spices</li>
                    )}
                  </ul>
                </TabsContent>
                <TabsContent value="nutrition" className="space-y-4 pt-4">
                  <h3 className="font-medium">Nutritional Benefits:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>High in protein and low in fat</li>
                    <li>Rich in omega-3 fatty acids</li>
                    <li>Good source of vitamins D and B2</li>
                    <li>Contains minerals like calcium, phosphorus, iron, zinc, iodine, magnesium, and potassium</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Fish</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedFish.map((relatedFish) => (
                <FishCard key={relatedFish.id} fish={relatedFish} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full py-6 bg-primary-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">OceanMart</h3>
              <p className="text-teal-100">Bringing the freshest catch from Philippine waters to your table.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-primary-100 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/fresh" className="text-primary-100 hover:text-white">
                    Fresh Fish
                  </Link>
                </li>
                <li>
                  <Link href="/frozen" className="text-primary-100 hover:text-white">
                    Frozen Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-primary-100 hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-teal-100">
                123 Seafood Street
                <br />
                Manila, Philippines
                <br />
                Phone: (02) 8123-4567
                <br />
                Email: info@oceanmart.ph
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-teal-800 pt-6 text-center text-teal-100">
            <p>© 2025 OceanMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
