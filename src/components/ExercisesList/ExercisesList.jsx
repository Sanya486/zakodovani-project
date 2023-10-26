import ExercisesItem from 'components/ExercisesItem/ExercisesItem';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExercisesList.module.scss';

import { useSelector } from 'react-redux';

const ExercisesList = ({ chosenExercise }) => {
  const exercises = useSelector((state) => state.sports.exercises);
  console.log(chosenExercise);

  const visibleExercises = exercises.filter((exercise) => exercise.bodyPart === chosenExercise);

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
