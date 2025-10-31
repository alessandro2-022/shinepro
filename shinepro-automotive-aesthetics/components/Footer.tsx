import React from 'react';
// Importa o link do WhatsApp para ser usado no botão de contato
import { WHATSAPP_LINK } from '../constants';

// Definição do componente funcional Footer (rodapé)
const Footer: React.FC = () => {
  return (
    <footer className="bg-shinepro-light border-t border-gray-700 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-6 md:space-y-0">
          {/* O logo foi removido desta seção */}
          
          {/* Links de navegação e redes sociais */}
          <div className="flex justify-center space-x-6">
            {/* Link para o Google Maps */}
            <a href="https://g.co/kgs/94gkP8Z" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-shinepro-gold transition-colors duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Localização
            </a>
            {/* Link para o Instagram */}
            <a href="https://www.instagram.com/shineprooficial_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-shinepro-gold transition-colors duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Instagram
            </a>
            {/* Link para o WhatsApp */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-shinepro-gold transition-colors duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
        {/* Direitos autorais */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ShinePro Estética Automotiva. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;