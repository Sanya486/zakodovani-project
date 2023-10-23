import React from 'react';
import sprite from '../../images/svg/sprite.svg';
import css from './LogoutBtn.module.scss';
import clsx from 'clsx';

const LogoutBtn = ({ classes = [] }) => {
  return (
    <button className={clsx(css.logoutBtn, ...classes)}>
      Logout
      <svg className={css.icon}>
        <use href={sprite + '#log_out_icon'}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
