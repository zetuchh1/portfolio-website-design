"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    year: "2023 — Present",
    title: "Senior Full-Stack Developer",
    company: "Innovative Tech Solutions",
    description:
      "Leading development of scalable web applications using Next.js, React, and Node.js. Architecting cloud infrastructure and mentoring junior developers.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    year: "2021 — 2023",
    title: "Lead Frontend Engineer",
    company: "Digital Creative Studio",
    description:
      "Spearheaded frontend architecture for high-profile client projects. Implemented design systems and optimized performance across platforms.",
    technologies: ["React", "Vue.js", "Tailwind CSS", "Figma"],
  },
  {
    year: "2019 — 2021",
    title: "Full-Stack Developer",
    company: "Startup Ventures",
    description:
      "Built MVP products from concept to launch. Collaborated with cross-functional teams to deliver user-centric solutions rapidly.",
    technologies: ["JavaScript", "Node.js", "MongoDB", "Docker"],
  },
  {
    year: "2017 — 2019",
    title: "Junior Developer",
    company: "Web Agency Co.",
    description:
      "Developed responsive websites and web applications. Learned best practices in clean code and agile methodologies.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
]

function TimelineItem({ experience, index }: { experience: (typeof experiences)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="glass p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:scale-[1.02]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground font-mono">{experience.year}</p>
              <h3 className="text-2xl font-bold mt-2">{experience.title}</h3>
              <p className="text-primary font-medium">{experience.company}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{experience.description}</p>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-balance">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {"A journey through innovative projects and collaborative teams, building solutions that matter."}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
