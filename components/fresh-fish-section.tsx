import Link from "next/link"
import { Droplets } from "lucide-react"
import type { Fish } from "@/lib/fish-data"
import FishCard from "@/components/fish-card"
import { AnimatedButton } from "@/components/animated-button"

interface FreshFishSectionProps {
  fish: Fish[]
}

export default function FreshFishSection({ fish }: FreshFishSectionProps) {
  return (
    <section className="w-full py-12 bg-primary-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary-200 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
            <Droplets className="h-4 w-4" /> Fresh Catch
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Premium Fresh Fish</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Caught daily and delivered straight to your table - experience the ocean's finest flavors
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {fish.map((item) => (
            <FishCard key={item.id} fish={item} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/fresh">
            <AnimatedButton className="bg-primary-700 hover:bg-primary-800" animation="primary">
              View All Fresh Fish
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
