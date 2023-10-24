import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExercisesItem.module.scss';
import sprite from '../../images/svg/sprite.svg';

const ExercisesItem = ({
  key,
  exerciseType = 'Air Bike',
  calories = 312,
  bodyPart = 'Waist',
  targetMuscle = 'Abs',
}) => {
  return (
    <li className={styles['exercise-item-block']}>
      <div className={styles['top-flex']}>
        <p className={styles['workout-tag']}>workout</p>

        <button type='button' className={styles['start-button']}>
          Start
          <svg className={styles['arrow-svg']}>
            <use href={sprite + '#arrow_add_icon'}></use>
          </svg>
        </button>
      </div>

      <div className={styles['middle-flex']}>
        <svg className={styles['running-svg']}>
          <use href={sprite + '#running_stick_figure_icon'}></use>
        </svg>

        <h3 className={styles['exercise-name']}>{exerciseType}</h3>
      </div>

      <ul className={styles['stats-list']}>
        <li className={styles['stat-item']}>
          Burned calories: <span className={styles['stat-item-value']}>{calories}</span>
        </li>
        <li className={styles['stat-item']}>
          Body part: <span className={styles['stat-item-value']}>{bodyPart}</span>
        </li>
        <li className={styles['stat-item']}>
          Target: <span className={styles['stat-item-value']}>{targetMuscle}</span>
        </li>
      </ul>
    </li>
  );
};

ExercisesItem.propTypes = {
  key: PropTypes.string.isRequired,
  exerciseType: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  bodyPart: PropTypes.string.isRequired,
  targetMuscle: PropTypes.string.isRequired,
};

export default ExercisesItem;
