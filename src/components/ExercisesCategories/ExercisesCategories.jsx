import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ExercisesCategories.module.scss';
import clsx from 'clsx';

const ExercisesCategories = () => {
  const filters = useSelector((state) => state.sports.filter);

  const uniqueFilterValues = [...new Set(filters.map((filter) => filter.filter))];
  const [activeFilter, setActiveFilter] = useState(uniqueFilterValues[0]);

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue);
  };

  return (
    <ul className={styles['category-list']}>
      {uniqueFilterValues.map((filterValue) => (
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
