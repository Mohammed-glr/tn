import Link from "next/link"
import { TnLogo } from "@/components/tn-logo"

export function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <TnLogo className="h-6 w-6" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Toekomst Nederland. Alle rechten voorbehouden.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
            Privacy
          </Link>
          <Link href="/voorwaarden" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
            Voorwaarden
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
