"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ProgramSection from "@/components/program-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-teal-700 to-indigo-700">
        <div className="absolute inset-0 bg-[url('/Amsterdam.avif')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Samen voor een beter Nederland
          </motion.h1>
          <motion.p
            className="mb-8 max-w-2xl text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Toekomst Nederland is een partij die werkt aan een schoon, eerlijk en slim land. Wij willen een Nederland waar iedereen kansen krijgt, de natuur wordt beschermd en nieuwe technologie ons helpt.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-gray-100 text-teal-800 hover:bg-gray-200">
              <Link href="/programma">
                Ontdek ons plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Wie is Toekomst Nederland?</h2>
            <p className="mb-8 text-lg text-gray-700">
              Toekomst Nederland wil een land waar iedereen mee kan doen. Wij willen een schone natuur, betaalbare huizen, goed onderwijs en slimme technologie. Ons doel is een Nederland dat klaar is voor morgen, met eerlijke kansen voor iedereen en zorg voor de natuur.
            </p>
            <Button asChild variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              <Link href="/over-ons">
                Meer over onze ideeën
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow p-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-teal-700">Schone natuur</h3>
              <p className="text-gray-700 mb-2">
                Wij werken aan een schone toekomst. Schone energie, zorg voor de natuur en het klimaat zijn heel belangrijk voor ons.
              </p>
              <p className="text-gray-500 text-sm">
                Denk aan meer wind- en zonne-energie, hergebruik van spullen en het beschermen van planten en dieren.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow p-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">Eerlijke kansen</h3>
              <p className="text-gray-700 mb-2">
                Iedereen moet een goede kans krijgen. Wij betalen mee aan betaalbare huizen, goed onderwijs en zorg voor iedereen.
              </p>
              <p className="text-gray-500 text-sm">
                Extra hulp voor gelijke kansen, minder armoede en steun voor mensen die het moeilijk hebben.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow p-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Technologie & Veiligheid</h3>
              <p className="text-gray-700 mb-2">
                Nieuwe technologie helpt ons verder. Wij steunen slimme ideeën en digitalisering voor een sterk Nederland.
              </p>
              <p className="text-gray-500 text-sm">
                We betalen ook voor een moderne defensie, zodat Nederland veilig blijft in een wereld die verandert.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Section Preview */}
      <ProgramSection />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-700 to-teal-700 py-20 text-white">
        <div className="container px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Doe mee met Toekomst Nederland</h2>
            <p className="mb-8 text-lg">
              Wil jij helpen om Nederland groener, eerlijker en sterker te maken? Word lid, praat mee of deel jouw ideeën. Samen veranderen we de toekomst!
            </p>
            <Button asChild size="lg" className="bg-gray-100 text-indigo-800 hover:bg-gray-200">
              <Link href="/contact">
                Word lid of neem contact op
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}