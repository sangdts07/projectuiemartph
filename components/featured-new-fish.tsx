import Image from "next/image"
import Link from "next/link"
import { AnimatedButton } from "@/components/animated-button"

export function FeaturedNewFish() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Premium Selections at eMart Market</h2>
            <p className="text-gray-600 mb-6">
              Discover our wide variety of premium saltwater fish from local and international waters. From the vibrant
              Lapu-Lapu to the classic Galunggong and Tanigue, we offer the freshest catch for your table.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                <p className="font-medium">Premium Quality Guaranteed</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                <p className="font-medium">Sustainably Sourced</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                <p className="font-medium">Available Fresh or Frozen</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/fresh">
                <AnimatedButton animation="primary">Explore Our Selection</AnimatedButton>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/lapu-lapu.jpeg"
                alt="Fresh Lapu-Lapu"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/galunggong.webp"
                alt="Galunggong"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/tanigue.jpeg"
                alt="Tanigue"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/flounder.jpg"
                alt="Flounder"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
