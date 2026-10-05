"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Orbit({
  radius,
  tube,
  color,
  rotation,
  opacity,
}: {
  radius: number;
  tube: number;
  color: string;
  rotation: [number, number, number];
  opacity: number;
}) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, tube, 12, 180]} />
      <meshStandardMaterial
        color={color}
        metalness={0.85}
        roughness={0.3}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

function EnergySatellite({
  position,
  size = 0.075,
}: {
  position: [number, number, number];
  size?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;
    ref.current.scale.setScalar(1 + Math.sin(time * 1.8) * 0.07);
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshBasicMaterial
        color="#FF793D"
        toneMapped={false}
      />
    </mesh>
  );
}

function Core() {
  const rootRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const orbitGroupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state, delta) => {
    if (
      !rootRef.current ||
      !sphereRef.current ||
      !orbitGroupRef.current ||
      !lightRef.current
    ) {
      return;
    }

    const time = state.clock.elapsedTime;

    rootRef.current.rotation.x = THREE.MathUtils.damp(
      rootRef.current.rotation.x,
      state.pointer.y * 0.08,
      2,
      delta,
    );

    rootRef.current.rotation.y = THREE.MathUtils.damp(
      rootRef.current.rotation.y,
      state.pointer.x * 0.1,
      2,
      delta,
    );

    rootRef.current.position.y = Math.sin(time * 0.5) * 0.035;

    sphereRef.current.rotation.y += delta * 0.035;

    orbitGroupRef.current.rotation.y += delta * 0.06;

    lightRef.current.intensity = 1.8 + Math.sin(time * 1.3) * 0.25;
  });

  return (
    <group ref={rootRef}>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.12, 96, 96]} />
        <meshStandardMaterial
          color="#080605"
          metalness={0.28}
          roughness={0.24}
        />
      </mesh>

      <mesh scale={1.004}>
        <sphereGeometry args={[1.12, 96, 96]} />
        <meshBasicMaterial
          color="#110907"
          side={THREE.BackSide}
          transparent
          opacity={0.3}
        />
      </mesh>

      <pointLight
        ref={lightRef}
        position={[0.25, 0.3, 1.5]}
        color="#FF6A32"
        intensity={1.8}
        distance={3.5}
        decay={2}
      />

      <pointLight
        position={[0.1, 0.45, 1.7]}
        color="#E9D8C5"
        intensity={0.65}
        distance={2.8}
        decay={2}
      />

      <group ref={orbitGroupRef}>
        <Orbit
          radius={1.48}
          tube={0.009}
          color="#65564B"
          rotation={[0.9, 0.2, -0.35]}
          opacity={0.58}
        />

        <Orbit
          radius={1.62}
          tube={0.012}
          color="#9A4B31"
          rotation={[0.45, 0.85, 0.65]}
          opacity={0.72}
        />

        <Orbit
          radius={1.78}
          tube={0.008}
          color="#766B60"
          rotation={[1.25, 0.15, 0.2]}
          opacity={0.42}
        />

        <EnergySatellite position={[1.18, 0.98, 0.1]} size={0.075} />
      </group>

      <mesh position={[0.1, 0.34, 1.08]}>
        <sphereGeometry args={[0.025, 20, 20]} />
        <meshBasicMaterial
          color="#F5E7D7"
          toneMapped={false}
        />
      </mesh>

      <mesh position={[-0.3, -0.48, 1.02]}>
        <sphereGeometry args={[0.035, 20, 20]} />
        <meshBasicMaterial
          color="#FF4D1C"
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      }}
    >
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[-3, 3, 4]}
        intensity={0.45}
        color="#E9D8C5"
      />

      <Core />
    </Canvas>
  );
}
