'use client';

import React, { useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface GLTFResult extends THREE.Object3D {
  scene: THREE.Group;
}

interface MannequinWithShirtProps {
  modelUrl: string;
  color: THREE.Color;
}

const MannequinWithShirt: React.FC<MannequinWithShirtProps> = ({ modelUrl, color }) => {
  const gltf = useLoader(GLTFLoader, modelUrl) as GLTFResult;

  const scale = 0.1;

  const applyColorToMaterial = (child: THREE.Object3D) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      if (!mesh.material) {
        mesh.material = new THREE.MeshStandardMaterial();
      }

      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((material) => {
          if (material instanceof THREE.MeshStandardMaterial) {
            material.color = color;
            material.needsUpdate = true;
          }
        });
      } else if (mesh.material instanceof THREE.MeshStandardMaterial) {
        mesh.material.color = color;
        mesh.material.needsUpdate = true;
      }
    }
  };

  React.useEffect(() => {
    gltf.scene.traverse(applyColorToMaterial);
  }, [gltf, color]);

  return (
    <primitive
      object={gltf.scene}
      scale={[scale, scale, scale]}
      position={[0, -1, 0]}
    />
  );
};

const MannequinScene = () => {
  // Colores predefinidos
  const availableColors: { name: string; color: string }[] = [
    { name: 'Blanco', color: '#ffffff' },
    { name: 'Rojo', color: '#ff0000' },
    { name: 'Verde', color: '#00ff00' },
    { name: 'Azul', color: '#0000ff' },
    { name: 'Negro', color: '#000000' },
  ];

  const [shirtColor, setShirtColor] = useState<THREE.Color>(new THREE.Color(availableColors[0].color));

  const handleColorChange = (color: string) => {
    setShirtColor(new THREE.Color(color));
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
        {availableColors.map((item) => (
          <button
            key={item.name}
            onClick={() => handleColorChange(item.color)}
            style={{
              backgroundColor: item.color,
              width: '40px',
              height: '40px',
              margin: '0 10px',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              outline: shirtColor.getStyle() === item.color ? '2px solid #000' : 'none',
            }}
            title={item.name}
          />
        ))}
      </div>
      <Canvas camera={{ position: [0, 2, 15], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <MannequinWithShirt
          modelUrl="/assets/img/remera_modelo_3d_-_creditos_a_quien_corresponda.glb"
          color={shirtColor}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default MannequinScene;
