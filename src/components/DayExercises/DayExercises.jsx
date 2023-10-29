import React from 'react';
import css from './DayExercises.module.scss';
// import { selectDiaryExercises } from 'redux/selectors';

import ExercisesTable from 'components/ExercisesTable/ExercisesTable';
import { Link } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';



const DayExercises = ({ exercises }) => {
  console.log(exercises);
  return (
    <div className={css.bodybox}>
      <div className={css.container}>
        <h2 className={css.exercisetitle}>Execrcises</h2>
        <Link to='/exercises' className={`${css.addexercisetitle} ${css.linkStyles}`}>
          Add exercises
          <svg className={css.iconarrow}>
            <use href={sprite + '#arrow_add_icon'}></use>
          </svg>
        </Link>
      </div>
      <ExercisesTable exercises={exercises} />
    </div>
  );
};


export default DayExercises;
