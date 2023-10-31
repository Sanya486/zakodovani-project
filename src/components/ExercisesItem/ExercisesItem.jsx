import React from 'react';
import PropTypes from 'prop-types';

import styles from './ExercisesItem.module.scss';
import sprite from '../../images/svg/sprite.svg';

const ExercisesItem = ({ exercise, setIsModalOpen, setAddedExercise }) => {
  const onStartClick = () => {
    setIsModalOpen(true);
    setAddedExercise(exercise);
  };

  return (
    <li className={styles['exercise-item-block']}>
      <div className={styles['top-flex']}>
        <p className={styles['workout-tag']}>workout</p>

        <button type='button' className={styles['start-button']} onClick={() => onStartClick()}>
          Start
          <svg className={styles['arrow-svg']}>
            <use href={sprite + '#icon-arrow-right'}></use>
          </svg>
        </button>
      </div>

      <div className={styles['middle-flex']}>
        <svg className={styles['running-svg']}>
          <use href={sprite + '#running_stick_figure_icon'}></use>
        </svg>

        <h3 className={styles['exercise-name']}>{exercise.name}</h3>
      </div>

      <ul className={styles['stats-list']}>
        <li className={styles['stat-item']}>
          Burned calories:{' '}
          <span className={styles['stat-item-value']}>{exercise.burnedCalories}</span>
        </li>
        <li className={styles['stat-item']}>
          Body part: <span className={styles['stat-item-value']}>{exercise.bodyPart}</span>
        </li>
        <li className={styles['stat-item']}>
          Target: <span className={styles['stat-item-value']}>{exercise.target}</span>
        </li>
      </ul>
    </li>
  );
};

ExercisesItem.propTypes = {
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    burnedCalories: PropTypes.number.isRequired,
    bodyPart: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  }).isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  setAddedExercise: PropTypes.func.isRequired,
};

export default ExercisesItem;
