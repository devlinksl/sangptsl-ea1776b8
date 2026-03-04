import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#1a1a2e"
          roughness={0.15}
          metalness={0.9}
          distort={0.35}
          speed={2}
          envMapIntensity={1}
        />
      </Sphere>
    </Float>
  );
}

function OrbitalRing({ radius, speed, color, thickness }: { radius: number; speed: number; color: string; thickness: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2.5 + Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.15;
      ref.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <Torus ref={ref} args={[radius, thickness, 16, 100]}>
      <meshStandardMaterial color={color} transparent opacity={0.4} roughness={0.3} metalness={0.8} />
    </Torus>
  );
}

function FloatingParticles() {
  const count = 120;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#8b8b8b" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function GlowOrb({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.3;
    }
  });

  return (
    <Sphere ref={ref} args={[scale, 16, 16]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.7} />
    </Sphere>
  );
}

export function HeroScene3D() {
  return (
    <div className="w-full h-full absolute inset-0" style={{ minHeight: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, -5, 5]} intensity={0.3} color="#4a9eff" />
        <pointLight position={[0, 3, 3]} intensity={0.5} color="#7c3aed" />

        <AnimatedSphere />
        <OrbitalRing radius={2.8} speed={0.4} color="#4a9eff" thickness={0.02} />
        <OrbitalRing radius={3.4} speed={-0.3} color="#7c3aed" thickness={0.015} />
        <OrbitalRing radius={4.0} speed={0.2} color="#06b6d4" thickness={0.01} />
        
        <GlowOrb position={[2.5, 1.5, -1]} color="#4a9eff" scale={0.12} />
        <GlowOrb position={[-2, -1, 1]} color="#7c3aed" scale={0.1} />
        <GlowOrb position={[1, -2, 0.5]} color="#06b6d4" scale={0.08} />
        <GlowOrb position={[-1.5, 2, -0.5]} color="#f59e0b" scale={0.09} />

        <FloatingParticles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
