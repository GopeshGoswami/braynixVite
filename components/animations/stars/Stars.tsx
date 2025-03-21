import { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

const StarField = (props: any) => {
  const ref = useRef<THREE.Group>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarField />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default StarsCanvas;
