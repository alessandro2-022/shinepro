
import React, { useState } from 'react';
// Importa o número do WhatsApp para construir o link de agendamento
import { WHATSAPP_NUMBER } from '../constants';

// Define as propriedades (props) que os componentes de modal recebem
interface ModalProps {
  isOpen: boolean;  // Controla a visibilidade do modal
  onClose: () => void; // Função para fechar o modal
  serviceTitle?: string | null; // Título do serviço (opcional)
}

// Definição do componente funcional BookingModal
const BookingModal: React.FC<ModalProps> = ({ isOpen, onClose, serviceTitle }) => {
  // 'useState' para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    dateTime: '',
  });

  // Se 'isOpen' for falso, não renderiza o modal
  if (!isOpen) return null;

  // Função para atualizar o estado 'formData' sempre que um campo do formulário mudar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    // Atualiza o estado, mantendo os valores antigos e sobrescrevendo o campo que mudou
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Função chamada quando o formulário é enviado
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    const { name, email, phone, vehicle, dateTime } = formData;
    
    // Converte a string de data/hora do formulário para um objeto Date
    const date = new Date(dateTime);
    // Formata a data para o padrão brasileiro, facilitando a leitura no WhatsApp
    const formattedDate = date.toLocaleString('pt-BR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    // Monta a mensagem que será enviada. '%0A' representa uma quebra de linha em URLs.
    let message = `*Agendamento ShinePro*%0A`;
    if (serviceTitle) {
      message += `%0A*Serviço:* ${serviceTitle}`;
    }
    message += `%0A%0A*Nome:* ${name}%0A*Email:* ${email}%0A*Telefone:* ${phone}%0A*Veículo:* ${vehicle}%0A*Data/Hora Sugerida:* ${formattedDate}`;
    
    // Cria a URL final para o WhatsApp e a abre em uma nova aba
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    // Fecha o modal após o envio
    onClose();
  };

  return (
    // Estrutura do modal, similar ao AboutModal
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-shinepro-light rounded-lg shadow-2xl p-8 max-w-lg w-full relative border border-shinepro-gold/50 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-3xl font-black text-shinepro-gold mb-6 text-center">Agende seu Serviço</h2>
        
        {/* Exibe o nome do serviço se ele foi selecionado */}
        {serviceTitle && (
            <p className="text-center text-lg text-gray-300 mb-4">
                Serviço: <span className="font-bold text-white">{serviceTitle}</span>
            </p>
        )}

        {/* Formulário de agendamento */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campos de entrada (input) para os dados do cliente */}
          <input type="text" id="name" placeholder="Nome Completo" required value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-shinepro-gold focus:outline-none"/>
          <input type="email" id="email" placeholder="Seu Melhor Email" required value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-shinepro-gold focus:outline-none"/>
          <input type="tel" id="phone" placeholder="Telefone (com DDD)" required value={formData.phone} onChange={handleChange} className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-shinepro-gold focus:outline-none"/>
          <input type="text" id="vehicle" placeholder="Modelo do Veículo" required value={formData.vehicle} onChange={handleChange} className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-shinepro-gold focus:outline-none"/>
          {/* Campo de data e hora */}
          <input type="datetime-local" id="dateTime" required value={formData.dateTime} onChange={handleChange} className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-shinepro-gold focus:outline-none" style={{ colorScheme: 'dark' }}/>
          {/* Botão para enviar o formulário */}
          <button type="submit" className="w-full p-3 bg-whatsapp-green font-bold text-white rounded-md hover:bg-green-600 transition-colors duration-300 text-lg">
            Confirmar Agendamento no WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;