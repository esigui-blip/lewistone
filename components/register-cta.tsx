import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { eventDetails } from "@/lib/event"

export function RegisterCta() {
  return (
    <section id="register" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Be part of the conversation
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
              Come see the proposed map, explore the concept, and tell us what would make city
              projects clearer for everyone.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-6">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {eventDetails.dateLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {eventDetails.timeLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {eventDetails.venueName}
              </span>
            </div>

            <div className="mt-9">
              <Button
                render={<a href={eventDetails.registerUrl} />}
                nativeButton={false}
                size="lg"
                variant="secondary"
                className="w-full bg-background text-foreground hover:bg-background/90 sm:w-auto"
              >
                Register to attend
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <p className="mt-4 text-sm text-primary-foreground/80">{eventDetails.registerNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
