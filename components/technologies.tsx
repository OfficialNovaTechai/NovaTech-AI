"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const technologies = [
  // KEEP YOUR FULL technologies ARRAY EXACTLY SAME HERE
]

function TechCard({
  tech,
  index,
  isInView,
}: {
  tech: typeof technologies[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -5,
      }}
      className="group relative h-full"
    >
      <div
        className={`glass-card rounded-2xl p-4 sm:p-5 lg:p-6 h-full transition-all duration-300 overflow-hidden ${
          isHovered
            ? "neon-border"
            : "border border-white/5"
        }`}
      >
        {/* Glow background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Icon */}
        <div className="relative mb-4">
          <div
            className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${tech.color} text-white`}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
              {tech.icon}
            </div>
          </div>

          {/* Glow */}
          {isHovered && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 0.5,
                scale: 1,
              }}
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} blur-xl`}
            />
          )}
        </div>

        {/* Content */}
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:gradient-text transition-colors leading-snug">
          {tech.name}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground">
          {tech.category}
        </p>

        {/* Hover accent */}
        <div
          className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r ${tech.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
        />
      </div>
    </motion.div>
  )
}

export function Technologies() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section
      id="technologies"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="absolute top-1/4 -right-32 sm:right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 -left-32 sm:left-0 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : {}
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs sm:text-sm font-medium text-primary glass rounded-full neon-border mb-4">
            Our Tech Stack
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">
              Powered by
            </span>

            <br />

            <span className="gradient-text">
              Cutting-Edge Technologies
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            We leverage the most advanced
            technologies to build robust,
            scalable, and intelligent solutions
            for our clients.
          </p>
        </motion.div>

        {/* Technologies grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.name}
              tech={tech}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}