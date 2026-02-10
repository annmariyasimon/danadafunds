"use client"

import Image from "next/image"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const highlights = [
  "Trusted by over 5 lakh borrowers across India",
  "Quick loan disbursement within 24-48 hours",
  "350+ branches for easy accessibility",
  "Transparent pricing with no hidden charges",
  "RBI registered NBFC with strong governance",
  "Award-winning customer service and support",
]

export default function AboutUs() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} id="about" className="py-14 sm:py-20 md:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <div
            className={`relative ${visible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about-us.jpg"
                alt="Danada Finance Headquarters"
                width={640}
                height={480}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,78%,12%)]/40 to-transparent" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-2 rounded-xl bg-primary p-4 shadow-xl animate-float sm:-right-6 sm:p-5">
              <div className="text-center">
                <span className="block text-2xl font-extrabold text-secondary font-heading sm:text-3xl">
                  15+
                </span>
                <span className="text-[10px] text-primary-foreground/70 sm:text-xs">
                  Years of Trust
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`${visible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-foreground font-heading sm:text-3xl md:text-4xl text-balance leading-tight">
              Empowering Dreams Through Smart Lending
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Danada Finance is a leading non-banking financial company (NBFC)
              dedicated to making loans accessible, affordable, and hassle-free
              for every Indian. We believe that access to credit should never be
              a barrier to achieving your dreams.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From personal loans to business financing, gold loans to education
              funding, we offer a comprehensive range of loan products designed to
              meet diverse financial needs with competitive interest rates and
              flexible repayment terms.
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-full bg-primary px-6 font-bold text-primary-foreground shadow-md hover:bg-primary/90">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-primary bg-transparent px-6 font-bold text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
