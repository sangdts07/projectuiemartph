import Link from "next/link"
import { Snowflake } from "lucide-react"
import type { Fish } from "@/lib/fish-data"
import FishCard from "@/components/fish-card"
import { AnimatedButton } from "@/components/animated-button"

interface FrozenFishSectionProps {
  fish: Fish[]
}

export default function FrozenFishSection({ fish }: FrozenFishSectionProps) {
  return (
    <section className="w-full py-12 bg-secondary-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary-200 px-3 py-1 text-sm text-secondary-800 flex items-center gap-1">
            <Snowflake className="h-4 w-4" /> Frozen Products
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Budget-Friendly Frozen Fish</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Quality frozen fish at lower prices - perfect for meal planning and budget-conscious shoppers
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {fish.map((item) => (
            <FishCard key={item.id} fish={item} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/frozen">
            <AnimatedButton className="bg-secondary-700 hover:bg-secondary-800" animation="secondary">
              View All Frozen Products
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
