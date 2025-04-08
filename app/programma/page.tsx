import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Programma() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Samen bouwen aan morgen</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Ons verkiezingsprogramma voor een duurzaam, rechtvaardig en vooruitstrevend Nederland.
          </p>
        </div>

        <Tabs defaultValue="economie" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="economie">Economie</TabsTrigger>
            <TabsTrigger value="defensie">Defensie</TabsTrigger>
            <TabsTrigger value="onderwijs">Onderwijs</TabsTrigger>
            <TabsTrigger value="zorg">Gezondheidszorg</TabsTrigger>
          </TabsList>

          <TabsContent value="economie" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Economie</CardTitle>
                <CardDescription>Een duurzame en inclusieve economie</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold">Standpunt: Duurzame groei</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Wij streven naar economische groei die hand in hand gaat met duurzaamheid. Investeringen in groene
                    technologie, circulaire economie en duurzame energie zijn essentieel voor onze toekomst.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Standpunt: Eerlijke belastingen</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Grote bedrijven en de allerrijksten moeten een eerlijke bijdrage leveren. Tegelijkertijd willen we
                    het MKB, de ruggengraat van onze economie, ondersteunen met lagere lasten en minder regeldruk.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Standpunt: Innovatie stimuleren</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Nederland moet vooroplopen in innovatie. We willen meer investeren in R&D, startups ondersteunen en
                    een gunstig klimaat creëren voor bedrijven die bijdragen aan de oplossingen voor de uitdagingen van
                    morgen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="defensie" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Defensie</CardTitle>
                <CardDescription>Een sterke en moderne defensie</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold">Standpunt: Europese samenwerking</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Wij geloven in een sterke Europese defensiesamenwerking. Door krachten te bundelen kunnen we
                    efficiënter werken en beter voorbereid zijn op de uitdagingen van de toekomst.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Standpunt: Moderne krijgsmacht</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Onze krijgsmacht moet modern en goed uitgerust zijn. We willen investeren in cyberveiligheid, nieuwe
                    technologieën en het welzijn van ons defensiepersoneel.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Standpunt: NAVO-verplichtingen</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Nederland moet voldoen aan zijn NAVO-verplichtingen en bijdragen aan internationale veiligheid.
                    Tegelijkertijd pleiten we voor diplomatieke oplossingen en preventie van conflicten.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="onderwijs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Onderwijs</CardTitle>
                <CardDescription>Gelijke kansen en toekomstgericht onderwijs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold">Standpunt: Investeren in leraren</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Goed onderwijs begint bij goede leraren. We willen het lerarenberoep aantrekkelijker maken door
                    betere salarissen, minder werkdruk en meer professionele autonomie.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Standpunt: Kleinere klassen</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Kleinere klassen leiden tot meer aandacht voor elke leerling. We willen investeren in meer
                    onderwijspersoneel om de kwaliteit van het onderwijs te verbeteren.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Standpunt: Digitale vaardigheden</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    In een steeds digitalere wereld moeten alle leerlingen digitale vaardigheden ontwikkelen. We willen
                    meer aandacht voor technologie, programmeren en mediawijsheid in het curriculum.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="zorg" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Gezondheidszorg</CardTitle>
                <CardDescription>Toegankelijke en betaalbare zorg voor iedereen</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold">Standpunt: Lagere eigen bijdragen</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Zorg moet voor iedereen toegankelijk zijn. We willen het eigen risico verlagen en zorgen dat niemand
                    zorg mijdt om financiële redenen.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Standpunt: Waardering zorgpersoneel</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Zorgmedewerkers verdienen meer waardering, zowel financieel als in arbeidsomstandigheden. We willen
                    investeren in meer handen aan het bed en minder administratieve lasten.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Standpunt: Preventie</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Voorkomen is beter dan genezen. We willen meer investeren in preventie, gezonde leefstijl en vroege
                    interventies om zorgkosten op lange termijn te beheersen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
