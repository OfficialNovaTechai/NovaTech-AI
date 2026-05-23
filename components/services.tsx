"use client"

import { useRef, useState } from "react"
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"

import {
  Brain,
  Bot,
  Globe,
  Smartphone,
  Eye,
  Factory,
  MessageSquare,
  Palette,
  Cloud,
} from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Custom AI models, deep learning solutions, and intelligent decision-making systems tailored to your business.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Bot,
    title: "Robotics Automation",
    description:
      "Industrial and collaborative robots that work alongside humans to increase efficiency and precision.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance web applications with cutting-edge technologies and seamless user experiences.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications with AI-powered features and modern design.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Advanced image and video analysis systems for quality control, surveillance, and automation.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    description:
      "PLC programming, SCADA systems, and IoT solutions for smart manufacturing.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: MessageSquare,
    title: "Smart AI Assistants",
    description:
      "Conversational AI chatbots and virtual assistants that understand context and provide intelligent responses.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user psychology and conversion optimization in mind.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Cloud,
    title: "AI SaaS Systems",
    description:
      "Scalable cloud-based AI platforms that grow with your business and integrate seamlessly.",
    color: "from-teal-500 to-cyan-600",
  },
]

interface ServiceCardProps {
  service: typeof services[0]
  index: number
  isInView: boolean
}

function ServiceCard({
  service,
  index,
  isInView,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 300,
      damping: 30,
    }
  )

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 300,
      damping: 30,
    }
  )

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return

    // Disable heavy effect on small screens
    if (window.innerWidth < 768) return

    const rect = cardRef.current.getBoundingClientRect()

    const x =
      (e.clientX - rect.left) / rect.width - 0.5

    const y =
      (e.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group perspective-1000"
    >
      <div
        className={`glass-card rounded-2xl p-5 sm:p-6 h-full transition-all duration-300 overflow-hidden ${
          isHovered
            ? "neon-border"
            : "border border-white/5"
        }`}
      >
        {/* Animated gradient background */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Icon container */}
        <div className="relative mb-5">
          <div
            className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${service.color}`}
          >
            <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>

          {/* Glow effect */}
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
          />
        </div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:gradient-text transition-all duration-300 leading-snug">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-5 right-5 h-0.5 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
        />

        {/* Corner decoration */}
        <div className="absolute top-4 right-4 w-16 sm:w-20 h-16 sm:h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className={`absolute top-0 right-0 w-10 sm:w-12 h-px bg-gradient-to-l ${service.color}`}
          />

          <div
            className={`absolute top-0 right-0 w-px h-10 sm:h-12 bg-gradient-to-b ${service.color}`}
          />
        </div>
      </div>
    </motion.div>
  )
}

export function Services() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="absolute top-1/4 -left-40 sm:-left-48 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 -right-40 sm:-right-48 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-3xl" />

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
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">
              Transforming Ideas into
            </span>

            <br />

            <span className="gradient-text">
              Intelligent Solutions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            From concept to deployment, we offer
            comprehensive AI and automation services
            designed to give your business a competitive
            edge in the digital era.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : {}
          }
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="text-center mt-14 sm:mt-16"
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Need a custom solution? We got you
            covered.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-full hover-lift transition-all hover:scale-105"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}