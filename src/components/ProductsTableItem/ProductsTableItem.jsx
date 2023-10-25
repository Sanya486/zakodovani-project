import React from 'react';
import PropTypes from 'prop-types';

// import css from './ProductsTableItem.module.scss';
import css from './ProductsTableItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
import { clsx } from 'clsx';

export const ProductTableItem = ({ title, category, calories, weight, recommend }) => {
  const productTableItem = {
    title: title,
    category: category,
    calories: calories,
    weight: weight,
    recommend: recommend,
  };
  return (

    <div className={css.container}>
      <div className={clsx(css.element, css.titleElement)}>
        <p className={css.title}>Title</p>
        <p className={css.field}>{productTableItem.title}</p>
      </div>

      <div className={clsx(css.element, css.categoriesElement)}>
        <p className={css.title}>Category</p>
        <p className={css.field}>{productTableItem.category}</p>
      </div>

      <div className={css.blockWrap}>
        <div className={css.subBlockWrap}>
          <div className={clsx(css.element, css.caloriesElement)}>
            <p className={css.title}>Calories</p>
            <p className={css.field}>{productTableItem.calories}</p>
          </div>

          <div className={clsx(css.element, css.weightElement)}>
            <p className={css.title}>Weight</p>
            <p className={css.field}>{productTableItem.weight}</p>
          </div>

          <div className={clsx(css.element, css.recommendElement)}>
            <p className={css.title}>Recommend</p>
            <p className={clsx(css.field, css.recommendField)}>
              <span className={css.recomendStatus}>{productTableItem.recommend}</span>
            </p>
          </div>
        </div>

        <div className={css.buttonWrap}>
          <button type='submit' className={css.button}>
            <svg className={css.icon}>
              <use href={sprite + '#trash_icon'}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductTableItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  recommend: PropTypes.string.isRequired,
};
