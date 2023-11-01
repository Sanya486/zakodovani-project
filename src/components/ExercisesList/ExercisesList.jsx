import ExercisesItem from 'components/ExercisesItem/ExercisesItem';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExercisesList.module.scss';

const ExercisesList = ({ exerciseList, setIsModalOpen, setAddedExercise }) => {
  return (
    <ul className={styles['exercise-list']}>
      {exerciseList.map((exercise) => {
        return (
          <ExercisesItem
            key={exercise._id}
            exercise={exercise}
            setIsModalOpen={setIsModalOpen}
            setAddedExercise={setAddedExercise}
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
