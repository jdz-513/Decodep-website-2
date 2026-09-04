import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Preload } from '@react-three/drei'
import { FloatingLogo } from './FloatingLogo'
import { OrbitRings } from './OrbitRings'

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
        eventSource={document.getElementById('root') || undefined}
        eventPrefix="client"
        onCreated={({ gl }) => {
          // Gracefully handle context loss
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault()
          })
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={1.0} color="#38BDF8" />
          <directionalLight position={[0, 0, 5]} intensity={0.5} color="#FCD34D" />

          <FloatingLogo />

          <Suspense fallback={null}>
            <OrbitRings />
          </Suspense>

          <Environment preset="studio" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

