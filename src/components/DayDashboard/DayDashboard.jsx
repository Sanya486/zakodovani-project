import React from 'react';
import PropTypes from 'prop-types';
import css from './DayDashboard.module.scss';
import { InfoItem } from 'components/InfoItem/InfoItem';

export const DayDashboard = ({
  BMR,
  timeOfSport,
  caloriesConsumed,
  caloriesBurned,
  caloriesRest,
  restSport,
}) => {
  const typeOfNumber = (number) => {
    if (number < 0) {
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
      value: `${typeOfNumber(restSport) === 'success' ? '+' : ''}${restSport}min`,
      variant: typeOfNumber(restSport),
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
  caloriesConsumed: PropTypes.number.isRequired,
  caloriesBurned: PropTypes.number.isRequired,
  caloriesRest: PropTypes.number.isRequired,
  restSport: PropTypes.number.isRequired,
};
