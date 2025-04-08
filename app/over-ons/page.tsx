"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-500 py-20 text-white">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Over Ons</h1>
            <p className="text-xl">Maak kennis met Toekomst Nederland</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Toekomst Nederland Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Toekomst Nederland (TN)</h2>
                <p className="mb-6 text-lg text-gray-700">
                  Onze naam weerspiegelt onze focus: het bouwen aan een betere toekomst voor Nederland. We kijken
                  vooruit, niet achteruit, en zoeken naar innovatieve oplossingen voor de uitdagingen van morgen.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden rounded-2xl border-none shadow-lg">
                <CardContent className="p-8">
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">Onze Visie</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Wij geloven in een toekomstgericht Nederland waarin duurzaamheid, gelijke kansen en technologische
                    vooruitgang centraal staan. Onze ideologie is progressief en sociaal-liberaal: we combineren
                    individuele vrijheid met verantwoordelijkheid voor elkaar en het milieu.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Onze Kernwaarden</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-emerald-600">Innovatie</h3>
                    <p className="text-gray-700">
                      We omarmen technologische vooruitgang en zoeken naar creatieve oplossingen voor maatschappelijke
                      uitdagingen.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-blue-600">Duurzaamheid</h3>
                    <p className="text-gray-700">
                      We streven naar een economie en samenleving die in balans is met de natuur en toekomstige
                      generaties.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-purple-600">Gelijke Kansen</h3>
                    <p className="text-gray-700">
                      We geloven dat iedereen, ongeacht achtergrond, dezelfde mogelijkheden verdient om te slagen in het
                      leven.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
