import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function BackgroundParticles() {
  return (
    <div className="about-bg">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars
          radius={100}
          depth={60}
          count={4000}
          factor={4}
          saturation={0}
          fade
          speed={2}
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
