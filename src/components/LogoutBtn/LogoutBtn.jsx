import React from 'react';
import sprite from '../../images/svg/sprite.svg';
import css from './LogOutBtn.module.scss';
import clsx from 'clsx';

const LogoutBtn = ({ styled = '', classes = [] }) => {
  if (styled === '') {
    return (
      <button className={clsx(css.logoutBtn)}>
        Logout
        <svg className={css.icon}>
          <use href={sprite + '#log_out_icon'}></use>
        </svg>
      </button>
    );
  }
  if (styled === 'transparent') {
    return (
      <button className={clsx(css.logoutBtnPosition, ...classes)}>
        Logout
        <svg className={css.icon}>
          <use href={sprite + '#log_out_icon'}></use>
        </svg>
      </button>
    );
  }
};

export default LogoutBtn;
