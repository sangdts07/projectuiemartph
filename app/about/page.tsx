import Image from "next/image"
import Link from "next/link"
import { Fish, Anchor, Award, Users, Truck, ShieldCheck, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary-200 px-3 py-1 text-sm text-primary-800">
                  Our Story
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  From Ocean to Table: The OceanMart Story
                </h1>
                <p className="text-gray-500 md:text-xl">
                  Founded in 2020, eMart Market was born from a passion for bringing the freshest seafood from
                  Philippine waters directly to Filipino homes while supporting local fishing communities.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="/placeholder-83z3n.png"
                  alt="Filipino fishermen with traditional boats"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission & Vision</h2>
                <p className="text-gray-500 md:text-xl">
                  We're on a mission to revolutionize how Filipinos access fresh seafood while preserving traditional
                  fishing practices and supporting local communities.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-primary-200 p-2">
                      <Anchor className="h-6 w-6 text-primary-700" />
                    </div>
                    <h3 className="text-xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-gray-500">
                    To connect Filipino households with the freshest seafood from local waters through a convenient
                    online marketplace, ensuring fair compensation for fishermen and sustainable fishing practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-primary-200 p-2">
                      <Fish className="h-6 w-6 text-primary-700" />
                    </div>
                    <h3 className="text-xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-gray-500">
                    To become the Philippines' most trusted online seafood marketplace, known for quality,
                    sustainability, and positive impact on coastal communities while making premium seafood accessible
                    to all Filipinos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 bg-primary-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Values</h2>
                <p className="text-gray-500 md:text-xl">The principles that guide everything we do at eMart Market</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary-200 p-3 mb-4">
                    <Award className="h-6 w-6 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality</h3>
                  <p className="text-gray-500">
                    We never compromise on freshness and quality, ensuring every fish meets our strict standards before
                    reaching your table.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3 mb-4">
                    <Leaf className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                  <p className="text-gray-500">
                    We're committed to sustainable fishing practices that protect marine ecosystems for future
                    generations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3 mb-4">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-500">
                    We support local fishing communities through fair trade practices and investing in their
                    development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3 mb-4">
                    <ShieldCheck className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Trust</h3>
                  <p className="text-gray-500">
                    We build lasting relationships with customers and partners through transparency and reliability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3 mb-4">
                    <Truck className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                  <p className="text-gray-500">
                    We make premium seafood accessible to all Filipinos through convenient delivery and fair pricing.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3 mb-4">
                    <Fish className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tradition</h3>
                  <p className="text-gray-500">
                    We honor and preserve traditional Filipino fishing methods and culinary heritage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Journey</h2>
                <p className="text-gray-500 md:text-xl">
                  From a small startup to the Philippines' leading online fish market
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200 hidden md:block"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:pr-8">
                    <div className="inline-block rounded-lg bg-primary-200 px-3 py-1 text-sm text-primary-800 mb-2">
                      2020
                    </div>
                    <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                    <p className="text-gray-500">
                      OceanMart was founded in Manila by three friends with a passion for seafood and a vision to
                      connect local fishermen directly with consumers.
                    </p>
                  </div>
                  <div className="relative mt-4 md:mt-0">
                    <div className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-primary-700 border-4 border-white"></div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder-h96pt.png"
                        alt="eMart Fish Market founding team"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="order-last md:order-first relative mt-4 md:mt-0">
                    <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder-s8ps5.png"
                        alt="Partnership with local fishing communities"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="md:text-left md:pl-8">
                    <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800 mb-2">2021</div>
                    <h3 className="text-xl font-bold mb-2">Growing Partnerships</h3>
                    <p className="text-gray-500">
                      We established partnerships with fishing communities across Luzon, Visayas, and Mindanao,
                      expanding our selection and supporting more local fishermen.
                    </p>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:pr-8">
                    <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800 mb-2">2022</div>
                    <h3 className="text-xl font-bold mb-2">Sustainability Initiative</h3>
                    <p className="text-gray-500">
                      We launched our sustainability program, committing to responsible sourcing and reducing our
                      environmental footprint through eco-friendly packaging and carbon-neutral delivery.
                    </p>
                  </div>
                  <div className="relative mt-4 md:mt-0">
                    <div className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder-re770.png"
                        alt="Sustainability initiatives"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="order-last md:order-first relative mt-4 md:mt-0">
                    <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder-diegf.png"
                        alt="New processing facility"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="md:text-left md:pl-8">
                    <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800 mb-2">2023</div>
                    <h3 className="text-xl font-bold mb-2">Expansion</h3>
                    <p className="text-gray-500">
                      We opened our state-of-the-art processing facility in Navotas, allowing us to maintain the highest
                      standards of quality and freshness while serving more customers nationwide.
                    </p>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:pr-8">
                    <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800 mb-2">2024</div>
                    <h3 className="text-xl font-bold mb-2">Today & Beyond</h3>
                    <p className="text-gray-500">
                      Today, eMart Market serves thousands of Filipino households and restaurants, and we're just
                      getting started. Our vision is to become the most trusted seafood marketplace in Southeast Asia.
                    </p>
                  </div>
                  <div className="relative mt-4 md:mt-0">
                    <div className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500&query=eMart Fish Market today"
                        alt="eMart Fish Market today"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="w-full py-12 md:py-24 bg-primary-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Team</h2>
                <p className="text-gray-500 md:text-xl">The passionate people behind eMart Market</p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=160&query=Marco Santos"
                    alt="Marco Santos"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Marco Santos</h3>
                <p className="text-primary-700">Co-Founder & CEO</p>
                <p className="text-gray-500 text-center mt-2">
                  Former fisherman with 15 years of experience in the seafood industry
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=160&query=Isabella Reyes"
                    alt="Isabella Reyes"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Isabella Reyes</h3>
                <p className="text-teal-600">Co-Founder & COO</p>
                <p className="text-gray-500 text-center mt-2">
                  Supply chain expert with a passion for sustainable business practices
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=160&query=Gabriel Lim"
                    alt="Gabriel Lim"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Gabriel Lim</h3>
                <p className="text-teal-600">Co-Founder & CTO</p>
                <p className="text-gray-500 text-center mt-2">
                  Tech innovator focused on creating seamless online shopping experiences
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=160&query=Chef Maria Domingo"
                    alt="Chef Maria Domingo"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Chef Maria Domingo</h3>
                <p className="text-teal-600">Culinary Director</p>
                <p className="text-gray-500 text-center mt-2">
                  Award-winning chef who ensures our selection meets culinary excellence standards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                <p className="text-gray-500 md:text-xl">
                  Don't just take our word for it - hear from our satisfied customers
                </p>
              </div>
            </div>
            <Tabs defaultValue="customers" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="customers">Customers</TabsTrigger>
                <TabsTrigger value="restaurants">Restaurant Partners</TabsTrigger>
              </TabsList>
              <TabsContent value="customers" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image src="/filipino-woman-smiling.png" alt="Ana Gonzales" fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold">Ana Gonzales</h4>
                          <p className="text-sm text-gray-500">Manila</p>
                        </div>
                      </div>
                      <p className="text-gray-500">
                        "I've never had fresher fish delivered to my home! The quality is consistently excellent, and I
                        love knowing that I'm supporting local fishermen."
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=48&width=48&query=Ramon Dela Cruz"
                            alt="Ramon Dela Cruz"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Ramon Dela Cruz</h4>
                          <p className="text-sm text-gray-500">Quezon City</p>
                        </div>
                      </div>
                      <p className="text-gray-500">
                        "The convenience of having fresh seafood delivered to my doorstep is unmatched. The advance
                        ordering discount is a great bonus too!"
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=48&width=48&query=Lola Carmen"
                            alt="Lola Carmen"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Lola Carmen</h4>
                          <p className="text-sm text-gray-500">Pasig</p>
                        </div>
                      </div>
                      <p className="text-gray-500">
                        "At my age, going to the wet market is difficult. eMart Market brings the wet market to me, with
                        even better quality than I used to find myself!"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="restaurants" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=48&width=48&query=Chef Paolo Mendoza"
                            alt="Chef Paolo Mendoza"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Chef Paolo Mendoza</h4>
                          <p className="text-sm text-gray-500">Seaside Grill Restaurant</p>
                        </div>
                      </div>
                      <p className="text-gray-500">
                        "As a chef, the quality of ingredients is everything. eMart consistently delivers the freshest
                        fish that meets our high standards. Our customers can taste the difference."
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=48&width=48&query=Elena Santos"
                            alt="Elena Santos"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Elena Santos</h4>
                          <p className="text-sm text-gray-500">Kainan sa Baybay</p>
                        </div>
                      </div>
                      <p className="text-gray-500">
                        "The bulk ordering system has streamlined our procurement process. The reliability and
                        consistency of supply has been crucial for our restaurant's success."
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=48&width=48&query=Miguel Tan"
                            alt="Miguel Tan"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Miguel Tan</h4>
                          <p className="text-sm text-gray-500">Bay View Resort</p>
                        </div>
                      </div>
                      <p className="text-gray-500">
                        "Our resort serves guests from around the world, and they all comment on the exceptional quality
                        of our seafood dishes. eMart is our trusted partner in delivering this experience."
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Certifications */}
        <section className="w-full py-12 md:py-24 bg-primary-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Certifications</h2>
                <p className="text-gray-500 md:text-xl">
                  We adhere to the highest standards of quality and sustainability
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src="/placeholder.svg?height=96&width=96&query=Sustainable Seafood Certification"
                      alt="Sustainable Seafood Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sustainable Seafood Certified</h3>
                  <p className="text-gray-500">
                    Our seafood is sourced according to strict sustainability standards that protect marine ecosystems.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src="/placeholder.svg?height=96&width=96&query=Food Safety Certification"
                      alt="Food Safety Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">HACCP Certified</h3>
                  <p className="text-gray-500">
                    Our facilities and processes meet the Hazard Analysis Critical Control Point standards for food
                    safety.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src="/fair-trade-certification-logo.png"
                      alt="Fair Trade Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fair Trade Partner</h3>
                  <p className="text-gray-500">
                    We ensure fair compensation and working conditions for all fishermen in our supply chain.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join the eMart Family</h2>
                <p className="text-gray-500 md:text-xl">
                  Experience the difference of truly fresh seafood delivered to your doorstep while supporting local
                  fishing communities and sustainable practices.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/fish">
                    <Button size="lg">Shop Now</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600&query=Family enjoying eMart fish"
                  alt="Family enjoying eMart fish"
                  width={600}
                  height={600}
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
                  <Link href="/contact" className="text-white hover:text-white hover:underline">
                    Contact
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
