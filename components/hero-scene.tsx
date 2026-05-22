"use client"

import {
  useRef,
  useMemo,
  useEffect,
  useState,
} from "react"

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber"

import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Ring,
  Stars,
  Trail,
} from "@react-three/drei"

import * as THREE from "three"

function AICore() {
  const meshRef = useRef<THREE.Mesh>(null)

  const innerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        state.clock.elapsedTime * 0.2

      meshRef.current.rotation.y =
        state.clock.elapsedTime * 0.3
    }

    if (innerRef.current) {
      innerRef.current.rotation.x =
        -state.clock.elapsedTime * 0.4

      innerRef.current.rotation.y =
        -state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group>
      {/* Outer distorted sphere */}
      <Float
        speed={1.2}
        rotationIntensity={0.4}
        floatIntensity={0.8}
      >
        <Sphere
          ref={meshRef}
          args={[1.5, 48, 48]}
        >
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.35}
            speed={1.8}
            roughness={0.2}
            metalness={0.8}
            emissive="#4f46e5"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>

      {/* Inner glowing core */}
      <Sphere
        ref={innerRef}
        args={[0.8, 24, 24]}
      >
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#06b6d4"
          emissiveIntensity={1.5}
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
      ring1Ref.current.rotation.x =
        Math.PI / 2 +
        Math.sin(t * 0.5) * 0.2

      ring1Ref.current.rotation.z =
        t * 0.3
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x =
        Math.PI / 3 +
        Math.cos(t * 0.3) * 0.2

      ring2Ref.current.rotation.z =
        -t * 0.2
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x =
        Math.PI / 4 +
        Math.sin(t * 0.4) * 0.15

      ring3Ref.current.rotation.z =
        t * 0.15
    }
  })

  return (
    <>
      <Ring
        ref={ring1Ref}
        args={[2.2, 2.35, 48]}
      >
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </Ring>

      <Ring
        ref={ring2Ref}
        args={[2.6, 2.72, 48]}
      >
        <meshStandardMaterial
          color="#6366f1"
          emissive="#4f46e5"
          emissiveIntensity={0.6}
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </Ring>

      <Ring
        ref={ring3Ref}
        args={[3, 3.08, 48]}
      >
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </Ring>
    </>
  )
}

function FloatingParticles({
  count = 50,
}: {
  count?: number
}) {
  const particles = useMemo(() => {
    const temp = []

    for (let i = 0; i < count; i++) {
      const theta =
        Math.random() * Math.PI * 2

      const phi = Math.acos(
        2 * Math.random() - 1
      )

      const radius =
        3 + Math.random() * 3

      temp.push({
        position: [
          radius *
            Math.sin(phi) *
            Math.cos(theta),

          radius *
            Math.sin(phi) *
            Math.sin(theta),

          radius * Math.cos(phi),
        ] as [number, number, number],

        scale:
          Math.random() * 0.04 + 0.02,

        speed:
          Math.random() * 0.4 + 0.4,
      })
    }

    return temp
  }, [count])

  return (
    <group>
      {particles.map((particle, i) => (
        <Float
          key={i}
          speed={particle.speed}
          floatIntensity={0.4}
        >
          <mesh position={particle.position}>
            <sphereGeometry
              args={[particle.scale, 6, 6]}
            />

            <meshStandardMaterial
              color={
                i % 2 === 0
                  ? "#6366f1"
                  : "#22d3ee"
              }
              emissive={
                i % 2 === 0
                  ? "#4f46e5"
                  : "#06b6d4"
              }
              emissiveIntensity={1.5}
              transparent
              opacity={0.7}
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
      const t =
        state.clock.elapsedTime * 0.5

      ref.current.position.x =
        Math.cos(t) * 3.5

      ref.current.position.z =
        Math.sin(t) * 3.5

      ref.current.position.y =
        Math.sin(t * 2) * 0.5
    }
  })

  return (
    <group ref={ref}>
      <Trail
        width={0.2}
        length={5}
        color="#8b5cf6"
        attenuation={(t) => t * t}
      >
        <mesh ref={trailRef}>
          <sphereGeometry
            args={[0.1, 12, 12]}
          />

          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={2}
          />
        </mesh>
      </Trail>
    </group>
  )
}

function MouseInteraction() {
  const { camera } = useThree()

  const targetRotation = useRef({
    x: 0,
    y: 0,
  })

  useFrame((state) => {
    const { pointer } = state

    targetRotation.current.x =
      pointer.y * 0.2

    targetRotation.current.y =
      pointer.x * 0.2

    camera.position.x +=
      (targetRotation.current.y * 1.5 -
        camera.position.x) *
      0.03

    camera.position.y +=
      (targetRotation.current.x * 1.5 -
        camera.position.y) *
      0.03

    camera.lookAt(0, 0, 0)
  })

  return null
}

export function HeroScene() {
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

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      )
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: isMobile ? 55 : 45,
        }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
        dpr={isMobile ? 1 : [1, 2]}
        performance={{ min: 0.5 }}
      >
        <color
          attach="background"
          args={["#050816"]}
        />

        {/* Lights */}
        <ambientLight intensity={0.2} />

        <pointLight
          position={[10, 10, 10]}
          intensity={0.8}
          color="#6366f1"
        />

        <pointLight
          position={[-10, -10, -10]}
          intensity={0.4}
          color="#22d3ee"
        />

        <pointLight
          position={[0, 0, 5]}
          intensity={0.6}
          color="#8b5cf6"
        />

        {/* Stars */}
        <Stars
          radius={80}
          depth={40}
          count={isMobile ? 1200 : 2200}
          factor={3}
          saturation={0}
          fade
          speed={0.3}
        />

        {/* Main Elements */}
        <AICore />

        <EnergyRings />

        <FloatingParticles
          count={isMobile ? 35 : 60}
        />

        {!isMobile && <OrbitingObject />}

        {/* Mouse interaction desktop only */}
        {!isMobile && <MouseInteraction />}
      </Canvas>
    </div>
  )
}