'use client';

import React, { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

interface ModelViewerClientProps {
  modelUrl: string;
  colors: { name: string; hex: string }[];
  defaultColor: string;
}

const ModelViewerClient: React.FC<ModelViewerClientProps> = ({ modelUrl, colors, defaultColor }) => {
  const [supportsAR, setSupportsAR] = useState(false);
  const modelViewerRef = useRef<any>(null); // Usa any para tipado

  useEffect(() => {
    const checkARSupport = async () => {
      const isARSupported = 'xr' in navigator || /Android|iOS/i.test(navigator.userAgent);
      setSupportsAR(isARSupported);
    };
    checkARSupport();
  }, []);

  const handleColorChange = (color: string) => {
    if (modelViewerRef.current) {
      // Modifica el material color usando el atributo `style`
      modelViewerRef.current.style.setProperty('--model-viewer-color', color);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {supportsAR ? (
        <model-viewer
          ref={modelViewerRef}
          src={modelUrl}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          shadow-intensity="1"
          auto-rotate
          alt="Visualización de producto en Realidad Aumentada"
          environment-image="neutral"
          style={{ width: '100%', height: '400px', '--model-viewer-color': defaultColor } as any}
        ></model-viewer>
      ) : (
        <div className="text-center p-4">
          <p>Tu dispositivo no soporta AR.Pero Puedes visualizar el modelo en 3D:</p>
          <model-viewer
            ref={modelViewerRef}
            src={modelUrl}
            camera-controls
            shadow-intensity="1"
            auto-rotate
            alt="Visualización de modelo en 3D"
            style={{ width: '100%', height: '400px', '--model-viewer-color': defaultColor } as React.CSSProperties}
          ></model-viewer>
        </div>
      )}

      {/* Selector de Colores 
      <div className="mt-4 flex justify-center gap-2 flex-wrap">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => handleColorChange(color.hex)}
            className={`w-8 h-8 rounded-full border-2 ${
              defaultColor === color.hex ? 'border-black' : 'border-transparent'
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          ></button>
        ))}
      </div>*/}
    </div>
  );
};

export default ModelViewerClient;

