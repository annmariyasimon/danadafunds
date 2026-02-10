"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Small Business Owner",
    image: "/images/testimonial-1.jpg",
    rating: 5,
    text: "Danada Finance helped me expand my grocery store with a quick business loan. The process was incredibly smooth, and the money was in my account within 48 hours.",
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    image: "/images/testimonial-2.jpg",
    rating: 5,
    text: "I took a personal loan for my wedding, and the entire experience was seamless. Low interest rates, flexible EMIs, and the staff was very helpful throughout.",
  },
  {
    name: "Arjun Menon",
    role: "Startup Founder",
    image: "/images/testimonial-3.jpg",
    rating: 5,
    text: "As a startup founder, getting a business loan was challenging until I found Danada Finance. They understood my vision and offered great terms to scale my company.",
  },
  {
    name: "Anitha Nair",
    role: "Doctor",
    image: "/images/testimonial-1.jpg",
    rating: 5,
    text: "The gold loan from Danada Finance was disbursed in just 30 minutes! Competitive interest rates and transparent process. I highly recommend them.",
  },
  {
    name: "Vikram Patel",
    role: "Real Estate Developer",
    image: "/images/testimonial-2.jpg",
    rating: 5,
    text: "Danada Finance provided a property loan that helped me complete my housing project on time. Their flexible repayment and dedicated manager made all the difference.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const { ref, visible } = useScrollReveal()

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(current + i) % testimonials.length])
    }
    return items
  }

  return (
    <section ref={ref} className="py-14 sm:py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`mb-10 text-center sm:mb-14 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-foreground font-heading sm:text-3xl md:text-4xl text-balance">
            What Our Borrowers Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed sm:text-base">
            Hear from thousands of satisfied customers who trusted Danada
            Finance for their financial needs.
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {getVisibleTestimonials().map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`relative rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-500 hover:shadow-lg ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-secondary/25" />
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-secondary">
                  <Image
                    src={t.image || "/placeholder.svg"}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={`star-${t.name}-${j}`}
                    className="h-4 w-4 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: 1 card */}
        <div className="md:hidden">
          <div className="relative rounded-xl border border-border bg-background p-5 shadow-sm">
            <Quote className="absolute right-4 top-4 h-7 w-7 text-secondary/25" />
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-secondary">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-foreground">
                  {testimonials[current].name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, j) => (
                  <Star
                    key={`star-m-${j}`}
                    className="h-4 w-4 fill-secondary text-secondary"
                  />
                )
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {testimonials[current].text}
            </p>
          </div>
        </div>

        {/* Nav */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((t, i) => (
              <button
                type="button"
                key={t.name}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
