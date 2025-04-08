import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Samen bouwen aan morgen met Toekomst Nederland
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Toekomst Nederland is een nieuwe politieke partij die zich inzet voor een duurzame, vooruitstrevende
                  en inclusieve samenleving voor alle Nederlanders.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/programma">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Lees ons programma
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Onze Visie</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Wij geloven in een Nederland waar iedereen kansen krijgt, waar we duurzaam omgaan met onze planeet,
                    en waar we samen bouwen aan een sterke economie die werkt voor iedereen.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/over-ons">
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      Meer over ons
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Onze Speerpunten</h2>
                  <ul className="grid gap-4 md:grid-cols-2">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Duurzame economie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Toegankelijk onderwijs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Betaalbare zorg</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Sterke defensie</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/programma">
                    <Button className="bg-blue-600 hover:bg-blue-700">Bekijk alle standpunten</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
