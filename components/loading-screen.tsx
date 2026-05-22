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
  "DIMENSION LOCK",
  "ENERGY INFINITE",
]

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [glitch, setGlitch] = useState(false)
  const [reactorBlink, setReactorBlink] = useState(false)

  useEffect(() => {
    // SAFE AUDIO
    try {
      const startupSound = new Audio(
        "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
      )

      startupSound.volume = 0.15

      startupSound.play().catch(() => {})
    } catch (err) {}

    // FIXED PROGRESS SYSTEM
    let currentProgress = 0

    const progressInterval = setInterval(() => {
      currentProgress += 2

      if (currentProgress >= 100) {
        currentProgress = 100

        clearInterval(progressInterval)

        setTimeout(() => {
          setIsLoading(false)
        }, 700)
      }

      setProgress(currentProgress)
    }, 90)

    // MESSAGE CYCLING
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) =>
        prev < bootMessages.length - 1 ? prev + 1 : prev
      )
    }, 700)

    // REACTOR BLINK
    const blinkInterval = setInterval(() => {
      setReactorBlink(true)

      setTimeout(() => {
        setReactorBlink(false)
      }, 140)
    }, 2200)

    // GLITCH EFFECT
    const glitchInterval = setInterval(() => {
      setGlitch(true)

      setTimeout(() => {
        setGlitch(false)
      }, 180)
    }, 2900)

    return () => {
      clearInterval(progressInterval)
      clearInterval(messageInterval)
      clearInterval(blinkInterval)
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-black text-white font-mono"
        >
          {/* GRID */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          {/* MASSIVE GLOW */}
          <div className="absolute top-1/2 left-1/2 w-[1300px] h-[1300px] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700/30 rounded-full blur-[220px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />

          {/* FLOATING TEXT */}
          {floatingTexts.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.65, 0],
                y: [-80, -380],
                x: i % 2 === 0 ? [-120, -80] : [120, 80],
              }}
              transition={{
                duration: 7 + i * 0.6,
                repeat: Infinity,
                delay: i * 0.7,
              }}
              className="absolute text-xs md:text-base tracking-[6px] font-medium text-blue-300/60 pointer-events-none"
              style={{
                left: `${18 + (i % 6) * 11}%`,
                top: `${25 + Math.floor(i / 4) * 22}%`,
              }}
            >
              {text}
            </motion.div>
          ))}

          {/* SCANLINES */}
          <motion.div
            animate={{ y: ["-180%", "180%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-[5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-md"
          />

          {/* TOP HUD */}
          <div className="absolute top-0 left-0 right-0 h-14 border-b border-white/10 bg-black/80 backdrop-blur-2xl flex items-center justify-between px-8 z-20">
            <div className="flex items-center gap-4">
              <div className="w-3.5 h-3.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xl tracking-[6px] font-bold text-white">
                NovaTech.AI
              </span>
            </div>

            <div className="text-xs tracking-widest text-blue-400">
              ARC REACTOR PROTOCOL • LIVE
            </div>
          </div>

          {/* MAIN */}
          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <div className="flex flex-col items-center text-center">

              {/* ARC REACTOR */}
              <div className="relative mb-12 flex items-center justify-center">

                <div className="absolute w-[580px] h-[580px] border border-blue-500/30 rounded-full animate-[spin_19s_linear_infinite]" />

                <div className="absolute w-[470px] h-[470px] border border-blue-500/40 rounded-full animate-[spin_13.5s_linear_infinite_reverse]" />

                <div className="absolute w-[370px] h-[370px] border border-blue-500/30 rounded-full animate-[spin_25s_linear_infinite]" />

                <div className="absolute w-[360px] h-[360px] bg-gradient-to-br from-blue-700/70 to-indigo-600/50 rounded-full blur-[120px] animate-pulse" />

                <motion.div
                  animate={{
                    scale: reactorBlink ? [1.15, 1] : [1, 1.09, 1],
                  }}
                  transition={{
                    duration: reactorBlink ? 0.18 : 2.1,
                  }}
                  className="relative w-64 h-64 rounded-full border-[6px] border-white/30 bg-black flex items-center justify-center shadow-2xl"
                >
                  <div className="absolute inset-6 rounded-full border border-blue-400/50" />

                  <div className="absolute inset-12 rounded-full border border-blue-500/60" />

                  <motion.div
                    animate={{
                      scale: reactorBlink
                        ? [1.45, 1]
                        : [0.92, 1.32, 0.92],
                    }}
                    transition={{
                      duration: reactorBlink ? 0.16 : 1.65,
                      repeat: Infinity,
                    }}
                    className="relative w-36 h-36 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500 rounded-full flex items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-70" />

                    <div className="w-24 h-24 bg-blue-200 rounded-full relative z-10" />

                    <motion.div
                      animate={{
                        scale: [1, 1.65, 1],
                      }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-60"
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* TITLE */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.7, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className={`text-7xl md:text-8xl font-black tracking-[-3.5px] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-300 drop-shadow-[0_0_50px_rgba(59,130,246,0.8)] ${
                  glitch ? "scale-105" : ""
                }`}
              >
                NovaTech.AI
              </motion.h1>

              {/* BOOT MESSAGE */}
              <motion.div
                key={messageIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xl tracking-[6px] text-blue-300 mb-12 h-8"
              >
                {bootMessages[messageIndex]}
              </motion.div>

              {/* PROGRESS BAR */}
              <div className="relative w-[440px] h-4 bg-white/5 border border-blue-500/30 rounded-full overflow-hidden shadow-2xl">
                <motion.div
                  animate={{
                    width: `${progress}%`,
                  }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_50px_rgba(59,130,246,1)]"
                />
              </div>

              {/* PROGRESS TEXT */}
              <div className="mt-6 font-mono text-lg tracking-widest text-white/90">
                {Math.floor(progress)}% • ARC HEART STABLE
              </div>

              {/* TERMINAL */}
              <div className="mt-16 w-full max-w-xl border border-blue-500/20 bg-black/70 backdrop-blur-3xl rounded-3xl p-8 text-left shadow-2xl">
                <div className="text-blue-400 mb-4 font-medium">
                  $ novatech --arc-reactor --init
                </div>

                <div className="space-y-2 text-sm text-white/80">
                  <div>&gt; Quantum heart synchronized</div>
                  <div>&gt; Blue plasma core stable</div>
                  <div>&gt; All systems nominal</div>
                  <div className="text-blue-300 font-semibold">
                    &gt; NOVATECH IS ALIVE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="absolute bottom-6 left-0 right-0 text-center text-xs tracking-[4px] text-white/30">
            POWERED BY THE ARC • INFINITE INTELLIGENCE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}