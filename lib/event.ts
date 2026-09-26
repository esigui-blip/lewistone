import type { LucideIcon } from "lucide-react"
import { Route, Trees, Droplets, Shield, Building2 } from "lucide-react"

// ---------------------------------------------------------------------------
// Swap these placeholder values for the real event details before publishing.
// ---------------------------------------------------------------------------
export const eventDetails = {
  name: "City of Lewiston",
  tagline: "One public view of our city's projects, budgets, and progress.",
  dateLabel: "Thursday, October 22, 2026",
  dateISO: "2026-10-22",
  timeLabel: "6:00 – 8:00 PM PT",
  venueName: "Lewiston City Library — Community Room",
  venueAddress: "428 Thain Rd, Lewiston, ID 83501",
  // Replace with the real registration link or instructions.
  registerUrl: "#register",
  registerNote: "Free to attend. Registration helps us plan seating and refreshments.",
} as const

export type CategoryId = "roads" | "parks" | "utilities" | "safety" | "housing"

export interface ProjectCategory {
  id: CategoryId
  label: string
  icon: LucideIcon
}

export const categories: ProjectCategory[] = [
  { id: "roads", label: "Roads & Transit", icon: Route },
  { id: "parks", label: "Parks & Recreation", icon: Trees },
  { id: "utilities", label: "Utilities & Water", icon: Droplets },
  { id: "safety", label: "Public Safety", icon: Shield },
  { id: "housing", label: "Housing & Development", icon: Building2 },
]

export interface SampleProject {
  id: string
  name: string
  category: CategoryId
  budget: string
  timeline: string
  progress: number // 0-100
  blurb: string
  // Position on the stylized preview map (percent-based, 0-100).
  x: number
  y: number
}

// NOTE: These are illustrative examples used to demonstrate the concept.
// They are NOT official, current, or approved municipal figures.
export const sampleProjects: SampleProject[] = [
  {
    id: "p1",
    name: "Thain Road Resurfacing",
    category: "roads",
    budget: "$2.4M",
    timeline: "Spring – Fall 2026",
    progress: 35,
    blurb: "Repaving and new bike lanes along a primary north–south corridor.",
    x: 68,
    y: 30,
  },
  {
    id: "p2",
    name: "Kiwanis Park Playground Renewal",
    category: "parks",
    budget: "$780K",
    timeline: "Summer 2026",
    progress: 60,
    blurb: "Accessible play equipment, shade structures, and path upgrades.",
    x: 34,
    y: 44,
  },
  {
    id: "p3",
    name: "Downtown Water Main Replacement",
    category: "utilities",
    budget: "$5.1M",
    timeline: "2026 – 2027",
    progress: 20,
    blurb: "Replacing aging pipe to reduce breaks and improve water quality.",
    x: 46,
    y: 62,
  },
  {
    id: "p4",
    name: "Fire Station 3 Modernization",
    category: "safety",
    budget: "$3.6M",
    timeline: "Late 2026",
    progress: 15,
    blurb: "Seismic and equipment upgrades to improve response readiness.",
    x: 74,
    y: 58,
  },
  {
    id: "p5",
    name: "Snake River Trail Extension",
    category: "parks",
    budget: "$1.2M",
    timeline: "2027",
    progress: 10,
    blurb: "Extending the riverside multi-use path with new lighting.",
    x: 22,
    y: 74,
  },
  {
    id: "p6",
    name: "Orchards Housing Infill",
    category: "housing",
    budget: "$8.9M",
    timeline: "2026 – 2028",
    progress: 25,
    blurb: "Mixed-income housing near existing transit and services.",
    x: 82,
    y: 40,
  },
  {
    id: "p7",
    name: "21st Street Signal Upgrade",
    category: "roads",
    budget: "$640K",
    timeline: "Spring 2026",
    progress: 50,
    blurb: "Adaptive traffic signals to ease congestion at peak hours.",
    x: 58,
    y: 22,
  },
  {
    id: "p8",
    name: "Stormwater Basin, Lindsay Creek",
    category: "utilities",
    budget: "$2.0M",
    timeline: "2026 – 2027",
    progress: 30,
    blurb: "New retention basin to reduce localized flooding.",
    x: 40,
    y: 34,
  },
]

// Illustrative headline metrics — for demonstration only, not official totals.
export const sampleMetrics = [
  { label: "Projects on the map", value: "8", hint: "sample set for preview" },
  { label: "Combined sample budget", value: "$24.6M", hint: "illustrative figure" },
  { label: "Neighborhoods covered", value: "6", hint: "across the city" },
  { label: "Avg. sample progress", value: "31%", hint: "example completion" },
]
