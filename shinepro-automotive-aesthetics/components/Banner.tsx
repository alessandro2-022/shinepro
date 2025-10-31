import React from 'react';

// O componente não precisa mais receber propriedades
// Definição do componente funcional Banner
// Este componente é a seção principal de boas-vindas do site (hero section)
const Banner: React.FC = () => {
  return (
    // 'section' que ocupa uma altura significativa e tem uma imagem de fundo
    <section 
      className="relative min-h-[60vh] md:min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      // A imagem de fundo foi atualizada para uma foto mais impactante de um carro.
      style={{ backgroundImage: "url('https://i.ibb.co/k3W2Q66/pexels-mike-bird-3729464.jpg')" }}
      aria-labelledby="banner-heading"
    >
      {/* Overlay escuro para melhorar a legibilidade do texto sobre a imagem */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Container para o conteúdo do banner, posicionado acima do overlay */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Título principal (h1) com grande destaque */}
        <h1 id="banner-heading" className="text-4xl md:text-6xl font-black text-white drop-shadow-lg animate-fade-in-down">
          SinePro Estética Automotiva
        </h1>
        {/* O subtítulo foi removido daqui */}
      </div>
    </section>
  );
};

export default Banner;