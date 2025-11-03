// As importações do React e ReactDOM são resolvidas em tempo de execução pelo importmap no HTML.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importação do componente principal da aplicação a partir de sua localização correta
import App from './components/App.tsx';

// Busca o elemento HTML com o id 'root' onde a aplicação será renderizada
const rootElement = document.getElementById('root');
// Verifica se o elemento 'root' realmente existe no DOM
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Cria a "raiz" da aplicação React no elemento encontrado
const root = ReactDOM.createRoot(rootElement);
// Renderiza o componente principal <App /> dentro da raiz
// React.StrictMode é um wrapper que ajuda a identificar potenciais problemas na aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);