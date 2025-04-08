"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "@/components/logo"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Programma", href: "/programma" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo
            className={cn("h-10 w-10 transition-colors duration-300", isScrolled ? "text-emerald-600" : "text-white")}
          />
          <span
            className={cn(
              "ml-2 text-xl font-bold transition-colors duration-300",
              isScrolled ? "text-gray-900" : "text-white",
            )}
          >
            Toekomst Nederland
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative font-medium transition-colors duration-300",
                    isScrolled ? "text-gray-700 hover:text-emerald-600" : "text-white/90 hover:text-white",
                    pathname === item.href && "font-bold",
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 w-full",
                        isScrolled ? "bg-emerald-500" : "bg-white",
                      )}
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", isScrolled ? "text-gray-900" : "text-white")}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-white"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="container flex h-20 items-center justify-between px-4">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo className="h-10 w-10 text-emerald-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Toekomst Nederland</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="container px-4 py-8">
                <ul className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "text-2xl font-medium text-gray-900 transition-colors hover:text-emerald-600",
                          pathname === item.href && "font-bold text-emerald-600",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
