'use client';

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { XR, XRButton, createXRStore } from '@react-three/xr';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model: React.FC<{ modelUrl: string }> = ({ modelUrl }) => {
  const gltf = useGLTF(modelUrl); // Carga el modelo GLTF/GLB
  return <primitive object={gltf.scene} scale={1} />;
};

const ARExperience: React.FC<{ modelUrl: string }> = ({ modelUrl }) => {
  const xrStore = useRef(createXRStore()); // Crear el estado XR

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      {/* Botón Personalizado para iniciar AR */}
      <XRButton
        store={xrStore.current}
        mode="immersive-ar"
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 10,
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Iniciar AR
      </XRButton>

      {/* Canvas para la experiencia XR */}
      <Canvas>
        <XR store={xrStore.current}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <Model modelUrl={modelUrl} />
          <OrbitControls />
        </XR>
      </Canvas>
    </div>
  );
};

export default ARExperience;
