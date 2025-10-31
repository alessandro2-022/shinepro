
import React from 'react';

// Define as propriedades (props) que os componentes de modal recebem
interface ModalProps {
  isOpen: boolean;  // Um booleano que determina se o modal está visível ou não
  onClose: () => void; // Uma função para ser chamada quando o modal deve ser fechado
}

// Definição do componente funcional AboutModal
const AboutModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Se 'isOpen' for falso, o componente não renderiza nada (retorna null)
  if (!isOpen) return null;

  return (
    // Div de fundo (overlay) que cobre a tela inteira
    // O 'onClick={onClose}' permite fechar o modal clicando fora da caixa de conteúdo
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Div de conteúdo do modal */}
      {/* 'e.stopPropagation()' impede que o clique dentro do modal se propague para a div de fundo, evitando que ele feche acidentalmente */}
      <div 
        className="bg-shinepro-light rounded-lg shadow-2xl p-8 max-w-lg w-full relative border border-shinepro-gold/50 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de fechar (X) no canto superior direito */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Título do modal */}
        <h2 className="text-3xl font-black text-shinepro-gold mb-4">Sobre a ShinePro</h2>
        {/* Texto de descrição */}
        <p className="text-gray-300 leading-relaxed">
          A ShinePro Estética Automotiva nasceu com o propósito de transformar veículos, trazendo brilho, proteção e cuidado profissional.
          Trabalhamos com paixão para entregar o melhor resultado e superar as expectativas de nossos clientes. Cada carro é tratado como uma obra de arte.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;