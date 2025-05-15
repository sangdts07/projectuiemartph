import Link from "next/link"
import type { Fish } from "@/lib/fish-data"
import FishCard from "@/components/fish-card"
import { AnimatedButton } from "@/components/animated-button"

interface HighSupplySectionProps {
  fish: Fish[]
}

export default function HighSupplySection({ fish }: HighSupplySectionProps) {
  return (
    <section className="w-full py-12 bg-primary-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary-200 px-3 py-1 text-sm text-primary-800">Fresh Catch</div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">High Supply Fish</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Take advantage of our abundant stock with special pricing
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {fish.map((item) => (
            <FishCard key={item.id} fish={item} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/high-supply">
            <AnimatedButton animation="float">View All High Supply Fish</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
