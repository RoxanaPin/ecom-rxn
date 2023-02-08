import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartLineItem } from '.';

export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);

  if (loading === true) {
    return '...cart is loading';
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {cartProducts.map((cartProduct) => {
          return (
            <CartLineItem
              cartProduct={cartProduct}
              key={cartProduct.productId}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
