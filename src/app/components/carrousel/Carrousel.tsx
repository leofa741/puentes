'use client';
import React from 'react';
import './carrousel.css';
import './scrol.css';
import { Carousel, Typography, Button } from '@material-tailwind/react';

export const Carrousel = () => {
  return (
    <>
      <Carousel
        autoplay={true}
        loop={true}
        autoplayDelay={5000}
        className="carrousel-container"
        placeholder="Carousel Placeholder"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
       
      
      >
        <div className="relative w-full h-min-144">
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: '0',
              left: '0',
              zIndex: '-1',
            }}
          >
            <source src="/assets/videos/Digital.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mt-32 text-lg xs:text-xl sm:text-xl md:text-4xl lg:text-5xl"
              >
                PUENTES DIGITALES
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="text-sm xs:text-xl sm:text-xl md:text-2xl lg:text-3xl opacity-80"
              >
                IMPULSO DIGITAL PARA TU NEGOCIO
              </Typography>
            </div>
          </div>
        </div>

        {/* Resto de las diapositivas */}
        <div className="relative w-full h-min-144">
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: '0',
              left: '0',
              zIndex: '-1',
            }}
          >
            <source src="/assets/videos/Plexus.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mt-32 text-lg xs:text-xl sm:text-xl md:text-4xl lg:text-5xl"
              >
                PUENTES DIGITALES
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="text-sm xs:text-xl sm:text-xl md:text-2xl lg:text-3xl opacity-80"
              >
                IMPULSO DIGITAL PARA TU NEGOCIO
              </Typography>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: '0',
              left: '0',
              zIndex: '-1',
            }}
          >
            <source src="/assets/videos/puentes.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-2 text-lg xs:text-xl sm:text-xl md:text-4xl lg:text-5xl"
              >
                ÚNETE A PUENTES DIGITALES
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 text-sm xs:text-xl sm:text-xl md:text-2xl lg:text-3xl opacity-80"
              >
                AYUDAMOS A LAS EMPRESAS A INNOVAR
              </Typography>
            </div>
          </div>
        </div>

        {/* Imagen fija */}
        <div className="relative h-full w-full">
          <img
            src="/assets/img/carrousel3.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-2 text-lg xs:text-xl sm:text-xl md:text-4xl lg:text-5xl"
              >
                INNOVACIÓN Y TECNOLOGÍA AL ALCANCE DE TU MANO
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 text-sm xs:text-xl sm:text-xl md:text-2xl lg:text-3xl opacity-80"
              >
                AYUDAMOS A LAS EMPRESAS A INNOVAR
              </Typography>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src="/assets/img/sitio-web-2.webp"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-2 text-lg xs:text-xl sm:text-xl md:text-4xl lg:text-5xl"
              >
                UNLEASHING INNOVATION
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 text-sm xs:text-xl sm:text-xl md:text-2xl lg:text-3xl opacity-80"
              >
                Brindamos soluciones a emprendedores, pymes y empresas de cualquier tamaño.
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </>
  );
};
