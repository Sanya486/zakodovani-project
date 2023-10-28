import ExercisesCategories from 'components/ExercisesCategories/ExercisesCategories';
import ExercisesList from 'components/ExercisesList/ExercisesList';
import ExercisesSubcategoriesList from 'components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import TitlePage from 'components/TitlePage/TitlePage';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';
import styles from './ExercisesPage.module.scss';
import { selectExeciseFilter, selectExercises } from 'redux/selectors';
import { fetchExercises, fetchExercisesTypes } from 'redux/operations';

const ExercisesPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectExeciseFilter);
  const exercises = useSelector(selectExercises);

  console.log(filters);
  console.log(exercises);

  useEffect(() => {
    dispatch(fetchExercisesTypes());
    dispatch(fetchExercises());
  }, [dispatch]);

  const uniqueFilterValues = Object.keys(filters);
  // console.log(uniqueFilterValues);

  const [activeFilter, setActiveFilter] = useState('bodyParts');
  const [chosenCardName, setChosenCardName] = useState(null);
  console.log(activeFilter);

  const onBackBtnClick = () => {
    setChosenCardName(null);
  };

  return (
    <div>
      {!chosenCardName && (
        <>
          <div className={styles['category-flex']}>
            <TitlePage style={{ marginTop: '0px' }}>Exercises</TitlePage>
            <ExercisesCategories
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              filterValues={uniqueFilterValues}
            />
          </div>

          <ExercisesSubcategoriesList
            activeFilter={activeFilter}
            setChosenCard={setChosenCardName}
            exerciseFilters={filters}
          />
        </>
      )}

      {chosenCardName && (
        <div className={styles['main']}>
          <button type='button' onClick={() => onBackBtnClick()} className={styles['back-button']}>
            <svg style={{ fill: 'orange', stroke: 'orange', width: '16px', height: '16px' }}>
              <use href={sprite + '#icon-back-arrow'}></use>
            </svg>{' '}
            Back
          </button>
          <div className={styles['category-flex-secondary']}>
            <TitlePage>{chosenCardName}</TitlePage>
            <ExercisesCategories
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              filterValues={uniqueFilterValues}
            />
          </div>
          <ExercisesList
            chosenExercise={chosenCardName}
            exerciseList={exercises}
            activeFilter={activeFilter}
          />
        </div>
      )}
    </div>
  );
};

// ExercisesPage.propTypes = {

// }

export default ExercisesPage;
