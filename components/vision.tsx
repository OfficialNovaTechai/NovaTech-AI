"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, Sparkles } from "lucide-react"

export function Vision() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section
      id="vision"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] lg:w-[800px] h-[500px] sm:h-[700px] lg:h-[800px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />

      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : {}
          }
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : {}
            }
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full neon-border mb-6 sm:mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />

            <span className="text-xs sm:text-sm font-medium text-primary">
              Our Vision
            </span>
          </motion.div>

          {/* Quote icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </motion.div>

          {/* Main vision text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mb-10 sm:mb-12"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-foreground mb-6 sm:mb-8">
              NovaTech.AI aims to build{" "}
              <span className="gradient-text">
                futuristic AI systems
              </span>
              , robotics solutions, automation
              platforms, and{" "}
              <span className="gradient-text">
                next-generation smart technologies
              </span>{" "}
              that transform industries and
              human interaction.
            </p>
          </motion.blockquote>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2"
          >
            We envision a world where artificial
            intelligence enhances every aspect of
            human life, making businesses more
            efficient, cities smarter, and
            technology more accessible to everyone.
            Our mission is to lead this
            transformation with innovative
            solutions that are both powerful and
            responsible.
          </motion.p>

          {/* Vision pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          >
            {[
              {
                title: "Innovation",
                description:
                  "Pushing boundaries with cutting-edge research and development",
              },
              {
                title: "Transformation",
                description:
                  "Revolutionizing industries through intelligent automation",
              },
              {
                title: "Impact",
                description:
                  "Creating technology that makes a positive difference",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="glass-card rounded-2xl p-5 sm:p-6 hover-lift"
              >
                <h3 className="text-lg sm:text-xl font-semibold gradient-text mb-2">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}