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
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-white text-lg">
          Loading Experience...
        </div>
      </div>
    ),
  }
)

// Dynamically import particle background
const ParticleBackground = dynamic(
  () => import("@/components/particle-background").then((mod) => mod.ParticleBackground),
  {
    ssr: false,
  }
)

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <ParticleBackground />
      </div>

      <main className="relative w-full overflow-x-hidden bg-black text-white">
        <Navbar />

        <section className="w-full overflow-hidden">
          <Hero />
        </section>

        <section className="w-full overflow-hidden">
          <About />
        </section>

        <section className="w-full overflow-hidden">
          <Services />
        </section>

        <section className="w-full overflow-hidden">
          <Projects />
        </section>

        <section className="w-full overflow-hidden">
          <Experience />
        </section>

        <section className="w-full overflow-hidden">
          <Technologies />
        </section>

        <section className="w-full overflow-hidden">
          <Stats />
        </section>

        <section className="w-full overflow-hidden">
          <Vision />
        </section>

        <section className="w-full overflow-hidden">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  )
}