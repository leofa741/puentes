'use client';

import React, { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-marker-camera': any;
      'a-gltf-model': any;
    }
  }
}

interface ARViewerProps {
  modelUrl: string;
  scale?: [number, number, number];
  position?: [number, number, number];
}

const ARViewer: React.FC<ARViewerProps> = ({ modelUrl, scale = [1, 1, 1], position = [0, 0, 0] }) => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isARJsLoaded, setIsARJsLoaded] = useState(false);

  // Cargar AR.js dinámicamente
  useEffect(() => {
    const loadARJs = async () => {
      if (!isARJsLoaded) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/jeromeetienne/ar.js@3.3.2/aframe/build/aframe-ar.min.js';
        script.async = true;
        script.onload = () => setIsARJsLoaded(true);
        document.body.appendChild(script);
      }
    };

    loadARJs();

    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        setIsARSupported(supported);
      });
    }
  }, [isARJsLoaded]);

  if (!isARSupported) {
    return (
      <p className="text-center text-red-600">
        Tu dispositivo no soporta AR. Intenta desde un dispositivo compatible.
      </p>
    );
  }

  if (!isARJsLoaded) {
    return <p className="text-center text-gray-500">Cargando AR.js...</p>;
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

export default ARViewer;
