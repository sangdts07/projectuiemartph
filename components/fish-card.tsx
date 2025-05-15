"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Snowflake, Check, ShoppingCart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/lib/cart-context"
import type { Fish } from "@/lib/fish-data"
import { AnimatedButton } from "@/components/animated-button"

interface FishCardProps {
  fish: Fish
}

export default function FishCard({ fish }: FishCardProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      addToCart(fish, 1)
      setIsAdding(false)

      toast({
        title: "Added to cart",
        description: `${fish.nameEn} (${fish.nameFil}) has been added to your cart.`,
        duration: 3000,
      })
    }, 500)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-square">
        <Image src={fish.image || "/placeholder.svg"} alt={fish.nameEn} fill className="object-cover" />
        {fish.isHighSupply && <Badge className="absolute top-2 right-2 bg-primary-700">High Supply</Badge>}
        {fish.isOnSale && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
        {fish.isFrozen && (
          <Badge className="absolute bottom-2 right-2 bg-secondary-700 flex items-center gap-1">
            <Snowflake className="h-3 w-3" /> Frozen
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{fish.nameEn}</h3>
          <p className="text-sm text-gray-500">{fish.nameFil}</p>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg">₱{fish.price.toFixed(2)}/kg</span>
            {fish.oldPrice && <span className="text-sm text-gray-500 line-through">₱{fish.oldPrice.toFixed(2)}</span>}
          </div>
          <p className="text-sm text-gray-600 mt-2">{fish.description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <AnimatedButton
          className="w-full"
          size="sm"
          onClick={handleAddToCart}
          disabled={isAdding}
          animation="add-to-cart"
          isLoading={isAdding}
        >
          {isAdding ? <Check className="h-4 w-4 mr-1" /> : <ShoppingCart className="h-4 w-4 mr-1" />}
          {isAdding ? "Added" : "Add to Cart"}
        </AnimatedButton>
        <Link href={`/fish/${fish.id}`} className="w-full">
          <AnimatedButton variant="outline" size="sm" className="w-full" animation="outline">
            View Details
          </AnimatedButton>
        </Link>
      </CardFooter>
    </Card>
  )
}
