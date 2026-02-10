"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/hero-1.jpg",
    tag: "Instant Approval",
    title: "Quick Loans for Every Dream",
    subtitle:
      "Personal loans with minimal documentation, competitive interest rates starting at 10.5% p.a., and disbursement within 24 hours.",
    cta: "Apply for Loan",
    ctaSecondary: "Check Eligibility",
  },
  {
    image: "/images/hero-2.jpg",
    tag: "Digital First",
    title: "Money at Your Fingertips",
    subtitle:
      "Apply from anywhere. Track, manage, and repay your loans digitally. Smart lending powered by technology.",
    cta: "Get Started",
    ctaSecondary: "Learn More",
  },
  {
    image: "/images/hero-3.jpg",
    tag: "Business Growth",
    title: "Fuel Your Business Ambitions",
    subtitle:
      "Business loans up to 50 Lakhs with flexible repayment. Quick processing, competitive rates, and dedicated support.",
    cta: "Business Loans",
    ctaSecondary: "Talk to Expert",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent(index)
      setTimeout(() => setIsAnimating(false), 700)
    },
    [isAnimating]
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[420px] overflow-hidden sm:h-[500px] md:h-[600px] lg:h-[700px]">
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-800 ${
            i === current ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,78%,12%)]/85 via-[hsl(215,78%,12%)]/55 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4">
              <div className="max-w-xl lg:max-w-2xl">
                {i === current && (
                  <>
                    <span
                      className="inline-block rounded-full bg-secondary/90 px-4 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground shadow animate-fade-in-up"
                    >
                      {slide.tag}
                    </span>
                    <h1
                      className="mt-4 font-heading text-3xl font-extrabold leading-tight text-[hsl(0,0%,100%)] sm:text-4xl md:text-5xl lg:text-6xl text-balance animate-fade-in-up"
                      style={{ animationDelay: "0.15s" }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="mt-4 max-w-lg text-sm leading-relaxed text-[hsl(0,0%,100%)]/80 sm:text-base md:text-lg animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      {slide.subtitle}
                    </p>
                    <div
                      className="mt-6 flex flex-wrap gap-3 sm:mt-8 animate-fade-in-up"
                      style={{ animationDelay: "0.45s" }}
                    >
                      <Button
                        size="lg"
                        className="rounded-full bg-secondary px-6 text-sm font-bold text-secondary-foreground shadow-xl hover:bg-secondary/90 sm:px-8 sm:text-base"
                        asChild
                      >
                        <Link href="#enquiry">{slide.cta}</Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full border-2 border-[hsl(0,0%,100%)]/30 bg-transparent px-6 text-sm font-semibold text-[hsl(0,0%,100%)] hover:bg-[hsl(0,0%,100%)]/10 hover:text-[hsl(0,0%,100%)] sm:px-8 sm:text-base"
                      >
                        {slide.ctaSecondary}
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[hsl(0,0%,100%)]/15 p-2 text-[hsl(0,0%,100%)] backdrop-blur-sm transition-all hover:bg-[hsl(0,0%,100%)]/25 sm:left-4 md:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[hsl(0,0%,100%)]/15 p-2 text-[hsl(0,0%,100%)] backdrop-blur-sm transition-all hover:bg-[hsl(0,0%,100%)]/25 sm:right-4 md:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8">
        {slides.map((slide, i) => (
          <button
            type="button"
            key={slide.title}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-secondary"
                : "w-2 bg-[hsl(0,0%,100%)]/40 hover:bg-[hsl(0,0%,100%)]/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
