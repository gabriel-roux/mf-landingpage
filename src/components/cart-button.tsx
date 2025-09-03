"use client";

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export function CartButton() {
  const { getTotalItems, toggleCart } = useCart();
  const totalItems = getTotalItems();

  return (
    <button
      onClick={toggleCart}
      className="fixed bottom-6 right-6 z-40 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 group"
      aria-label="Abrir carrinho de compras"
    >
      <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
      
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
}
