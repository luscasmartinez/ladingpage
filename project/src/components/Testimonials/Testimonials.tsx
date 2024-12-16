import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'A FlipCriativa transformou completamente nossa presença digital. Os resultados superaram todas as expectativas!',
  },
  {
    name: 'Carlos Santos',
    role: 'Diretor de Marketing, InnovaCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    content: 'Profissionalismo e criatividade em cada projeto. Nossa empresa cresceu 300% após a parceria.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary-dark">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}