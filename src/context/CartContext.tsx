import { createContext, useState, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

/* eslint-disable react-refresh/only-export-components */
export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const itemCount = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);

  const addToCart = useCallback((newItem: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      } else {
        return [...prevItems, { ...newItem, quantity }];
      }
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const contextValue = useMemo(
    () => ({
      items,
      itemCount,
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [items, itemCount, addToCart, removeFromCart, clearCart],
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
