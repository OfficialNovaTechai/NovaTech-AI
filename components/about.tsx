"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Cpu, Cog, Code, Rocket } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Innovation",
    description: "Pioneering advanced machine learning and neural network solutions that push the boundaries of artificial intelligence.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Cpu,
    title: "Robotics Engineering",
    description: "Building intelligent robotic systems that seamlessly integrate with existing workflows and enhance productivity.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Cog,
    title: "Automation Systems",
    description: "Creating end-to-end automation platforms that streamline operations and reduce human error.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Code,
    title: "Smart Software",
    description: "Developing intelligent software solutions that learn, adapt, and evolve with your business needs.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Rocket,
    title: "Future Technology",
    description: "Researching and implementing cutting-edge technologies that will shape tomorrow&apos;s digital landscape.",
    gradient: "from-secondary to-primary",
  },
]

const timeline = [
  { year: "2024", event: "NovaTech.AI Founded", description: "Started with a vision to revolutionize AI" },
  { year: "2025", event: "First AI Product Launch", description: "Released our flagship AI platform" },
  { year: "2026", event: "Robotics Division", description: "Expanded into industrial robotics" },
  { year: "2027", event: "Global Expansion", description: "Opened offices in 5 countries" },
  { year: "2028", event: "100+ Enterprise Clients", description: "Trusted by Fortune 500 companies" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary glass rounded-full neon-border mb-4">
            About NovaTech.AI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Pioneering the Future</span>
            <br />
            <span className="text-foreground">of Artificial Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At NovaTech.AI, we&apos;re not just building technology — we&apos;re crafting the future. 
            Our team of world-class engineers and researchers is dedicated to creating AI solutions 
            that transform industries and improve lives.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover-lift transition-all duration-300 group-hover:neon-border">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">Our Journey</h3>
          
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-24 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
              >
                <div className="glass-card rounded-xl p-6 hover-lift">
                  <span className="inline-block px-3 py-1 text-sm font-bold text-primary bg-primary/10 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{item.event}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary neon-glow"
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
