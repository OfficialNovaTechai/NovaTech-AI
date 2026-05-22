"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Technologies", href: "#technologies" },
  { name: "Vision", href: "#vision" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)

        if (element) {
          const rect = element.getBoundingClientRect()

          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[92%] max-w-7xl transition-all duration-500 ${
        isScrolled ? "top-2" : "top-3 md:top-4"
      }`}
    >
      <div
        className={`glass rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-500 overflow-hidden ${
          isScrolled ? "neon-border" : "border border-white/10"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 min-w-0 group"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg animate-pulse-glow" />

              <div className="absolute inset-[2px] bg-background rounded-lg flex items-center justify-center">
                <span className="text-base sm:text-lg font-bold gradient-text">
                  N
                </span>
              </div>
            </div>

            <span className="text-base sm:text-xl font-bold tracking-tight whitespace-nowrap">
              <span className="gradient-text">Nova</span>
              <span className="text-foreground">Tech</span>
              <span className="text-primary">.AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-3 xl:px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group whitespace-nowrap"
              >
                {link.name}

                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}

                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="#contact"
              className="relative px-5 xl:px-6 py-2.5 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden group whitespace-nowrap"
            >
              <span className="relative z-10">Get Started</span>

              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-white/10 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeSection === link.href.substring(1)
                          ? "bg-primary/10 text-foreground border border-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-2"
                >
                  <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-full"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}