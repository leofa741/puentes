'use client';

import React, { useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

interface Product3DCardProps {
  modelUrl: string;
  defaultColor: string;
  colors: { name: string; hex: string }[];
  title: string;
  price: number;
  description: string;
  sizes: string[];
  scala : number[];
  position : number[];
  stile : any;

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
    stile
}) => {
    console.log(scala);
  const [shirtColor, setShirtColor] = useState(new THREE.Color(defaultColor));
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleColorChange = (color: string) => {
    setShirtColor(new THREE.Color(color));
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const MannequinWithShirt: React.FC<{ modelUrl: string; color: THREE.Color }> = ({ modelUrl, color }) => {
    const gltf = useLoader(GLTFLoader, modelUrl) as any;

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
      <primitive object={gltf.scene} scale={[scala[0], scala[1], scala[2]]}
       position={[position[0], position[1], position[2]]}
       />
    );
  };

  return (
    <div className="product-card flex flex-col items-center w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 sm:w-[95%] md:w-[90%]">
  <div className="product-view w-full h-72 sm:h-80 md:h-96 bg-gray-100 flex items-center justify-center">
    <Canvas camera={{ position: [0, 2, 45], fov: 40 }}>
      <ambientLight intensity={1.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <MannequinWithShirt modelUrl={modelUrl} color={shirtColor} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  </div>
  <div className="product-info text-center p-4 sm:p-6">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600 mt-2">{description}</p>
    <p className="text-lg font-bold text-gray-800 mt-4">
      Precio: <span className="text-green-600">${price.toFixed(2)}</span>
    </p>
    <div className="mt-4">
      <strong className="block text-gray-700 mb-1">Tallas:</strong>
      <select
        value={selectedSize}
        onChange={handleSizeChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 w-full max-w-xs"
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
    <div className="mt-6">
      <strong className="block text-gray-700 mb-1">Colores:</strong>
      <div className="flex justify-center gap-2 flex-wrap mt-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => handleColorChange(color.hex)}
            className={`w-8 h-8 rounded-full border-2 ${
              color.hex === shirtColor.getStyle()
                ? 'border-black'
                : 'border-transparent'
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Product3DCard;
