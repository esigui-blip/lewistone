import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProjectMap } from "@/components/project-map"
import { SampleMetrics } from "@/components/sample-metrics"
import { VoiceInput } from "@/components/voice-input"
import { RegisterCta } from "@/components/register-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ProjectMap />
        <SampleMetrics />
        <VoiceInput />
        <RegisterCta />
      </main>
      <SiteFooter />
    </div>
  )
}
