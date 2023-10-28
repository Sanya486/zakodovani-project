import React from 'react';
import css from './BurgerMenu.module.scss';
import sprite from '../../images/svg/sprite.svg';

import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ switcher }) => {
  return (
    <div className={css.burgerMenu}>
      <svg className={css.closeIcon} onClick={() => switcher()}>
        <use href={sprite + '#close_icon'}></use>
      </svg>
      <nav>
        <ul className={css.navList}>
          <li>
            <Link onClick={() => switcher()} to='/diary'>
              <Button classes={[css.btn]} title='Diary' styled='transparent' />
            </Link>
          </li>
          <li>
            <Link onClick={() => switcher()} to='/products'>
              <Button classes={[css.btn]} title='Products' styled='transparent' />
            </Link>
          </li>
          <li>
            <Link onClick={() => switcher()} to='/exercises'>
              <Button classes={[css.btn]} title='Exercises' styled='transparent' />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={[css.logoutBtn]}>
        <LogoutBtn />
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  switcher: PropTypes.bool.isRequired,
};

export default BurgerMenu;
