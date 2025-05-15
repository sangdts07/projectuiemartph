import Image from "next/image"
import Link from "next/link"
import { AnimatedButton } from "@/components/animated-button"

export function FilipinoFishSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Authentic Filipino Saltwater Fish</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the true taste of the Philippines with our selection of local favorites, sourced directly from
            Filipino waters and prepared according to traditional methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Galunggong Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image src="/images/galunggong.webp" alt="Galunggong (Mackerel Scad)" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Galunggong (Mackerel Scad)</h3>
                  <p className="text-sm opacity-90">The people's fish</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-bold text-primary-600">₱160/kg</span>
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">Saltwater</span>
              </div>
              <p className="text-gray-600 mb-4">
                A staple in Filipino cuisine, known as the 'poor man's fish' but rich in flavor and nutrients. Perfect
                for frying or in sinigang.
              </p>
              <Link href="/fish/galunggong">
                <AnimatedButton variant="outline" animation="float" className="w-full">
                  View Details
                </AnimatedButton>
              </Link>
            </div>
          </div>

          {/* Tanigue Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image src="/images/tanigue.jpeg" alt="Tanigue (Spanish Mackerel)" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Tanigue (Spanish Mackerel)</h3>
                  <p className="text-sm opacity-90">Perfect for kinilaw</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-bold text-primary-600">₱420/kg</span>
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">Premium</span>
              </div>
              <p className="text-gray-600 mb-4">
                A premium fish with firm flesh, excellent for kinilaw (Filipino ceviche) and grilled dishes. Known for
                its rich flavor.
              </p>
              <Link href="/fish/tanigue">
                <AnimatedButton variant="outline" animation="float" className="w-full">
                  View Details
                </AnimatedButton>
              </Link>
            </div>
          </div>

          {/* Lapu-Lapu Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image src="/images/lapu-lapu.jpeg" alt="Lapu-Lapu (Grouper)" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Lapu-Lapu (Grouper)</h3>
                  <p className="text-sm opacity-90">Named after a Filipino hero</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-bold text-primary-600">₱450/kg</span>
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">Premium</span>
              </div>
              <p className="text-gray-600 mb-4">
                A premium fish with firm white flesh, perfect for steaming or grilling. Known for its sweet flavor and
                tender texture.
              </p>
              <Link href="/fish/lapu-lapu">
                <AnimatedButton variant="outline" animation="float" className="w-full">
                  View Details
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/fresh">
            <AnimatedButton animation="primary">Explore All Filipino Fish</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
