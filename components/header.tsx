"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, MapPin, IndianRupee } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    label: "Loan Products",
    children: [
      "Personal Loan",
      "Business Loan",
      "Gold Loan",
      "Home Loan",
      "Vehicle Loan",
      "Education Loan",
    ],
  },
  {
    label: "Services",
    children: [
      "EMI Calculator",
      "Check Eligibility",
      "Track Application",
      "Loan Repayment",
    ],
  },
  {
    label: "About Us",
    children: [
      "Our Story",
      "Leadership Team",
      "Careers",
      "CSR Initiatives",
    ],
  },
  {
    label: "Resources",
    children: [
      "Financial Blog",
      "Tutorials",
      "Money Insights",
      "FAQs",
    ],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="bg-[hsl(215,78%,20%)] text-[hsl(0,0%,100%)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <Link
              href="tel:18001234567"
              className="flex items-center gap-1.5 text-[hsl(0,0%,100%)]/80 transition-colors hover:text-[hsl(42,95%,55%)]"
            >
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">1800 123 4567</span>
            </Link>
            <span className="hidden text-[hsl(0,0%,100%)]/30 md:inline">|</span>
            <Link
              href="#"
              className="hidden items-center gap-1.5 text-[hsl(0,0%,100%)]/80 transition-colors hover:text-[hsl(42,95%,55%)] md:flex"
            >
              <MapPin className="h-3 w-3" />
              <span>Find Branch</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="#enquiry"
              className="flex items-center gap-1.5 text-[hsl(0,0%,100%)]/80 transition-colors hover:text-[hsl(42,95%,55%)]"
            >
              <IndianRupee className="h-3 w-3" />
              <span>Check Rates</span>
            </Link>
            <Button
              size="sm"
              className="h-6 rounded-full bg-secondary px-4 text-[10px] font-bold text-secondary-foreground shadow-md hover:bg-secondary/90"
              asChild
            >
              <Link href="#enquiry">Get a Loan</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`border-b border-border transition-all duration-300 ${
          scrolled
            ? "bg-background/98 shadow-lg backdrop-blur-md"
            : "bg-background/95 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-md">
              <span className="text-xl font-extrabold text-primary-foreground font-heading">
                D
              </span>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-secondary shadow" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-primary font-heading">
                Danada Finance
              </span>
              <span className="text-[10px] leading-tight text-muted-foreground tracking-wide">
                Loans & Money Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-border bg-background p-2 shadow-xl animate-fade-in-down">
                    {item.children.map((child) => (
                      <Link
                        key={child}
                        href="#"
                        className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {child}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              className="ml-3 rounded-full bg-secondary px-5 text-sm font-semibold text-secondary-foreground shadow-md hover:bg-secondary/90"
              asChild
            >
              <Link href="#enquiry">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden animate-fade-in-down">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border/50 py-1 last:border-b-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === item.label && (
                  <div className="ml-3 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child}
                        href="#"
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {child}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              className="mt-3 w-full rounded-full bg-secondary text-sm font-semibold text-secondary-foreground shadow-md hover:bg-secondary/90"
              asChild
            >
              <Link href="#enquiry">Apply Now</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
