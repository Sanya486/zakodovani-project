import ExercisesItem from 'components/ExercisesItem/ExercisesItem';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExercisesList.module.scss';

const ExercisesList = ({ chosenExercise, exerciseList, activeFilter }) => {
  console.log(chosenExercise);
  console.log(exerciseList);

  const getVisibleExercises = () => {
    if (activeFilter === 'bodyParts') {
      return exerciseList.filter((exercise) => exercise.bodyPart === chosenExercise);
    } else if (activeFilter === 'equipment') {
      return exerciseList.filter((exercise) => exercise.equipment === chosenExercise);
    } else if (activeFilter === 'muscules') {
      return exerciseList.filter((exercise) => exercise.target === chosenExercise);
    }
  };

  const visibleExercises = getVisibleExercises();

  return (
    <ul className={styles['exercise-list']}>
      {visibleExercises.map((exercise) => {
        const { _id, name, burnedCalories, bodyPart, target } = exercise;
        return (
          <ExercisesItem
            key={_id.$oid}
            exerciseType={name}
            calories={burnedCalories}
            bodyPart={bodyPart}
            targetMuscle={target}
          />
        );
      })}
    </ul>
  );
};

ExercisesList.propTypes = {
  chosenExercise: PropTypes.string.isRequired,
};

export default ExercisesList;
