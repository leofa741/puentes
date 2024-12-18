'use client';

import React from 'react';
import '@google/model-viewer'; // Importa el visor de Model Viewer

const ModelViewerClient: React.FC<{ modelUrl: string }> = ({ modelUrl }) => {
  return (
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
  );
};

export default ModelViewerClient;
