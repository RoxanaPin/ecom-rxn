import Link from 'next/link';
import { CartQuantity } from '.';

export const CartControls = () => {
  return (
    <ul className="border border-l-0 border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          title="Cart"
          className="w-20 h-20 flex justify-center items-center"
        >
          <span className="relative">
            Cart
            <CartQuantity className="absolute -top-4 -right-4"></CartQuantity>
          </span>
        </Link>
      </li>
    </ul>
  );
};
