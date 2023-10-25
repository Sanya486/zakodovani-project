import React from 'react';
import css from './UserCard.module.scss';
import sprite from '../../images/svg/sprite.svg';
const UserCard = () => {
  return (
    <>
      <div className={css['group']}>
        <div className={css['conteiner']}>
          <p className={css['text']}>
            <span className={css['spans']}>
              <svg className={css['fork']}>
                <use href={sprite + '#fluent_food_icon'}></use>
              </svg>
            </span>
            Daily calorie intake
          </p>
          <span className={css.span1}>0</span>
        </div>

        <div className={css['conteiner']}>
          <p className={css['text']}>
            <span className={css['spans']}>
              <svg className={css['gym']}>
                <use href={sprite + '#dumbbell_icon'}></use>
              </svg>
            </span>
            Daily norm of sports
          </p>
          <span className={css.span2}>0 min</span>
        </div>
      </div>
      <div className={css.dang}>
        <span>
          <svg className={css['mark_icon']}>
            <use href={sprite + '#exclamation_mark_icon'}></use>
          </svg>
        </span>
        <p className={css.textDang}>
          We understand that each individual is unique, so the entire approach to diet is relative
          and tailored to your unique body and goals.
        </p>
      </div>
    </>
  );
};
export default UserCard;
