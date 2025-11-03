# ShinePro Estética Automotiva - Landing Page

Esta é uma landing page moderna e responsiva para a **ShinePro Estética Automotiva**. O projeto foi construído para apresentar os serviços da empresa de forma profissional e facilitar o agendamento de horários através da integração direta com o WhatsApp.

## ✨ Funcionalidades Principais

- **Design Moderno e Responsivo**: Interface elegante com um tema escuro e detalhes em dourado, totalmente adaptável a desktops, tablets e smartphones.
- **Fluxo de Página Única**: Uma experiência de rolagem contínua que apresenta a empresa, seus serviços e depoimentos de forma fluida.
- **Catálogo de Serviços Detalhado**: Uma seção dedicada que exibe todos os serviços oferecidos em cards individuais, com título, descrição e preço.
- **Integração Direta com WhatsApp**: Todos os botões de "Agendar" (no cabeçalho e nos cards de serviço) abrem o WhatsApp instantaneamente, removendo barreiras e simplificando o contato.
- **Seção Sobre Nós Integrada**: A história e a missão da empresa são apresentadas diretamente na página para criar uma conexão imediata com o cliente.
- **UI/UX Aprimorada**: Animações sutis, um cabeçalho fixo com efeito de desfoque e navegação com rolagem suave para uma experiência de usuário premium.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica para o conteúdo da página.
- **CSS3 com Tailwind CSS**: Estilização moderna e responsiva através de um framework utility-first. A configuração do Tailwind é feita via CDN no `index.html`.
- **JavaScript (ES6)**: Para funcionalidades interativas, como o carrossel de depoimentos.

## 📂 Estrutura do Projeto

O projeto foi simplificado para uma estrutura de site estático clássica:

```
/
├── index.html           # O arquivo principal com toda a estrutura e conteúdo
├── script.js            # Contém o código JavaScript para interatividade
├── styles.css           # Estilos CSS personalizados adicionais
├── metadata.json        # Metadados do projeto
└── README.md            # Documentação do projeto (este arquivo)
```

## 🎨 Customização

Para modificar informações importantes da landing page, edite diretamente o arquivo `index.html`:

- **Serviços Oferecidos**: Encontre a seção com `id="services"` e edite o conteúdo dos cards.
- **Número de WhatsApp**: Altere os links `href` que começam com `https://wa.me/`.
- **Textos e Imagens**: Altere os textos e os URLs das imagens diretamente no HTML.
- **Cores e Fontes**: A configuração do tema do Tailwind CSS está no `<head>` do `index.html`, dentro da tag `<script>`. Você pode alterar as cores na seção `tailwind.config.theme.extend.colors`.