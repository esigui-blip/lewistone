"use client"

import { useMemo, useState } from "react"
import { Info, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  categories,
  sampleProjects,
  type CategoryId,
  type SampleProject,
} from "@/lib/event"

export function ProjectMap() {
  const [active, setActive] = useState<Set<CategoryId>>(
    () => new Set(categories.map((c) => c.id)),
  )
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const visibleProjects = useMemo(
    () => sampleProjects.filter((p) => active.has(p.category)),
    [active],
  )

  const selected =
    selectedId && active.has(sampleProjects.find((p) => p.id === selectedId)?.category as CategoryId)
      ? sampleProjects.find((p) => p.id === selectedId) ?? null
      : null

  function toggle(id: CategoryId) {
    setActive((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const allOn = active.size === categories.length

  return (
    <section id="map" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore the map preview</h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            This is a concept preview. Filter by category and select a project to see how budgets,
            schedules, and progress could appear in one public view.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((c) => {
            const on = active.has(c.id)
            const Icon = c.icon
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => toggle(c.id)}
                aria-pressed={on}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  on
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {c.label}
              </button>
            )
          })}
          <button
            type="button"
            onClick={() => setActive(new Set(allOn ? [] : categories.map((c) => c.id)))}
            className="ml-1 rounded-full px-3 py-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {allOn ? "Clear all" : "Show all"}
          </button>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <MapCanvas
            projects={visibleProjects}
            selectedId={selected?.id ?? null}
            onSelect={setSelectedId}
          />
          <DetailPanel selected={selected} onClose={() => setSelectedId(null)} count={visibleProjects.length} />
        </div>

        <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
          <span>
            Sample projects and figures shown here are illustrative examples for this preview only.
            They are not official, current, or approved municipal data.
          </span>
        </p>
      </div>
    </section>
  )
}

function MapCanvas({
  projects,
  selectedId,
  onSelect,
}: {
  projects: SampleProject[]
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Stylized, non-geographic city backdrop */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect width="400" height="300" fill="var(--muted)" />
        {/* rivers (Lewiston sits at a river confluence) */}
        <path
          d="M -10 250 C 80 230, 120 210, 160 200 C 210 188, 240 150, 250 90 L 250 -10 L 300 -10 L 300 90 C 300 160, 260 210, 200 226 C 150 240, 90 258, -10 275 Z"
          fill="var(--primary)"
          opacity="0.10"
        />
        {/* street grid */}
        <g stroke="var(--border)" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 40} y1="0" x2={(i + 1) * 40} y2="300" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 40} x2="400" y2={(i + 1) * 40} />
          ))}
        </g>
        {/* a couple of blocks for texture */}
        <g fill="var(--primary)" opacity="0.05">
          <rect x="44" y="124" width="72" height="72" rx="4" />
          <rect x="284" y="44" width="72" height="72" rx="4" />
          <rect x="164" y="204" width="72" height="52" rx="4" />
        </g>
      </svg>

      {/* Pins */}
      {projects.map((p) => {
        const isSel = p.id === selectedId
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelect(p.id)}
            aria-label={`${p.name} — select for details`}
            className="group absolute -translate-x-1/2 -translate-y-full focus:outline-none"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span
              className={cn(
                "flex flex-col items-center transition-transform",
                isSel ? "scale-110" : "group-hover:scale-105",
              )}
            >
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full border-2 border-background shadow-md ring-2 transition-colors",
                  isSel ? "bg-primary ring-primary/40" : "bg-primary/85 ring-transparent",
                )}
              >
                <span className="h-2 w-2 rounded-full bg-primary-foreground" />
              </span>
              <span className="-mt-0.5 h-2 w-2 rotate-45 rounded-[1px] bg-primary" />
            </span>
          </button>
        )
      })}

      {projects.length === 0 ? (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-muted-foreground">
          Select a category above to see projects on the map.
        </div>
      ) : null}
    </div>
  )
}

function DetailPanel({
  selected,
  onClose,
  count,
}: {
  selected: SampleProject | null
  onClose: () => void
  count: number
}) {
  if (!selected) {
    return (
      <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-border bg-background p-6">
        <p className="text-sm font-medium">Select a pin to explore a project</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Showing {count} sample {count === 1 ? "project" : "projects"} on the map. Each pin reveals
          its budget, schedule, and estimated progress.
        </p>
      </div>
    )
  }

  const category = categories.find((c) => c.id === selected.category)
  const Icon = category?.icon

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
          {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
          {category?.label}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close project details"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <h3 className="mt-3 text-xl font-semibold leading-snug">{selected.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{selected.blurb}</p>

      <dl className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted-foreground">Sample budget</dt>
          <dd className="mt-1 text-lg font-semibold">{selected.budget}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted-foreground">Timeline</dt>
          <dd className="mt-1 text-sm font-semibold leading-snug">{selected.timeline}</dd>
        </div>
      </dl>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs">
          <span className="uppercase tracking-wide text-muted-foreground">Estimated progress</span>
          <span className="font-semibold">{selected.progress}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${selected.progress}%` }}
          />
        </div>
      </div>

      <p className="mt-auto pt-5 text-xs text-muted-foreground">Illustrative example — not official data.</p>
    </div>
  )
}
