import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import React from 'react';
import css from './ProductsList.module.scss';

export const ProductsList = ({ products }) => {
  return (
    <div className={css.productsListContainer}>
      <ul className={css.productList}>
        {products.map((product) => (
          <ProductsItem key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};
