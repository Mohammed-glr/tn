"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-teal-700 py-20 text-white">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact</h1>
            <p className="text-xl">Neem contact op met Toekomst Nederland</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Neem contact met ons op</h2>
                <p className="mb-8 text-lg text-gray-700">
                  Heeft u vragen, suggesties of wilt u meer informatie over Toekomst Nederland? Vul het contactformulier
                  in of gebruik onderstaande contactgegevens.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">E-mail</h3>
                      <p className="text-gray-600">info@toekomstnederland.nl</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Telefoon</h3>
                      <p className="text-gray-600">+31 (0)70 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Adres</h3>
                      <p className="text-gray-600">
                        Binnenhof 1A
                        <br />
                        2513 AA Den Haag
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-gray-900">Bericht verzonden!</h3>
                        <p className="text-gray-600">
                          Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                            Naam
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                            E-mail
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                            Bericht
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gray-100 text-indigo-800 hover:bg-gray-200"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Verzenden..." : "Neem contact op"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}