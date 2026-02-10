"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Wallet,
  Landmark,
  GraduationCap,
  Home,
  Car,
  Gem,
  ArrowRight,
} from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const solutions = [
  {
    icon: Wallet,
    title: "Personal Loan",
    rate: "10.5%",
    description:
      "Instant personal loans up to 10 Lakhs. Minimal paperwork, flexible EMIs, and disbursement within 24 hours.",
    image: "/images/personal-loan.jpg",
  },
  {
    icon: Landmark,
    title: "Business Loan",
    rate: "12%",
    description:
      "Fuel your business growth with loans up to 50 Lakhs. Quick approval and hassle-free processing.",
    image: "/images/internet-banking.jpg",
  },
  {
    icon: Gem,
    title: "Gold Loan",
    rate: "7.5%",
    description:
      "Unlock the value of your gold instantly. Get up to 90% of gold value at the lowest interest rates.",
    image: "/images/safe-deposit.jpg",
  },
  {
    icon: Home,
    title: "Home Loan",
    rate: "8.5%",
    description:
      "Make your dream home a reality with affordable home loans and tenure up to 30 years.",
    image: "/images/savings-account.jpg",
  },
  {
    icon: Car,
    title: "Vehicle Loan",
    rate: "9.5%",
    description:
      "Drive your dream vehicle home. New and used car financing with flexible repayment options.",
    image: "/images/mobile-banking.jpg",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    rate: "8%",
    description:
      "Invest in your future. Education loans covering tuition and living expenses for studies in India and abroad.",
    image: "/images/credit-card.jpg",
  },
]

export default function BankingSolutions() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} className="py-14 sm:py-20 md:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center sm:mb-14">
          <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Our Loan Products
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-foreground font-heading sm:text-3xl md:text-4xl text-balance">
            The Right Loan for Every Need
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed sm:text-base">
            Whether you need funds for personal use, business growth, or a big
            purchase, Danada Finance has a loan tailored just for you.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,78%,12%)]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary shadow-lg">
                    <Icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-[hsl(0,0%,100%)]/90 px-3 py-1 text-xs font-bold text-primary shadow backdrop-blur-sm">
                    From {item.rate} p.a.
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground font-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    href="#enquiry"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-secondary"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
