import React from 'react';
import css from './ExercisesTableItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
import clsx from 'clsx';
import { fetchDeleteExercise } from 'redux/operations';
import { useDispatch } from 'react-redux';

const ExercisesTableItem = ({ id, bodyPart, equipment, name, target, time, burnedCalories }) => {
  const dispatch = useDispatch();

  const onDeleteExercise = (id) => {
    dispatch(fetchDeleteExercise(id));
  };

  const deleteHandler = () => {
    onDeleteExercise(id);
  };

  return (
    <>
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
          <div className={css.rowtext}>
            <div className={css.subrowtext}>
              <h2 className={css.exercisename}>Target</h2>
              <h3 className={css.exercisetipe}>{target}</h3>
            </div>
            <div className={css.subrowtext}>
              <h2 className={css.exercisename}>Burned Calories</h2>
              <h3 className={css.exercisetipe}>{burnedCalories}</h3>
            </div>
            <div className={css.subrowtext}>
              <h2 className={css.exercisename}>Time</h2>
              <h3 className={css.exercisetipe}>{time}</h3>
            </div>
            <svg className={css.icon} onClick={deleteHandler}>
              <use href={sprite + '#trash_icon'}></use>
            </svg>
          </div>
        </div>
      </div>
      <tr className={clsx(css.exercisestablebody, css.tablehide)}>
        <td className={css.exercisetipe}>{bodyPart}</td>
        <td className={css.exercisetipe}>{equipment}</td>
        <td className={css.exercisetipe}>{name}</td>
        <td className={css.exercisetipe}>{target}</td>
        <td className={css.exercisetipe}>{burnedCalories}</td>
        <td className={css.exercisetipe}>{time}</td>
        <svg className={css.icon2} onClick={deleteHandler}>
          <use href={sprite + '#trash_icon'}></use>
        </svg>
      </tr>
    </>
  );
};

export default ExercisesTableItem;
