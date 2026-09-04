import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

interface RingProps {
  radius: number
  text: string
  speed: number
  tiltX: number
  tiltY: number
}

const SingleRing: React.FC<RingProps> = ({ radius, text, speed, tiltX, tiltY }) => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += speed * delta
    }
  })

  return (
    <group rotation={[tiltX, tiltY, 0]}>
      <group ref={groupRef}>
        {/* Subtle orbit line with soft cyan glow */}
        <mesh>
          <ringGeometry args={[radius - 0.006, radius + 0.006, 64]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>

        {/* Orbit Text with high readability */}
        <Text
          position={[radius, 0, 0]}
          rotation={[0, 0, -Math.PI / 2]} // Align text tangentially to the ring
          fontSize={0.16}
          color="#E2E8F0"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.25}
          material-transparent={true}
          material-opacity={0.9}
        >
          {text}
        </Text>
      </group>
    </group>
  )
}

export const OrbitRings: React.FC = () => {
  return (
    <group>
      <SingleRing radius={2.6} text="TECHNOLOGY" speed={0.08} tiltX={Math.PI / 2.5} tiltY={0.2} />
      <SingleRing radius={3.2} text="INNOVATION" speed={-0.06} tiltX={Math.PI / 2.2} tiltY={-0.1} />
      <SingleRing radius={3.8} text="COMMUNITY" speed={0.05} tiltX={Math.PI / 2.8} tiltY={0.3} />
    </group>
  )
}
