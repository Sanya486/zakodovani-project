import React from 'react';
import css from './ExercisesTableItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
import clsx from 'clsx';

import { selectExercises } from 'redux/selectors';
import { useSelector } from 'react-redux';


const ExercisesTableItem = (
  
) => {
  const exercises = useSelector(selectExercises);
  return (
    <div>
      <div className={clsx(css.bodybox)} key={exercises.key}>
        <div key={exercises.key}>
          <div>
            <h2 className={css.exercisename}>Body Part</h2>
            <h3 className={css.exercisetipe}>{exercises.bodyPart}</h3>
          </div>
          <div key={exercises.key}>
            <h2 className={css.exercisename}>Equipment</h2>
            <h3 className={css.exercisetipe}>{exercises.equipment}</h3>
          </div>
          <div key={exercises.key}>
            <h2 className={css.exercisename}>Name</h2>
            <h3 className={css.exercisetipe}>{exercises.name}</h3>
          </div>
          <div className={css.rowtext} key={exercises.key}>
            <div>
              <h2 className={css.exercisename}>Target</h2>
              <h3 className={css.exercisetipe}>{exercises.target}</h3>
            </div>
            <div key={exercises.key}>
              <h2 className={css.exercisename}>Burned Calories</h2>
              <h3 className={css.exercisetipe}>{exercises.burnedCalories}</h3>
            </div>
            <div key={exercises.key}>
              <h2 className={css.exercisename}>Time</h2>
              <h3 className={css.exercisetipe}>{exercises.time}</h3>
            </div>
            <svg className={css.icon}>
              <use href={sprite + '#trash_icon'}></use>
            </svg>
          </div>
        </div>
      </div>
      <tr key={exercises.key}>
        <td className={clsx(css.exercisetipe, css.extrabigwidth)}>{exercises.bodyPart}</td>
        <td className={clsx(css.exercisetipe, css.extrabigwidth)}>{exercises.equipment}</td>
        <td className={clsx(css.exercisetipe, css.extrabigwidth)}>{exercises.name}</td>
        <td className={clsx(css.exercisetipe, css.extrabigwidth)}>{exercises.target}</td>
        <td className={clsx(css.exercisetipe, css.extrasmallwidth)}>{exercises.burnedCalories}</td>
        <td className={css.exercisetipe}>{exercises.time}</td>
        <svg className={css.icon2}>
          <use href={sprite + '#trash_icon'}></use>
        </svg>
      </tr>
      ;
    </div>
  );
};



export default ExercisesTableItem;

// import React from 'react';
