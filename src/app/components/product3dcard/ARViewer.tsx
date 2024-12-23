'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-marker-camera': any;
      'a-gltf-model': any;
    }
  }
}

// Define las props del componente
interface ARViewerProps {
  modelUrl: string;
  scale?: [number, number, number];
  position?: [number, number, number];
}

// Componente que se cargará dinámicamente
const ARViewer: React.FC<ARViewerProps> = ({
  modelUrl,
  scale = [1, 1, 1],
  position = [0, 0, 0],
}) => {
  const [isARSupported, setIsARSupported] = useState(false);

  useEffect(() => {
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        setIsARSupported(supported);
      });
    }
  }, []);

  if (!isARSupported) {
    return (
      <p className="text-center text-red-600">
        Tu dispositivo no soporta AR. Intenta desde un dispositivo compatible.
      </p>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <a-scene embedded arjs="sourceType: webcam;" style={{ width: '100%', height: '100%' }}>
        {/* Cargar tu modelo GLTF/GLB */}
        <a-marker-camera preset="hiro"></a-marker-camera>
        <a-gltf-model
          src={modelUrl}
          position={`${position[0]} ${position[1]} ${position[2]}`}
          scale={`${scale[0]} ${scale[1]} ${scale[2]}`}
        ></a-gltf-model>
      </a-scene>
    </div>
  );
};

const ARViewerDynamic = dynamic(() => Promise.resolve(ARViewer), { ssr: false });

export default ARViewerDynamic;
