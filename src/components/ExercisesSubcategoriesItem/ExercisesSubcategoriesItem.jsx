import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExercisesSubcategoriesItem.module.scss';

const ExercisesSubcategoriesItem = ({ key, name, category, imageURL }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(
      to right,
      rgba(4, 4, 4, 0.5),
      rgba(4, 4, 5, 0.5)
    ), url(${imageURL})`,
    backgroundSize: 'cover',
  };

  return (
    <li key={key} className={styles['exercise-card']} style={cardStyle}>
      <h3 className={styles['exercise-card-subcategory']}>{name}</h3>
      <p className={styles['exercise-card-category']}>{category}</p>
    </li>
  );
};

ExercisesSubcategoriesItem.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ExercisesSubcategoriesItem;
