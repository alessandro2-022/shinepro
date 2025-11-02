// Importa o React e o hook 'useState' para gerenciar o estado do componente
import React, { useState } from 'react';
// Importa os componentes que formam a estrutura da página
import Header from './components/Header.tsx';
import Banner from './components/Banner.tsx';
import Services from './components/Services.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import AboutModal from './components/AboutModal.tsx';
import BookingModal from './components/BookingModal.tsx';

// Definição do componente funcional principal da aplicação
const App: React.FC = () => {
  // Cria um estado 'isAboutOpen' para controlar a visibilidade do modal "Sobre Nós"
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  // Cria um estado 'isBookingOpen' para controlar a visibilidade do modal de agendamento
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Retorna a estrutura JSX da aplicação
  return (
    <div className="min-h-screen bg-shinepro-dark text-white font-sans">
      {/* Componente Header, que recebe funções para abrir os modais */}
      <Header 
        onToggleAbout={() => setIsAboutOpen(!isAboutOpen)} 
        onToggleBooking={() => setIsBookingOpen(!isBookingOpen)}
      />
      {/* Conteúdo principal da página */}
      <main>
        {/* Componente Banner, agora não precisa mais da função de agendamento */}
        <Banner />
        <Services />
        <Testimonials />
      </main>
      {/* Componente Footer (rodapé) */}
      <Footer />
      {/* Componente Modal "Sobre Nós", controlado pelo estado 'isAboutOpen' */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      {/* Componente Modal de Agendamento, controlado pelo estado 'isBookingOpen' */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

// Exporta o componente App para ser usado em outros lugares
export default App;
