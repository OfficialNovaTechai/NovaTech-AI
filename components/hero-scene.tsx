"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Ring, Stars, Trail } from "@react-three/drei"
import * as THREE from "three"

function AICore() {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -state.clock.elapsedTime * 0.4
      innerRef.current.rotation.y = -state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group>
      {/* Outer distorted sphere */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#4f46e5"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>
      
      {/* Inner glowing core */}
      <Sphere ref={innerRef} args={[0.8, 32, 32]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#06b6d4"
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </group>
  )
}

function EnergyRings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.2
      ring1Ref.current.rotation.z = t * 0.3
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.PI / 3 + Math.cos(t * 0.3) * 0.2
      ring2Ref.current.rotation.z = -t * 0.2
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.4) * 0.15
      ring3Ref.current.rotation.z = t * 0.15
    }
  })

  return (
    <>
      <Ring ref={ring1Ref} args={[2.2, 2.4, 64]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </Ring>
      <Ring ref={ring2Ref} args={[2.6, 2.75, 64]}>
        <meshStandardMaterial
          color="#6366f1"
          emissive="#4f46e5"
          emissiveIntensity={0.8}
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </Ring>
      <Ring ref={ring3Ref} args={[3, 3.1, 64]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#06b6d4"
          emissiveIntensity={0.6}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </Ring>
    </>
  )
}

function FloatingParticles({ count = 100 }: { count?: number }) {
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 3 + Math.random() * 3
      temp.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi),
        ] as [number, number, number],
        scale: Math.random() * 0.05 + 0.02,
        speed: Math.random() * 0.5 + 0.5,
      })
    }
    return temp
  }, [count])

  return (
    <group>
      {particles.map((particle, i) => (
        <Float key={i} speed={particle.speed} floatIntensity={0.5}>
          <mesh position={particle.position}>
            <sphereGeometry args={[particle.scale, 8, 8]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#6366f1" : "#22d3ee"}
              emissive={i % 2 === 0 ? "#4f46e5" : "#06b6d4"}
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function OrbitingObject() {
  const ref = useRef<THREE.Group>(null)
  const trailRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * 0.5
      ref.current.position.x = Math.cos(t) * 3.5
      ref.current.position.z = Math.sin(t) * 3.5
      ref.current.position.y = Math.sin(t * 2) * 0.5
    }
  })

  return (
    <group ref={ref}>
      <Trail
        width={0.3}
        length={8}
        color="#8b5cf6"
        attenuation={(t) => t * t}
      >
        <mesh ref={trailRef}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={3}
          />
        </mesh>
      </Trail>
    </group>
  )
}

function MouseInteraction() {
  const { camera } = useThree()
  const targetRotation = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    const { pointer } = state
    targetRotation.current.x = pointer.y * 0.3
    targetRotation.current.y = pointer.x * 0.3
    
    camera.position.x += (targetRotation.current.y * 2 - camera.position.x) * 0.05
    camera.position.y += (targetRotation.current.x * 2 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })

  return null
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#050816"]} />
        
        {/* Ambient and point lights */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#8b5cf6" />
        
        {/* Stars background */}
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />
        
        {/* Main 3D elements */}
        <AICore />
        <EnergyRings />
        <FloatingParticles count={80} />
        <OrbitingObject />
        
        {/* Mouse interaction */}
        <MouseInteraction />
      </Canvas>
    </div>
  )
}
