import { useProduct } from '@/hooks';
import Image from 'next/legacy/image';
import { AddToCart, ProductPrice } from '.';
import { Separator } from '../ui';

export const ProductDisplay = ({ productId }) => {
  const { product, httpStatus, loading } = useProduct(productId);

  if (loading) {
    return <div className="container mx-auto px-4">...loading</div>;
  }

  if (httpStatus === 404) {
    return <div className="container mx-auto px-4">Product not found</div>;
  }

  const { title, image, description, price } = product;

  return (
    <article>
      <section className="grid grid-cols-2 gap-6 container mx-auto px-4">
        <picture>
          <Image
            width="650"
            height="650"
            alt={`Image of ${title}`}
            className=""
            src={image}
            objectFit="contain"
          ></Image>
        </picture>

        <div>
          <h1>{title}</h1>

          {/* insert ProductRatings.jsx */}

          <div>
            <p>{description}</p>

            <ProductPrice product={product}></ProductPrice>
          </div>

          <div>
            <AddToCart product={product}></AddToCart>
          </div>
        </div>
      </section>

      <Separator></Separator>
      <section></section>
      {/* <section>pdp tabs</section> */}
    </article>
  );
};
