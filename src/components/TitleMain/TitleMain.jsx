import React from 'react';
import css from './TitleMain.module.scss';
import sprite from '../../images/svg/line_accent.svg';


// ПРосто текст и спрайт в херо без пропсов с адаптивкой

const TitleMain = () => {
  return (
    <div>
      <h1 className={css.titleMain}>
        Transforming your
        <samp className={css.titleMain}>
          <img src={sprite} alt='line' className={css.spriteLine} /> body </samp>shape with Power Pulse
      </h1>
    </div>
  );
};

export default TitleMain;
