'use client'

/**
 * Interactive 3D take on the EDUING logo: a purple mortarboard with a gold
 * tassel resting on a white "e" swoosh, floating among glossy shapes.
 * Built from three.js primitives (no model files) so it stays tiny.
 */
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

const PURPLE = '#4B2FC9'
const PURPLE_DARK = '#2A1A80'
const GOLD = '#F5B829'
const WHITE = '#F7F6FF'

function eCurve() {
  // Horizontal bar, then a ~300° counter-clockwise sweep — the "e" in the logo.
  const pts: THREE.Vector3[] = []
  const R = 1.05
  for (let i = 0; i <= 10; i++) pts.push(new THREE.Vector3(-R + (2 * R * i) / 10, 0, 0))
  const start = 0, end = -Math.PI * 1.72
  for (let i = 1; i <= 60; i++) {
    const a = start + ((end - start) * i) / 60 * -1 // counter-clockwise
    const r = R * (1 - 0.06 * (i / 60))
    pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0.12 * Math.sin((i / 60) * Math.PI)))
  }
  return new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.3)
}

function Cap() {
  const tassel = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.07, 0),
    new THREE.Vector3(0.7, 0.06, 0.7),
    new THREE.Vector3(1.28, 0.02, 1.28),
    new THREE.Vector3(1.34, -0.35, 1.34),
    new THREE.Vector3(1.34, -0.7, 1.34),
  ]), [])
  const swing = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (swing.current) swing.current.rotation.z = Math.sin(clock.elapsedTime * 1.6) * 0.06
  })
  return (
    <group>
      {/* board */}
      <mesh rotation={[0, Math.PI / 4, 0]} castShadow>
        <boxGeometry args={[2.5, 0.09, 2.5]} />
        <meshPhysicalMaterial color={PURPLE} roughness={0.35} clearcoat={0.8} clearcoatRoughness={0.25} />
      </mesh>
      {/* skull cap */}
      <mesh position={[0, -0.38, 0]}>
        <cylinderGeometry args={[0.92, 1.0, 0.68, 64, 1, true]} />
        <meshPhysicalMaterial color={PURPLE_DARK} roughness={0.5} side={THREE.DoubleSide} clearcoat={0.4} />
      </mesh>
      {/* button */}
      <mesh position={[0, 0.07, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.06, 32]} />
        <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.25} />
      </mesh>
      {/* tassel cord + bundle */}
      <group ref={swing}>
        <mesh>
          <tubeGeometry args={[tassel, 40, 0.025, 8, false]} />
          <meshStandardMaterial color={GOLD} metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[1.34, -0.72, 1.34]}>
          <sphereGeometry args={[0.08, 24, 24]} />
          <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.25} />
        </mesh>
        <mesh position={[1.34, -0.98, 1.34]}>
          <coneGeometry args={[0.13, 0.42, 24, 1, true]} />
          <meshStandardMaterial color={GOLD} metalness={0.4} roughness={0.35} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  )
}

function Logo3D() {
  const group = useRef<THREE.Group>(null)
  const curve = useMemo(eCurve, [])
  useFrame(({ clock, pointer }) => {
    const g = group.current
    if (!g) return
    const t = clock.elapsedTime
    g.position.y = Math.sin(t * 0.9) * 0.12
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, -0.35 + pointer.x * 0.55 + Math.sin(t * 0.4) * 0.12, 0.05)
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, 0.1 - pointer.y * 0.3, 0.05)
  })
  return (
    <group ref={group}>
      <mesh position={[0, -0.55, 0]} rotation={[0, 0, 0.12]}>
        <tubeGeometry args={[curve, 220, 0.2, 32, false]} />
        <meshPhysicalMaterial color={WHITE} roughness={0.18} clearcoat={1} clearcoatRoughness={0.1} sheen={0.4} sheenColor={'#C9C2FF'} />
      </mesh>
      <group position={[0.1, 1.05, -0.1]} rotation={[0.18, 0.2, -0.08]} scale={0.82}>
        <Cap />
      </group>
    </group>
  )
}

function Floaters() {
  const items = useMemo(() => ([
    { pos: [-2.2, 1.5, -1], color: GOLD, kind: 'torus', s: 0.32, sp: 0.8 },
    { pos: [2.1, 1.7, -0.6], color: '#745CF5', kind: 'ico', s: 0.3, sp: 1.1 },
    { pos: [1.9, -1.7, 0.4], color: GOLD, kind: 'sphere', s: 0.18, sp: 1.4 },
    { pos: [-1.9, -1.6, 0.5], color: PURPLE, kind: 'sphere', s: 0.26, sp: 0.9 },
    { pos: [-0.4, 2.5, -1.6], color: '#C9C2FF', kind: 'ico', s: 0.2, sp: 1.2 },
    { pos: [2.6, 0.1, -1.8], color: '#C9C2FF', kind: 'torus', s: 0.22, sp: 1 },
  ] as const), [])
  const refs = useRef<(THREE.Mesh | null)[]>([])
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    refs.current.forEach((m, i) => {
      if (!m) return
      const it = items[i]
      m.position.y = it.pos[1] + Math.sin(t * it.sp + i) * 0.22
      m.rotation.x = t * 0.3 * it.sp
      m.rotation.y = t * 0.4 * it.sp
    })
  })
  return (
    <>
      {items.map((it, i) => (
        <mesh key={i} ref={(m) => { refs.current[i] = m }} position={it.pos as unknown as [number, number, number]}>
          {it.kind === 'torus' && <torusGeometry args={[it.s, it.s * 0.38, 24, 64]} />}
          {it.kind === 'ico' && <icosahedronGeometry args={[it.s, 0]} />}
          {it.kind === 'sphere' && <sphereGeometry args={[it.s, 32, 32]} />}
          <meshPhysicalMaterial color={it.color} roughness={0.25} metalness={it.color === GOLD ? 0.5 : 0.1} clearcoat={1} flatShading={it.kind === 'ico'} />
        </mesh>
      ))}
    </>
  )
}

export default function Hero3D() {
  const wrap = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={wrap} className="absolute -inset-[10%]">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={visible ? 'always' : 'never'}
        camera={{ position: [0, 0.4, 8.4], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        aria-hidden
      >
        <hemisphereLight args={['#ffffff', '#6B54E8', 0.9]} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} />
        <directionalLight position={[-5, 2, -3]} intensity={0.8} color="#B9A9FF" />
        <pointLight position={[0, -3, 3]} intensity={12} color={GOLD} distance={9} />
        <Logo3D />
        <Floaters />
      </Canvas>
    </div>
  )
}
