import React from 'react';
import css from './DayDashboard.module.scss';
import { InfoItem } from 'components/InfoItem/InfoItem';

export const DayDashboard = () => {
  const exampleArr = [
    {
      name: 'Daily calorie intake',
      value: '2200',
      variant: '1',
    },
    {
      name: 'Daily norm of sports',
      value: '110 min',
      variant: '1',
    },
    {
      name: 'Calories consumed',
      value: '707',
      variant: '2',
    },
    {
      name: 'Calories burned',
      value: '855',
      variant: '2',
    },
    {
      name: 'The rest of the calories',
      value: '-100',
      variant: '3',
    },
    {
      name: 'The rest of sports',
      value: '+30 min',
      variant: '4',
    },
  ];

  return (
    <div className={css.container}>
      <ul className={css.dayDashboard}>
        {exampleArr.map((card) => (
          <InfoItem key={card.name} name={card.name} value={card.value} variant={card.variant} />
        ))}
      </ul>
    </div>
  );
};
