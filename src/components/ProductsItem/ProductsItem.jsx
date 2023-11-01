import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ProductsItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
import BasicModalWindow from 'components/BasicModalWindow/BasicModalWindow';
import AddProductForm from 'components/AddProductForm/AddProductForm';
import AddProductSuccess from 'components/AddProductSuccess/AddProductSuccess';

export const ProductsItem = ({ product, recomendeProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [calories, setCalories] = useState(0);

  const handleSuccess = (calculatedCalories) => {
    setCalories(calculatedCalories);
    setShowSuccess(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setShowSuccess(false);
  };

  return (
    <div className={css.itemContainer}>
      <div className={css.wrap}>
        <div className={css.itemTop}>
          <div className={css.diet}>
            <span>DIET</span>
          </div>
          <div className={css.itemTopRight}>
            <span
              className={clsx(
                css.indicator,
                recomendeProduct ? css.greenIndicator : css.redIndicator,
              )}
            />
            <span className={css.recommendText}>
              {recomendeProduct ? 'Recommended' : 'Not recommended'}
            </span>
            <button onClick={() => setIsModalOpen(true)} className={css.addBtn}>
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
            <p className={css.mainText}>{product.title}</p>
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
      {isModalOpen && (
        <BasicModalWindow onClose={handleClose}>
          {!showSuccess ? (
            <AddProductForm
              data={{ _id: product._id, title: product.title, calories: product.calories }}
              onClose={handleClose}
              onSuccess={handleSuccess}
            />
          ) : (
            <AddProductSuccess calories={calories} onClose={handleClose} />
          )}
        </BasicModalWindow>
      )}
    </div>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.shape({
<<<<<<< HEAD
    title: PropTypes.string.isRequired,
=======
>>>>>>> f129874f2a45d48afe3f5b6c917f962722fee977
    calories: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
