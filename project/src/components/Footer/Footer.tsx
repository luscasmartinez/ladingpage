import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-secondary-darker text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">FlipCriativa</h3>
            <p className="text-gray-400">Transformando ideias em resultados extraordinários.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Portfólio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-gray-400">contato@flipcriativa.com.br</p>
            <p className="text-gray-400">+55 (11) 99999-9999</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <SocialLinks />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 FlipCriativa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}