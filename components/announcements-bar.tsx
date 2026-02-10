"use client"

import { Megaphone } from "lucide-react"

const announcements = [
  "Personal Loans starting at 10.5% p.a. - Apply now and get processing fee waived!",
  "Instant Gold Loan disbursement in 30 minutes - Visit your nearest branch today.",
  "Zero foreclosure charges on all personal loans. Prepay anytime!",
  "Business Loan Mela: Up to 50 Lakhs with minimal documentation.",
  "Education Loans with moratorium period - No EMI until placement!",
  "Home Loans at 8.5% p.a. - Make your dream home a reality!",
]

export default function AnnouncementsBar() {
  return (
    <div className="overflow-hidden bg-primary/5 border-b border-primary/10">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2">
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
            <Megaphone className="h-3 w-3 text-secondary-foreground" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Offers
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...announcements, ...announcements].map((text, i) => (
              <span
                key={`${text}-${i}`}
                className="mx-8 text-sm text-foreground/70"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
