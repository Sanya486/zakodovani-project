import React from 'react';
import sprite from '../../images/svg/sprite.svg';
import css from './LogOutBtn.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { fetchLogout } from 'redux/operations';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = ({ classes = [], header, profile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(fetchLogout());
    navigate('/');
  };

  return (
    <button
      type='button'
      className={clsx(
        css.logoutBtn,
        header && css.logoutBtnHeader,
        profile && css.logoutBtnProfile,
        ...classes,
      )}
      onClick={handleLogout}
    >
      Logout
      <svg className={clsx(css.icon, profile && css.iconForProfile, ...classes)}>
        <use href={sprite + '#log_out_icon'}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
