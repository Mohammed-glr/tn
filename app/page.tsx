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
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-emerald-500 to-blue-600">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Samen bouwen aan morgen
          </motion.h1>
          <motion.p
            className="mb-8 max-w-2xl text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welkom bij Toekomst Nederland, de partij voor innovatie, duurzaamheid en gelijke kansen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              <Link href="/programma">
                Lees ons programma
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Over Toekomst Nederland</h2>
            <p className="mb-8 text-lg text-gray-700">
              Wij geloven in een toekomstgericht Nederland waarin duurzaamheid, gelijke kansen en technologische
              vooruitgang centraal staan.
            </p>
            <Button asChild variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
              <Link href="/over-ons">
                Lees meer over ons
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Program Section Preview */}
      <ProgramSection />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-500 py-20 text-white">
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
              Samen kunnen we bouwen aan een duurzame en rechtvaardige toekomst voor alle Nederlanders.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">
                Neem contact op
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
