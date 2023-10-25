import React from 'react';
import css from './DayExercises.module.scss';
import { selectExercises } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ExercisesTable from 'components/ExercisesTable/ExercisesTable';

const DayExercises = () => {
  const exercises = useSelector(selectExercises);
  if (exercises.length === 0) {
    return (
      <div className={css.bodybox}>
        <div className={css.container}>
          <h3 className={css.exercisesepmty}>Not found exercises</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className={css.bodybox}>
        <div className={css.container}>
          <h2 className={css.exercisetitle}>Execrcises</h2>
          <h2 className={css.addexercisetitle}>Add exercises </h2>
        </div>
        <ExercisesTable />
      </div>
    );
  }
};

export default DayExercises;
