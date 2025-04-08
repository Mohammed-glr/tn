import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { TnLogo } from "@/components/tn-logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <TnLogo className="h-10 w-10" />
          <span className="hidden font-bold sm:inline-block">Toekomst Nederland</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 text-lg">
              <Link href="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/over-ons" className="hover:text-green-600 transition-colors">
                Over Ons
              </Link>
              <Link href="/programma" className="hover:text-green-600 transition-colors">
                Programma
              </Link>
              <Link href="/contact" className="hover:text-green-600 transition-colors">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="/over-ons" className="text-sm font-medium hover:text-green-600 transition-colors">
            Over Ons
          </Link>
          <Link href="/programma" className="text-sm font-medium hover:text-green-600 transition-colors">
            Programma
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
