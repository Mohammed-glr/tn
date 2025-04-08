"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    toast({
      title: "Bericht verzonden",
      description: "Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.",
    })
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Heeft u vragen of wilt u in contact komen? Vul het onderstaande formulier in.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Stuur ons een bericht</CardTitle>
            <CardDescription>We reageren zo snel mogelijk op uw bericht.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Naam</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Uw naam"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mailadres</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="uw.email@voorbeeld.nl"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Bericht</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Uw bericht..."
                  required
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Versturen
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>U kunt ons ook bereiken via:</p>
          <p className="mt-1">info@toekomstnederland.nl</p>
        </div>
      </div>
    </div>
  )
}
