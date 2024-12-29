import React from 'react';
import flipLogo from './flip.png'; // Importa a imagem da mesma pasta

export default function Logo() {
  return (
    <div className="flex flex-col items-center mb-8 animate-fade-in">
      {/* Fundo com degradê */}
      <div 
        className="w-28 h-28 rounded-full flex items-center justify-center mb-4 "
        style={{
          background: "radial-gradient(circle, white 10%, #F1003E 75%)",
        }}
      >
        <img src={flipLogo} alt="Logo FlipCriativa" className="w-24 h-24 rounded-full" />
      </div>
      <h2 className="text-2xl font-bold text-white/90"></h2>
    </div>
  );
}
