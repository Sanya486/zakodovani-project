import React, { useState, useEffect } from 'react';
import css from './ExercisesTableItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
import clsx from 'clsx';
import { fetchDeleteExercise } from 'redux/operations';
import { useDispatch } from 'react-redux';
const ExercisesTableItem = ({
  id,
  bodyPart,
  equipment,
  name,
  target,
  time,
  burnedCalories,
  first,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const onDeleteProduct = (id) => {
    dispatch(fetchDeleteExercise(id));
  };
  const deleteHandler = () => {
    onDeleteProduct(id);
  };
  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <>
        <div className={css.container}>
          <div className={clsx(css.element, css.bodyPartsElement)}>
            <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Body Part</p>
            <p className={css.elementField}>{bodyPart}</p>
          </div>
          <div className={clsx(css.element, css.equipmentElement)}>
            <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Equipment</p>
            <p className={css.elementField}>{equipment}</p>
          </div>
          <div className={clsx(css.element, css.nameElement)}>
            <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Name</p>
            <p className={css.elementField}>{name}</p>
          </div>
          <div className={css.blockWrap}>
            <div className={css.subBlockWrap}>
              <div className={clsx(css.element, css.targetElement)}>
                <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Target</p>
                <p className={css.elementField}>{target}</p>
              </div>
              <div className={clsx(css.element, css.burnedCaloriesElement)}>
                <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>
                  Burned Calories
                </p>
                <p className={css.elementField}>{burnedCalories}</p>
              </div>
              <div className={clsx(css.element, css.timeElement)}>
                <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Time</p>
                <p className={css.elementField}>{time}</p>
              </div>
            </div>
            <div className={css.buttonWrap}>
              <button type='click' className={css.button} onClick={deleteHandler}>
                <svg className={css.icon}>
                  <use href={sprite + '#trash_icon'}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ExercisesTableItem;