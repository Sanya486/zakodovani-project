import React from 'react';
import css from './ExercisesTableItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
import clsx from 'clsx';

const ExercisesTableItem = ({ key, bodyPart, equipment, name, target, burnedCalories, time }) => {
  return (
    <>
      <tr className={clsx(css.exercisestablebody, css.tablehide)}>
        <td className={clsx(css.exercisetipe, css.extrabigwidth)}>{bodyPart}</td>
        <td className={clsx(css.exercisetipe, css.extrabigwidth)}>{equipment}</td>
        <td className={clsx(css.exercisetipe, css.extrabigwidth)}>{name}</td>
        <td className={clsx(css.exercisetipe, css.extrabigwidth)}>{target}</td>
        <td className={clsx(css.exercisetipe, css.extrasmallwidth)}>{burnedCalories}</td>
        <td className={css.exercisetipe}>{time}</td>
        <svg className={css.icon2}>
          <use href={sprite + '#trash_icon'}></use>
        </svg>
      </tr>

      <div className={clsx(css.bodybox)}>
        <div>
          <div>
            <h2 className={css.exercisename}>Body Part</h2>
            <h3 className={css.exercisetipe}>{bodyPart}</h3>
          </div>
          <div>
            <h2 className={css.exercisename}>Equipment</h2>
            <h3 className={css.exercisetipe}>{equipment}</h3>
          </div>
          <div>
            <h2 className={css.exercisename}>Name</h2>
            <h3 className={css.exercisetipe}>{name}</h3>
          </div>
          <div className={css.rowtext} key={key}>
            <div>
              <h2 className={css.exercisename}>Target</h2>
              <h3 className={css.exercisetipe}>{target}</h3>
            </div>
            <div>
              <h2 className={css.exercisename}>Burned Calories</h2>
              <h3 className={css.exercisetipe}>{burnedCalories}</h3>
            </div>
            <div>
              <h2 className={css.exercisename}>Time</h2>
              <h3 className={css.exercisetipe}>{time}</h3>
            </div>
            <svg className={css.icon}>
              <use href={sprite + '#trash_icon'}></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExercisesTableItem;

// import React from 'react';
