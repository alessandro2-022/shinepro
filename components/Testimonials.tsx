import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../constants';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Estado para controlar a animação de fade
  const [isFading, setIsFading] = useState(false);

  const handleSelect = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 300); // Duração da animação de fade-out
  };
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonialsData.length - 1 : currentIndex - 1;
    handleSelect(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonialsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    handleSelect(newIndex);
  };
  
  // Troca automática de slides
  useEffect(() => {
    const timer = setTimeout(() => {
        goToNext();
    }, 5000); // Muda a cada 5 segundos
    return () => clearTimeout(timer);
  }, [currentIndex]);


  return (
    <section className="bg-shinepro-light py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white">O Que Nossos Clientes Dizem</h2>
          <p className="mt-4 text-lg text-gray-400">A satisfação de quem confia em nosso trabalho.</p>
          <div className="mt-4 w-24 h-1 bg-shinepro-gold mx-auto rounded"></div>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Card de Depoimento */}
          <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
             <TestimonialCard key={currentIndex} testimonial={testimonialsData[currentIndex]} />
          </div>
         

          {/* Botões de Navegação */}
          <button onClick={goToPrevious} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white hover:bg-shinepro-gold hover:text-shinepro-dark transition-colors duration-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={goToNext} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white hover:bg-shinepro-gold hover:text-shinepro-dark transition-colors duration-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        
        {/* Indicadores (Pontos) */}
        <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-shinepro-gold' : 'bg-gray-600'} hover:bg-shinepro-gold/70 transition-colors duration-300`}
                    aria-label={`Ir para o depoimento ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
