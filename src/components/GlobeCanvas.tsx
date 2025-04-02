import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { TextureLoader } from "three";

import CanvasLoader from "./Loader";

const Globe = ({ isMobile }) => {
  const earthTexture = useLoader(TextureLoader, "/earth_texture.png");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={1} />
      <mesh
        castShadow
        receiveShadow
        scale={isMobile ? 1 : 1.2}
        position={[0, 0, 0]}
      >
        {/* Create a sphere geometry for the globe */}
        <sphereGeometry args={[2, 32, 32]} />
        {/* Apply the Earth texture */}
        <meshStandardMaterial map={earthTexture} />
      </mesh>
    </mesh>
  );
};

const GlobeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listener for screen size changes
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      // Adjust the camera position to focus on the globe
      camera={{ position: [5, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} />
        <Globe isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default GlobeCanvas;
