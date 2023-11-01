import React from 'react';
import css from './DayExercises.module.scss';
// import { selectDiaryExercises } from 'redux/selectors';

import ExercisesTable from 'components/ExercisesTable/ExercisesTable';
import { Link } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';

export const DayExercises = ({ exercises }) => {
  let empty = false;
  exercises.length === 0 ? (empty = true) : (empty = false);
  return (
    <>
      <div className={css.productsContainer}>
        <div className={css.headBlock}>
          <p className={css.headTitle}>Execrcises</p>
          <Link to='/exercises' className={css.headLink}>
            <div className={css.linkWraper}>
              <p>Add exercises</p>
              <svg className={css.icon}>
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </div>
          </Link>
        </div>
        {empty === false ? (
          <div className={css.productWrap}>
            <ExercisesTable exercises={exercises} />
          </div>
        ) : (
          <div className={css.resultInfoTextWrap}>
            <p className={css.resultInfoText}>Not found products</p>
          </div>
        )}
      </div>
    </>
  );
};
export default DayExercises;