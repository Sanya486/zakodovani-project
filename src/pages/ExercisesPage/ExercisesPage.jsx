import ExercisesCategories from 'components/ExercisesCategories/ExercisesCategories';
import ExercisesSubcategoriesList from 'components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types'

const ExercisesPage = () => {
  const filters = useSelector((state) => state.sports.filter);

  const uniqueFilterValues = [...new Set(filters.map((filter) => filter.filter))];

  const [activeFilter, setActiveFilter] = useState(uniqueFilterValues[0]);

  return (
    <>
      <ExercisesCategories
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filterValues={uniqueFilterValues}
      />
      <ExercisesSubcategoriesList activeFilter={activeFilter} />
    </>
  );
};

// ExercisesPage.propTypes = {

// }

export default ExercisesPage;
