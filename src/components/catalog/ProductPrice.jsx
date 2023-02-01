export const ProductPrice = ({ product, className }) => {
  const { price } = product;

  return (
    <span className={className}>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)}
    </span>
  );
};
