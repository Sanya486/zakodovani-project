import React from 'react';
import css from './ExercisesTableItem.module.scss';
import { selectExercises } from 'redux/selectors';
import { useSelector } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';
import clsx from 'clsx';

const ExercisesTableItem = ({ key, bodyPart, equipment, name, target, burnedCalories, time }) => {
  const exercises = useSelector(selectExercises);

  if (exercises.length === 0) {
    return (
      <div className={css.bodybox}>
        <div className={css.container}>
          <h3>Not found exercises</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        
        {/* mobile show */}
        <div className={clsx(css.bodybox)} key={key}>
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
            <div className={css.rowtext}>
              <div className={css.rowtextitems}>
                <h2 className={css.exercisename}>Target</h2>
                <h3 className={css.exercisetipe}>{target}</h3>
              </div>
              <div className={css.rowtextitems}>
                <h2 className={css.exercisename}>Burned Calories</h2>
                <h3 className={css.exercisetipe}>{burnedCalories}</h3>
              </div>
              <div className={css.rowtextitems}>
                <h2 className={css.exercisename}>Time</h2>
                <h3 className={css.exercisetipe}>{time}</h3>
              </div>
              <svg className={css.icon}>
                <use href={sprite + '#trash_icon'}></use>
              </svg>
            </div>
          </div>
        </div>

        {/* desk and tablet */}
        <div className={clsx(css.bodyboxTable, css.ishidden)}>
          <table className={css.exercisestablehead}>
            <thead>
              <tr className={css.exercisename}>
                <th>Body Part</th>
                <th>Equipment</th>
                <th>Name</th>
                <th>Target</th>
                <th>Burned Calories</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr key={key}>
                <td className={css.exercisetipe}>{bodyPart}</td>
                <td className={css.exercisetipe}>{equipment}</td>
                <td className={css.exercisetipe}>{name}</td>
                <td className={css.exercisetipe}>{target}</td>
                <td className={css.exercisetipe}>{burnedCalories}</td>
                <td className={css.exercisetipe}>{time}</td>
                <svg className={css.icon2}>
                  <use href={sprite + '#trash_icon'}></use>
                </svg>
              </tr>
            </tbody>
          </table>
        </div>
        ;
      </div>
    );
  }
};

export default ExercisesTableItem;

// import React from 'react';
