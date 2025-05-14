"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-teal-700 py-20 text-white">
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
                    src="/Team.jpg"
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
                  Onze naam laat zien waar we voor staan: een beter Nederland voor morgen. We denken aan de toekomst, niet aan het verleden, en zoeken slimme manieren om de problemen van nu en later op te lossen. Samen met burgers willen we Nederland eerlijk en groen maken.
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
                    Wij willen een Nederland dat klaar is voor de toekomst, met aandacht voor een schone natuur, gelijke kansen voor iedereen en slimme technologie. Onze ideeën zijn vooruitstrevend en eerlijk: we geven mensen vrijheid, maar zorgen ook goed voor elkaar en het milieu. We streven naar een land waar iedereen zich thuis voelt.
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
                    <h3 className="mb-2 text-xl font-bold text-teal-700">Innovatie</h3>
                    <p className="text-gray-700">
                      We houden van nieuwe technologie en zoeken slimme manieren om problemen in de samenleving op te lossen. Dit helpt ons om het leven van mensen makkelijker en beter te maken.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-teal-700">Duurzaamheid</h3>
                    <p className="text-gray-700">
                      We willen een economie en samenleving die goed is voor de natuur en zorgt voor de mensen die na ons komen. Dit betekent minder vervuiling en meer groene energie.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-teal-700">Gelijke Kansen</h3>
                    <p className="text-gray-700">
                      We vinden dat iedereen, waar je ook vandaan komt, dezelfde kansen moet krijgen om succesvol te zijn. Onderwijs en werk moeten voor iedereen bereikbaar zijn.
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