import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext } from 'react';
import { ProductPrice } from '../catalog';

export const CartTotals = () => {
  // alias destructure:
  const { cartProducts } = useContext(cartContext);
  const { products, loading } = useProducts();

  if (loading) {
    return '...loading';
  }

  const total = cartProducts.reduce((total, { quantity, productId }) => {
    const product = products.find((product) => {
      return product.id === productId;
    });
    const { price } = product;

    total += quantity * price;

    return total;
  }, 0);

  return (
    <>
      <h1>Cart Totals</h1>

      <div>
        Total:
        <ProductPrice product={{ price: total }}></ProductPrice>
      </div>
    </>
  );
};
