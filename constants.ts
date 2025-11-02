// Importa as interfaces para garantir que os dados sigam a estrutura correta
import { Service, Testimonial } from './types';

// Constante para o número de WhatsApp (formato internacional sem '+' ou '00')
export const WHATSAPP_NUMBER = '553239373903';
// Monta o link direto para iniciar uma conversa no WhatsApp
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// Array com os dados de todos os serviços oferecidos
// Cada objeto no array deve seguir a estrutura definida pela interface 'Service'
export const servicesData: Service[] = [
  {
    title: 'Limpeza Externa Premium',
    description: 'Remove sujeira superficial. Ideal para manutenção rápida.',
    price: 'R$ 60 a R$ 90',
  },
  {
    title: 'Limpeza Simples',
    description: 'Limpeza interna e externa com cera líquida premium.',
    price: 'R$ 80 a R$ 100',
  },
  {
    title: 'Limpeza Premium Nº 1',
    description: 'Limpeza completa com revitalização de plásticos e pneus.',
    price: 'R$ 100 a R$ 130',
  },
  {
    title: 'Limpeza Premium Nº 2',
    description: 'Inclui cera blend, pré-lavagem, limpeza completa.',
    price: 'R$ 160 a R$ 200',
  },
  {
    title: 'Limpeza Técnica para Motos Nº 1',
    description: 'Limpeza detalhada com selante antiderrapante.',
    price: 'R$ 120',
  },
  {
    title: 'Limpeza Técnica para Motos Nº 2',
    description: 'Com selante e revitalização plástica completa.',
    price: 'R$ 220',
  },
  {
    title: 'Higienização Interna Completa',
    description: 'Limpeza profunda de couro, teto, cintos e carpete.',
    price: 'R$ 600 a R$ 700',
  },
  {
    title: 'Tratamento do Motor',
    description: 'Inspeção técnica e limpeza com proteção e verniz.',
    price: 'R$ 120',
  },
  {
    title: 'Tratamento de Couro',
    description: 'Limpeza, hidratação e proteção para manter o aspecto original.',
    price: 'R$ 260',
  },
  {
    title: 'Higienização de Estofados',
    description: 'Limpeza profunda de bancos com remoção de odores.',
    price: 'R$ 260 a R$ 280',
  },
  {
    title: 'Polimento Comercial',
    description: 'Correção de verniz, remoção de micro-riscos e aplicação de cera.',
    price: 'R$ 450',
  },
  {
    title: 'Polimento Técnico',
    description: 'Correção detalhada de imperfeições com vitrificação.',
    price: 'R$ 600 a R$ 900',
  },
  {
    title: 'Vitrificação (Proteção Cerâmica)',
    description: 'Aplicação de coating cerâmico para brilho e proteção duradoura.',
    price: 'A partir de R$ 1000',
  },
];

// Array com os dados dos depoimentos de clientes
export const testimonialsData: Testimonial[] = [
  {
    name: 'Carlos Almeida',
    quote: 'O serviço de vitrificação deixou meu carro parecendo novo. O brilho é incrível e a proteção é notável. Atendimento impecável!',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Juliana Costa',
    quote: 'Fiz a higienização interna completa e o resultado foi surpreendente. Tiraram manchas que eu achava que eram permanentes. Recomendo muito!',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Ricardo Neves',
    quote: 'Atendimento nota 10 e o polimento técnico superou minhas expectativas. A equipe é muito detalhista e profissional.',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
];
