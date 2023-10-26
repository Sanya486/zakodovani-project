import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExercisesSubcategoriesItem.module.scss';
// import clsx from 'clsx';
// import { SwiperSlide } from 'swiper/react';

const ExercisesSubcategoriesItem = ({ name, category, imageURL, handleClick }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(
      to right,
      rgba(4, 4, 4, 0.5),
      rgba(4, 4, 5, 0.5)
    ), url(${imageURL})`,
    backgroundSize: 'cover',
  };

  return (
    <div className={styles['exercise-card']} style={cardStyle} onClick={() => handleClick(name)}>
      <h3 className={styles['exercise-card-subcategory']}>{name}</h3>
      <p className={styles['exercise-card-category']}>{category}</p>
    </div>
  );
};

ExercisesSubcategoriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ExercisesSubcategoriesItem;
