import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BannerBlog() {
  const [currentPage, setCurrentPage] = useState(0);
  const products = [
    { title: 'E-commerce', imageUrl: '/assets/img/ShopApp-para-la-gestión-de-pedidos-y-ventas.jpg' },
    { title: 'Landing Page', imageUrl: '/assets/img/landing.png' },
    { title: 'Base de Datos', imageUrl: '/assets/img/basededatos1.png' },
    { title: 'App Móviles', imageUrl: '/assets/img/appmoviles.png' },
    { title: 'Gestion', imageUrl: '/assets/img/App_gestion_eventos_small.jpg' },
    { title: 'Chatbots', imageUrl: '/assets/img/Illustration-Chatbot-landing-4-min-3.png' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, [products.length]);

  return (
    <div>
      <h5 className="text-lg font-bold mb-4">Nuestros Productos</h5>
      <div className="relative overflow-hidden">
        <div
          className="whitespace-nowrap transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="inline-block w-full">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={1920}
                height={2080}
                layout="responsive"
              />
              <div className="carousel-caption">
                <h3 className="text-black text-lg font-bold">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage((prev) => (prev === 0 ? products.length - 1 : prev - 1))}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentPage((prev) => (prev === products.length - 1 ? 0 : prev + 1))}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        >
          ›
        </button>
      </div>
    </div>
  );
}
