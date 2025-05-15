import Image from "next/image"
import Link from "next/link"
import { AnimatedButton } from "@/components/animated-button"

export function PremiumFishSection() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Premium Fish Selection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indulge in our premium selection of saltwater fish varieties, carefully sourced for their exceptional
            quality and flavor. Perfect for special occasions and gourmet meals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Premium Fish Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image src="/images/lapu-lapu.jpeg" alt="Lapu-Lapu (Grouper)" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Lapu-Lapu (Grouper)</h3>
                  <p className="text-sm opacity-90">Premium reef fish from Cebu</p>
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

          {/* Premium Fish Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image src="/placeholder.svg?key=tuna" alt="Yellowfin Tuna" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Yellowfin Tuna</h3>
                  <p className="text-sm opacity-90">From General Santos</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-bold text-primary-600">₱480/kg</span>
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">Premium</span>
              </div>
              <p className="text-gray-600 mb-4">
                Premium tuna with firm, meaty flesh, excellent for grilling, searing, or as sashimi. Rich in flavor and
                omega-3 fatty acids.
              </p>
              <Link href="/fish/tuna">
                <AnimatedButton variant="outline" animation="float" className="w-full">
                  View Details
                </AnimatedButton>
              </Link>
            </div>
          </div>

          {/* Premium Fish Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image src="/placeholder.svg?key=espada" alt="Swordfish (Espada)" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Swordfish (Espada)</h3>
                  <p className="text-sm opacity-90">From Batangas waters</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-bold text-primary-600">₱450/kg</span>
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">Special</span>
              </div>
              <p className="text-gray-600 mb-4">
                A large predatory fish with firm, meaty flesh, perfect for grilling or pan-searing. Excellent for steaks
                and special occasions.
              </p>
              <Link href="/fish/espada">
                <AnimatedButton variant="outline" animation="float" className="w-full">
                  View Details
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/fresh">
            <AnimatedButton animation="primary">View All Premium Fish</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
