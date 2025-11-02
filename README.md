# ShinePro Estética Automotiva - Landing Page

Esta é uma landing page moderna e responsiva para a **ShinePro Estética Automotiva**. O projeto foi construído para apresentar os serviços da empresa de forma profissional e facilitar o agendamento de horários através da integração direta com o WhatsApp.

## ✨ Funcionalidades Principais

- **Design Moderno e Responsivo**: Interface elegante com um tema escuro e detalhes em dourado, totalmente adaptável a desktops, tablets e smartphones.
- **Catálogo de Serviços Detalhado**: Uma seção dedicada que exibe todos os serviços oferecidos em cards individuais, com título, descrição e preço.
- **Integração com WhatsApp**:
  - **Agendamento por Serviço**: Cada card de serviço possui um botão "Agendar Serviço" que abre o WhatsApp com uma mensagem pré-definida, mencionando o serviço de interesse.
  - **Agendamento Geral**: Um modal de agendamento com um formulário completo (nome, email, telefone, veículo, data/hora) que gera uma mensagem formatada e detalhada para o WhatsApp.
- **Modais Interativos**:
  - **Sobre Nós**: Um modal que apresenta a missão e os valores da empresa.
  - **Agendamento**: O modal de formulário para facilitar o agendamento.
- **UI/UX Aprimorada**: Animações sutis, um cabeçalho fixo com efeito de desfoque e uma experiência de usuário fluida e intuitiva.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, aumentando a robustez e a manutenibilidade do código.
- **Tailwind CSS**: Framework CSS utility-first para estilização rápida e customizável. A configuração é feita diretamente no `index.html` para simplicidade.

## 📂 Estrutura do Projeto

O projeto é organizado da seguinte forma para manter o código limpo e modular:

```
/
├── components/          # Contém todos os componentes React reutilizáveis
│   ├── AboutModal.tsx
│   ├── Banner.tsx
│   ├── BookingModal.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ServiceCard.tsx
│   └── Services.tsx
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
- **Textos e Imagens**: Para alterar textos de componentes como o Banner ou o Rodapé, edite diretamente os arquivos JSX correspondentes em `components/`. A imagem principal do banner é definida no `components/Banner.tsx`.
