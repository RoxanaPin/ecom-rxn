import { useEffect, useState } from 'react';
import { baseUrl } from '..';

let cache = [];

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (cache.length === 0) {
      fetch(`${baseUrl}/products`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          cache = data;
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.dir(error);
          setLoading(false);
          setError('An error occured');
        });
    } else {
      setProducts(cache);
      setLoading(false);
    }
  }, [setProducts]);

  return { products, setProducts, loading, error };
};
