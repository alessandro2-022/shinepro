
import React from 'react';
// Importa os dados dos serviços e o link do WhatsApp do arquivo de constantes
import { servicesData, WHATSAPP_LINK } from '../constants.ts';
// Importa o componente que renderiza um único card de serviço
import ServiceCard from './ServiceCard.tsx';

// Definição do componente funcional Services
// Este componente exibe a seção de serviços da empresa
const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e subtítulo da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-gradient-gold">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gray-400">Qualidade e atenção aos detalhes que seu veículo merece.</p>
          {/* Linha decorativa dourada abaixo do título */}
          <div className="mt-4 w-24 h-1 bg-shinepro-gold mx-auto rounded"></div>
        </div>
        {/* Grid para exibir os cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeia (percorre) o array 'servicesData' */}
          {/* Para cada 'service' no array, renderiza um componente 'ServiceCard' */}
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} whatsappLink={WHATSAPP_LINK} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;