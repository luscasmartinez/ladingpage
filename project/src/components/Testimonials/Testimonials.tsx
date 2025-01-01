import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { getTestimonials } from '../../services/testimonialService'; // Função para buscar depoimentos
import { Loader2 } from 'lucide-react';
import { Testimonial } from '../types/testimonial';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Erro ao carregar depoimentos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  return (
    <section className="py-24 bg-[#F1003E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          O que nossos clientes dizem
        </h2>

        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader2 className="w-8 h-8 animate-spin text-white" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))
            ) : (
              <p className="text-center text-white text-lg">
                Nenhum depoimento disponível no momento.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
