import ExercisesItem from 'components/ExercisesItem/ExercisesItem';
import React from 'react';
import styles from './ExercisesList.module.scss';

import { useSelector } from 'react-redux';

const ExercisesList = () => {
  const exercises = useSelector((state) => state.sports.exercises);
  console.log(exercises);

  return (
    <ul className={styles['exercise-list']}>
      {exercises.map((exercise) => {
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

export default ExercisesList;
