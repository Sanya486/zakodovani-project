import React from 'react';
import css from './BurgerMenu.module.scss';
import sprite from '../../images/svg/sprite.svg';

import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const BurgerMenu = ({ switcher }) => {
  return (
    <div className={css.burgerMenu}>
      <svg className={css.closeIcon} onClick={() => switcher(false)}>
        <use href={sprite + '#close_icon'}></use>
      </svg>
      <nav>
        <ul className={css.navList}>
          <li>
            <Button classes={[css.btn]} title='Diary' styled='transparent' />
          </li>
          <li>
            {' '}
            <Button classes={[css.btn]} title='Products' styled='transparent' />
          </li>
          <li>
            <Button classes={[css.btn]} title='Exercises' styled='transparent' />
          </li>
        </ul>
      </nav>
      <LogoutBtn classes={[css.logoutBtn]} />
    </div>
  );
};

BurgerMenu.propTypes = {
  switcher: PropTypes.bool.isRequired,
};

export default BurgerMenu;
