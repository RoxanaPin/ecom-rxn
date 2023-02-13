import { useAddToCart } from '@/hooks';
import { baseUrl } from '@/index';

export const AddToCart = ({ product }) => {
  const { title } = product;
  const { addToCart, loading } = useAddToCart();

  const onClick = () => {
    addToCart(product);
  };

  return (
    <button
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-800 transition-colors"
      type="button"
      onClick={onClick}
      title={`Add ${title} to cart`}
      disabled={loading}
    >
      {loading ? '...loading' : 'Add to cart'}
    </button>
  );
};
