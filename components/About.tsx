import React from 'react';

// Definição do novo componente funcional About
// Este componente exibe a seção "Sobre Nós" diretamente na página
const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-shinepro-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e subtítulo da seção */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-gradient-gold">Sobre a ShinePro</h2>
          <div className="mt-4 mb-6 w-24 h-1 bg-shinepro-gold mx-auto rounded"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            A ShinePro Estética Automotiva nasceu com o propósito de transformar veículos, trazendo brilho, proteção e cuidado profissional.
            Trabalhamos com paixão para entregar o melhor resultado e superar as expectativas de nossos clientes. Cada carro é tratado como uma obra de arte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
