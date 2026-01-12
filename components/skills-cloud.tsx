"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram, Linkedin, Facebook, Mail } from "lucide-react"

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "PostgreSQL", level: 85 },
  { name: "AWS", level: 80 },
  { name: "Docker", level: 82 },
  { name: "GraphQL", level: 78 },
  { name: "Figma", level: 87 },
  { name: "Python", level: 75 },
  { name: "MongoDB", level: 83 },
]

function SkillBadge({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const size = 100 + skill.level / 2
  const fontSize = skill.level > 85 ? "text-lg" : "text-base"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={`glass rounded-full flex items-center justify-center hover:scale-110 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default ${fontSize} font-medium`}
    >
      {skill.name}
    </motion.div>
  )
}

export function SkillsCloud() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-balance">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"A diverse toolkit honed through years of building exceptional digital experiences."}
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-32">
          {skills.map((skill, index) => (
            <SkillBadge key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Footer Section */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          id="contact"
          className="border-t border-border pt-20 mt-20"
        >
          <div className="text-center space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-balance">{"Let's Create Something Amazing"}</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {"Available for freelance projects and collaboration opportunities."}
            </p>

            <a
              href="mailto:hello@alexmorgan.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail className="w-5 h-5" />
              {"Get In Touch"}
            </a>

            <div className="flex items-center justify-center gap-8 pt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-8">
              © {new Date().getFullYear()} Alex Morgan. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
