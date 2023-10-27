import React, { useEffect } from 'react';
import css from './DayExercises.module.scss';
// import { selectDiaryExercises } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ExercisesTable from 'components/ExercisesTable/ExercisesTable';
import { Link } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';
import { selectExercises } from 'redux/selectors';
import { fetchDiaryDateInfo } from 'redux/operations';

const DayExercises = () => {
  // const exercises = useSelector(selectDiaryExercises);
  const dispatch = useDispatch();
  const exercises = useSelector(selectExercises);

  useEffect(() => {
    dispatch(fetchDiaryDateInfo(
       "2003-10-10"
    ));
  }, [dispatch]);

  console.log(exercises);
  if (exercises.length === 0) {
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
        <div className={css.emptycontainer}>
          <h3 className={css.exercisesepmty}>Not found exercises</h3>
        </div>
      </div>
    );
  } else {
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
        <ExercisesTable />
      </div>
    );
  }
};

export default DayExercises;
