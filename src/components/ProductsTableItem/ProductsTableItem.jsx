import React from 'react';
import PropTypes from 'prop-types';

// import css from './ProductsTableItem.module.scss';
import css from './ProductsTableItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
import { clsx } from 'clsx';

import { useState } from 'react';
import { useEffect } from 'react';

export const ProductTableItem = ({ title, category, calories, weight, recommend, first }) => {
  const productTableItem = {
    title: title,
    category: category,
    calories: calories,
    weight: weight,
    recommend: recommend,
    first: first,
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //   const [state, setState] = useState({
  //     title: '',
  //     category: '',
  //     calories: '',
  //     weight: '',
  //     recomend: '',
  //     first: ''
  //   });

  // const dispatch = useDispatch();
  // const products = useSelector(getDiaryProducts);

  return (
    <>
      <div className={css.container}>
        <div className={clsx(css.element, css.titleElement)}>
          <p className={clsx(css.title, width > 767 && first !== 'true' && 'hidden')}>Title</p>
          <p className={css.field}>{productTableItem.title}</p>
        </div>

        <div className={clsx(css.element, css.categoriesElement)}>
          <p className={clsx(css.title, width > 767 && first !== 'true' && 'hidden')}>Category</p>
          <p className={css.field}>{productTableItem.category}</p>
        </div>

        <div className={css.blockWrap}>
          <div className={css.subBlockWrap}>
            <div className={clsx(css.element, css.caloriesElement)}>
              <p className={clsx(css.title, width > 767 && first !== 'true' && 'hidden')}>
                Calories
              </p>
              <p className={css.field}>{productTableItem.calories}</p>
            </div>

            <div className={clsx(css.element, css.weightElement)}>
              <p className={clsx(css.title, width > 767 && first !== 'true' && 'hidden')}>Weight</p>
              <p className={css.field}>{productTableItem.weight}</p>
            </div>

            <div className={clsx(css.element, css.recommendElement)}>
              <p className={clsx(css.title, width > 767 && first !== 'true' && 'hidden')}>
                Recommend
              </p>
              <p className={clsx(css.field, css.recommendField)}>
                <span
                  className={clsx(
                    css.recomendStatus,
                    recommend !== 'Yes' && css.recommendFalseColor,
                  )}
                >
                  {productTableItem.recommend}
                </span>
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
    </>
  );
};

ProductTableItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  recommend: PropTypes.string.isRequired,
  first: PropTypes.string,
};
