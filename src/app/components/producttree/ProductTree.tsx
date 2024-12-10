'use client';
import React, { useState } from 'react';

interface ProductImageProps {
  imageUrl: string;
  title: string;
    price: number;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, title , price}) => {
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
      {/* Imagen con efecto */}
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 'inherit',
          transition: 'transform 0.8s ease-in-out',
          transform: hovered
            ? 'rotateX(15deg) rotateY(-15deg) skew(-5deg, 5deg) scale(1.1)'
            : 'rotateX(0) rotateY(0) skew(0, 0) scale(1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

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
