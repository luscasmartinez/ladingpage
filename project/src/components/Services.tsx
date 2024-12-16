import React from 'react';
import { Video, Palette, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Criação de Vídeos',
    description: 'Conte histórias que vendem! Transformamos sua mensagem em conteúdo envolvente e memorável.',
  },
  {
    icon: Palette,
    title: 'Design Criativo',
    description: 'Transforme ideias em visuais impactantes que capturam a essência da sua marca.',
  },
  {
    icon: TrendingUp,
    title: 'Tráfego Pago',
    description: 'Chegue ao público certo, no momento certo, com estratégias personalizadas de mídia paga.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="group p-8 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-all">
              <service.icon className="w-12 h-12 text-purple-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}