import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ProductsItem.module.scss';
import sprite from '../../images/svg/sprite.svg';

export const ProductsItem = ({ product }) => {
  return (
    <li className={css.itemContainer}>
      <div className={css.wrap}>
        <div className={css.itemTop}>
          <div className={css.diet}>
            <span>DIET</span>
          </div>
          <div className={css.itemTopRight}>
            <span
              className={clsx(
                css.indicator,
                product.isRecommend ? css.greenIndicator : css.redIndicator,
              )}
            />
            <span className={css.recommendText}>
              {product.isRecommend ? 'Recommended' : 'Not recommended'}
            </span>
            <button className={css.addBtn}>
              Add
              <svg>
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.itemBottom}>
          <div className={css.mainContent}>
            <div className={css.svgContainer}>
              <svg>
                <use href={sprite + '#icon-runner'}></use>
              </svg>
            </div>
            <p className={css.mainText}>{product.name}</p>
          </div>
          <ul className={css.infoList}>
            <li className={css.infoItem}>
              Calories: <span>{product.calories}</span>
            </li>
            <li className={css.infoItem}>
              Category: <span>{product.category}</span>
            </li>
            <li className={css.infoItem}>
              Weight: <span>{product.weight}</span>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.shape({
    isRecommend: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
  }).isRequired,
};
