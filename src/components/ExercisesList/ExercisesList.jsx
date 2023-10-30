import ExercisesItem from 'components/ExercisesItem/ExercisesItem';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExercisesList.module.scss';

const ExercisesList = ({ exerciseList }) => {
  return (
    <ul className={styles['exercise-list']}>
      {exerciseList.map((exercise) => {
        const { _id, name, burnedCalories, bodyPart, target } = exercise;
        return (
          <ExercisesItem
            key={_id}
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
  exerciseList: PropTypes.array.isRequired,
};

export default ExercisesList;
