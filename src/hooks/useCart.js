import { baseUrl } from '..';
import { useEffect, useState } from 'react';

export const useCart = (cartId = 2) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId = 0, setUserId] = useState(0);
  // const userId = state.userId || 0

  useEffect(() => {
    fetch(`${baseUrl}/carts/${cartId}`)
      .then((response) => {
        return response.json();
      })
      .then((cart) => {
        const { products, userId } = cart;

        setUserId(userId);
        setCartProducts(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setCartProducts, cartId, setLoading]);

  return { cartProducts, loading, cartId, userId, setCartProducts };
};
