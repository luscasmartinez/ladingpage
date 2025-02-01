import React from 'react';
import flipLogo from './flip.png'; // Importa a imagem da mesma pasta

export default function Logo() {
  return (
    <div className="flex flex-col items-center mb-6 animate-fade-in">
      {/* Faixa branca de fundo */}
      <div className="w-full bg-white flex items-center justify-center h-[50px] mt-6 rounded-[20px]">
        {/* Logo e fundo retangular com degradê */}
        <div className="relative flex items-center justify-center top-[-15px]">
          <img src={flipLogo} alt="Logo FlipCriativa" className="w-48 h-48 rounded-full relative " />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white/90"></h2>
    </div>
  );
}
