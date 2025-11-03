// Importa o React e o hook useState
import React, { useState } from 'react';
// Importa os componentes que formam a estrutura da página
import Header from './Header.tsx';
import Banner from './Banner.tsx';
import Services from './Services.tsx';
import Testimonials from './Testimonials.tsx';
import Footer from './Footer.tsx';
import AboutModal from './AboutModal.tsx';
import BookingModal from './BookingModal.tsx';

// Definição do componente funcional principal da aplicação
const App: React.FC = () => {
  // Estado para controlar a visibilidade do modal "Sobre Nós"
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  // Estados para controlar o modal de agendamento
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Função para abrir o modal de agendamento, opcionalmente com um título de serviço
  const handleOpenBookingModal = (serviceTitle?: string) => {
    setSelectedService(serviceTitle || null);
    setBookingModalOpen(true);
  };

  // Função para fechar o modal de agendamento
  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
  };


  // Retorna a estrutura JSX da aplicação
  return (
    <div className="min-h-screen bg-shinepro-dark text-white font-sans">
      {/* Passa as funções para abrir os modais como propriedades para o Header */}
      <Header 
        onOpenAboutModal={() => setAboutModalOpen(true)}
        onOpenBookingModal={handleOpenBookingModal} 
      />
      {/* Conteúdo principal da página */}
      <main>
        <Banner />
        <Services onOpenBookingModal={handleOpenBookingModal} />
        <Testimonials />
      </main>
      {/* Componente Footer (rodapé) */}
      <Footer />
      {/* Renderiza o modal "Sobre Nós" com base no estado */}
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setAboutModalOpen(false)} 
      />
      {/* Renderiza o modal de Agendamento com base no estado */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        serviceTitle={selectedService}
      />
    </div>
  );
};

// Exporta o componente App para ser usado em outros lugares
export default App;