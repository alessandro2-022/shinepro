// Importa o React e o hook useState
import React, { useState } from 'react';
// Importa os componentes que formam a estrutura da página
import Header from './components/Header.tsx';
import Banner from './components/Banner.tsx';
import Services from './components/Services.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import AboutModal from './components/AboutModal.tsx'; // Importa o componente do modal

// Definição do componente funcional principal da aplicação
const App: React.FC = () => {
  // Estado para controlar a visibilidade do modal "Sobre Nós"
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  // Retorna a estrutura JSX da aplicação
  return (
    <div className="min-h-screen bg-shinepro-dark text-white font-sans">
      {/* Passa a função para abrir o modal como propriedade para o Header */}
      <Header onOpenAboutModal={() => setAboutModalOpen(true)} />
      {/* Conteúdo principal da página */}
      <main>
        <Banner />
        {/* A seção estática "Sobre Nós" foi removida daqui */}
        <Services />
        <Testimonials />
      </main>
      {/* Componente Footer (rodapé) */}
      <Footer />
      {/* Renderiza o modal "Sobre Nós" com base no estado */}
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setAboutModalOpen(false)} 
      />
    </div>
  );
};

// Exporta o componente App para ser usado em outros lugares
export default App;