import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import thumbUp from '../../images/thumb_up.png';
import sprite from '../../images/svg/sprite.svg';
import css from './AddExerciseSuccess.module.scss';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';

const AddExerciseSuccess = ({ data, onClose }) => {
  const { time, burnedCalories } = data;
  return (
    <div className={css.container}>
      <img src={thumbUp} alt='thumb up' className={css.image} />
      <h2 className={css.title}>Well done</h2>
      <div className={css.infoText}>
        <p className={css.text}>
          Your time: <span className={css.span}>{time}</span>
        </p>
        <p className={css.text}>
          Burned calories:
          <span className={css.span}>{burnedCalories}</span>
        </p>
      </div>
      <Link to='/exercises' onClick={onClose} className={css.buttonLink}>
        <Button title='Next exercise' classes={[css.button]} />
      </Link>
      <Link to='/diary' onClick={onClose}>
        <p className={clsx(css.text, css.link)}>
          To the diary
          <svg className={css.arrowIcon}>
            <use href={sprite + '#arrow_add_icon'}></use>
          </svg>
        </p>
      </Link>
    </div>
  );
};

export default AddExerciseSuccess;

AddExerciseSuccess.propTypes = {
  data: PropTypes.shape({
    time: PropTypes.string.isRequired,
    burnedCalories: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
