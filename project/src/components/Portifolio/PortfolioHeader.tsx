import React from 'react';
import { Sparkles } from 'lucide-react';

export default function PortfolioHeader() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-secondary-dark mb-4 flex items-center justify-center gap-3">
        <Sparkles className="w-8 h-8 text-primary" />
        Nosso Portfólio
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Conheça alguns dos projetos incríveis que já realizamos para nossos clientes
      </p>
    </div>
  );
}