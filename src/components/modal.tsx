"use client";

import * as Dialog from '@radix-ui/react-dialog';
import { X, ShoppingCart, ChevronUp } from 'lucide-react';
import { products } from "@/assets/db/products";
import { useState } from "react";
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';

interface ShopModalProps {
  productId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ShopModal({ productId, isOpen, onClose }: ShopModalProps) {
  const product = products.find((product) => product.id === parseInt(productId));
  const [selectedImage, setSelectedImage] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(true);
  const { addItem } = useCart();

  if (!product) return null;

  // Simular múltiplas imagens do produto (na implementação real, viriam do banco)
  const productImages = [
    ...product.image,
  ];

  const formatPrice = (price: number) => {
    return (price / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <Dialog.Title className="text-lg font-semibold text-gray-800">MY FAMILY</Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                  <X size={24} />
                </button>
              </Dialog.Close>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Galeria de Imagens */}
              <div className="lg:w-1/2 p-6 border-r border-gray-200">
                {/* Imagem Principal */}
                <div className="mb-4">
                  <Image
                    src={productImages[selectedImage]}
                    alt={product.name}
                    width={696}
                    height={400}
                    quality={100}
                    className="w-full h-[490px] object-cover rounded-lg"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImage === index 
                          ? 'border-blue-500' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Vista ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Informações do Produto */}
              <div className="lg:w-1/2 p-6">
                {/* Nome e Preço */}
                <div className="mb-6">
                  <h1 className="text-base text-center font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <p className="text-sm text-center font-bold text-gray-900 mb-1">
                    {formatPrice(product.price)} (Consulta Frete)
                  </p>
                </div>

                {/* Botão Adicionar ao Carrinho */}
                <button 
                  onClick={() => {
                    addItem(product);
                    onClose();
                  }}
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold text-base flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors mb-8"
                >
                  <ShoppingCart size={24} />
                  ADICIONAR AO CARRINHO
                </button>

                {/* Detalhes do Produto */}
                <div className="border-t pt-6">
                  <button 
                    onClick={() => setDetailsOpen(!detailsOpen)}
                    className="flex items-center justify-between w-full mb-4 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <h3 className="text-lg font-bold text-gray-900">
                      DETALHES DO PRODUTO
                    </h3>
                    <ChevronUp 
                      size={20} 
                      className={`text-gray-600 transition-transform duration-200 ${
                        detailsOpen ? 'rotate-0' : 'rotate-180'
                      }`} 
                    />
                  </button>

                  {detailsOpen && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-separate border-spacing-y-2">
                        <tbody className="align-top">
                          <tr>
                            <th className="font-semibold text-gray-900 pr-4 whitespace-nowrap">Modelo:</th>
                            <td className="text-gray-700">{product.technicalDetails.modelo}</td>
                          </tr>
                          <tr>
                            <th className="font-semibold text-gray-900 pr-4 whitespace-nowrap">Tecido:</th>
                            <td className="text-gray-700">{product.technicalDetails.tecido}</td>
                          </tr>
                          <tr>
                            <th className="font-semibold text-gray-900 pr-4 whitespace-nowrap">Origem:</th>
                            <td className="text-gray-700">{product.technicalDetails.origem}</td>
                          </tr>
                          <tr>
                            <th className="font-semibold text-gray-900 pr-4 whitespace-nowrap">Estrutura:</th>
                            <td className="text-gray-700">{product.technicalDetails.estrutura}</td>
                          </tr>
                          <tr>
                            <th className="font-semibold text-gray-900 pr-4 whitespace-nowrap">Regulador:</th>
                            <td className="text-gray-700">{product.technicalDetails.regulador}</td>
                          </tr>
                          <tr>
                            <th className="font-semibold text-gray-900 pr-4 whitespace-nowrap">Botão:</th>
                            <td className="text-gray-700">{product.technicalDetails.botao}</td>
                          </tr>
                          <tr>
                            <th className="font-semibold text-gray-900 pr-4 whitespace-nowrap">Personalização:</th>
                            <td className="text-gray-700">{product.technicalDetails.personalizacao}</td>
                          </tr>
                          <tr>
                            <th className="font-semibold text-gray-900 pr-4 whitespace-nowrap">Carneira:</th>
                            <td className="text-gray-700">{product.technicalDetails.carneira}</td>
                          </tr>
                          {product.technicalDetails.especial && <tr>
                            <th className="font-semibold text-gray-900 pr-4 whitespace-nowrap">Detalhes Especiais:</th>
                            <td className="text-gray-700">{product.technicalDetails.especial}</td>
                          </tr>}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}