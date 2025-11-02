import React from 'react';
// Importa o link do WhatsApp para o botão de agendamento principal
import { WHATSAPP_LINK } from '../constants.ts';

// O componente não precisa mais receber propriedades para controlar modais
const Header: React.FC = () => {
  return (
    // 'header' com classes do Tailwind para estilização
    // 'sticky top-0' faz o header ficar fixo no topo da página ao rolar
    // 'z-50' garante que o header fique acima de outros elementos
    // 'bg-shinepro-dark/80 backdrop-blur-sm' cria um efeito de vidro fosco
    <header className="sticky top-0 z-50 bg-shinepro-dark/80 backdrop-blur-sm shadow-lg shadow-shinepro-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Seção do logo */}
        <div className="flex items-center">
          {/* O logo agora é a imagem completa da marca, com dimensões ajustadas para manter a proporção */}
          <img src="https://i.ibb.co/7jZ6M4j/shinepro-logo.png" alt="Logo ShinePro" className="h-16 w-auto" />
        </div>
        {/* Navegação */}
        <nav className="flex items-center space-x-2 sm:space-x-4">
          {/* O botão "Sobre Nós" agora é um link de âncora para rolar até a seção */}
          <a href="#about" className="text-sm sm:text-base font-semibold text-gray-300 hover:text-shinepro-gold transition-colors duration-300 px-3 py-2 rounded-md">
            Sobre Nós
          </a>
          {/* O botão de agendamento agora é um link direto para o WhatsApp */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base font-semibold bg-shinepro-gold text-shinepro-dark px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;