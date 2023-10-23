import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';
import css from './UserBar.module.scss';

const UserBar = ({ avatarUrl }) => {
  return (
    <ul className={css.userBarWrapper}>
      <li className={css.settingsItem}>
        <Link to='/profile'>
          <svg className={css.settingsIcon}>
            <use href={sprite + '#settings_icon'}></use>
          </svg>
        </Link>
      </li>
      <li className={css.avatarItem}>
        <svg className={css.avatarIcon}>
          <use href={sprite + '#avatar_icon'}></use>
        </svg>
        {avatarUrl ? <img src={avatarUrl} alt='User Avatar' className={css.avatarImage} /> : null}
      </li>
    </ul>
  );
};

export default UserBar;
