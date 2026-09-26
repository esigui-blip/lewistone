import { MapPin } from "lucide-react"
import { eventDetails } from "@/lib/event"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Lewiston Project Map</p>
              <p className="text-xs text-muted-foreground">A proposed public data platform</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>{eventDetails.venueName}</p>
            <p>{eventDetails.venueAddress}</p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          This site previews a proposed concept for the City of Lewiston, Idaho. All projects,
          budgets, schedules, and metrics shown are illustrative examples for demonstration only and
          do not represent official, current, or approved municipal data.
        </p>
      </div>
    </footer>
  )
}
