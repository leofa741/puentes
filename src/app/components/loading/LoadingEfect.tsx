import React from 'react';
 // Asegúrate de importar Tailwind si está configurado en este archivo.
 

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 relative overflow-hidden">
                ...Cargando
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-loading"></span>
            </h2>
        </div>
    );
};

export default Loading;
