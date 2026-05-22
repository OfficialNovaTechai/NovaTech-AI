"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Technologies } from "@/components/technologies"
import { Stats } from "@/components/stats"
import { Vision } from "@/components/vision"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

// Dynamically import the 3D experience section for better performance
const Experience = dynamic(
  () => import("@/components/experience").then((mod) => mod.Experience),
  { ssr: false }
)

// Dynamically import particle background
const ParticleBackground = dynamic(
  () => import("@/components/particle-background").then((mod) => mod.ParticleBackground),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Technologies />
        <Stats />
        <Vision />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
