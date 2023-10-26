import React from 'react';
import css from './ProductsTable.module.scss';
import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';

export const ProductTable = ({ products }) => {

  console.log(products);

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product._id.$oid} className={css.element}>
            <ProductTableItem
            id={product.id}
              title={product.title}
              category={product.category}
              calories={product.calories}
              weight={product.weight}
              recommend={product.recommend}
              first={products.indexOf(product) === 0 ? true : false}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
