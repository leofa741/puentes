import React from 'react';
import './estilosoporte.css';


const SoportePage: React.FC = () => {
    return (
        <div className="relative bg-gray-100 min-h-screen p-8">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 overflow-hidden group ">
              

                  {/* Efecto de superposición al pasar el mouse */}
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:fade-in-out">
                    <h1 className="text-3xl font-semibold text-white">Soporte Técnico</h1>
                </div>


                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Soporte Técnico y Atención al Cliente</h1>
                <p className="text-gray-600 mb-8">
                    Si tienes algún problema o consulta, no dudes en contactarnos a través de los siguientes medios:
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contacto</h2>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-center">
                            <span className="material-icons text-blue-500 mr-2">email</span>
                            <span>Email: infoplataformaweb@gmail.com</span>
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons text-green-500 mr-2">phone</span>
                            <span>Teléfono: +54 (911) 4146-1312</span>
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons text-green-500 mr-2">whatsapp</span>
                            <span>WhatsApp: +54 (911) 4146-1312</span>
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Horario de Atención</h2>
                    <p className="text-gray-600 mb-2">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sábados: 10:00 AM - 2:00 PM</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dirección</h2>
                    <p className="text-gray-600">Monte Grande, Bs.As, Argentina</p>
                </section>
            </div>
        </div>
    );
};

export default SoportePage;
