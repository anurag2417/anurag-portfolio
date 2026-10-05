"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function StarField() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const data = new Float32Array(220 * 3);

    for (let i = 0; i < 220; i++) {
      const radius = 3.2 + Math.random() * 4.5;
      const angle = Math.random() * Math.PI * 2;

      data[i * 3] = Math.cos(angle) * radius;
      data[i * 3 + 1] = (Math.random() - 0.5) * 8;
      data[i * 3 + 2] = Math.sin(angle) * radius - 1.5;
    }

    return data;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.004;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#BEB7AC"
        size={0.012}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Orbit({
  radius,
  color,
  tube = 0.009,
  rotation,
  opacity = 1,
}: {
  radius: number;
  color: string;
  tube?: number;
  rotation: [number, number, number];
  opacity?: number;
}) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, tube, 6, 160]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}

function Satellite({
  position,
  size,
  color,
}: {
  position: [number, number, number];
  size: number;
  color: string;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.25;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.12}
          metalness={0.8}
          roughness={0.22}
          flatShading
        />
      </mesh>

      <mesh scale={1.25}>
        <octahedronGeometry args={[size, 0]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

function EnergyCrystal() {
  const rootRef = useRef<THREE.Group>(null);
  const crystalRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const cageRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const elapsedRef = useRef(0);

  useFrame((state, delta) => {
    if (
      !rootRef.current ||
      !crystalRef.current ||
      !innerRef.current ||
      !cageRef.current ||
      !orbitRef.current ||
      !lightRef.current
    ) {
      return;
    }

    elapsedRef.current += delta;
    const time = elapsedRef.current;

    rootRef.current.rotation.x = THREE.MathUtils.damp(
      rootRef.current.rotation.x,
      state.pointer.y * 0.1,
      2,
      delta,
    );

    rootRef.current.rotation.y = THREE.MathUtils.damp(
      rootRef.current.rotation.y,
      state.pointer.x * 0.15,
      2,
      delta,
    );

    rootRef.current.position.y = Math.sin(time * 0.65) * 0.055;

    crystalRef.current.rotation.y += delta * 0.1;
    crystalRef.current.rotation.x += delta * 0.045;

    innerRef.current.rotation.y -= delta * 0.16;
    innerRef.current.rotation.z += delta * 0.08;

    cageRef.current.rotation.y -= delta * 0.025;
    cageRef.current.rotation.x += delta * 0.018;

    orbitRef.current.rotation.z += delta * 0.035;

    const pulse = 1 + Math.sin(time * 1.7) * 0.02;

    crystalRef.current.scale.setScalar(pulse);
    lightRef.current.intensity = 5.5 + Math.sin(time * 1.7) * 1.5;
  });

  return (
    <group ref={rootRef}>
      <group ref={crystalRef}>
        <mesh>
          <icosahedronGeometry args={[0.94, 1]} />
          <meshPhysicalMaterial
            color="#632719"
            emissive="#C93613"
            emissiveIntensity={0.75}
            metalness={0.48}
            roughness={0.24}
            clearcoat={1}
            clearcoatRoughness={0.1}
            flatShading
          />
        </mesh>

        <mesh scale={1.008}>
          <icosahedronGeometry args={[0.94, 1]} />
          <meshBasicMaterial
            color="#FF7138"
            wireframe
            transparent
            opacity={0.22}
            depthWrite={false}
          />
        </mesh>

        <group ref={innerRef} scale={0.67}>
          <mesh>
            <icosahedronGeometry args={[0.94, 1]} />
            <meshPhysicalMaterial
              color="#FF5722"
              emissive="#FF350D"
              emissiveIntensity={0.55}
              metalness={0.3}
              roughness={0.2}
              clearcoat={1}
              clearcoatRoughness={0.08}
              flatShading
            />
          </mesh>

          <mesh scale={1.012}>
            <icosahedronGeometry args={[0.94, 1]} />
            <meshBasicMaterial
              color="#FFD3AD"
              wireframe
              transparent
              opacity={0.15}
              depthWrite={false}
            />
          </mesh>
        </group>
      </group>

      <group ref={cageRef}>
        <mesh rotation={[0.35, 0.2, 0.15]}>
          <icosahedronGeometry args={[1.28, 1]} />
          <meshBasicMaterial
            color="#D3C9BA"
            wireframe
            transparent
            opacity={0.1}
            depthWrite={false}
          />
        </mesh>

        <mesh rotation={[0.5, 0.2, 0.1]}>
          <boxGeometry args={[2.7, 2.7, 2.7]} />
          <meshBasicMaterial
            color="#8C877D"
            wireframe
            transparent
            opacity={0.045}
            depthWrite={false}
          />
        </mesh>
      </group>

      <group ref={orbitRef}>
        <Orbit
          radius={1.55}
          color="#FF5722"
          tube={0.012}
          rotation={[0.3, 0.2, 0.15]}
        />

        <Orbit
          radius={1.92}
          color="#D8D0C4"
          tube={0.008}
          rotation={[1.05, 0.35, 0.55]}
          opacity={0.55}
        />

        <Orbit
          radius={2.12}
          color="#FF6A24"
          tube={0.009}
          rotation={[1.2, 0.1, -0.55]}
          opacity={0.8}
        />

        <Satellite
          position={[0, 1.55, 0]}
          size={0.09}
          color="#FF6A24"
        />

        <Satellite
          position={[1.48, 0.55, 0.2]}
          size={0.1}
          color="#D8D2C8"
        />

        <Satellite
          position={[-1.45, -0.55, 0.1]}
          size={0.085}
          color="#FF6A24"
        />

        <Satellite
          position={[0.35, -1.65, 0.15]}
          size={0.09}
          color="#D8D2C8"
        />
      </group>

      <pointLight
        ref={lightRef}
        color="#FF5722"
        intensity={5.5}
        distance={5}
        decay={2}
      />

      <pointLight
        position={[2, 1.5, 2.5]}
        color="#F5E6D0"
        intensity={3.5}
        distance={5}
      />

      <pointLight
        position={[-2, -1.5, 1]}
        color="#FF5722"
        intensity={2}
        distance={4}
      />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.25]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
      }}
      performance={{ min: 0.6 }}
    >
      <ambientLight intensity={0.65} />

      <StarField />
      <EnergyCrystal />
    </Canvas>
  );
}