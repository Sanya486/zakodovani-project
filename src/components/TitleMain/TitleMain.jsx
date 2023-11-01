import React from 'react';
import css from './TitleMain.module.scss';
// import sprite from '../../images/svg/line_accent.svg';
import sprite from '../../images/svg/sprite.svg';
// ПРосто текст и спрайт в херо без пропсов с адаптивкой

const TitleMain = () => {
  return (
    <div className={css.titleWrapper}>
      <h1 className={css.titleMain}>
        Transforming your
        <samp className={css.titleMain}>
          {' '}
          <svg className={css.spriteLine}>
            <use href={sprite + '#line_accent'}></use>
          </svg>
          <span className={css.spanAccent}> body</span>
        </samp>
        shape with Power Pulse
      </h1>
    </div>
  );
};

export default TitleMain;
