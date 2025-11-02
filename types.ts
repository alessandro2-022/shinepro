// Define a estrutura (o "formato") de um objeto de serviço
export interface Service {
  title: string;       // O nome do serviço
  description: string; // Uma breve descrição do que o serviço inclui
  price: string;       // O preço ou faixa de preço do serviço
}

// Define a estrutura para um objeto de depoimento de cliente
export interface Testimonial {
  name: string;      // Nome do cliente
  quote: string;     // O texto do depoimento
  rating: number;    // Avaliação de 1 a 5 estrelas
  avatarUrl?: string; // URL opcional para a foto do cliente
}
