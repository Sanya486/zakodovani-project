import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectAvatar, selectIsBMR } from 'redux/selectors';
import sprite from '../../images/svg/sprite.svg';
import css from './UserBar.module.scss';

const UserBar = () => {
  const avatar = useSelector(selectAvatar);
  const bmr = useSelector(selectIsBMR);

  return (
    <ul className={bmr ? css.userBarWrapper : css.userBarWrapperNoBmr}>
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
        {avatar ? <img src={avatar} alt='User Avatar' className={css.avatarImage} /> : null}
      </li>
    </ul>
  );
};

export default UserBar;
