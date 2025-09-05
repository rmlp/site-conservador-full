// Arquivo: src/pages/SplashPage.jsx

import React from 'react';

const SplashPage = ({ onStart }) => {
    const imageUrl = '/capa.jpg'; // Vite serve a pasta 'public' na raiz

    return (
        <div 
            className="h-screen w-screen bg-cover bg-center flex items-center justify-center text-white text-center p-8"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-serif mb-4">Pensamento Conservador</h1>
                <p className="text-md md:text-lg mb-10">Explore a rica tradição do conservadorismo...</p>
                <button 
                    onClick={onStart}
                    className="bg-white text-slate-800 font-bold text-lg px-8 py-3 rounded-md hover:bg-slate-200"
                >
                    Comece a Explorar
                </button>
            </div>
        </div>
    );
};

export default SplashPage;