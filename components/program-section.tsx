"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, GraduationCap, Heart } from "lucide-react"

const programItems = [
  {
    title: "Economie",
    icon: <TrendingUp className="h-8 w-8 text-emerald-500" />,
    standpoint: "Investeren in groene technologie en start-ups",
    argument: "Dit zorgt voor nieuwe banen én helpt het klimaat",
  },
  {
    title: "Defensie",
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    standpoint: "Moderniseren van het leger met cyberbeveiliging en drones",
    argument: "De dreiging van cyberaanvallen groeit en vereist een moderne aanpak",
  },
  {
    title: "Onderwijs",
    icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
    standpoint: "Meer aandacht voor digitale vaardigheden op school",
    argument: "In de toekomst zijn technologische vaardigheden cruciaal",
  },
  {
    title: "Gezondheidszorg",
    icon: <Heart className="h-8 w-8 text-red-500" />,
    standpoint: "Meer investeren in mentale gezondheidszorg",
    argument: "Mentale gezondheid is even belangrijk als fysieke gezondheid",
  },
]

export default function ProgramSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Ons Programma</h2>
          <p className="mb-12 text-lg text-gray-700">
            Toekomst Nederland staat voor een duidelijke visie. Bekijk hier enkele van onze belangrijkste standpunten.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                    <div className="mb-4 h-0.5 w-12 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
                    <div className="mb-2">
                      <p className="font-medium text-gray-900">{item.standpoint}</p>
                    </div>
                    <p className="mt-auto text-sm text-gray-600">{item.argument}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
              <Link href="/programma">
                Bekijk ons volledige programma
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
