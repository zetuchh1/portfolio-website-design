"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern, scalable e-commerce solution with real-time inventory management and seamless checkout experience.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Intelligent content creation tool powered by advanced AI models, helping creators streamline their workflow.",
    image: "/ai-content-generation-interface.jpg",
    tags: ["React", "OpenAI", "TypeScript"],
    link: "#",
    github: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Comprehensive fitness companion with workout tracking, nutrition planning, and progress analytics.",
    image: "/fitness-app-dashboard-dark-mode.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Design System Library",
    description: "Production-ready component library with comprehensive documentation and accessibility features.",
    image: "/design-system-components-showcase.jpg",
    tags: ["React", "Storybook", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Real Estate Portal",
    description: "Interactive property marketplace with advanced search filters, virtual tours, and instant messaging.",
    image: "/real-estate-property-listings.jpg",
    tags: ["Vue.js", "Firebase", "Maps API"],
    link: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with customizable widgets and automated reporting.",
    image: "/analytics-dashboard-charts-graphs.jpg",
    tags: ["Next.js", "D3.js", "Redis"],
    link: "#",
    github: "#",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <a
                href={project.link}
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="View project"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={project.github}
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="View source code"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-balance">Selected Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {"A curated collection of projects showcasing innovation, design excellence, and technical expertise."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
