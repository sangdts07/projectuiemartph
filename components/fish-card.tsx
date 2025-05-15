import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { Fish } from "@/lib/fish-data"

interface FishCardProps {
  fish: Fish
  priority?: boolean
}

export default function FishCard({ fish, priority = false }: FishCardProps) {
  return (
    <Link href={`/fish/${fish.id}`} className="group">
      <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={fish.image || "/placeholder.svg"}
            alt={fish.nameEn}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />
          {fish.isHighSupply && <Badge className="absolute top-2 right-2 bg-primary-700">High Supply</Badge>}
          {fish.isOnSale && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
          {fish.isFrozen && <Badge className="absolute bottom-2 right-2 bg-blue-500">Frozen</Badge>}
        </div>
        <div className="p-4">
          <div className="flex items-baseline justify-between">
            <h3 className="font-medium">{fish.nameEn}</h3>
            <span className="text-sm text-gray-500">{fish.nameFil}</span>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-lg font-bold">₱{fish.price.toFixed(2)}</span>
            {fish.oldPrice && <span className="text-sm text-gray-500 line-through">₱{fish.oldPrice.toFixed(2)}</span>}
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">{fish.description}</p>
        </div>
      </div>
    </Link>
  )
}
