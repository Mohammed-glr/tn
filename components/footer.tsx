import Link from "next/link"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="flex items-center">
            <Logo className="h-10 w-10 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Toekomst Nederland</span>
          </div>

          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 transition-colors hover:text-emerald-600">
              Home
            </Link>
            <Link href="/over-ons" className="text-gray-600 transition-colors hover:text-emerald-600">
              Over Ons
            </Link>
            <Link href="/programma" className="text-gray-600 transition-colors hover:text-emerald-600">
              Programma
            </Link>
            <Link href="/contact" className="text-gray-600 transition-colors hover:text-emerald-600">
              Contact
            </Link>
          </div>

          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Toekomst Nederland</div>
        </div>
      </div>
    </footer>
  )
}
