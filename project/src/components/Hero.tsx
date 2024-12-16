import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-orange-400 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] opacity-10 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
          <span className="inline-block transform hover:scale-105 transition-transform">
            <Sparkles className="inline-block mr-4 h-12 w-12" />
            Não somos uma agência!
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto">
          Transformamos suas ideias em resultados extraordinários
        </p>
        <Link 
          to="/contact"
          className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all inline-flex items-center gap-2"
        >
          Quero aumentar minhas vendas
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}