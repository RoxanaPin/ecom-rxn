import { cartContext } from '@/contexts';
import { useContext } from 'react';

export const CartQuantity = ({ className = '' }) => {
  const { cartProducts } = useContext(cartContext);
  const qty = cartProducts.reduce((qty, product) => {
    qty += product.quantity;

    return qty;
  }, 0);

  if (cartProducts.length < 1 || qty < 1) {
    return <></>;
  }

  return (
    <span
      className={`${className} bg-black text-white p-1 border-2 border-white`}
    >
      {qty}
    </span>
  );
};
