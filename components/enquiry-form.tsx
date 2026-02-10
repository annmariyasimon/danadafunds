"use client"

import React from "react"

import { useState } from "react"
import {
  User,
  Phone,
  Mail,
  IndianRupee,
  Send,
  CheckCircle2,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const loanTypes = [
  "Personal Loan",
  "Business Loan",
  "Gold Loan",
  "Home Loan",
  "Vehicle Loan",
  "Education Loan",
]

const amountRanges = [
  "Up to 1 Lakh",
  "1 - 5 Lakhs",
  "5 - 10 Lakhs",
  "10 - 25 Lakhs",
  "25 - 50 Lakhs",
  "Above 50 Lakhs",
]

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "",
    amount: "",
    occupation: "",
    message: "",
  })
  const { ref, visible } = useScrollReveal()

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        loanType: "",
        amount: "",
        occupation: "",
        message: "",
      })
    }, 4000)
  }

  return (
    <section ref={ref} id="enquiry" className="py-14 sm:py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left info */}
          <div
            className={`${visible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Enquire Now
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-foreground font-heading sm:text-3xl md:text-4xl text-balance leading-tight">
              Get the Right Loan in Minutes
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fill out the form and our loan experts will get back to you within
              2 hours with the best loan options tailored to your needs.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-xl border border-border bg-muted/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Quick Approval</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Get loan approval within 24 hours with minimal documentation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-muted/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <IndianRupee className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Best Rates</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Interest rates starting from 7.5% p.a. with flexible tenure.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-muted/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    Dedicated Support
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A personal relationship manager to guide you through the
                    entire process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div
            className={`${visible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-muted/30 p-10 text-center shadow-lg sm:p-14">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-foreground font-heading">
                  Enquiry Submitted!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Our loan expert will contact you within 2 hours. Thank you for
                  choosing Danada Finance!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8"
              >
                <h3 className="mb-6 text-lg font-extrabold text-foreground font-heading">
                  Loan Enquiry Form
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold text-foreground"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="h-10 w-full rounded-lg border border-input bg-muted/30 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-semibold text-foreground"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="h-10 w-full rounded-lg border border-input bg-muted/30 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold text-foreground"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="h-10 w-full rounded-lg border border-input bg-muted/30 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  {/* Occupation */}
                  <div>
                    <label
                      htmlFor="occupation"
                      className="mb-1.5 block text-xs font-semibold text-foreground"
                    >
                      Occupation
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="occupation"
                        name="occupation"
                        type="text"
                        value={formData.occupation}
                        onChange={handleChange}
                        placeholder="e.g. Salaried, Business"
                        className="h-10 w-full rounded-lg border border-input bg-muted/30 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  {/* Loan Type */}
                  <div>
                    <label
                      htmlFor="loanType"
                      className="mb-1.5 block text-xs font-semibold text-foreground"
                    >
                      Loan Type
                    </label>
                    <select
                      id="loanType"
                      name="loanType"
                      required
                      value={formData.loanType}
                      onChange={handleChange}
                      className="h-10 w-full rounded-lg border border-input bg-muted/30 px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select loan type</option>
                      {loanTypes.map((lt) => (
                        <option key={lt} value={lt}>
                          {lt}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Amount */}
                  <div>
                    <label
                      htmlFor="amount"
                      className="mb-1.5 block text-xs font-semibold text-foreground"
                    >
                      Loan Amount
                    </label>
                    <select
                      id="amount"
                      name="amount"
                      required
                      value={formData.amount}
                      onChange={handleChange}
                      className="h-10 w-full rounded-lg border border-input bg-muted/30 px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select amount range</option>
                      {amountRanges.map((ar) => (
                        <option key={ar} value={ar}>
                          {ar}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Message */}
                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold text-foreground"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your loan requirement..."
                    className="w-full rounded-lg border border-input bg-muted/30 p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-5 w-full rounded-full bg-primary py-5 text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Enquiry
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  By submitting, you agree to our privacy policy. We will never
                  share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
