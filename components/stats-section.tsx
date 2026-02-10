"use client"

import { useEffect, useRef, useState } from "react"
import { Users, IndianRupee, Building2, ShieldCheck } from "lucide-react"

const stats = [
  { icon: Users, value: "5,00,000+", label: "Happy Borrowers" },
  { icon: IndianRupee, value: "2,500 Cr+", label: "Loans Disbursed" },
  { icon: Building2, value: "350+", label: "Branch Offices" },
  { icon: ShieldCheck, value: "98.5%", label: "Approval Rate" },
]

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative z-20 -mt-12 sm:-mt-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-primary p-5 shadow-2xl sm:gap-4 md:grid-cols-4 md:gap-6 md:p-8 lg:p-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-2 text-center ${
                  visible ? "animate-count-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(0,0%,100%)]/10 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-secondary sm:h-7 sm:w-7" />
                </div>
                <span className="text-lg font-extrabold text-primary-foreground font-heading sm:text-2xl lg:text-3xl">
                  {stat.value}
                </span>
                <span className="text-[11px] text-primary-foreground/60 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
