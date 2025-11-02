import React from 'react';

// Define as propriedades (props) que o componente Header espera receber
interface HeaderProps {
  onToggleAbout: () => void;   // Função a ser chamada quando o botão "Sobre Nós" for clicado
  onToggleBooking: () => void; // Função a ser chamada quando o botão "Agendar" for clicado
}

// Definição do componente funcional Header
const Header: React.FC<HeaderProps> = ({ onToggleAbout, onToggleBooking }) => {
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
          {/* Botão para abrir o modal "Sobre Nós" */}
          <button onClick={onToggleAbout} className="text-sm sm:text-base font-semibold text-gray-300 hover:text-shinepro-gold transition-colors duration-300 px-3 py-2 rounded-md">
            Sobre Nós
          </button>
          {/* Botão para abrir o modal de agendamento */}
          <button onClick={onToggleBooking} className="text-sm sm:text-base font-semibold bg-shinepro-gold text-shinepro-dark px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Agendar
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;