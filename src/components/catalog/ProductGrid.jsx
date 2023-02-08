import { useProducts } from '@/hooks';
import { UiContext } from '@/pages/_app';
import { css } from '@emotion/css';
import { useContext, useEffect, useState } from 'react';
import { ProductTile } from '.';

export const ProductGrid = () => {
  const { products, loading, error } = useProducts();
  const { itemsPerRow: perRow, pagination } = useContext(UiContext);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const { perPage, page } = pagination;

  // useMemo
  const itemsPerRow = parseInt(perRow);

  useEffect(() => {
    setPaginatedProducts(
      products.slice().splice(perPage * (page - 1), perPage),
    );
  }, [products, setPaginatedProducts, perPage, page]);

  // evaluate loading
  if (loading === true) {
    return <>...loading</>;
  }

  if (error.length > 0) {
    return <>{error}</>;
  }

  if (products.length < 1) {
    return <>There are no products</>;
  }

  const gridCss = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {paginatedProducts.map((product) => {
        return (
          <li key={product.id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
