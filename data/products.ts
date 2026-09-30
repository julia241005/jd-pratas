export type Product = {
  id: string;
  name: string;
  price: string;
  promoPrice?: string;
  category: string;
  subcategory?: string;
  material: string;
  description: string;
  sku: string;
  image?: string;
  images?: string[];
  available: boolean;
  featured: boolean;
  newProduct: boolean;
  bestSeller: boolean;
};

export const products: Product[] = [
  {
    id: "produto-001",
    name: "Nome do produto",
    price: "R$ 00,00",
    category: "Anéis",
    subcategory: "",
    material: "Prata 925",
    description: "",
    sku: "",
    image: "",
    images: [],
    available: true,
    featured: true,
    newProduct: true,
    bestSeller: false,
  },

  {
    id: "produto-002",
    name: "Nome do produto",
    price: "R$ 00,00",
    category: "Brincos",
    subcategory: "",
    material: "Prata 925",
    description: "",
    sku: "",
    image: "",
    images: [],
    available: true,
    featured: true,
    newProduct: true,
    bestSeller: false,
  },

  {
    id: "produto-003",
    name: "Nome do produto",
    price: "R$ 00,00",
    category: "Colares",
    subcategory: "",
    material: "Prata 925",
    description: "",
    sku: "",
    image: "",
    images: [],
    available: true,
    featured: true,
    newProduct: false,
    bestSeller: true,
  },

  {
    id: "produto-004",
    name: "Nome do produto",
    price: "R$ 00,00",
    category: "Pulseiras",
    subcategory: "",
    material: "Prata 925",
    description: "",
    sku: "",
    image: "",
    images: [],
    available: true,
    featured: false,
    newProduct: false,
    bestSeller: true,
  },
];