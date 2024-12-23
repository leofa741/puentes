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
}

const ARViewer: React.FC<ARViewerProps> = ({ modelUrl }) => {
  const [isARJsLoaded, setIsARJsLoaded] = useState(false);
  const [isARSupported, setIsARSupported] = useState(false);

  useEffect(() => {
    const loadScripts = async () => {
      if (!document.querySelector('script[src="https://aframe.io/releases/1.2.0/aframe.min.js"]')) {
        const aframeScript = document.createElement('script');
        aframeScript.src = 'https://aframe.io/releases/1.2.0/aframe.min.js';
        aframeScript.async = true;
        aframeScript.onload = () => {
          const arScript = document.createElement('script');
          arScript.src = 'https://rawcdn.githack.com/jeromeetienne/ar.js/1.7.2/aframe/build/aframe-ar.min.js';
          arScript.async = true;
          arScript.onload = () => setIsARJsLoaded(true);
          document.body.appendChild(arScript);
        };
        document.body.appendChild(aframeScript);
      }
    };

    loadScripts();

    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        setIsARSupported(supported);
      });
    }
  }, []);

  if (!isARJsLoaded) {
    return <p className="text-center text-gray-500">Cargando AR.js...</p>;
  }

  if (!isARSupported) {
    return (
      <p className="text-center text-red-600">
        Tu dispositivo no soporta AR. Intenta desde un dispositivo compatible.
      </p>
    );
  }

  return (
    <div
      style={{
        width: '100vw', // Ocupa todo el ancho visible
        height: '100vh', // Ocupa todo el alto visible
        display: 'flex',
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center', // Centra verticalmente
        overflow: 'hidden', // Evita desbordes
        position: 'relative',
        backgroundColor: 'black', // Contraste visual
      }}
    >
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <a-marker-camera preset="hiro"></a-marker-camera>
        <a-gltf-model
          src={modelUrl}
          position="0 0 0"
          scale="0.1 0.1 0.1"
        ></a-gltf-model>
      </a-scene>
    </div>
  );
};

export default ARViewer;
