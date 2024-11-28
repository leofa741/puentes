'use client'

import React, { useState } from 'react';

const AyudaPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Ayuda</h1>
                <p className="text-gray-600 mb-8">
                    Bienvenido a la página de ayuda. Aquí encontrarás respuestas a las preguntas más frecuentes y recursos útiles para resolver tus dudas.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Preguntas Frecuentes</h2>
                    <ul className="space-y-4">
                        {faqData.map((faq, index) => (
                            <li key={index} className="border-b border-gray-200 pb-4">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left text-gray-800 font-medium flex justify-between items-center"
                                >
                                    {faq.question}
                                    <span className="ml-2">
                                        {activeIndex === index ? '-' : '+'}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        activeIndex === index ? 'max-h-40' : 'max-h-0'
                                    }`}
                                >
                                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recursos Adicionales</h2>
                    <p className="text-gray-600 mb-2">
                        Si necesitas más ayuda, visita nuestra{' '}
                        <a href="/contact" className="text-blue-500 hover:underline">página de contacto</a> o envíanos un correo a{' '}
                        <a href="mailto:soporte@puentech.com" className="text-blue-500 hover:underline">infoplataformaweb@gmail.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: '¿Qué es una Landing Page?',
        answer: 'Una Landing Page es una página de destino diseñada específicamente para convertir visitantes en leads o clientes, enfocándose en un solo objetivo o llamada a la acción.',
    },
    {
        question: '¿Qué gastos tendré en un E-commerce?',
        answer: 'Los gastos comunes incluyen hosting, plataforma de e-commerce, marketing digital, y posibles comisiones de venta o transacción dependiendo de los métodos de pago.',
    },
    {
        question: '¿Cómo puedo contactar con el soporte técnico?',
        answer: 'Puedes contactarnos a través de la página de contacto o enviando un correo a infoplataformaweb@gmail.com ',
    },
];

export default AyudaPage;
