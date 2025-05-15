import Link from "next/link"
import Image from "next/image"
import { popularFish } from "@/lib/fish-data"
import { Badge } from "@/components/ui/badge"

export function FeaturedFish() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Fish</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Discover our selection of premium fish, sourced fresh from Philippine waters.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
          {popularFish.slice(0, 3).map((fish) => (
            <Link key={fish.id} href={`/fish/${fish.id}`} className="group">
              <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={fish.image || "/placeholder.svg"}
                    alt={fish.nameEn}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                    quality={85}
                  />
                  {fish.isHighSupply && <Badge className="absolute top-2 right-2 bg-primary-700">High Supply</Badge>}
                  {fish.isOnSale && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-medium">{fish.nameEn}</h3>
                    <span className="text-sm text-gray-500">{fish.nameFil}</span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-lg font-bold">₱{fish.price.toFixed(2)}</span>
                    {fish.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">₱{fish.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">{fish.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/fresh"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-700"
          >
            View All Fresh Fish
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedFish
