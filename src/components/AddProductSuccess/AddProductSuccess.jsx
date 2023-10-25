import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import avocado from '../../images/food_icon.png';
import sprite from '../../images/svg/sprite.svg';
import css from './AddProductSuccess.module.scss';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';

const AddProductSuccess = ({ calories, onClose }) => {
  return (
    <div className={css.container}>
      <img src={avocado} alt='avocado' className={css.image} />
      <h2 className={css.title}>Well done</h2>
      <p className={css.text}>
        Calories: <span className={css.span}>{calories}</span>
      </p>
      <Link to='/products' onClick={onClose} className={css.buttonLink}>
        <Button title='Next product' classes={[css.button]} />
      </Link>
      <Link to='/diary' onClick={onClose}>
        <p className={clsx(css.text, css.link)}>
          To the diary
          <svg className={css.arrowIcon}>
            <use href={sprite + '#arrow_add_icon'}></use>
          </svg>
        </p>
      </Link>
    </div>
  );
};

export default AddProductSuccess;

AddProductSuccess.propTypes = {
  calories: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
