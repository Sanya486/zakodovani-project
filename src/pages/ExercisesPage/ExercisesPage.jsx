import ExercisesCategories from 'components/ExercisesCategories/ExercisesCategories';
import ExercisesList from 'components/ExercisesList/ExercisesList';
import ExercisesSubcategoriesList from 'components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import TitlePage from 'components/TitlePage/TitlePage';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';

// import PropTypes from 'prop-types'

const ExercisesPage = () => {
  const filters = useSelector((state) => state.sports.filter);

  const uniqueFilterValues = [...new Set(filters.map((filter) => filter.filter))];

  const [activeFilter, setActiveFilter] = useState(uniqueFilterValues[0]);
  const [chosenCardName, setChosenCardName] = useState(null);

  const onBackBtnClick = () => {
    setChosenCardName(null);
  };

  return (
    <div>
      {!chosenCardName && (
        <>
          <TitlePage>Exercises</TitlePage>
          <ExercisesCategories
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            filterValues={uniqueFilterValues}
          />

          <ExercisesSubcategoriesList
            activeFilter={activeFilter}
            setChosenCard={setChosenCardName}
          />
        </>
      )}

      {chosenCardName && (
        <>
          <button type='button' onClick={() => onBackBtnClick()}>
            Back
            <svg style={{ fill: 'orange', stroke: 'orange', display: 'inline-block' }}>
              <use href={sprite + '#icon-back-arrow'}></use>
            </svg>
          </button>
          <ExercisesCategories
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            filterValues={uniqueFilterValues}
          />
          <TitlePage>{chosenCardName}</TitlePage>
          <ExercisesList chosenExercise={chosenCardName} />
        </>
      )}
    </div>
  );
};

// ExercisesPage.propTypes = {

// }

export default ExercisesPage;
