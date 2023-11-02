import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';
import PropTypes from 'prop-types';
import css from './DayProducts.module.scss';
import { ProductTable } from 'components/ProductsTable/ProductsTable';
import { clsx } from 'clsx';

export const DayProducts = ({ products }) => {
  let empty = false;
  products.length === 0 ? (empty = true) : (empty = false);
  return (
    <>
      <div className={clsx(css.productsContainer, (empty == true ? css.resultInfoContainer : css.dayProductsContainer))}>
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
        {empty === false ? (
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
  products: PropTypes.array.isRequired,
};
