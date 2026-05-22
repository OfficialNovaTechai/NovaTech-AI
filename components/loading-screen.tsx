"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const bootMessages = [
  "INITIALIZING NOVA CORE...",
  "CHARGING ARC PLASMA...",
  "SYNCHRONIZING NEURAL NET...",
  "ACTIVATING QUANTUM HEART...",
  "ESTABLISHING STARK PROTOCOL...",
  "ENERGY FLOW STABILIZED...",
  "NOVATECH AWAKENED ✓",
]

const floatingTexts = [
  "NEURAL SYNC",
  "QUANTUM LINK",
  "ARC STABLE",
  "POWER 99%",
  "STARK PROTOCOL",
  "BLUE HEART ONLINE",
]

export function LoadingScreen() {
  const [isLoading, setIsLoading] =
    useState(true)

  const [progress, setProgress] =
    useState(0)

  const [messageIndex, setMessageIndex] =
    useState(0)

  const [glitch, setGlitch] =
    useState(false)

  const [reactorBlink, setReactorBlink] =
    useState(false)

  const [isMobile, setIsMobile] =
    useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener(
      "resize",
      checkMobile
    )

    // SAFE AUDIO
    try {
      const startupSound = new Audio(
        "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
      )

      startupSound.volume = 0.08

      startupSound.play().catch(() => {})
    } catch (err) {}

    // Optimized Progress
    let currentProgress = 0

    const progressInterval = setInterval(() => {
      currentProgress += 2

      if (currentProgress >= 100) {
        currentProgress = 100

        clearInterval(progressInterval)

        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }

      setProgress(currentProgress)
    }, 70)

    // Messages
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) =>
        prev < bootMessages.length - 1
          ? prev + 1
          : prev
      )
    }, 600)

    // Reactor Blink
    const blinkInterval = setInterval(() => {
      setReactorBlink(true)

      setTimeout(() => {
        setReactorBlink(false)
      }, 120)
    }, 2200)

    // Glitch
    const glitchInterval = setInterval(() => {
      setGlitch(true)

      setTimeout(() => {
        setGlitch(false)
      }, 140)
    }, 3200)

    return () => {
      clearInterval(progressInterval)

      clearInterval(messageInterval)

      clearInterval(blinkInterval)

      clearInterval(glitchInterval)

      window.removeEventListener(
        "resize",
        checkMobile
      )
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-black text-white font-mono"
        >
          {/* GRID */}
          <div className="absolute inset-0 opacity-15">
            <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:38px_38px]" />
          </div>

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 w-[500px] sm:w-[900px] lg:w-[1200px] h-[500px] sm:h-[900px] lg:h-[1200px] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700/20 rounded-full blur-[140px] sm:blur-[200px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />

          {/* Floating Text */}
          {!isMobile &&
            floatingTexts.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  y: [-60, -260],
                  x:
                    i % 2 === 0
                      ? [-90, -50]
                      : [90, 50],
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="absolute text-xs tracking-[5px] font-medium text-blue-300/50 pointer-events-none"
                style={{
                  left: `${
                    18 + (i % 6) * 11
                  }%`,
                  top: `${
                    28 +
                    Math.floor(i / 4) * 18
                  }%`,
                }}
              >
                {text}
              </motion.div>
            ))}

          {/* Scanline */}
          <motion.div
            animate={{
              y: ["-120%", "120%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"
          />

          {/* Top HUD */}
          <div className="absolute top-0 left-0 right-0 h-12 sm:h-14 border-b border-white/10 bg-black/70 backdrop-blur-xl flex items-center justify-between px-4 sm:px-8 z-20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />

              <span className="text-sm sm:text-xl tracking-[3px] sm:tracking-[6px] font-bold text-white">
                NovaTech.AI
              </span>
            </div>

            {!isMobile && (
              <div className="text-xs tracking-widest text-blue-400">
                ARC REACTOR • LIVE
              </div>
            )}
          </div>

          {/* Main */}
          <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6">
            <div className="flex flex-col items-center text-center w-full">

              {/* Reactor */}
              <div className="relative mb-8 sm:mb-12 flex items-center justify-center">
                {!isMobile && (
                  <>
                    <div className="absolute w-[420px] h-[420px] border border-blue-500/20 rounded-full animate-[spin_18s_linear_infinite]" />

                    <div className="absolute w-[320px] h-[320px] border border-blue-500/30 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
                  </>
                )}

                <div className="absolute w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] bg-gradient-to-br from-blue-700/60 to-indigo-600/40 rounded-full blur-[80px] animate-pulse" />

                <motion.div
                  animate={{
                    scale: reactorBlink
                      ? [1.12, 1]
                      : [1, 1.05, 1],
                  }}
                  transition={{
                    duration: reactorBlink
                      ? 0.16
                      : 2,
                  }}
                  className="relative w-40 sm:w-56 h-40 sm:h-56 rounded-full border-[5px] border-white/20 bg-black flex items-center justify-center shadow-2xl"
                >
                  <div className="absolute inset-4 sm:inset-6 rounded-full border border-blue-400/40" />

                  <div className="absolute inset-8 sm:inset-12 rounded-full border border-blue-500/50" />

                  <motion.div
                    animate={{
                      scale: reactorBlink
                        ? [1.35, 1]
                        : [0.95, 1.18, 0.95],
                    }}
                    transition={{
                      duration: reactorBlink
                        ? 0.14
                        : 1.5,
                      repeat: Infinity,
                    }}
                    className="relative w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500 rounded-full flex items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-60" />

                    <div className="w-12 sm:w-20 h-12 sm:h-20 bg-blue-200 rounded-full relative z-10" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Title */}
              <motion.h1
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                className={`text-4xl sm:text-6xl lg:text-8xl font-black tracking-[-2px] sm:tracking-[-3px] mb-5 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-300 drop-shadow-[0_0_35px_rgba(59,130,246,0.7)] ${
                  glitch ? "scale-105" : ""
                }`}
              >
                NovaTech.AI
              </motion.h1>

              {/* Boot Message */}
              <motion.div
                key={messageIndex}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="font-mono text-sm sm:text-lg tracking-[3px] sm:tracking-[6px] text-blue-300 mb-8 sm:mb-12 h-8 px-2"
              >
                {bootMessages[messageIndex]}
              </motion.div>

              {/* Progress */}
              <div className="relative w-full max-w-[320px] sm:max-w-[440px] h-3 sm:h-4 bg-white/5 border border-blue-500/30 rounded-full overflow-hidden shadow-2xl">
                <motion.div
                  animate={{
                    width: `${progress}%`,
                  }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_40px_rgba(59,130,246,1)]"
                />
              </div>

              {/* Progress Text */}
              <div className="mt-5 sm:mt-6 font-mono text-sm sm:text-lg tracking-widest text-white/90">
                {Math.floor(progress)}% •
                SYSTEM STABLE
              </div>

              {/* Terminal */}
              <div className="mt-10 sm:mt-14 w-full max-w-xl border border-blue-500/20 bg-black/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-left shadow-2xl">
                <div className="text-blue-400 mb-4 font-medium text-xs sm:text-sm break-all">
                  $ novatech --arc-reactor --init
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-white/80">
                  <div>
                    &gt; Quantum heart
                    synchronized
                  </div>

                  <div>
                    &gt; Blue plasma core
                    stable
                  </div>

                  <div>
                    &gt; All systems nominal
                  </div>

                  <div className="text-blue-300 font-semibold">
                    &gt; NOVATECH IS ALIVE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center text-[10px] sm:text-xs tracking-[2px] sm:tracking-[4px] text-white/30 px-4">
            POWERED BY THE ARC •
            INFINITE INTELLIGENCE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}