import { useCart } from '@/hooks';
import { createContext } from 'react';

export const cartContext = createContext();

export const CartContext = ({ children }) => {
  const { cartProducts, loading, cartId } = useCart(2);

  return (
    <cartContext.Provider value={{ cartProducts, loading, cartId }}>
      {children}
    </cartContext.Provider>
  );
};
