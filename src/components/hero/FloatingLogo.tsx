import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export const FloatingLogo: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const shadowRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  // HD clean cutout logo with 100% transparent background
  const texture = useTexture('/assets/decodep-logo-hd-transparent.png')
  texture.generateMipmaps = true
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.magFilter = THREE.LinearFilter

  // Smooth mouse coordinates
  const smoothMouse = useRef(new THREE.Vector2(0, 0))
  const { mouse } = useThree()

  useFrame((state, delta) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()

    // Smooth cursor interpolation
    smoothMouse.current.x = THREE.MathUtils.lerp(smoothMouse.current.x, mouse.x, delta * 3.5)
    smoothMouse.current.y = THREE.MathUtils.lerp(smoothMouse.current.y, mouse.y, delta * 3.5)

    const mx = smoothMouse.current.x
    const my = smoothMouse.current.y

    // === ROTATION: 3D tilt following cursor ===
    const targetRotY = mx * 0.45 // Horizontal tilt ~26 deg
    const targetRotX = -my * 0.35 // Vertical tilt ~20 deg

    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, delta * 4)
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, delta * 4)

    // === POSITION: Parallax drift + gentle organic floating ===
    const floatY = 0.5 + Math.sin(time * 1.5) * 0.12
    const targetPosX = mx * 0.6
    const targetPosY = floatY + my * 0.35

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPosX, delta * 3)
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPosY, delta * 3)

    // === LIGHT: Shimmer point light tracking cursor across the chrome logo ===
    if (lightRef.current) {
      lightRef.current.position.x = targetPosX * 1.5
      lightRef.current.position.y = targetPosY * 1.5
      lightRef.current.position.z = 2.5
    }

    // === SHADOW: Subtle depth shadow beneath logo ===
    if (shadowRef.current) {
      shadowRef.current.position.x = meshRef.current.position.x * 0.7
      shadowRef.current.position.y = meshRef.current.position.y * 0.7 - 0.05
      shadowRef.current.rotation.x = meshRef.current.rotation.x * 0.5
      shadowRef.current.rotation.y = meshRef.current.rotation.y * 0.5
      const shadowScale = 1 + (meshRef.current.position.y - 0.5) * 0.15
      shadowRef.current.scale.set(shadowScale, shadowScale, 1)
    }
  })

  return (
    <group>
      {/* Dynamic Cursor Light that highlights the chrome metallic finish */}
      <pointLight ref={lightRef} intensity={2.5} distance={10} color="#60A5FA" />

      {/* Soft dark contact shadow behind the logo */}
      <mesh ref={shadowRef} position={[0, 0.45, -0.05]}>
        <planeGeometry args={[3.2, 3.2]} />
        <meshBasicMaterial
          map={texture}
          transparent={true}
          opacity={0.15}
          color="#0f172a"
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Isolated 3D Logo without any box or square */}
      <mesh ref={meshRef} position={[0, 0.5, 0]}>
        <planeGeometry args={[3.2, 3.2]} />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          alphaTest={0.02}
          roughness={0.25}
          metalness={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}



