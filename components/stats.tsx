"use client"

import { useRef, useEffect, useState } from "react"
import {
  motion,
  useInView,
  animate,
} from "framer-motion"

import {
  Zap,
  Users,
  Code,
  Award,
} from "lucide-react"

const stats = [
  {
    icon: Code,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description:
      "Successful AI & automation deployments",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    value: 100,
    suffix: "+",
    label: "AI Integrations",
    description:
      "Custom machine learning models deployed",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    value: 25,
    suffix: "+",
    label: "Automation Systems",
    description:
      "Industrial automation solutions",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Technologies",
    description:
      "Cutting-edge tech stack mastered",
    color: "from-green-500 to-emerald-500",
  },
]

function AnimatedCounter({
  value,
  duration = 2,
}: {
  value: number
  duration?: number
}) {
  const [displayValue, setDisplayValue] =
    useState(0)

  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
  })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (v) =>
          setDisplayValue(Math.floor(v)),
      })

      return () => controls.stop()
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{displayValue}</span>
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: typeof stats[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] =
    useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -6,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div
        className={`glass-card rounded-2xl p-5 sm:p-6 lg:p-8 h-full text-center transition-all duration-300 overflow-hidden ${
          isHovered
            ? "neon-border"
            : "border border-white/5"
        }`}
      >
        {/* Glow */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Icon */}
        <div className="relative mb-5 sm:mb-6 inline-block">
          <div
            className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${stat.color}`}
          >
            <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
          </div>

          {isHovered && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 0.4,
                scale: 1.2,
              }}
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} blur-xl`}
            />
          )}
        </div>

        {/* Value */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-none">
          <span className="gradient-text">
            <AnimatedCounter
              value={stat.value}
            />
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 leading-snug">
          {stat.label}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {stat.description}
        </p>

        {/* Bottom accent */}
        <div
          className={`absolute bottom-0 left-5 right-5 h-1 bg-gradient-to-r ${stat.color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
        />
      </div>
    </motion.div>
  )
}

export function Stats() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="absolute inset-0 grid-bg opacity-10" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : {}
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs sm:text-sm font-medium text-primary glass rounded-full neon-border mb-4">
            Our Impact
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">
              Numbers That Speak
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Our track record of delivering
            exceptional AI and automation
            solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}