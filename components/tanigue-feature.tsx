import Image from "next/image"
import Link from "next/link"
import { AnimatedButton } from "@/components/animated-button"

export function TanigueFeature() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Fresh Catch: Tanigue</h2>
          <div className="w-20 h-1 bg-primary-600 rounded mb-6"></div>
          <p className="text-gray-600 max-w-3xl text-center mb-8">
            Tanigue (Spanish Mackerel) is one of the Philippines' most prized fish varieties, known for its firm texture
            and rich flavor. Perfect for kinilaw (Filipino ceviche), grilling, or pan-searing.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/tanigue-new.jpeg"
              alt="Fresh Tanigue (Spanish Mackerel)"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Premium Catch
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold">Why Choose Tanigue?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Rich in Omega-3</h4>
                  <p className="text-gray-600">
                    Tanigue is packed with heart-healthy omega-3 fatty acids that support brain and cardiovascular
                    health.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Versatile Cooking</h4>
                  <p className="text-gray-600">
                    Perfect for Filipino kinilaw (ceviche), grilling, pan-searing, or even enjoyed as sashimi when
                    extremely fresh.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Premium Quality</h4>
                  <p className="text-gray-600">
                    Our Tanigue is sourced from the pristine waters of Iloilo, ensuring the highest quality and
                    freshness.
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-primary-700">₱320</span>
                <span className="text-gray-500">per kg</span>
              </div>
              <Link href="/fish/tanigue">
                <AnimatedButton animation="primary" className="w-full sm:w-auto">
                  View Details
                </AnimatedButton>
              </Link>
              <Link href="/fresh">
                <AnimatedButton variant="outline" animation="outline" className="w-full sm:w-auto">
                  Browse Fresh Fish
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
