import Image from "next/image"
import Link from "next/link"
import type { Fish } from "@/lib/fish-data"

interface NewArrivalsProps {
  newFish: Fish[]
}

export function NewArrivals({ newFish }: NewArrivalsProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newFish.map((fish) => (
            <Link
              href={`/fish/${fish.id}`}
              key={fish.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={fish.image || "/placeholder.svg"} alt={fish.nameEn} fill className="object-cover" />
                {fish.isOnSale && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {fish.nameEn} <span className="text-gray-500">({fish.nameFil})</span>
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{fish.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-primary-600">₱{fish.price}/kg</span>
                    {fish.oldPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">₱{fish.oldPrice}/kg</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {fish.weight.min}-{fish.weight.max}kg
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
