// Importa o React e o hook 'useState' para gerenciar o estado do componente
import React, { useState } from 'react';
// Importa os componentes que formam a estrutura da página
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import Testimonials from './Testimonials'; // Importa o novo componente
import Footer from './Footer';
import AboutModal from './AboutModal';
import BookingModal from './BookingModal';

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
        <Testimonials /> {/* Adiciona a nova seção de depoimentos */}
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
