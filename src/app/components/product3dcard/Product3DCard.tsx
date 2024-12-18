'use client';

import React, { useState, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import dynamic from 'next/dynamic';
import LightSwitch from './LightSwitch';

// Importa model-viewer dinámicamente
const ModelViewer = dynamic(() => import('./ModelViewerClient'), {
  ssr: false,
}) as React.ComponentType<{ modelUrl: string , colors: { name: string; hex: string }[] , defaultColor: string }>;

interface Color {
  name: string;
  hex: string;
}

interface Product3DCardProps {
  modelUrl: string;
  defaultColor: string;
  colors: Color[];
  title: string;
  price: number;
  description: string;
  sizes: string[];
  scala: number[];
  position: number[];
}

const Product3DCard: React.FC<Product3DCardProps> = ({
  modelUrl,
  defaultColor,
  colors,
  title,
  price,
  description,
  sizes,
  scala,
  position,
}) => {
  const [shirtColor, setShirtColor] = useState(new THREE.Color(defaultColor));
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [lightOn, setLightOn] = useState(false);

  const spotLightRef = useRef<THREE.SpotLight | null>(null);

  const handleColorChange = (color: string) => setShirtColor(new THREE.Color(color));
  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedSize(event.target.value);

  const MannequinWithShirt: React.FC<{ modelUrl: string; color: THREE.Color }> = ({ modelUrl, color }) => {
    const gltf = useLoader(GLTFLoader, modelUrl) as GLTF;

    React.useEffect(() => {
      gltf.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material instanceof THREE.MeshStandardMaterial) {
            mesh.material.color = color;
            mesh.material.needsUpdate = true;
          }
        }
      });
    }, [gltf, color]);

    return <primitive object={gltf.scene} scale={scala} position={position} castShadow receiveShadow />;
  };

  return (
    <div className="product-card relative flex flex-col items-center w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 sm:w-[95%] md:w-[90%]">
      {/* AR - Model Viewer */}
      <div className="mt-4 w-full">
  <h3 className="text-center text-gray-800 font-bold mb-2">Visualiza en Realidad Aumentada</h3>
  <ModelViewer
    modelUrl={modelUrl}
    colors={colors}
    defaultColor={defaultColor}
  />
</div>


      {/* Renderizado 3D con Three.js 
      <div className="product-view relative z-20 w-full h-72 sm:h-80 md:h-96 bg-gray-100 flex items-center justify-center rounded-t-lg">
        <Canvas shadows camera={{ position: [0, 2, 45], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <spotLight
            ref={spotLightRef}
            position={[2, 5, 5]}
            intensity={lightOn ? 75 : 0}
            angle={2.4}
            penumbra={0.9}
            castShadow
            color="#ffff00"
          />
          <MannequinWithShirt modelUrl={modelUrl} color={shirtColor} />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div> */}

   

      {/* Información del producto */}
      <div className="product-info z-30 relative text-center p-4 sm:p-6">
        {/* <LightSwitch lightOn={lightOn} toggleLight={() => setLightOn(!lightOn)} /> */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-lg font-bold text-gray-800 mt-4">
          Precio: <span className="text-green-600">${price.toFixed(2)}</span>
        </p>

        {/* Selector de Tallas */}
        <div className="mt-4">
          <strong className="block text-gray-700 mb-1">Tallas:</strong>
          <select
            value={selectedSize}
            onChange={handleSizeChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Selector de Colores 
        <div className="mt-6">
          <strong className="block text-gray-700 mb-1">Colores:</strong>
          <div className="flex justify-center gap-2 flex-wrap mt-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color.hex)}
                className={`w-8 h-8 rounded-full border-2 ${
                  color.hex === shirtColor.getStyle() ? 'border-black' : 'border-transparent'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Product3DCard;
