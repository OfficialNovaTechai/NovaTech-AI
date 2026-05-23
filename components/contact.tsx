"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/novatech-ai-innovations/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/novatechai.in?igsh=MWF1YXgzcXljbTRkaQ==", label: "Instagram" },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "official.novatechai@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 82638 33040",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra India",
  },
]

export function Contact() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [isSubmitted, setIsSubmitted] =
    useState(false)

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    )

    setIsSubmitting(false)
    setIsSubmitted(true)

    setFormState({
      name: "",
      email: "",
      message: "",
    })

    // Reset success message
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />

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
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">
              Let's Build
            </span>

            <br />

            <span className="gradient-text">
              Something Amazing
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Ready to transform your business
            with AI? Get in touch and let&apos;s
            discuss how we can help.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-5 sm:p-6 lg:p-8 neon-border"
            >
              <div className="space-y-5 sm:space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        name: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-input border border-border rounded-xl text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        email: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-input border border-border rounded-xl text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        message:
                          e.target.value,
                      })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 sm:py-4 bg-input border border-border rounded-xl text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-xl hover-lift transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>Message Sent!</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Info */}
            <div className="glass-card rounded-3xl p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-5 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>

                      <p className="text-sm sm:text-base text-foreground font-medium break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="glass-card rounded-3xl p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-5 sm:mb-6">
                Follow Us
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 glass rounded-xl hover:neon-border transition-all hover-lift"
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card rounded-3xl p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                Ready to Start?
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">
                Schedule a free consultation
                call with our AI experts.
              </p>

              <button className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-xl hover-lift w-full sm:w-auto">
                Book a Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button - Improved Positioning */}
      <a
        href="https://wa.me/918551063040"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 z-[100] bg-[#25D366] hover:bg-[#20ba5c] text-white p-4 rounded-full shadow-2xl hover-lift transition-all flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 bg-green-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
          Chat
        </span>
      </a>
    </section>
  )
}