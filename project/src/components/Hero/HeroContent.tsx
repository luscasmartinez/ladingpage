import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
        <span className="inline-block transform hover:scale-105 transition-transform">
          <Sparkles className="inline-block mr-4 h-12 w-12" />
          Não somos uma agência!
        </span>
      </h1>
      <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto animate-slide-up">
        Transformamos suas ideias em resultados extraordinários
      </p>
      <button className="bg-white text-primary hover:text-primary-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all flex items-center mx-auto gap-2 animate-slide-up">
        Quero aumentar minhas vendas
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}