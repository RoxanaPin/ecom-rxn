import { useEffect, useState } from 'react';
import { baseUrl } from '..';

const productCache = {};

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [httpStatus, setHttpStatus] = useState(200);

  useEffect(() => {
    if (productId) {
      if (productCache[productId] === undefined) {
        fetch(`${baseUrl}/products/${productId}`)
          .then((response) => {
            // .json returns promise
            return response.json();
          })
          .then((product) => {
            setProduct(product);
            productCache[productId] = product;
          })
          .catch(() => {
            setHttpStatus(404);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setProduct(productCache[productId]);
        setLoading(false);
      }
    }
  }, [setProduct, productId]);

  return { product, httpStatus, loading };
};
