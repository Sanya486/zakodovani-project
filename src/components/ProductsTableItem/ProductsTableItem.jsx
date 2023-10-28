import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import css from './ProductsTableItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
import { clsx } from 'clsx';

import { useDispatch } from 'react-redux';
import { fetchDeleteProduct } from 'redux/operations';

export const ProductTableItem = ({ id, title, category, calories, weight, recommend, first }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  const onDeleteProduct = (id) => {
    dispatch(fetchDeleteProduct(id));
  };

  const deleteHandler = () => {
    onDeleteProduct(id);
  };

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={css.container}>
        <div className={clsx(css.element, css.titleElement)}>
          <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Title</p>
          <p className={css.elementField}>{title}</p>
        </div>

        <div className={clsx(css.element, css.categoriesElement)}>
          <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Category</p>
          <p className={css.elementField}>{category}</p>
        </div>

        <div className={css.blockWrap}>
          <div className={css.subBlockWrap}>
            <div className={clsx(css.element, css.caloriesElement)}>
              <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Calories</p>
              <p className={css.elementField}>{calories}</p>
            </div>

            <div className={clsx(css.element, css.weightElement)}>
              <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Weight</p>
              <p className={css.elementField}>{weight}</p>
            </div>

            <div className={clsx(css.element, css.recommendElement)}>
              <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>
                Recommend
              </p>
              <p className={clsx(css.elementField, css.recommendField)}>
                <span
                  className={clsx(
                    css.recomendStatus,
                    recommend !== 'Yes' && css.recommendFalseColor,
                  )}
                >
                  {recommend}
                </span>
              </p>
            </div>
          </div>

          <div className={css.buttonWrap}>
            <button type='submit' className={css.button} onClick={deleteHandler}>
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
  first: PropTypes.bool.isRequired,
};
