import { HeroSection } from "@/components/hero-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectsGrid } from "@/components/projects-grid"
import { SkillsCloud } from "@/components/skills-cloud"
import { StickyHeader } from "@/components/sticky-header"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <ExperienceTimeline />
      <ProjectsGrid />
      <SkillsCloud />
    </main>
  )
}
