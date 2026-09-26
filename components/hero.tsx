import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { eventDetails } from "@/lib/event"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            A community preview for Lewiston, Idaho
          </span>

          <h1 className="mt-5 text-pretty text-4xl font-bold tracking-tight sm:text-5xl">
            {eventDetails.name}
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            {eventDetails.tagline} See a proposed interactive map that brings the city&apos;s projects,
            budgets, schedules, and progress into one place you can explore, then help shape what it shows.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <DetailItem icon={CalendarDays} label="Date" value={eventDetails.dateLabel} />
            <DetailItem icon={Clock} label="Time" value={eventDetails.timeLabel} />
            <DetailItem
              icon={MapPin}
              label="Location"
              value={eventDetails.venueName}
              sub={eventDetails.venueAddress}
            />
          </dl>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button
              render={<a href={eventDetails.registerUrl} />}
              nativeButton={false}
              size="lg"
              className="w-full sm:w-auto"
            >
              Register to attend
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-sm text-muted-foreground">{eventDetails.registerNote}</p>
          </div>

          <p className="mt-6 max-w-xl text-xs text-muted-foreground">
            Open to Lewiston residents, community organizations, municipal staff, and local
            decision-makers.
          </p>
        </div>

        <div className="lg:pl-6">
          <WhoCard />
        </div>
      </div>
    </section>
  )
}

function DetailItem({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof CalendarDays
  label: string
  value: string
  sub?: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
        {label}
      </dt>
      <dd className="mt-2 text-sm font-semibold leading-snug">{value}</dd>
      {sub ? <dd className="mt-0.5 text-xs text-muted-foreground">{sub}</dd> : null}
    </div>
  )
}

function WhoCard() {
  const points = [
    "Explore a proposed public map of municipal projects",
    "See how budgets, schedules, and progress could be shown",
    "Tell us which project details matter most to residents",
    "Meet the team and ask questions in person",
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        What happens at the event
      </h2>
      <ul className="mt-4 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm">
            <span
              className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-foreground/90">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
