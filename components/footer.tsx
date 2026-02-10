import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react"

const footerLinks = {
  "Loan Products": [
    "Personal Loan",
    "Business Loan",
    "Gold Loan",
    "Home Loan",
    "Vehicle Loan",
    "Education Loan",
  ],
  "Quick Tools": [
    "EMI Calculator",
    "Eligibility Checker",
    "Track Application",
    "Loan Repayment",
    "Download Forms",
    "Interest Rates",
  ],
  "Support": [
    "Contact Us",
    "Branch Locator",
    "Grievance Redressal",
    "FAQ",
    "Feedback",
    "Report Fraud",
  ],
  "Company": [
    "About Danada Finance",
    "Careers",
    "Investor Relations",
    "CSR Initiatives",
    "Media Center",
    "Partner With Us",
  ],
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-[hsl(215,30%,11%)] text-[hsl(210,20%,75%)]">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary shadow">
                <span className="text-xl font-extrabold text-secondary-foreground font-heading">
                  D
                </span>
              </div>
              <span className="text-lg font-extrabold text-[hsl(0,0%,100%)] font-heading">
                Danada Finance
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(210,20%,55%)]">
              Your Trusted Loan Partner. Empowering dreams through smart lending
              with competitive rates since 2010.
            </p>
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span>1800 123 4567 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <span>support@danadafinance.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>Danada Tower, Mumbai, Maharashtra, India</span>
              </div>
            </div>
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(215,30%,17%)] text-[hsl(210,20%,55%)] transition-all hover:bg-secondary hover:text-secondary-foreground"
                    aria-label={s.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[hsl(0,0%,100%)]">
                {title}
              </h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-[hsl(210,20%,55%)] transition-colors hover:text-secondary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(215,30%,17%)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-3 text-xs text-[hsl(210,20%,45%)]">
            <Link href="#" className="transition-colors hover:text-secondary">
              Privacy Policy
            </Link>
            <span className="text-[hsl(210,20%,30%)]">|</span>
            <Link href="#" className="transition-colors hover:text-secondary">
              Terms of Service
            </Link>
            <span className="text-[hsl(210,20%,30%)]">|</span>
            <Link href="#" className="transition-colors hover:text-secondary">
              Fair Practice Code
            </Link>
            <span className="text-[hsl(210,20%,30%)]">|</span>
            <Link href="#" className="transition-colors hover:text-secondary">
              Grievance Redressal
            </Link>
          </div>
          <p className="text-xs text-[hsl(210,20%,45%)]">
            &copy; {new Date().getFullYear()} Danada Finance Ltd. All rights
            reserved. RBI Registered NBFC.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <Link
        href="#"
        className="fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 sm:bottom-24"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Link>
    </footer>
  )
}
