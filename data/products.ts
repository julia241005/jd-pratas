export interface Product {
  slug: string;
  name: string;
  price?: number;
  image?: string;
  material?: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  {
    slug: "1334-colar-elos-com-2-zirconias-elegance",
    name: "Colar Elos com 2 Zircônias Elegance",
    price: undefined,
    image: undefined,
    material: "Folhado a Prata",
    category: "Colares",
    description: "Descrição do produto será adicionada quando recebermos as informações finais da peça.",
  },
  {
    slug: "1201-colar-seja-forte-e-corajosa",
    name: "Colar Seja Forte e Corajosa com Ponto de Luz",
    price: undefined,
    image: undefined,
    material: "Folhado a Prata",
    category: "Colares",
    description: "Descrição do produto será adicionada quando recebermos as informações finais da peça.",
  },
  {
    slug: "5031-anel-color-pedra-gota",
    name: "Anel Color Todo Cravado Pedra Gota",
    price: undefined,
    image: undefined,
    material: "Folhado a Prata",
    category: "Anéis",
    description: "Descrição do produto será adicionada quando recebermos as informações finais da peça.",
  },
  {
    slug: "4002-duplinha-de-argolas",
    name: "Duplinha de Argolas Click Corações P e M",
    price: undefined,
    image: undefined,
    material: "Folhado a Prata",
    category: "Brincos",
    description: "Descrição do produto será adicionada quando recebermos as informações finais da peça.",
  },
];