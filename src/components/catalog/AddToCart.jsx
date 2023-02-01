import { baseUrl } from '@/index';

export const AddToCart = ({ product }) => {
  const { title, id } = product;

  const onClick = () => {
    fetch(`${baseUrl}/carts/2`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        products: [{ productId: id, quantity: 1 }],
      }),
    });
  };

  return (
    <button
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-800 transition-colors"
      type="button"
      onClick={onClick}
      title={`Add ${title} to cart`}
    >
      Add to Cart
    </button>
  );
};
