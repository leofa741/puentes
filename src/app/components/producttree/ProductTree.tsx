'use client';
import React, { useState } from 'react';

interface ProductImageProps {
  imageUrl: string;
  title: string;
  price: number;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, title, price }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        width: '300px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {/* Contenedor con sombra dinámica */}
      <div
        style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            boxShadow: hovered
                ? '0 10px 20px rgba(0, 0, 0, 0.5)'
                : '0 5px 10px rgba(0, 0, 0, 0.3)',
            transition: 'box-shadow 0.8s ease-in-out',
            borderRadius: 'inherit',
            
        
        }}
      >
        {/* Imagen con efecto de luminosidad */}
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 'inherit',
            transition: 'transform 0.8s ease-in-out, filter 0.8s ease-in-out',
            transform: hovered
              ? 'rotateX(10deg) rotateY(-25deg) skew(-5deg, 5deg) scale(1.1)'
              : 'rotateX(0) rotateY(0) skew(0, 0) scale(1)',
            filter: hovered ? 'brightness(1.3)' : 'brightness(1)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />

        {/* Efecto de luz dinámica */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: hovered
              ? 'radial-gradient(circle, rgba(255,255,255,0.2) 16%, transparent 90%)'
              : 'transparent',
            transition: 'background 0.8s ease-in-out',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Texto */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          padding: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          textAlign: 'center',
          transition: 'transform 0.8s ease-in-out',
          transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductImage;
