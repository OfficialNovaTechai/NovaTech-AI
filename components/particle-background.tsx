"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  hue: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext("2d")

    if (!ctx) return

    let animationId: number

    let particles: Particle[] = []

    let mouseX = 0
    let mouseY = 0

    let isMobile = window.innerWidth < 768

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      isMobile = window.innerWidth < 768
    }

    const createParticles = () => {
      particles = []

      // Adaptive particle count
      const particleCount = isMobile
        ? Math.floor(
            (canvas.width * canvas.height) /
              35000
          )
        : Math.floor(
            (canvas.width * canvas.height) /
              18000
          )

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,

          y: Math.random() * canvas.height,

          size:
            Math.random() *
              (isMobile ? 1.5 : 2) +
            0.5,

          speedX:
            (Math.random() - 0.5) *
            (isMobile ? 0.25 : 0.45),

          speedY:
            (Math.random() - 0.5) *
            (isMobile ? 0.25 : 0.45),

          opacity:
            Math.random() * 0.4 + 0.15,

          hue:
            Math.random() > 0.5
              ? 250
              : 195,
        })
      }
    }

    const drawParticle = (p: Particle) => {
      ctx.beginPath()

      ctx.arc(
        p.x,
        p.y,
        p.size,
        0,
        Math.PI * 2
      )

      ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${p.opacity})`

      ctx.fill()
    }

    const connectParticles = () => {
      // Skip heavy connections on very small devices
      if (
        isMobile &&
        window.innerWidth < 480
      )
        return

      const maxDistance = isMobile
        ? 80
        : 120

      for (let i = 0; i < particles.length; i++) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const dx =
            particles[i].x -
            particles[j].x

          const dy =
            particles[i].y -
            particles[j].y

          const distance = Math.sqrt(
            dx * dx + dy * dy
          )

          if (distance < maxDistance) {
            ctx.beginPath()

            ctx.strokeStyle = `hsla(250, 70%, 60%, ${
              0.12 *
              (1 -
                distance / maxDistance)
            })`

            ctx.lineWidth = 0.4

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            )

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            )

            ctx.stroke()
          }
        }
      }
    }

    const updateParticles = () => {
      particles.forEach((p) => {
        // Mouse interaction desktop only
        if (!isMobile) {
          const dx = mouseX - p.x

          const dy = mouseY - p.y

          const distance = Math.sqrt(
            dx * dx + dy * dy
          )

          if (
            distance < 120 &&
            distance > 0
          ) {
            const force =
              (120 - distance) / 120

            p.speedX -=
              (dx / distance) *
              force *
              0.015

            p.speedY -=
              (dy / distance) *
              force *
              0.015
          }
        }

        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Smooth friction
        p.speedX *= 0.992
        p.speedY *= 0.992

        // Boundary loop
        if (p.x < 0)
          p.x = canvas.width

        if (p.x > canvas.width)
          p.x = 0

        if (p.y < 0)
          p.y = canvas.height

        if (p.y > canvas.height)
          p.y = 0
      })
    }

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      )

      updateParticles()

      connectParticles()

      particles.forEach(drawParticle)

      animationId =
        requestAnimationFrame(animate)
    }

    const handleMouseMove = (
      e: MouseEvent
    ) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleResize = () => {
      resize()
      createParticles()
    }

    resize()

    createParticles()

    animate()

    window.addEventListener(
      "resize",
      handleResize
    )

    // Desktop only
    if (!isMobile) {
      window.addEventListener(
        "mousemove",
        handleMouseMove
      )
    }

    return () => {
      cancelAnimationFrame(animationId)

      window.removeEventListener(
        "resize",
        handleResize
      )

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      )
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.5,
        willChange: "transform",
      }}
    />
  )
}