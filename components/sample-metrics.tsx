import { sampleMetrics } from "@/lib/event"

export function SampleMetrics() {
  return (
    <section id="metrics" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sample metrics at a glance</h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              A public map could summarize activity across the city. Here is how a few headline
              numbers might look.
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Illustrative — not official
          </span>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {sampleMetrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-6">
              <dd className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{m.value}</dd>
              <dt className="mt-2 text-sm font-medium">{m.label}</dt>
              <p className="mt-1 text-xs text-muted-foreground">{m.hint}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
