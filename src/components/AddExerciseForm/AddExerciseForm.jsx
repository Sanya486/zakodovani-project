import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './AddExerciseForm.module.scss';
import sprite from '../../images/svg/sprite.svg';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { fetchDiarySaveExercise } from 'redux/operations';
import toast from 'react-hot-toast';

const AddExerciseForm = ({ data, onSuccess }) => {
  const { _id, bodyPart, equipment, gifUrl, name, target, burnedCalories, time } = data;

  const [currentTime, setCurrentTime] = useState(time * 60);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();

  const toggleIsPlaying = () => {
    setIsPlaying(!isPlaying);
  };

  const calculatedCalories = Math.floor((currentTime / 60) * (burnedCalories / 3));

  const handleAddToDiary = () => {
    if (!calculatedCalories) {
      return;
    }

    dispatch(
      fetchDiarySaveExercise({
        exercise: _id,
        time: currentTime,
        calories: calculatedCalories,
      }),
    )
      .then(onSuccess(currentTime, calculatedCalories))
      .catch((error) => {
        toast(error.message);
      });
  };

  const renderTime = ({ remainingTime }) => {
    setCurrentTime(time * 60 - remainingTime);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return (
      <div className={css.remainingTime} role='timer' aria-live='assertive'>
        {formattedMinutes}:{formattedSeconds}
      </div>
    );
  };

  return (
    <div className={css.container}>
      <div className={css.leftContainer}>
        <div className={css.gifWrapper}>
          <img src={gifUrl} alt={name} className={css.gif} />
        </div>
        <div className={css.timer}>
          <p className={css.timerTitle}>Time</p>
          <div className={css.timerWrapper}>
            <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={time * 60}
              colors={'#e6533c'}
              size={125}
              strokeWidth={4}
              trailColor={'#262625'}
              strokeLinecap='round'
              rotation={-1}
            >
              {({ remainingTime }) => renderTime({ remainingTime })}
            </CountdownCircleTimer>
          </div>
          <button type='button' className={css.timerButton} onClick={toggleIsPlaying}>
            <svg className={css.timerButtonIcon}>
              <use href={isPlaying ? `${sprite}#pause_square_icon` : `${sprite}#play_icon`} />
            </svg>
          </button>
          <p className={css.calories}>
            Burned calories: <span className={css.caloriesSpan}>{calculatedCalories}</span>
          </p>
        </div>
      </div>
      <div className={css.rightContainer}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <p className={css.itemTitle}>Name</p>
            <p className={css.itemValue}>{name}</p>
          </li>
          <li className={css.listItem}>
            <p className={css.itemTitle}>Target</p>
            <p className={css.itemValue}>{target}</p>
          </li>
          <li className={css.listItem}>
            <p className={css.itemTitle}>Body Part</p>
            <p className={css.itemValue}>{bodyPart}</p>
          </li>
          <li className={css.listItem}>
            <p className={css.itemTitle}>Equipment</p>
            <p className={css.itemValue}>{equipment}</p>
          </li>
        </ul>
        <div className={css.buttonContainer}>
          <Button title='Add to diary' classes={[css.button]} onClick={handleAddToDiary} />
        </div>
      </div>
    </div>
  );
};

export default AddExerciseForm;

AddExerciseForm.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    burnedCalories: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
  onSuccess: PropTypes.func.isRequired,
};
