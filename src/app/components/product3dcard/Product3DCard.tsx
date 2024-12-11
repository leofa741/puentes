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
       position={[0, -11.5, 0]} />
    );
  };

  return (
    <div className="product-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div className="product-view" style={stile}>
        <Canvas camera={{ position: [0, 2, 45], fov: 40 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <MannequinWithShirt modelUrl={modelUrl} color={shirtColor} />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
      <div className="product-info" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <strong>Precio:</strong> ${price.toFixed(2)}
        </p>
        <div>
          <strong>Tallas:</strong>
          <select value={selectedSize} onChange={handleSizeChange} style={{ marginLeft: '10px' }}>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div>
          <strong>Colores:</strong>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color.hex)}
                style={{
                  backgroundColor: color.hex,
                  width: '30px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '50%',
                  border: color.hex === shirtColor.getStyle() ? '2px solid black' : 'none',
                }}
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
