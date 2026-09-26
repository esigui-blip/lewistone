import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { eventDetails } from "@/lib/event"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">Lewiston Project Map</span>
            <span className="text-xs text-muted-foreground">Community Preview</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href="#map" className="transition-colors hover:text-foreground">
            The map
          </Link>
          <Link href="#metrics" className="transition-colors hover:text-foreground">
            Metrics
          </Link>
          <Link href="#voice" className="transition-colors hover:text-foreground">
            Your input
          </Link>
        </nav>

        <Button render={<a href={eventDetails.registerUrl} />} nativeButton={false} size="sm">
          Register
        </Button>
      </div>
    </header>
  )
}
