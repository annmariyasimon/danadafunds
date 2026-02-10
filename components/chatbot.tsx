"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Send, User, HandCoins } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "bot" | "user"
  timestamp: Date
}

const quickReplies = [
  "Loan Eligibility",
  "Interest Rates",
  "EMI Calculator",
  "Track Application",
  "Gold Loan",
  "Contact Support",
]

const botResponses: Record<string, string> = {
  "loan eligibility":
    "To check your loan eligibility, you need to be 21-60 years old with a minimum monthly income of Rs 15,000. You can check your eligibility instantly on our website or visit your nearest Danada Finance branch!",
  "interest rates":
    "Our current interest rates:\n- Personal Loan: from 10.5% p.a.\n- Business Loan: from 12% p.a.\n- Gold Loan: from 7.5% p.a.\n- Home Loan: from 8.5% p.a.\n- Vehicle Loan: from 9.5% p.a.\n- Education Loan: from 8% p.a.",
  "emi calculator":
    "You can use our free EMI Calculator to estimate monthly payments. Just enter the loan amount, tenure, and interest rate. Visit the Quick Tools section on our website for instant results!",
  "track application":
    "To track your loan application, call our toll-free number 1800 123 4567 with your application reference number, or visit your nearest Danada Finance branch.",
  "gold loan":
    "Our gold loan offers: Up to 90% of gold value, interest from 7.5% p.a., instant disbursement in 30 minutes! No credit score required. Visit any Danada Finance branch with your gold ornaments.",
  "contact support":
    "Reach us at:\n1. Toll-free: 1800 123 4567 (24x7)\n2. Email: support@danadafinance.com\n3. Visit any of our 350+ branches.\nFor complaints: grievance@danadafinance.com",
  default:
    "Thank you for your message! I can help you with loan eligibility, interest rates, EMI calculations, gold loans, application tracking, and customer support. What would you like to know?",
}

function getBotResponse(message: string): string {
  const lower = message.toLowerCase()
  for (const [key, value] of Object.entries(botResponses)) {
    if (key !== "default" && lower.includes(key)) return value
  }
  if (lower.includes("personal")) return botResponses["interest rates"]
  if (lower.includes("business")) return botResponses["interest rates"]
  if (lower.includes("home")) return botResponses["interest rates"]
  if (lower.includes("vehicle")) return botResponses["interest rates"]
  if (lower.includes("education")) return botResponses["interest rates"]
  return botResponses.default
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there! I'm FinBro, your friendly loan buddy at Danada Finance. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 1000 + Math.random() * 800)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const toggleOpen = () => {
    setOpen(!open)
    if (!hasOpened) setHasOpened(true)
  }

  return (
    <>
      {/* FinBro floating button with animations */}
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
        {/* Pulse rings */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-secondary/40 animate-pulse-ring" />
            <span
              className="absolute inset-0 rounded-full bg-secondary/30 animate-pulse-ring"
              style={{ animationDelay: "0.5s" }}
            />
          </>
        )}

        {/* Tooltip */}
        {!open && !hasOpened && (
          <div className="absolute -top-14 right-0 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-xs font-semibold text-background shadow-xl animate-fade-in-up">
            Need help? Ask FinBro!
            <div className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-foreground" />
          </div>
        )}

        <button
          type="button"
          onClick={toggleOpen}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 sm:h-16 sm:w-16 ${
            open
              ? "bg-foreground text-background scale-100"
              : "bg-secondary text-secondary-foreground hover:scale-110 animate-finbro-bounce"
          }`}
          aria-label={open ? "Close FinBro chat" : "Open FinBro chat"}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="relative">
              <HandCoins className="h-7 w-7 sm:h-8 sm:w-8" />
              {/* Waving hand indicator */}
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-4 z-50 flex h-[min(520px,calc(100vh-6rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:bottom-24 sm:right-5 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary px-4 py-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary shadow-md animate-finbro-wave">
              <HandCoins className="h-5 w-5 text-secondary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-extrabold text-primary-foreground">
                FinBro
              </h3>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs text-primary-foreground/70">
                  Your Loan Buddy - Online
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                    <HandCoins className="h-3.5 w-3.5 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-muted text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-3.5 w-3.5 text-primary" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                  <HandCoins className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="rounded-2xl rounded-bl-sm bg-muted px-4 py-3">
                  <div className="flex gap-1.5">
                    <span
                      className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="flex gap-2 overflow-x-auto border-t border-border px-3 py-2.5">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendMessage(q)}
                  className="shrink-0 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask FinBro about loans..."
              className="flex-1 rounded-full border border-input bg-muted/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
