import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function AnimatedBackground() {
  return (
    <div className="bg-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Stars Animation */}
        <Stars radius={80} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
