import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TnLogo } from "@/components/tn-logo"

export default function OverOns() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Over Toekomst Nederland</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Leer meer over onze partij, onze visie en waar wij voor staan.
          </p>
        </div>

        <div className="flex justify-center py-8">
          <TnLogo className="h-40 w-40" />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Onze Naam</h2>
            <p className="text-gray-500 dark:text-gray-400">
              De naam "Toekomst Nederland" (TN) weerspiegelt onze focus op de toekomst van ons land. Wij geloven dat
              politiek niet alleen over het hier en nu moet gaan, maar vooral over het bouwen aan een betere toekomst
              voor alle generaties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Onze Visie</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Toekomst Nederland staat voor een samenleving waarin iedereen kansen krijgt om zich te ontwikkelen en bij
              te dragen. Wij geloven in een duurzame economie die werkt voor iedereen, in een sterke sociale basis, en
              in het beschermen van onze planeet voor toekomstige generaties.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Onze politiek is gebaseerd op feiten, wetenschap en een langetermijnvisie. Wij zoeken naar pragmatische
              oplossingen die werken voor alle Nederlanders, niet alleen voor bepaalde groepen.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Onze Waarden</h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 list-disc pl-5">
              <li>Duurzaamheid - in economie, milieu en beleid</li>
              <li>Inclusiviteit - een samenleving waar iedereen erbij hoort</li>
              <li>Innovatie - vooruitgang door nieuwe ideeën en technologieën</li>
              <li>Transparantie - open en eerlijk bestuur</li>
              <li>Solidariteit - we zorgen voor elkaar</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Link href="/programma">
            <Button className="bg-green-600 hover:bg-green-700">
              Bekijk ons programma
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
