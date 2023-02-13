import { useCart } from '@/hooks';
import { createContext } from 'react';

export const cartContext = createContext();

const x = cartContext;

export const CartContext = ({ children }) => {
  const { cartProducts, loading, cartId, userId, setCartProducts } = useCart(2);

  return (
    <x.Provider
      value={{ cartProducts, loading, cartId, userId, setCartProducts }}
    >
      {children}
    </x.Provider>
  );
};
