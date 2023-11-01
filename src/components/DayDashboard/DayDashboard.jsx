import React from 'react';
import PropTypes from 'prop-types';
import css from './DayDashboard.module.scss';
import { InfoItem } from 'components/InfoItem/InfoItem';

export const DayDashboard = ({
  BMR = 0,
  timeOfSport = 0,
  caloriesConsumed = 0,
  caloriesBurned = 0,
  caloriesRest = 0,
  restSport = 0,
}) => {
  console.log(BMR, timeOfSport, caloriesConsumed, caloriesBurned, caloriesRest, restSport);

  const typeOfNumber = (number, targetNumber = 0) => {
    if (number < targetNumber) {
      return 'error';
    } else {
      return 'success';
    }
  };

  const changedArr = [
    {
      name: 'Daily calorie intake',
      value: `${BMR}`,
      variant: '',
    },
    {
      name: 'Daily norm of sports',
      value: `${timeOfSport} min`,
      variant: '',
    },
    {
      name: 'Calories consumed',
      value: `${caloriesConsumed}`,
      variant: 'empty',
    },
    {
      name: 'Calories burned',
      value: `${caloriesBurned}`,
      variant: 'empty',
    },
    {
      name: 'The rest of the calories',
      value: `${caloriesRest}`,
      variant: typeOfNumber(caloriesRest),
    },
    {
      name: 'The rest of sports',
      value: `${typeOfNumber(restSport, 1) === 'success' ? '+' : ''}${restSport}min`,
      variant: typeOfNumber(restSport, 110),
    },
  ];

  return (
    <div className={css.container}>
      <ul className={css.dayDashboard}>
        {changedArr.map((card) => (
          <InfoItem key={card.name} name={card.name} value={card.value} variant={card.variant} />
        ))}
      </ul>
    </div>
  );
};

DayDashboard.propTypes = {
  BMR: PropTypes.number.isRequired,
  timeOfSport: PropTypes.number.isRequired,
  caloriesConsumed: PropTypes.number,
  caloriesBurned: PropTypes.number,
  caloriesRest: PropTypes.number,
  restSport: PropTypes.number,
};
