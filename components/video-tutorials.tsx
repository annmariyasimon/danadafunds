"use client"

import { useState } from "react"
import {
  Play,
  X,
  BookOpen,
  Tv,
  Newspaper,
  ArrowRight,
} from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const videos = [
  {
    id: "1",
    title: "How to Apply for a Personal Loan Online",
    duration: "4:20",
    thumbnail: "/images/personal-loan.jpg",
    category: "Personal Loan",
  },
  {
    id: "2",
    title: "Gold Loan Process Explained Step by Step",
    duration: "3:55",
    thumbnail: "/images/safe-deposit.jpg",
    category: "Gold Loan",
  },
  {
    id: "3",
    title: "Understanding EMI & Repayment Options",
    duration: "5:10",
    thumbnail: "/images/credit-card.jpg",
    category: "Repayment",
  },
  {
    id: "4",
    title: "Business Loan Eligibility & Documents",
    duration: "4:45",
    thumbnail: "/images/internet-banking.jpg",
    category: "Business Loan",
  },
]

const resources = [
  {
    icon: BookOpen,
    title: "Financial Blog",
    description:
      "Expert tips on managing finances, improving credit scores, and making smart borrowing decisions.",
    colorClass: "bg-primary",
  },
  {
    icon: Tv,
    title: "Loan Tutorials",
    description:
      "Step-by-step video guides on applying for loans, tracking EMI, and using our online portal.",
    colorClass: "bg-secondary",
  },
  {
    icon: Newspaper,
    title: "Money Insights",
    description:
      "Latest updates on interest rates, RBI policies, and financial planning strategies.",
    colorClass: "bg-primary",
  },
]

export default function VideoTutorials() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} className="py-14 sm:py-20 md:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`mb-10 text-center sm:mb-14 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Learn & Explore
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-foreground font-heading sm:text-3xl md:text-4xl text-balance">
            Loan Guidance & Resources
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed sm:text-base">
            Everything you need to know about loans, EMIs, and smart borrowing.
          </p>
        </div>

        {/* Resource cards */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 sm:mb-12">
          {resources.map((r, i) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className={`group flex items-start gap-4 rounded-xl border border-border bg-background p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 sm:p-6 ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${r.colorClass} sm:h-12 sm:w-12`}
                >
                  <Icon className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground font-heading">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {r.description}
                  </p>
                  <button
                    type="button"
                    className="mt-3 flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-secondary"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Video tutorials */}
        <h3
          className={`mb-6 text-xl font-extrabold text-foreground font-heading ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          Loan Tutorial Videos
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v, i) => (
            <div
              key={v.id}
              className={`group cursor-pointer overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              onClick={() => setPlayingVideo(v.id)}
              onKeyDown={(e) => e.key === "Enter" && setPlayingVideo(v.id)}
              role="button"
              tabIndex={0}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={v.thumbnail || "/placeholder.svg"}
                  alt={v.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary shadow-lg sm:h-14 sm:w-14">
                    <Play className="h-5 w-5 text-secondary-foreground sm:h-6 sm:w-6" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 rounded-md bg-foreground/80 px-2 py-0.5 text-xs font-medium text-background">
                  {v.duration}
                </span>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-primary">
                  {v.category}
                </span>
                <h4 className="mt-1 text-sm font-bold text-foreground leading-snug">
                  {v.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {playingVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
            onClick={() => setPlayingVideo(null)}
            onKeyDown={(e) => e.key === "Escape" && setPlayingVideo(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
          >
            <div
              className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-background shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={() => {}}
              role="document"
            >
              <button
                type="button"
                onClick={() => setPlayingVideo(null)}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/80 text-background transition-colors hover:bg-foreground"
                aria-label="Close video"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex aspect-video items-center justify-center bg-foreground">
                <div className="text-center text-background">
                  <Play className="mx-auto mb-4 h-16 w-16 text-secondary" />
                  <p className="text-lg font-bold font-heading">
                    {videos.find((v) => v.id === playingVideo)?.title}
                  </p>
                  <p className="mt-2 text-sm text-background/60">
                    Video tutorial would play here
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
