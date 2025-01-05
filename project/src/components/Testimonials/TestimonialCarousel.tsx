import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../../types/testimonial';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  if (!testimonials.length) return null;

  const getSlideIndex = (index: number) => {
    let finalIndex = index;
    if (index < 0) finalIndex = testimonials.length - 1;
    if (index >= testimonials.length) finalIndex = 0;
    return finalIndex;
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden mx-auto">
        <div className="relative flex items-center justify-center">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((_, index) => {
              const slideIndex = getSlideIndex(index);
              const isCurrent = index === currentIndex;
              const isPrev = index === getSlideIndex(currentIndex - 1);
              const isNext = index === getSlideIndex(currentIndex + 1);

              return (
                <div
                  key={slideIndex}
                  className={`w-full min-w-full px-4 transition-all duration-500
                    ${isCurrent ? 'scale-100 opacity-100' : 'scale-75 opacity-40'}
                    ${isPrev ? '-translate-x-1/4' : ''}
                    ${isNext ? 'translate-x-1/4' : ''}
                  `}
                >
                  <div className="max-w-2xl mx-auto">
                    <TestimonialCard {...testimonials[slideIndex]} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {testimonials.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full 
              shadow-lg hover:bg-gray-50 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#F1003E]" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full 
              shadow-lg hover:bg-gray-50 transition-colors z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#F1003E]" />
          </button>
        </>
      )}

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}