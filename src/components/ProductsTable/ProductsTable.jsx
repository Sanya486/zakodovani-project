import React from 'react';
// import PropTypes from 'prop-types'
import css from './ProductsTable.module.scss';
import { clsx } from 'clsx';

import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';

export const ProductTable = ({ products }) => {
  console.log(products);

  return (
    <>
      <div className={clsx(css.tableContainer)}>
        <div className={css.tableList}>
          {products.map((product) => (
            <div key={product._id.$oid} className={css.tableElement}>
              <ProductTableItem
                id={product.id}
                title={product.title}
                category={product.category}
                calories={product.calories}
                weight={product.weight}
                recommend={product.recommend}
                first={products.indexOf(product) === 0 ? true : false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// ProductTable.propTypes = {
//   // products: PropTypes.arrayOf
// }
