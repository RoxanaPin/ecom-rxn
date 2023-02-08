import { baseUrl } from '..';
import { useEffect, useState } from 'react';

export const useCart = (cartId = 2) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/carts/${cartId}`)
      .then((response) => {
        return response.json();
      })
      .then((cart) => {
        const { products } = cart;

        setCartProducts(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setCartProducts, cartId, setLoading]);

  return { cartProducts, loading, cartId };
};
