import Link from 'next/link';

export const CartControls = () => {
  return (
    <ul className="border border-l-0 border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          title="Cart"
          className="w-20 h-20 flex justify-center items-center"
        >
          Cart
        </Link>
      </li>
    </ul>
  );
};
