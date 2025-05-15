import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Heart, Share2, Award, Droplets, Fish } from "lucide-react"
import { allFish } from "@/lib/fish-data"
import Navbar from "@/components/navbar"
import { AnimatedButton } from "@/components/animated-button"

export default function TaniguePage() {
  const tanigue = allFish.find((fish) => fish.id === "tanigue")!
  const relatedFish = allFish
    .filter((fish) => fish.category === tanigue.category && fish.id !== tanigue.id && !fish.isFrozen)
    .slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image src="/images/tanigue-new.jpeg" alt={tanigue.nameEn} fill className="object-cover" priority />
                {tanigue.isOnSale && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full">On Sale</div>
                )}
                {tanigue.isHighSupply && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full">
                    High Supply
                  </div>
                )}
              </div>
              <div className="mt-6 bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary-600" />
                  Premium Quality
                </h3>
                <p className="text-gray-700">
                  Our Tanigue (Spanish Mackerel) is sourced from the pristine waters of Iloilo, Philippines. Each fish
                  is carefully selected to ensure the highest quality and freshness. Perfect for kinilaw (Filipino
                  ceviche), grilling, or pan-searing.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Droplets className="h-4 w-4" /> Fresh Catch
                  </span>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Fish className="h-4 w-4" /> Saltwater
                  </span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Link href="/" className="hover:text-primary-600">
                  Home
                </Link>
                <span>/</span>
                <Link href="/fresh" className="hover:text-primary-600">
                  Fresh Fish
                </Link>
                <span>/</span>
                <span>Tanigue</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">{tanigue.nameEn}</h1>
              <h2 className="text-xl text-gray-600 mb-4">
                {tanigue.nameFil} • From {tanigue.origin}
              </h2>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold text-primary-700">₱{tanigue.price}</div>
                {tanigue.oldPrice && <div className="text-xl text-gray-400 line-through">₱{tanigue.oldPrice}</div>}
                <div className="text-sm text-gray-500">per kilogram</div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{tanigue.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Weight Range</h3>
                <p className="text-gray-700">
                  {tanigue.weight.min} - {tanigue.weight.max} kg per piece
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Cooking Suggestions</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Kinilaw (Filipino ceviche) - raw fish marinated in vinegar and citrus</li>
                  <li>Grilled with minimal seasoning to enjoy its natural flavor</li>
                  <li>Pan-seared steaks with garlic and butter</li>
                  <li>Sinigang (Filipino sour soup) for a hearty meal</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <AnimatedButton className="flex-1" animation="primary">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </AnimatedButton>
                <AnimatedButton variant="outline" className="flex-1" animation="outline">
                  <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
                </AnimatedButton>
                <AnimatedButton variant="ghost" className="flex-1" animation="float">
                  <Share2 className="mr-2 h-5 w-5" /> Share
                </AnimatedButton>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4">Nutritional Benefits</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-medium">Protein</div>
                    <div className="text-gray-600">High</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-medium">Omega-3</div>
                    <div className="text-gray-600">Rich source</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-medium">Vitamin D</div>
                    <div className="text-gray-600">Good source</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-medium">Selenium</div>
                    <div className="text-gray-600">High</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedFish.map((fish) => (
                <div
                  key={fish.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link href={`/fish/${fish.id}`}>
                    <div className="relative h-48">
                      <Image src={fish.image || "/placeholder.svg"} alt={fish.nameEn} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{fish.nameEn}</h3>
                      <p className="text-gray-600 text-sm">{fish.nameFil}</p>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="font-bold text-primary-700">₱{fish.price}</div>
                        <div className="text-sm text-gray-500">per kg</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-6 bg-primary-900 text-white mt-16">
        <div className="container mx-auto px-4">
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
                Email: info@oceanmart.ph
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
