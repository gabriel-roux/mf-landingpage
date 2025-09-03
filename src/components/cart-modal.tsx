"use client";

import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/format';
import Image from 'next/image';

export function CartSidebar() {
  const { state, closeCart, removeItem, updateQuantity, getTotalPrice } = useCart();
  const { items, isOpen } = state;

  const totalPrice = getTotalPrice();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleWhatsAppPurchase = () => {
    const message = `Olá! Gostaria de fazer um pedido:\n\n${items.map(item => 
      `• ${item.product.name} - Qtd: ${item.quantity} - ${formatPrice(item.product.price * item.quantity)}`
    ).join('\n')}\n\nTotal: ${formatPrice(totalPrice)}`;
    
    const whatsappUrl = `https://wa.me/5521966134990?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white transform transition-all duration-300 ease-in-out z-50 flex flex-col border-l border-black ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        {/* Header */}
        <div className="bg-gray-100 px-6 py-4 h-[66px] flex justify-between items-center flex-shrink-0 border-b border-black">
          <div>
            <h2 className="text-lg font-bold text-black uppercase">SEU CARRINHO</h2>
            {items.length > 0 && (
              <p className="text-sm text-gray-600 mt-1">
                {items.length} {items.length === 1 ? 'item' : 'itens'}
              </p>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-black text-2xl font-bold hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            // Carrinho vazio
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-black text-lg font-medium">O carrinho está vazio.</p>
              <p className="text-gray-500 text-sm">Adicione produtos para continuar comprando</p>
            </div>
          ) : (
            // Itens do carrinho
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                  {/* Imagem do produto */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Informações do produto */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-black text-sm mb-1 line-clamp-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {formatPrice(item.product.price)}
                    </p>
                    
                    {/* Controles de quantidade */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-700">Quantidade:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={14} color='black' />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-black">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={14} color='black' />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botão remover */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                    aria-label="Remover item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer com botão de compra */}
        {items.length > 0 && (
          <div className="p-6 border-t border-black mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-black">Total:</span>
              <span className="text-lg font-bold text-black">{formatPrice(totalPrice)}</span>
            </div>
            <button
              onClick={handleWhatsAppPurchase}
              className="w-full bg-green-400/40 border border-green-600 text-green-600 py-4 px-6 rounded-lg font-bold text-base hover:bg-green-500 transition-colors"
            >
              COMPRAR VIA WHATSAPP
            </button>
          </div>
        )}
      </div>
    </>
  );
}
