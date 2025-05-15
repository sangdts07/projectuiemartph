import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Snowflake } from "lucide-react"
import { frozenFish, FishCategory } from "@/lib/fish-data"
import Navbar from "@/components/navbar"
import FishCard from "@/components/fish-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FrozenFishPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-secondary-200 px-3 py-1 text-sm text-secondary-800 flex items-center gap-1">
                <Snowflake className="h-4 w-4" /> Frozen Products
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Frozen Fish Collection
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Quality frozen fish at lower prices - perfect for meal planning and budget-conscious shoppers
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-secondary-700 hover:bg-secondary-800">Shop All Frozen</Button>
                <Link href="/fish">
                  <Button variant="outline">View Fresh Fish</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Browse Frozen Fish</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our frozen fish are flash-frozen to preserve freshness and flavor
              </p>
            </div>

            <Tabs defaultValue="all" className="mt-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Frozen</TabsTrigger>
                <TabsTrigger value="freshwater">Freshwater</TabsTrigger>
                <TabsTrigger value="saltwater">Saltwater</TabsTrigger>
                <TabsTrigger value="imported">Imported</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {frozenFish.map((fish) => (
                    <FishCard key={fish.id} fish={fish} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="freshwater" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {frozenFish
                    .filter((fish) => fish.category === FishCategory.FRESHWATER)
                    .map((fish) => (
                      <FishCard key={fish.id} fish={fish} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="saltwater" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {frozenFish
                    .filter((fish) => fish.category === FishCategory.SALTWATER)
                    .map((fish) => (
                      <FishCard key={fish.id} fish={fish} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="imported" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {frozenFish
                    .filter((fish) => fish.category === FishCategory.IMPORTED)
                    .map((fish) => (
                      <FishCard key={fish.id} fish={fish} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-secondary-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Frozen Fish?</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our frozen fish products offer several advantages while maintaining quality and flavor:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-secondary-700 p-1 text-white mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">More Affordable</h3>
                      <p className="text-gray-500">Save 20-30% compared to fresh fish prices</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-secondary-700 p-1 text-white mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Longer Shelf Life</h3>
                      <p className="text-gray-500">Store for months without losing quality</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-secondary-700 p-1 text-white mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Convenience</h3>
                      <p className="text-gray-500">Pre-cleaned and ready to cook when you need it</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-secondary-700 p-1 text-white mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Flash-Frozen Quality</h3>
                      <p className="text-gray-500">
                        Our fish are frozen at peak freshness to lock in nutrients and flavor
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <img
                  src="/placeholder.svg?key=kl1xj"
                  alt="Frozen Fish Products"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
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
