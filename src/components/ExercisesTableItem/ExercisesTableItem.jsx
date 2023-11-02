import React, { useState, useEffect } from 'react';
import css from './ExercisesTableItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
import clsx from 'clsx';
import { fetchDeleteExercise, fetchDiaryDateInfo } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentData } from 'redux/selectors';

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

  const currentDate = useSelector(selectCurrentData);

  const dispatch = useDispatch();

  const onDeleteProduct = (id) => {
    dispatch(fetchDeleteExercise(id));
    setTimeout(()=>  dispatch(fetchDiaryDateInfo(currentDate)), 3000)
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
          <div className={clsx(css.element, css.titleElement)}>
            <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Body Part</p>
            <p className={css.elementField}>{bodyPart}</p>
          </div>

          <div className={clsx(css.element, css.categoriesElement)}>
            <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Equipment</p>
            <p className={css.elementField}>{equipment}</p>
          </div>

          <div className={clsx(css.element, css.categoriesElement)}>
            <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Name</p>
            <p className={css.elementField}>{name}</p>
          </div>

          <div className={css.blockWrap}>
            <div className={css.subBlockWrap}>
              <div className={clsx(css.element, css.recommendElement)}>
                <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>Target</p>
                <p className={css.elementField}>{target}</p>
              </div>

              <div className={clsx(css.element, css.caloriesElement)}>
                <p className={clsx(css.title, width > 767 && first !== true && 'hidden')}>
                  Burned Calories
                </p>
                <p className={css.elementField}>{burnedCalories}</p>
              </div>

              <div className={clsx(css.element, css.weightElement)}>
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
