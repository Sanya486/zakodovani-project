import React, { useEffect } from 'react';
import css from './BurgerMenu.module.scss';
import sprite from '../../images/svg/sprite.svg';

import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ switcher }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        switcher();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      switcher();
    }
  };
  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
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
    </div>
  );
};

BurgerMenu.propTypes = {
  switcher: PropTypes.bool.isRequired,
};

export default BurgerMenu;
