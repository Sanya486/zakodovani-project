import React from 'react';
import styles from './ExercisesCategories.module.scss';
import clsx from 'clsx';

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
