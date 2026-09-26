"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const options = [
  "Current budget and how money is spent",
  "Project schedules and expected completion",
  "Real-time progress and status updates",
  "Which neighborhood or street is affected",
  "Who to contact with questions",
  "How to give feedback on a project",
  "Contractors and who is doing the work",
  "Environmental and community impact",
]

export function VoiceInput() {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [submitted, setSubmitted] = useState(false)

  function toggle(option: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(option)) next.delete(option)
      else next.add(option)
      return next
    })
    setSubmitted(false)
  }

  return (
    <section id="voice" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What should the map show first?
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Help us prioritize. Pick the project information you&apos;d find most useful as a resident.
            You can share this at the event, too.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {options.map((option) => {
            const on = selected.has(option)
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggle(option)}
                aria-pressed={on}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl border p-4 text-left text-sm font-medium transition-colors",
                  on
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border bg-card text-foreground/90 hover:border-primary/40",
                )}
              >
                <span>{option}</span>
                <span
                  className={cn(
                    "flex h-5 w-5 flex-none items-center justify-center rounded-md border transition-colors",
                    on ? "border-primary bg-primary text-primary-foreground" : "border-border",
                  )}
                  aria-hidden="true"
                >
                  {on ? <Check className="h-3.5 w-3.5" /> : null}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button
            type="button"
            size="lg"
            disabled={selected.size === 0}
            onClick={() => setSubmitted(true)}
          >
            Share my priorities
          </Button>
          <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
            {submitted
              ? `Thanks — you selected ${selected.size} ${selected.size === 1 ? "priority" : "priorities"}. Bring these to the event!`
              : selected.size > 0
                ? `${selected.size} selected`
                : "Select the details that matter most to you."}
          </p>
        </div>
      </div>
    </section>
  )
}
