
import React from 'react';
// Importa a interface 'Service' para tipar as propriedades
import { Service } from '../types';

// Define as propriedades (props) que o componente ServiceCard espera receber
interface ServiceCardProps {
  service: Service;     // O objeto contendo os dados do serviço
  whatsappLink: string; // O link base do WhatsApp
}

// Definição do componente funcional ServiceCard
const ServiceCard: React.FC<ServiceCardProps> = ({ service, whatsappLink }) => {
  // Cria a mensagem padrão que será pré-preenchida no WhatsApp
  const message = `Olá! Gostaria de agendar o serviço de ${service.title}.`;
  // Codifica a mensagem para que possa ser usada em uma URL
  const encodedMessage = encodeURIComponent(message);
  // Monta o link final do WhatsApp com a mensagem codificada
  const finalLink = `${whatsappLink}?text=${encodedMessage}`;

  return (
    // Div principal do card com estilização do Tailwind
    <div className="bg-shinepro-light p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
      <div>
        {/* Título do serviço */}
        <h3 className="text-xl font-bold text-shinepro-gold">{service.title}</h3>
        {/* Descrição do serviço */}
        <p className="text-gray-300 mt-2">{service.description}</p>
        {/* Preço do serviço */}
        <p className="text-lg font-semibold text-white mt-4">{service.price}</p>
      </div>
      {/* Link de agendamento que abre o WhatsApp em uma nova aba */}
      <a 
        href={finalLink}
        target="_blank" // Abre em nova aba
        rel="noopener noreferrer" // Boas práticas de segurança para links 'target="_blank"'
        className="mt-6 w-full bg-whatsapp-green text-white font-bold py-2 px-4 rounded-lg text-center flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
      >
        {/* Ícone do WhatsApp */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.001 2C5.583 2 2 5.582 2 10c0 1.503.406 2.905 1.12 4.123L2 18l3.99-.99A7.94 7.94 0 0010.001 18c4.418 0 8-3.582 8-8s-3.582-8-8-8zm4.334 9.682c-.183.275-.666.524-1.25.748-.585.224-1.217.336-1.395.336-.178 0-.44-.06-.596-.336-.157-.276-.64-2.062-.756-2.22-.116-.156-.232-.178-.348-.178-.116 0-.254.022-.37.156-.115.135-.462.546-.578.683-.116.137-.232.158-.403.088-.17-.068-1.04-0.384-1.98-1.218-.733-.65-1.218-1.464-1.355-1.718-.137-.254-.022-.403.088-.538.09-.115.21-.157.306-.232.098-.075.137-.116.213-.195.075-.078.056-.156 0-.275-.056-.116-.348-.83-.485-.986-.137-.157-.296-.135-.424-.135-.11 0-.27.022-.386.022s-.348.116-.5.275c-.15.157-.596.578-.596 1.403 0 .825.612 1.63.708 1.746.096.116 1.18 1.838 2.862 2.542 1.683.705 1.98 1.025 2.327 1.025.297 0 .888-.136 1.024-.275.137-.137.137-.765.08-1.04z" />
        </svg>
        Agendar Serviço
      </a>
    </div>
  );
};

export default ServiceCard;