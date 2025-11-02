// Importa o React
import React from 'react';
// Importa os componentes que formam a estrutura da página
import Header from './components/Header.tsx';
import Banner from './components/Banner.tsx';
import About from './components/About.tsx'; // Novo componente
import Services from './components/Services.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';

// Definição do componente funcional principal da aplicação
const App: React.FC = () => {
  // O estado para controlar os modais foi removido para simplificar a experiência.

  // Retorna a estrutura JSX da aplicação
  return (
    <div className="min-h-screen bg-shinepro-dark text-white font-sans">
      {/* O Header agora não precisa mais de funções para controlar modais */}
      <Header />
      {/* Conteúdo principal da página */}
      <main>
        <Banner />
        <About /> {/* Nova seção "Sobre Nós" adicionada diretamente à página */}
        <Services />
        <Testimonials />
      </main>
      {/* Componente Footer (rodapé) */}
      <Footer />
      {/* Os componentes de Modal foram removidos daqui */}
    </div>
  );
};

// Exporta o componente App para ser usado em outros lugares
export default App;