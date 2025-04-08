"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, GraduationCap, Heart, Home, Leaf, Globe, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const programItems = [
  {
    title: "Economie",
    icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
    standpoint: "Investeren in groene technologie en start-ups",
    argument: "Dit zorgt voor nieuwe banen én helpt het klimaat",
  },
  {
    title: "Defensie",
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    standpoint: "Moderniseren van het leger met cyberbeveiliging en drones",
    argument: "De dreiging van cyberaanvallen groeit en vereist een moderne aanpak",
  },
  {
    title: "Onderwijs",
    icon: <GraduationCap className="h-10 w-10 text-purple-500" />,
    standpoint: "Meer aandacht voor digitale vaardigheden op school",
    argument: "In de toekomst zijn technologische vaardigheden cruciaal",
  },
  {
    title: "Gezondheidszorg",
    icon: <Heart className="h-10 w-10 text-red-500" />,
    standpoint: "Meer investeren in mentale gezondheidszorg",
    argument: "Mentale gezondheid is even belangrijk als fysieke gezondheid",
  },
  {
    title: "Huisvesting",
    icon: <Home className="h-10 w-10 text-orange-500" />,
    standpoint: "Versnellen van duurzame woningbouw",
    argument: "Iedereen verdient een betaalbaar en duurzaam dak boven het hoofd",
  },
  {
    title: "Klimaat",
    icon: <Leaf className="h-10 w-10 text-green-500" />,
    standpoint: "Versnellen van de energietransitie",
    argument: "Klimaatverandering vereist ambitieuze en concrete maatregelen",
  },
  {
    title: "Buitenlandbeleid",
    icon: <Globe className="h-10 w-10 text-indigo-500" />,
    standpoint: "Versterken van internationale samenwerking",
    argument: "Globale uitdagingen vereisen gezamenlijke oplossingen",
  },
  {
    title: "Sociale Zaken",
    icon: <Users className="h-10 w-10 text-yellow-500" />,
    standpoint: "Hervormen van het sociale zekerheidsstelsel",
    argument: "Een vangnet dat mensen ondersteunt én activeert",
  },
]

export default function Program() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-500 py-20 text-white">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Ons Programma</h1>
            <p className="text-xl">Samen bouwen aan morgen</p>
          </div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Verkiezingsprogramma</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Ons programma is gebaseerd op een duidelijke visie voor de toekomst van Nederland. Hieronder vindt u
                onze belangrijkste standpunten.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {programItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="mb-2 text-2xl font-bold text-gray-900">{item.title}</h3>
                      <div className="mb-4 h-0.5 w-16 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
                      <div className="mb-4">
                        <p className="font-medium text-gray-900">{item.standpoint}</p>
                      </div>
                      <p className="mt-auto text-gray-600">{item.argument}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
