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

- **React**: Biblioteca JavaScript para a construção da interface de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, aumentando a robustez e a manutenibilidade do código.
- **Tailwind CSS**: Framework CSS utility-first para estilização rápida e customizável. A configuração é feita diretamente no `index.html` para simplicidade.

## 📂 Estrutura do Projeto

O projeto é organizado da seguinte forma para manter o código limpo e modular:

```
/
├── components/          # Contém todos os componentes React reutilizáveis
│   ├── About.tsx
│   ├── Banner.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ServiceCard.tsx
│   ├── Services.tsx
│   ├── TestimonialCard.tsx
│   └── Testimonials.tsx
│
├── App.tsx              # Componente raiz que organiza a estrutura da página
├── constants.ts         # Armazena dados constantes (nº de WhatsApp, lista de serviços)
├── types.ts             # Define as interfaces e tipos do TypeScript (ex: Service)
│
├── index.html           # Ponto de entrada HTML, onde o React é montado e o Tailwind é configurado
├── index.tsx            # Ponto de entrada do React, onde o App é renderizado
├── metadata.json        # Metadados do projeto
└── README.md            # Documentação do projeto (este arquivo)
```

## 🎨 Customização

Para modificar informações importantes da landing page, edite os seguintes arquivos:

- **Serviços Oferecidos**: Abra o arquivo `constants.ts` e modifique o array `servicesData`. Você pode adicionar, remover ou editar qualquer serviço.
- **Número de WhatsApp**: No mesmo arquivo `constants.ts`, altere o valor da constante `WHATSAPP_NUMBER`.
- **Cores e Fontes**: A configuração do tema do Tailwind CSS está no `index.html`, dentro da tag `<script>`. Você pode alterar as cores na seção `tailwind.config.theme.extend.colors`.
- **Textos e Imagens**: Para alterar textos de componentes como o Banner, Sobre Nós ou Rodapé, edite diretamente os arquivos JSX correspondentes em `components/`. A imagem principal do banner é definida no `components/Banner.tsx`.