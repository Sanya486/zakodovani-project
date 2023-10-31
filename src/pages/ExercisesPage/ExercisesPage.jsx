import ExercisesCategories from 'components/ExercisesCategories/ExercisesCategories';
import ExercisesList from 'components/ExercisesList/ExercisesList';
import ExercisesSubcategoriesList from 'components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import TitlePage from 'components/TitlePage/TitlePage';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';
import styles from './ExercisesPage.module.scss';
import { selectExeciseFilter, selectExercises } from 'redux/selectors';
import { fetchExercisesByName, fetchExercisesTypes } from 'redux/operations';
import Container from 'components/Container/Container';
import BasicModalWindow from 'components/BasicModalWindow/BasicModalWindow';
import AddExerciseForm from 'components/AddExerciseForm/AddExerciseForm';
import AddExerciseSuccess from 'components/AddExerciseSuccess/AddExerciseSuccess';

const ExercisesPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectExeciseFilter);
  const exercises = useSelector(selectExercises);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedExercise, setAddedExercise] = useState(null);
  const [activeFilter, setActiveFilter] = useState('bodyParts');
  const [chosenCardName, setChosenCardName] = useState(null);
  const [showSuccess, setShowSuccess] = useState(null);

  const onSuccess = (time, burnedCalories) => {
    setShowSuccess({
      time,
      burnedCalories,
    });
  };

  const onModalCLose = () => {
    setIsModalOpen(false);
    setShowSuccess(null);
  };

  useEffect(() => {
    dispatch(fetchExercisesTypes());

    if (chosenCardName) {
      dispatch(fetchExercisesByName({ name: chosenCardName }));
    }
  }, [dispatch, chosenCardName]);

  const uniqueFilterValues = Object.keys(filters);

  const onBackBtnClick = () => {
    setChosenCardName(null);
  };

  return (
    <div>
      {!chosenCardName && (
        <Container>
          <div className={styles['category-flex']}>
            <TitlePage style={{ marginTop: '0px' }}>Exercises</TitlePage>
            <ExercisesCategories
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              filterValues={uniqueFilterValues}
              setChosenCard={setChosenCardName}
            />
          </div>

          <ExercisesSubcategoriesList
            activeFilter={activeFilter}
            setChosenCard={setChosenCardName}
            exerciseFilters={filters}
          />
        </Container>
      )}

      {chosenCardName && (
        <div className={styles['page-wrapper']}>
          <Container>
            <button
              type='button'
              onClick={() => onBackBtnClick()}
              className={styles['back-button']}
            >
              <svg className={styles['btn-svg']}>
                <use href={sprite + '#icon-back-arrow'}></use>
              </svg>{' '}
              <span className={styles['btn-text']}>Back</span>
            </button>

            <div className={styles['category-flex-secondary']}>
              <TitlePage>{chosenCardName}</TitlePage>
              <ExercisesCategories
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                filterValues={uniqueFilterValues}
                setChosenCard={setChosenCardName}
              />
            </div>

            <ExercisesList
              exerciseList={exercises}
              setIsModalOpen={setIsModalOpen}
              setAddedExercise={setAddedExercise}
            />
            {isModalOpen && (
              <BasicModalWindow onClose={onModalCLose}>
                {!showSuccess ? (
                  <AddExerciseForm data={addedExercise} onSuccess={onSuccess} />
                ) : (
                  <AddExerciseSuccess onClose={onModalCLose} data={showSuccess} />
                )}
              </BasicModalWindow>
            )}
          </Container>
        </div>
      )}
    </div>
  );
};

export default ExercisesPage;
