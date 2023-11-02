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
          <div className={clsx(css.element1, css.bodyPartsElement)}>
            <p className={clsx(css.title1, width > 767 && first !== true && 'hidden')}>Body Part</p>
            <p className={css.elementField1}>{bodyPart}</p>
          </div>
          <div className={clsx(css.element1, css.equipmentElement)}>
            <p className={clsx(css.title1, width > 767 && first !== true && 'hidden')}>Equipment</p>
            <p className={css.elementField1}>{equipment}</p>
          </div>
          <div className={clsx(css.element1, css.nameElement)}>
            <p className={clsx(css.title1, width > 767 && first !== true && 'hidden')}>Name</p>
            <p className={css.elementField1}>{name}</p>
          </div>
          <div className={css.blockWrap1}>
            <div className={css.subBlockWrap1}>
              <div className={clsx(css.element1, css.targetElement)}>
                <p className={clsx(css.title1, width > 767 && first !== true && 'hidden')}>
                  Target
                </p>
                <p className={css.elementField1}>{target}</p>
              </div>
              <div className={clsx(css.element1, css.burnedCaloriesElement)}>
                <p className={clsx(css.title1, width > 767 && first !== true && 'hidden')}>
                  Burned Calories
                </p>
                <p className={css.elementField1}>{burnedCalories}</p>
              </div>
              <div className={clsx(css.element1, css.timeElement)}>
                <p className={clsx(css.title1, width > 767 && first !== true && 'hidden')}>Time</p>
                <p className={css.elementField1}>{time}</p>
              </div>
            </div>
            <div className={css.buttonWrap1}>
              <button type='click' className={css.button1} onClick={deleteHandler}>
                <svg className={css.icon1}>
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
