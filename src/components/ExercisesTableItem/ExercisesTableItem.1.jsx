import React from 'react';
import css from './ExercisesTableItem.module.scss';
import { selectExercises } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ExercisesTableItem = () => {
  const exercises = useSelector(selectExercises);

  console.log(exercises);

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
        {exercises.map(({ key, bodyPart, equipment, name, target, burnedCalories, time }) => (
          <div className={css.bodybox} key={key}>
            <div className={css.container}>
              <h2 className={css.exercisetitle}>Execrcises</h2>
              <h2 className={css.addexercisetitle}>Add exercises </h2>
            </div>
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
            </div>
          </div>
        ))}
      </div>
    );
  }
};
