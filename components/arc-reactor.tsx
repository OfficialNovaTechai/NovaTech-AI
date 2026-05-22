"use client"

export default function ArcReactor() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden">

      {/* MASSIVE BACKGROUND GLOW */}
      <div className="absolute w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[200px] animate-pulse" />

      {/* OUTER RING */}
      <div className="absolute w-[700px] h-[700px] border border-cyan-400/20 rounded-full animate-[spin_20s_linear_infinite]" />

      {/* SECOND RING */}
      <div className="absolute w-[550px] h-[550px] border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

      {/* THIRD RING */}
      <div className="absolute w-[400px] h-[400px] border border-cyan-300/30 rounded-full animate-[spin_10s_linear_infinite]" />

      {/* CENTER REACTOR */}
      <div className="relative flex items-center justify-center">

        {/* INNER CORE */}
        <div className="relative w-[220px] h-[220px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_120px_rgba(34,211,238,0.8)] animate-pulse">

          {/* INNER LIGHT */}
          <div className="absolute inset-6 rounded-full border border-cyan-200/40" />

          {/* CENTER ENERGY */}
          <div className="absolute inset-12 rounded-full bg-cyan-300 blur-2xl opacity-80" />

          {/* CENTER DOT */}
          <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-sm" />

        </div>

      </div>

      {/* ENERGY BEAMS */}
      <div className="absolute w-[900px] h-[2px] bg-cyan-400/20 blur-xl rotate-45" />
      <div className="absolute w-[900px] h-[2px] bg-purple-400/20 blur-xl -rotate-45" />

      {/* PARTICLE ORBS */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-cyan-400 rounded-full blur-sm animate-bounce" />
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-ping" />

    </div>
  )
}