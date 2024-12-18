"use client";

import React, { useEffect } from 'react';
import './partner.css';

export const PartNer = () => {
  useEffect(() => {
    // Seleccionar el elemento con un type assertion explícito
    const slider = document.querySelector('.slider .slide-track') as HTMLElement;

    if (slider) {
      slider.style.animation = 'none'; // Reinicia la animación
      setTimeout(() => {
        slider.style.animation = ''; // Reactiva la animación
      }, 10);
    }
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src="/assets/img/github.png" alt="Github" />
          </div>
          <div className="slide">
            <img src="/assets/img/gitlab.png" alt="Gitlab" />
          </div>
          <div className="slide">
            <img src="/assets/img/vercel.png" alt="Vercel" />
          </div>
          <div className="slide">
            <img src="/assets/img/slack.png" alt="Slack" />
          </div>
          <div className="slide">
            <img src="/assets/img/google.png" alt="Google" />
          </div>
          <div className="slide">
            <img src="/assets/img/mongo.png" alt="MongoDB" />
          </div>
          <div className="slide">
            <img src="/assets/img/mysql.png" alt="MySQL" />
          </div>
          <div className="slide">
            <img src="/assets/img/post.png" alt="PostgreSQL" />
          </div>
          <div className="slide">
            <img src="/assets/img/vvcode.png" alt="VVCode" />
          </div>
          <div className="slide">
            <img src="/assets/img/angular.png" alt="Angular" />
          </div>
          <div className="slide">
            <img src="/assets/img/react.png" alt="React" />
          </div>
          <div className="slide">
            <img src="/assets/img/nest.png" alt="Nest" />
          </div>
          <div className="slide">
            <img src="/assets/img/next.png" alt="Next.js" />
          </div>
        </div>
      </div>
    </>
  );
};
