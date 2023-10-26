import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import clsx from 'clsx';
import css from './InfoItem.module.scss';
import sprite from '../../images/svg/sprite.svg';

export const InfoItem = ({ name, value, variant }) => {
  let addClass = '';

  switch (variant) {
    case 'empty':
      addClass = css.firstVariant;
      break;
    case 'error':
      addClass = css.thirdVariant;
      break;
    case 'success':
      addClass = css.fourthVariant;
      break;
    default:
      addClass = css.firstVariant;
  }

  let addSvg = '';

  switch (name) {
    case 'Daily calorie intake':
      addSvg = '#fluent_food_icon';
      break;
    case 'Daily norm of sports':
      addSvg = '#dumbbell_icon';
      break;
    case 'Calories consumed':
      addSvg = '#fluent_food_apple_icon';
      break;
    case 'Calories burned':
      addSvg = '#fire_icon';
      break;
    case 'The rest of the calories':
      addSvg = '#bubble_icon';
      break;
    case 'The rest of sports':
      addSvg = '#running_stick_figure_icon';
      break;
    default:
      addSvg = '#fluent_food_icon';
  }

  return (
    // <div className={css.infoItemContainer}>
    <div className={clsx(css.infoItemContainer, addClass)}>
      <div className={css.wrap}>
        <svg className={css.icon}>
          <use href={sprite + addSvg}></use>
        </svg>
        <p className={css.itemName}>{name}</p>
      </div>
      <h2 className={css.itemValue}> {value}</h2>
    </div>
  );
};
