import React from 'react';
import sprite from '../../images/svg/sprite.svg';
import css from './LogOutBtn.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { fetchLogout } from 'redux/operations';

const LogoutBtn = ({ classes = [], header }) => {
  const dispatch = useDispatch()
   const handleLogout = async () => {
     dispatch(fetchLogout());
   };
  return (
    <button
      type='button'
      className={clsx(css.logoutBtn, header && css.logoutBtnHeader, ...classes)}
      onClick={handleLogout}
    >
      Logout
      <svg className={css.icon}>
        <use href={sprite + '#log_out_icon'}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
