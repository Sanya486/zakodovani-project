import React from 'react';
import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import styles from './ExercisesSubcategoriesList.module.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//-Add OnClick logic

const ExercisesSubcategoriesList = ({ activeFilter }) => {
  const exerciseCards = useSelector((state) => state.sports.filter);

  const visibleCards = exerciseCards.filter((card) => card.filter === activeFilter);

  return (
    <ul className={styles['exercises-card-list']}>
      {visibleCards.map((filter) => (
        <ExercisesSubcategoriesItem
          key={filter._id.$oid}
          name={filter.name}
          category={filter.filter}
          imageURL={filter.imgURL}
        ></ExercisesSubcategoriesItem>
      ))}
    </ul>
  );
};

export default ExercisesSubcategoriesList;

ExercisesSubcategoriesList.propTypes = {
  activeFilter: PropTypes.string.isRequired,
};
