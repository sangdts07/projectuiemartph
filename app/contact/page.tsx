"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Send, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"
import { AnimatedButton } from "@/components/animated-button"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      })

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setIsSubmitted(false)
      }, 2000)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get in Touch
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Have questions about our products or services? We're here to help. Contact our team for assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <CheckCircle className="h-16 w-16 text-primary-700 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-gray-500 mb-4">
                          Thank you for reaching out. We'll get back to you as soon as possible.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Juan Dela Cruz"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="juan@example.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please provide details about your inquiry..."
                            rows={5}
                            required
                          />
                        </div>
                        <AnimatedButton
                          type="submit"
                          className="w-full"
                          disabled={isSubmitting}
                          animation="primary"
                          isLoading={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending Message..."
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </AnimatedButton>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary-100 p-3 text-primary-700">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Our Location</h3>
                        <address className="not-italic text-gray-500">
                          123 Seafood Street
                          <br />
                          Navotas Fish Port Complex
                          <br />
                          Metro Manila, Philippines
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary-100 p-3 text-primary-700">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Phone Numbers</h3>
                        <p className="text-gray-500">Main Office: (02) 8123-4567</p>
                        <p className="text-gray-500">Customer Service: (02) 8765-4321</p>
                        <p className="text-gray-500">Bulk Orders: 0917-123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary-100 p-3 text-primary-700">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email Addresses</h3>
                        <p className="text-gray-500">General Inquiries: info@oceanmart.ph</p>
                        <p className="text-gray-500">Customer Support: support@oceanmart.ph</p>
                        <p className="text-gray-500">Bulk Orders: wholesale@oceanmart.ph</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary-100 p-3 text-primary-700">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Business Hours</h3>
                        <p className="text-gray-500">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-500">Saturday: 8:00 AM - 4:00 PM</p>
                        <p className="text-gray-500">Sunday: Closed</p>
                        <p className="text-gray-500 mt-2">
                          <span className="font-medium">Note:</span> Orders can be placed online 24/7
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
                      <div className="flex gap-4">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                          <AnimatedButton variant="outline" size="icon" animation="icon">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </AnimatedButton>
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                          <AnimatedButton variant="outline" size="icon" animation="icon">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                          </AnimatedButton>
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          <AnimatedButton variant="outline" size="icon" animation="icon">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                          </AnimatedButton>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map and Directions */}
        <section className="w-full py-12 md:py-24 bg-primary-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Visit Our Location</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Come visit our main office and processing facility in Navotas Fish Port Complex
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?key=sdmho"
                  alt="Map of eMart Market location"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <AnimatedButton size="sm" animation="float">
                      Open in Google Maps
                    </AnimatedButton>
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">How to Reach Us</h3>

                <Tabs defaultValue="car">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="car">By Car</TabsTrigger>
                    <TabsTrigger value="public">Public Transport</TabsTrigger>
                    <TabsTrigger value="delivery">Delivery Areas</TabsTrigger>
                  </TabsList>

                  <TabsContent value="car" className="space-y-4 pt-4">
                    <h4 className="font-semibold">Directions by Car</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>From EDSA, take the North Luzon Expressway (NLEX).</li>
                      <li>Exit at Balintawak and follow signs to R-10 Road/Navotas.</li>
                      <li>Continue on R-10 Road until you reach the Navotas Fish Port Complex.</li>
                      <li>Look for the eMart Market sign at the entrance of Building C.</li>
                      <li>Free parking is available for customers.</li>
                    </ol>
                  </TabsContent>

                  <TabsContent value="public" className="space-y-4 pt-4">
                    <h4 className="font-semibold">Public Transportation</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">By Jeepney:</span> Take any jeepney bound for Navotas and ask to
                        be dropped off at the Fish Port Complex.
                      </li>
                      <li>
                        <span className="font-medium">By Bus:</span> Take a bus to Monumento, then transfer to a
                        Navotas-bound jeepney.
                      </li>
                      <li>
                        <span className="font-medium">By Tricycle:</span> From the main road, tricycles can take you
                        directly to our location.
                      </li>
                    </ul>
                  </TabsContent>

                  <TabsContent value="delivery" className="space-y-4 pt-4">
                    <h4 className="font-semibold">Delivery Coverage Areas</h4>
                    <p>We deliver to the following areas in Metro Manila:</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Quezon City</li>
                        <li>Manila</li>
                        <li>Makati</li>
                        <li>Pasig</li>
                        <li>Taguig</li>
                        <li>Mandaluyong</li>
                      </ul>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>San Juan</li>
                        <li>Pasay</li>
                        <li>Parañaque</li>
                        <li>Las Piñas</li>
                        <li>Muntinlupa</li>
                        <li>Caloocan</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      For areas outside Metro Manila, please contact our customer service for availability and
                      additional fees.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Find answers to common questions about our products and services
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>How do I place an order?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    You can place an order through our website by browsing our products, adding items to your cart, and
                    proceeding to checkout. You can also call our customer service line at (02) 8765-4321 to place an
                    order over the phone.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What are your delivery times?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We deliver within Metro Manila from 9:00 AM to 6:00 PM, Monday to Saturday. You can select your
                    preferred delivery date during checkout. For same-day delivery, orders must be placed before 10:00
                    AM.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How do you ensure freshness?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our fresh fish is caught daily and delivered to our processing facility within hours. We maintain a
                    cold chain throughout the process and deliver in insulated packaging to ensure maximum freshness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We accept credit/debit cards, GCash, bank transfers, and cash on delivery. For bulk orders, we also
                    offer terms for approved business accounts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I cancel or modify my order?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Orders can be modified or canceled up to 24 hours before the scheduled delivery date. Please contact
                    our customer service team as soon as possible to make any changes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you offer bulk discounts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Yes, we offer special pricing for bulk orders. For restaurants, catering services, or events, please
                    contact our wholesale department at wholesale@emart.ph or call 0917-123-4567.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-12">
              <Card className="max-w-md w-full">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold">Still have questions?</h3>
                    <p className="text-gray-500">
                      If you couldn't find the answer to your question, please don't hesitate to contact our customer
                      support team.
                    </p>
                    <AnimatedButton className="w-full" animation="primary">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Customer Support
                    </AnimatedButton>
                  </div>
                </CardContent>
              </Card>
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
