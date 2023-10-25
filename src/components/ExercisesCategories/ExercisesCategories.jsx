import React from 'react';
import styles from './ExercisesCategories.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const ExercisesCategories = ({ activeFilter, setActiveFilter, filterValues }) => {
  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue);
  };

  return (
    <ul className={styles['category-list']}>
      {filterValues.map((filterValue) => (
        <li
          key={filterValue}
          onClick={() => handleFilterClick(filterValue)}
          className={clsx({
            [styles['active']]: filterValue === activeFilter,
            [styles['category-name']]: true,
          })}
        >
          {filterValue}
        </li>
      ))}
    </ul>
  );
};

export default ExercisesCategories;

ExercisesCategories.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired, 
  filterValues: PropTypes.arrayOf(PropTypes.string.isRequired)
}