import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';

import PropTypes from 'prop-types';
import css from './DayProducts.module.scss';
import { ProductTable } from 'components/ProductsTable/ProductsTable';

export const DayProducts = ({ products }) => {
  let empty = false;
  products.length === 0 ? empty = true : empty = false;
  return (
    <>
      <div className={css.productsContainer}>
        <div className={css.headBlock}>
          <p className={css.headTitle}>Products</p>
          <Link to='/products' className={css.headLink}>
            <div className={css.linkWraper}>
              <p>Add product</p>
              <svg className={css.icon}>
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </div>
          </Link>
        </div>
          {empty === true ? (
            <div className={css.productWrap}>
            <ProductTable products={products} />
            </div>
          ) : (
            <div className={css.resultInfoTextWrap}>
            <p className={css.resultInfoText}>Not found products</p>
            </div>
          )}
      </div>
    </>
  );
};

DayProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.shape({
        $oid: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      recommend: PropTypes.string.isRequired,
    }),
  ),
};
