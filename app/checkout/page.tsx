"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { format, addDays, differenceInDays } from "date-fns"
import { CalendarIcon, CreditCard, Truck, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"

export default function CheckoutPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { items, getCartTotal, clearCart, getDeliveryDiscount } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(addDays(new Date(), 1))
  const [paymentMethod, setPaymentMethod] = useState("card")

  // Calculate days in advance for delivery
  const today = new Date()
  const daysInAdvance = deliveryDate ? differenceInDays(deliveryDate, today) : 0

  // Get discount based on delivery date
  const discount = getDeliveryDiscount(daysInAdvance)

  // Calculate totals
  const subtotal = getCartTotal()
  const shippingFee = subtotal > 1000 ? 0 : 150
  const discountAmount = discount.amount
  const total = subtotal + shippingFee - discountAmount

  // Redirect to cart if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.push("/cart")
    }
  }, [items, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    setTimeout(() => {
      clearCart()
      setIsSubmitting(false)

      toast({
        title: "Order placed successfully!",
        description: "Thank you for your order. You will receive a confirmation email shortly.",
        duration: 5000,
      })

      router.push("/order-confirmation")
    }, 2000)
  }

  // Disable dates before tomorrow
  const disabledDates = {
    before: addDays(new Date(), 1),
  }

  if (items.length === 0) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <p className="text-gray-500 mt-2">Complete your order by providing delivery and payment details</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2 space-y-8">
                {/* Delivery Information */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" required />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Schedule */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Delivery Schedule</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Select Delivery Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {deliveryDate ? format(deliveryDate, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={deliveryDate}
                              onSelect={setDeliveryDate}
                              disabled={disabledDates}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {discount.percentage > 0 && (
                        <Alert className="bg-primary-50 border-primary-200">
                          <Info className="h-4 w-4 text-primary-700" />
                          <AlertDescription className="text-primary-700">
                            You're getting a {discount.percentage}% discount (₱{discount.amount.toFixed(2)}) for
                            scheduling your delivery {daysInAdvance} days in advance!
                          </AlertDescription>
                        </Alert>
                      )}

                      {discount.percentage === 0 && daysInAdvance > 0 && (
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            Schedule your delivery 7 or more days in advance to receive a discount!
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="pt-2">
                        <h3 className="font-medium mb-2">Advance Order Discounts:</h3>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-primary-700" />
                            7+ days: 5% discount
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-primary-700" />
                            14+ days: 10% discount
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-primary-700" />
                            21+ days: 15% discount
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-primary-700" />
                            30+ days: 20% discount
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="card">Credit Card</TabsTrigger>
                        <TabsTrigger value="gcash">GCash</TabsTrigger>
                        <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
                      </TabsList>
                      <TabsContent value="card" className="pt-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" required={paymentMethod === "card"} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" required={paymentMethod === "card"} />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" required={paymentMethod === "card"} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvc">CVC</Label>
                              <Input id="cvc" required={paymentMethod === "card"} />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="gcash" className="pt-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="gcashNumber">GCash Number</Label>
                            <Input id="gcashNumber" required={paymentMethod === "gcash"} />
                          </div>
                          <p className="text-sm text-gray-500">
                            You will receive a payment request on your GCash app after placing the order.
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent value="cod" className="pt-4">
                        <div className="space-y-4">
                          <RadioGroup defaultValue="cash">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="cash" id="cash" />
                              <Label htmlFor="cash">Cash</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="card-on-delivery" id="card-on-delivery" />
                              <Label htmlFor="card-on-delivery">Card on Delivery</Label>
                            </div>
                          </RadioGroup>
                          <p className="text-sm text-gray-500">
                            Please prepare the exact amount to help our delivery personnel.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-20">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {items.map((item) => (
                          <div key={item.fish.id} className="flex justify-between text-sm">
                            <span>
                              {item.fish.nameEn} x {item.quantity}kg
                            </span>
                            <span>₱{(item.fish.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>₱{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>{shippingFee === 0 ? "Free" : `₱${shippingFee.toFixed(2)}`}</span>
                        </div>
                        {discount.percentage > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>Advance Order Discount ({discount.percentage}%)</span>
                            <span>-₱{discountAmount.toFixed(2)}</span>
                          </div>
                        )}
                        <Separator />
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total</span>
                          <span>₱{total.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="pt-4 space-y-4">
                        <div className="flex items-start gap-2 text-sm">
                          <Truck className="h-4 w-4 mt-0.5 text-gray-500 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Delivery Date:</span>{" "}
                            {deliveryDate ? format(deliveryDate, "EEEE, MMMM d, yyyy") : "Select a date"}
                          </div>
                        </div>

                        {paymentMethod === "card" && (
                          <div className="flex items-start gap-2 text-sm">
                            <CreditCard className="h-4 w-4 mt-0.5 text-gray-500 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Payment Method:</span> Credit Card
                            </div>
                          </div>
                        )}

                        {paymentMethod === "gcash" && (
                          <div className="flex items-start gap-2 text-sm">
                            <CreditCard className="h-4 w-4 mt-0.5 text-gray-500 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Payment Method:</span> GCash
                            </div>
                          </div>
                        )}

                        {paymentMethod === "cod" && (
                          <div className="flex items-start gap-2 text-sm">
                            <CreditCard className="h-4 w-4 mt-0.5 text-gray-500 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Payment Method:</span> Cash on Delivery
                            </div>
                          </div>
                        )}
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Place Order"}
                      </Button>

                      <div className="text-center">
                        <Link href="/cart" className="text-sm text-gray-500 hover:text-gray-700">
                          Return to Cart
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer className="w-full py-6 bg-primary-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">OceanMart</h3>
              <p className="text-teal-100">Bringing the freshest catch from Philippine waters to your table.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-teal-100 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/fish" className="text-teal-100 hover:text-white">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-teal-100 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-teal-100 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-teal-100">
                123 Seafood Street
                <br />
                Manila, Philippines
                <br />
                Phone: (02) 8123-4567
                <br />
                Email: info@emartfish.ph
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-teal-800 pt-6 text-center text-teal-100">
            <p>© 2025 OceanMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
