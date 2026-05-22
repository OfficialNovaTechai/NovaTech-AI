"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
} from "lucide-react"

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  services: [
    { name: "AI Solutions", href: "#services" },
    { name: "Robotics", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Automation", href: "#services" },
  ],

  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#projects" },
    { name: "Documentation", href: "#" },
    { name: "Careers", href: "#" },
  ],
}

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative pt-20 sm:pt-24 pb-8 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-14 sm:mb-16">
          {/* Brand column */}
          <div className="sm:col-span-2">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 mb-5 sm:mb-6"
            >
              <div className="relative w-10 h-10 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg animate-pulse-glow" />

                <div className="absolute inset-0.5 bg-background rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text">
                    N
                  </span>
                </div>
              </div>

              <span className="text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap">
                <span className="gradient-text">
                  Nova
                </span>

                <span className="text-foreground">
                  Tech
                </span>

                <span className="text-primary">
                  .AI
                </span>
              </span>
            </Link>

            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-md leading-relaxed">
              Building the future with
              cutting-edge AI systems,
              robotics solutions, and
              automation platforms that
              transform industries worldwide.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 glass rounded-lg hover:neon-border transition-all hover-lift"
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>

            <ul className="space-y-3">
              {footerLinks.company.map(
                (link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-foreground hover:gradient-text transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h4>

            <ul className="space-y-3">
              {footerLinks.services.map(
                (link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-foreground hover:gradient-text transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Resources
            </h4>

            <ul className="space-y-3">
              {footerLinks.resources.map(
                (link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-foreground hover:gradient-text transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="glass-card rounded-2xl p-5 sm:p-6 lg:p-8 mb-14 sm:mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                Stay Updated
              </h4>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Get the latest AI insights
                and updates delivered to your
                inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-72 px-4 py-3 bg-input border border-border rounded-xl text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />

              <button className="px-6 py-3 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-xl hover-lift whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50 text-center md:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy;{" "}
            {new Date().getFullYear()}{" "}
            NovaTech.AI. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 p-3 glass rounded-full neon-border hover-lift z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-primary" />
        </motion.button>
      </div>
    </footer>
  )
}