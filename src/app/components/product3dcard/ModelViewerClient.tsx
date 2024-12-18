'use client';

import React, { useEffect, useState } from 'react';
import '@google/model-viewer';

const ModelViewerClient: React.FC<{ modelUrl: string }> = ({ modelUrl }) => {
  const [supportsAR, setSupportsAR] = useState(false);

  useEffect(() => {
    const checkARSupport = async () => {
      const isARSupported = 'xr' in navigator || /Android|iOS/i.test(navigator.userAgent);
      setSupportsAR(isARSupported);
    };
    checkARSupport();
  }, []);

  return (
    <div>
      {supportsAR ? (
        <model-viewer
          src={modelUrl}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          shadow-intensity="1"
          auto-rotate
          style={{ width: '100%', height: '400px' }}
          alt="Visualización de producto en Realidad Aumentada"
        ></model-viewer>
      ) : (
        <div className="text-center p-4">
          <p>Tu dispositivo no soporta AR. Puedes visualizar el modelo en 3D:</p>
          <model-viewer
            src={modelUrl}
            camera-controls
            shadow-intensity="1"
            auto-rotate
            style={{ width: '100%', height: '400px' }}
            alt="Visualización de modelo en 3D"
          ></model-viewer>
        </div>
      )}
    </div>
  );
};

export default ModelViewerClient;
