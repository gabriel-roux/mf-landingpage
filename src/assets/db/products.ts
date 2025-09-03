import Vinho1 from '@/assets/images/vinho1.jpg';
import Vinho2 from '@/assets/images/vinho2.jpg';
import Vinho3 from '@/assets/images/vinho3.jpg';
import Vinho4 from '@/assets/images/vinho4.jpg';

import Preto1 from '@/assets/images/preto1.jpg';
import Preto2 from '@/assets/images/preto2.jpg';
import Preto3 from '@/assets/images/preto3.jpg';

import Branco1 from '@/assets/images/branco1.jpg';
import Branco2 from '@/assets/images/branco2.jpg';

import AbaReta1 from '@/assets/images/aba-reta1.jpg'
import AbaReta2 from '@/assets/images/aba-reta2.jpg'
import AbaReta3 from '@/assets/images/aba-reta3.jpg'
import AbaReta4 from '@/assets/images/aba-reta4.jpg'

import Estonado1 from '@/assets/images/estonado1.jpg'
import Estonado2 from '@/assets/images/estonado2.jpg'
import Estonado3 from '@/assets/images/estonado3.jpg'
import Estonado4 from '@/assets/images/estonado4.jpg'
import { StaticImageData } from 'next/image';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: StaticImageData[];
  category: 'trucker' | 'snapback' | 'dad-hat';
  colors: string[];
  technicalDetails: {
    modelo: string;
    tecido: string;
    origem: string;
    estrutura: string;
    regulador: string;
    botao: string;
    personalizacao: string;
    carneira: string;
    especial?: string;
  };
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "BONÉ TRUCKER NA COR VINHO",
    description: "Trucker - Vinho",
    price: 13590,
    image: [Vinho1, Vinho2, Vinho3, Vinho4],
    category: "trucker",
    colors: ["vinho"],
    technicalDetails: {
      modelo: "Trucker",
      tecido: "100% poliéster (frente e aba) + tela traseira",
      origem: "Importado",
      estrutura: "Entretela de memória",
      regulador: "Plástico importado",
      botao: "Importado com 3 garras",
      personalizacao: "Bordado frontal MF + lateral com logotipo",
      carneira: "Algodão com espuma dupla, acabamento interno preto"
    },
    inStock: true
  },
  {
    id: 2,
    name: "BONÉ SNAPBACK PRETO COM ABA RETA",
    description: "Snapback - Preto",
    price: 14590,
    image: [AbaReta1, AbaReta2, AbaReta3, AbaReta4],
    category: "snapback",
    colors: ["preto"],  
    technicalDetails: {
      modelo: "Snapback",
      tecido: "100% poliéster",
      origem: "Importado",
      estrutura: "Entretela de memória",
      regulador: "Fecho snap de plástico (importado)",
      botao: "Importado com 3 garras",
      personalizacao: "Bordado frontal MF + bordado inferior da aba + viés interno personalizado",
      carneira: "Algodão com espuma dupla, acabamento preto"
    },
    inStock: true
  },
  {
    id: 3,
    name: "BONÉ DAD HAT NA COR BRANCO",
    description: "Dad Hat - Branco",
    price: 14590,
    image: [Branco1, Branco2],
    category: "dad-hat",
    colors: ["branco"],
    technicalDetails: {
      modelo: "Dad Hat",
      tecido: "100% algodão",
      origem: "Nacional",
      estrutura: "Entretela de memória (frente volta à forma após pressionada)",
      regulador: "Fivela de metal (não enferruja com tempo nem suor)",
      botao: "Importado, com 3 garras (alta fixação)",
      personalizacao: "Bordado MF em alto relevo + viés interno personalizado",
      carneira: "Tecido de algodão com dupla espuma e acabamento interno preto"
    },
    inStock: true
  },
  {
    id: 4,
    name: "BONÉ DAD HAT NA COR PRETO",
    description: "Dad Hat - Preto",
    price: 14590,
    image: [Preto1, Preto2, Preto3],
    category: "dad-hat",
    colors: ["preto"],
    technicalDetails: {
      modelo: "Trucker",
      tecido: "100% poliéster (frente e aba) + tela traseira",
      origem: "Importado",
      estrutura: "Entretela de memória",
      regulador: "Plástico importado",
      botao: "Importado com 3 garras",
      personalizacao: "Bordado frontal MF + lateral com logotipo MF + viés interno personalizado",
      carneira: "Algodão com espuma dupla, acabamento interno preto"
    },
    inStock: true
  },
  {
    id: 5,
    name: "BONÉ DAD HAT AZUL ESTONADO",
    description: "Dad Hat - Azul Estonado",
    price: 15590,
    image: [Estonado1, Estonado2, Estonado3, Estonado4],
    category: "dad-hat",
    colors: ["azul", "estonado"],
    technicalDetails: {
      modelo: "Dad Hat",
      tecido: "100% algodão",
      origem: "Nacional",
      estrutura: "Entretela de memória (frente que volta à forma após pressionada)",
      regulador: "Fivela de metal",
      botao: "Importado, com 3 garras (alta fixação)",
      personalizacao: "Bordado MF em alto relevo + viés interno personalizado",
      carneira: "Tecido de algodão com dupla espuma e acabamento interno preto",
      especial: 'Azul estonado + puído na aba com 2 cortes (acabamento exclusivo e estilizado)'
    },
    inStock: true
  }
];

// Funções utilitárias para filtrar produtos
export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductsByColor = (color: string) => {
  return products.filter(product => 
    product.colors.some(c => c.toLowerCase().includes(color.toLowerCase()))
  );
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getAvailableProducts = () => {
  return products.filter(product => product.inStock);
};