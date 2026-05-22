"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Torus, Text3D, Center, Environment, Sparkles } from "@react-three/drei"
import { motion, useInView } from "framer-motion"
import * as THREE from "three"

function HolographicCore() {
  const coreRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const outerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.1
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.3
      innerRef.current.rotation.z = t * 0.2
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = -t * 0.2
      outerRef.current.rotation.z = -t * 0.15
    }
  })

  return (
    <group ref={coreRef}>
      {/* Central distorted sphere */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1.8, 64, 64]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
            metalness={0.9}
            emissive="#6366f1"
            emissiveIntensity={0.4}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </Float>

      {/* Inner glowing core */}
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#06b6d4"
          emissiveIntensity={3}
          transparent
          opacity={0.7}
        />
      </Sphere>

      {/* Rotating torus rings */}
      <Torus ref={innerRef} args={[2.5, 0.05, 16, 100]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />
      </Torus>

      <Torus ref={outerRef} args={[3, 0.03, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#06b6d4"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
        />
      </Torus>

      <Torus args={[3.5, 0.02, 16, 100]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshStandardMaterial
          color="#f472b6"
          emissive="#ec4899"
          emissiveIntensity={1}
          transparent
          opacity={0.4}
        />
      </Torus>
    </group>
  )
}

function DataStreams({ count = 50 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2
        const radius = 4 + Math.random() * 2
        const height = (Math.random() - 0.5) * 4
        
        return (
          <Float key={i} speed={0.5 + Math.random()} floatIntensity={0.3}>
            <mesh
              position={[
                Math.cos(angle) * radius,
                height,
                Math.sin(angle) * radius,
              ]}
            >
              <boxGeometry args={[0.03, 0.3 + Math.random() * 0.5, 0.03]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#6366f1" : "#22d3ee"}
                emissive={i % 2 === 0 ? "#4f46e5" : "#06b6d4"}
                emissiveIntensity={2}
                transparent
                opacity={0.6}
              />
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}

function MouseParallax() {
  const { camera } = useThree()

  useFrame((state) => {
    const { pointer } = state
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 2, 0.05)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 1, 0.05)
    camera.lookAt(0, 0, 0)
  })

  return null
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#050816"]} />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#8b5cf6" />

      <HolographicCore />
      <DataStreams count={60} />

      <Sparkles
        count={200}
        scale={15}
        size={2}
        speed={0.3}
        opacity={0.5}
        color="#6366f1"
      />

      <MouseParallax />
    </>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary glass rounded-full neon-border mb-4">
            Interactive Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">The AI Core</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Move your mouse to interact with our holographic AI visualization
          </p>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden glass neon-border"
        >
          <Canvas
            camera={{ position: [0, 0, 10], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <Scene />
          </Canvas>

          {/* Overlay gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-card to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent" />
          </div>

          {/* Info overlays */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sm text-muted-foreground">
            <span className="glass px-3 py-1.5 rounded-full">Interactive 3D</span>
            <span className="glass px-3 py-1.5 rounded-full">Move mouse to explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
