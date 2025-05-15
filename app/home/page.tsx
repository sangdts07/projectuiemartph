"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FishCategory, popularFish, highSupplyFish, allFish, frozenFish } from "@/lib/fish-data"
import Navbar from "@/components/navbar"
import FishCard from "@/components/fish-card"
import HighSupplySection from "@/components/high-supply-section"
import FrozenFishSection from "@/components/frozen-fish-section"
import FeaturedFish from "@/components/featured-fish"
import FreshFishSection from "@/components/fresh-fish-section"
import { freshFish } from "@/lib/fish-data"
import { AnimatedButton } from "@/components/animated-button"
import { NewArrivals } from "@/components/new-arrivals"
import { FeaturedNewFish } from "@/components/featured-new-fish"
import { PremiumFishSection } from "@/components/premium-fish-section"
import { TanigueFeature } from "@/components/tanigue-feature"
import { FilipinoFishSection } from "@/components/filipino-fish-section"

export default function HomePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    // Check authentication on client side
    const authToken = Cookies.get("auth-token")
    const email = Cookies.get("user-email")

    if (!authToken) {
      router.push("/login")
      return
    }

    setUserEmail(email || null)
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Get unique fish for each section to avoid duplicates
  const featuredFreshFish = freshFish
    .filter((fish) => !fish.id.includes("galunggong") && !fish.id.includes("tanigue") && !fish.id.includes("lapu-lapu"))
    .slice(0, 4)

  // Ensure we have different fish in the New Arrivals section
  const newArrivalFish = [
    allFish.find((fish) => fish.id === "maya-maya")!,
    allFish.find((fish) => fish.id === "espada")!,
    allFish.find((fish) => fish.id === "kitang")!,
    allFish.find((fish) => fish.id === "tuna")!,
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Daily Fresh Harvest
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  The freshest saltwater fish from Philippine waters delivered to your doorstep. Explore our wide
                  selection of local and imported seafood.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/fresh">
                  <AnimatedButton animation="primary">Shop Now</AnimatedButton>
                </Link>
                <Link href="/about">
                  <AnimatedButton variant="outline" animation="outline">
                    Learn More
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FreshFishSection fish={featuredFreshFish} />

        <FilipinoFishSection />

        <TanigueFeature />

        <HighSupplySection fish={highSupplyFish} />

        <PremiumFishSection />

        <FrozenFishSection fish={frozenFish.slice(0, 4)} />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular Fish</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Our most popular selections from local fishermen across the Philippines
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {popularFish.map((fish) => (
                <FishCard key={fish.id} fish={fish} />
              ))}
            </div>
          </div>
        </section>

        <FeaturedFish />
        <FeaturedNewFish />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Browse by Category</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Find the perfect seafood for your next meal
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="saltwater">Saltwater</TabsTrigger>
                <TabsTrigger value="imported">Imported</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allFish
                    .filter((fish) => !fish.isFrozen)
                    .slice(0, 8)
                    .map((fish) => (
                      <FishCard key={fish.id} fish={fish} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="saltwater" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allFish
                    .filter((fish) => fish.category === FishCategory.SALTWATER && !fish.isFrozen)
                    .slice(0, 8)
                    .map((fish) => (
                      <FishCard key={fish.id} fish={fish} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="imported" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allFish
                    .filter((fish) => fish.category === FishCategory.IMPORTED && !fish.isFrozen)
                    .slice(0, 8)
                    .map((fish) => (
                      <FishCard key={fish.id} fish={fish} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-8">
              <Link href="/fresh">
                <AnimatedButton variant="outline" animation="float">
                  View All Products
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        <NewArrivals newFish={newArrivalFish} />
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
                  <Link href="/home" className="text-white hover:text-white hover:underline">
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
