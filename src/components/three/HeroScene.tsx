"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function ProductCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const accentRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current || !coreRef.current || !accentRef.current) {
      return;
    }

    const targetX = state.pointer.y * 0.18;
    const targetY = state.pointer.x * 0.25;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetX,
      3,
      delta,
    );

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetY,
      3,
      delta,
    );

    groupRef.current.rotation.z += delta * 0.08;

    coreRef.current.rotation.x += delta * 0.12;
    coreRef.current.rotation.y += delta * 0.18;

    const time = state.clock.elapsedTime;

    accentRef.current.position.y = Math.sin(time * 1.5) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.45, 4]} />
        <meshStandardMaterial
          color="#171614"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      <mesh scale={0.72}>
        <icosahedronGeometry args={[1.45, 3]} />
        <meshStandardMaterial
          color="#2B2926"
          metalness={0.75}
          roughness={0.3}
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2.4, 0.2, 0.15]}>
        <torusGeometry args={[2.05, 0.018, 16, 160]} />
        <meshStandardMaterial
          color="#EDE8DF"
          metalness={0.8}
          roughness={0.25}
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh rotation={[0.4, Math.PI / 3, 0.8]}>
        <torusGeometry args={[2.35, 0.012, 16, 160]} />
        <meshStandardMaterial
          color="#8C877D"
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh rotation={[1.1, 0.4, Math.PI / 4]}>
        <torusGeometry args={[1.8, 0.01, 16, 160]} />
        <meshStandardMaterial
          color="#EDE8DF"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.35}
        />
      </mesh>

      <mesh ref={accentRef} position={[1.72, 0, 0]}>
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial
          color="#FF4D1C"
          emissive="#FF4D1C"
          emissiveIntensity={5}
        />
      </mesh>

      <pointLight
        position={[2, 2, 3]}
        intensity={8}
        distance={8}
        color="#EDE8DF"
      />

      <pointLight
        position={[-3, -1, 2]}
        intensity={4}
        distance={7}
        color="#FF4D1C"
      />
    </group>
  );
}

export default function HeroScene() {
  return (

    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      dpr={1}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      performance={{ min: 0.5 }}
    >

      <ambientLight intensity={0.45} />

      <ProductCore />

      <EffectComposer>
        <Bloom
          intensity={0.7}
          luminanceThreshold={1}
          luminanceSmoothing={0.7}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}