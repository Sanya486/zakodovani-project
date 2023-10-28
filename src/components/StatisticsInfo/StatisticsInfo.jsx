import React from 'react';
import css from './StatisticsInfo.module.scss';
import sprite from '../../images/svg/sprite.svg';

// marginTopUp, marginTopIn, marginTopProfile

const StatisticsInfo = () => {
  //   const containerClass = `
  //   ${css.container}
  //   ${marginTopUp && css.marginTopUp}
  //   ${marginTopIn && css.marginTopIn}
  //   ${marginTopProfile && css.marginTopProfile}
  // `;

  return (
    <>
      <div className={css.statist}>
        <div className={css.container}>
          <div className={css.circle}>
            <svg className={css.play}>
              <use href={sprite + '#play_icon'}></use>
            </svg>
          </div>
          <div className={css.textGroup}>
            <p className={css.text1}>350+</p>
            <p className={css.text2}>Video tutorial</p>
          </div>
        </div>
        <div className={css.containerCal}>
          <div className={css.circle2}>
            <svg className={css.icon}>
              <use href={sprite + '#running_stick_figure_icon'}></use>
            </svg>
          </div>
          <div className={css.textGroup2}>
            <p className={css.quantity}>500</p>
            <p className={css.cal}>cal</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsInfo;
