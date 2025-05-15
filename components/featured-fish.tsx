import Image from "next/image"
import Link from "next/link"
import { AnimatedButton } from "@/components/animated-button"

export default function FeaturedFish() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">Featured Fish</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Lapu-Lapu (Grouper)</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Lapu-Lapu, named after a Filipino hero, is a premium fish known for its firm, white flesh and delicate
              flavor. Perfect for grilling, steaming, or creating the classic Filipino dish "Lapu-Lapu sa Mayonesa."
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/fish/lapu-lapu">
                <AnimatedButton animation="primary">Learn More</AnimatedButton>
              </Link>
              <AnimatedButton variant="outline" animation="add-to-cart">
                Add to Cart
              </AnimatedButton>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
            <Image
              src="/placeholder.svg?key=j7vyu"
              alt="Lapu-Lapu (Grouper)"
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
