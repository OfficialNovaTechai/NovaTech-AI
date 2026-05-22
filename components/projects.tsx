"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "RakshaAI",
    category: "Security AI",
    description: "Advanced AI-powered security surveillance system with real-time threat detection and automated response protocols.",
    longDescription: "RakshaAI is our flagship security AI platform that combines computer vision, natural language processing, and predictive analytics to provide comprehensive security solutions. The system can detect anomalies, identify threats, and trigger automated responses in milliseconds.",
    tech: ["TensorFlow", "Python", "React", "AWS", "OpenCV"],
    color: "from-red-500 to-orange-500",
    stats: { accuracy: "99.7%", responseTime: "50ms", coverage: "24/7" },
  },
  {
    id: 2,
    title: "Rosie AI Assistant",
    category: "Conversational AI",
    description: "Intelligent virtual assistant with natural language understanding and multi-modal interaction capabilities.",
    longDescription: "Rosie is an enterprise-grade AI assistant that understands context, learns from interactions, and provides personalized assistance across multiple platforms and devices. Built with state-of-the-art transformer models.",
    tech: ["GPT-4", "LangChain", "Next.js", "PostgreSQL", "Redis"],
    color: "from-pink-500 to-purple-500",
    stats: { users: "50K+", satisfaction: "98%", languages: "40+" },
  },
  {
    id: 3,
    title: "Machine ID Scanner",
    category: "Computer Vision",
    description: "High-precision industrial OCR and barcode scanning system for automated quality control.",
    longDescription: "Our Machine ID Scanner revolutionizes quality control in manufacturing by providing instant, accurate identification of products, components, and defects using advanced computer vision algorithms.",
    tech: ["PyTorch", "OpenCV", "C++", "CUDA", "Edge AI"],
    color: "from-blue-500 to-cyan-500",
    stats: { accuracy: "99.9%", scanSpeed: "200/min", defectDetection: "99.5%" },
  },
  {
    id: 4,
    title: "AutoBot Systems",
    category: "Robotics",
    description: "Autonomous robotic systems for warehouse management and industrial automation.",
    longDescription: "AutoBot is a fleet of intelligent robots designed for warehouse operations, featuring autonomous navigation, collaborative picking, and seamless integration with existing WMS systems.",
    tech: ["ROS2", "Python", "SLAM", "LiDAR", "PLC"],
    color: "from-green-500 to-emerald-500",
    stats: { efficiency: "+300%", uptime: "99.8%", ROI: "18 months" },
  },
  {
    id: 5,
    title: "SmartFactory Hub",
    category: "IoT Platform",
    description: "Comprehensive IoT platform for real-time monitoring and predictive maintenance in manufacturing.",
    longDescription: "SmartFactory Hub connects all your industrial assets into a unified dashboard, providing real-time insights, predictive maintenance alerts, and AI-driven optimization recommendations.",
    tech: ["Node.js", "InfluxDB", "Grafana", "MQTT", "Azure IoT"],
    color: "from-amber-500 to-yellow-500",
    stats: { downtime: "-60%", savings: "$2M/year", sensors: "10K+" },
  },
  {
    id: 6,
    title: "NeuroPlatform",
    category: "AI SaaS",
    description: "Enterprise AI development platform with no-code model training and deployment capabilities.",
    longDescription: "NeuroPlatform democratizes AI development by providing an intuitive interface for creating, training, and deploying machine learning models without writing code.",
    tech: ["React", "FastAPI", "Kubernetes", "MLflow", "Terraform"],
    color: "from-violet-500 to-indigo-500",
    stats: { models: "1000+", accuracy: "95%+", deployment: "1-click" },
  },
]

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  tech: string[]
  color: string
  stats: Record<string, string>
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <div className={`glass-card rounded-2xl overflow-hidden h-full transition-all duration-300 ${
        isHovered ? "neon-border" : "border border-white/5"
      }`}>
        {/* Project image placeholder with gradient */}
        <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
          {/* Animated pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 grid-bg" />
          </div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
              {project.category}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <span className="flex items-center gap-2 text-white font-medium">
              View Project <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl glass rounded-3xl overflow-hidden neon-border"
      >
        {/* Header image */}
        <div className={`relative h-64 bg-gradient-to-br ${project.color}`}>
          <div className="absolute inset-0 opacity-30 grid-bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-foreground leading-relaxed">{project.longDescription}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{value}</div>
                <div className="text-xs text-muted-foreground uppercase mt-1">{key}</div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-lg neon-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-xl hover-lift">
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-foreground glass rounded-xl neon-border hover-lift">
              <Github className="w-4 h-4" />
              Source Code
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary glass rounded-full neon-border mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Showcasing Our</span>
            <br />
            <span className="gradient-text">Innovation Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of AI and automation projects that have 
            transformed businesses and pushed the boundaries of technology.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
