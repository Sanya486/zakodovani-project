import React, { useEffect } from 'react';
import sprite from '../../images/svg/sprite.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import css from "./DaySwitch.module.scss";
import { useState } from 'react';


const DaySwitch = () => {
    const [value, onChange] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const [calendarIsClicked, setCalendarIsClicked] = useState(false);

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

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
      }

      useEffect(() => {
        onChange(currentDate)
      }, [currentDate])

    //   const closeCalendar = () => {
    //     setCalendarIsClicked(false);
    //   }


    return (
    <div className={css.wrapper}>
        <div className={css.dateAndIconWrapper}>
        <p className={css.date}>{formattedDate}</p>
        <button onClick={showCalendar}>
            <svg className={css.calendar}>
                <use href={sprite + "#calendar_icon"}></use>
            </svg>
        </button>
        <div className={css.backdrop}>
        {calendarIsClicked && <Calendar
        onChange={onChange}
        value={value}
        className={css.reactCalendar}
        next2Label={null}
        prev2Label={null} />}
        </div>
        </div>
        <ul className={css.arrowsWrapper}>
            <li>
            <button onClick={decrementDate}>
                <svg className={css.arrow}>
                    <use href={sprite + "#chevron_left_icon"}></use>
                </svg>
            </button>
            </li>
            <li>
            <button onClick={incrementDate}>
                <svg className={css.arrow}>
                    <use href={sprite + "#chevron_right_icon"}></use>
                </svg>
            </button>
            </li>
        </ul>
    </div>
    );
};

export default DaySwitch;
