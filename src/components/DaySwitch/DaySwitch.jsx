import React, { useEffect } from 'react';
import sprite from '../../images/svg/sprite.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import css from './DaySwitch.module.scss';
import { useState } from 'react';
import formattingDate from './formattingDate';
import customWeekdayFormatter from './ustomWeekdayFormatter';
import { useSelector } from 'react-redux';
import { selectName } from 'redux/selectors';

const DaySwitch = () => {
  const user = useSelector(selectName);
  const [value, onChange] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarIsClicked, setCalendarIsClicked] = useState(false);

  const formattedDate = formattingDate(currentDate);

  const incrementDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const decrementDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const showCalendar = () => {
    setCalendarIsClicked(true);
  };

  const closeCalendar = () => {
    setCalendarIsClicked(false);
  };

  useEffect(() => {
    onChange(currentDate);
  }, [currentDate]);

  const onClickDay = (value) => {
    setCurrentDate(value);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.dateAndIconWrapper}>
        <p className={css.date}>{formattedDate}</p>
        {calendarIsClicked ? (
          <button onClick={closeCalendar}>
            <svg className={css.closeIcon}>
              <use href={sprite + '#close_icon'}></use>
            </svg>
          </button>
        ) : (
          <button onClick={showCalendar}>
            <svg className={css.calendarIcon}>
              <use href={sprite + '#calendar_icon'}></use>
            </svg>
          </button>
        )}
        {calendarIsClicked && (
          <Calendar
            onChange={onChange}
            value={value}
            className={css.reactCalendar}
            next2Label={null}
            prev2Label={null}
            locale='en'
            defaultView='month'
            formatShortWeekday={customWeekdayFormatter}
            minDetail='month'
            onClickDay={onClickDay}
            minDate={new Date(user.client.registrationDate)}
          />
        )}
      </div>
      <ul className={css.arrowsWrapper}>
        <li>
          <button onClick={decrementDate}>
            <svg className={css.arrow}>
              <use href={sprite + '#chevron_left_icon'}></use>
            </svg>
          </button>
        </li>
        <li>
          <button onClick={incrementDate}>
            <svg className={css.arrow}>
              <use href={sprite + '#chevron_right_icon'}></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DaySwitch;
