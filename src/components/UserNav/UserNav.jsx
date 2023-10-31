import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';
import clsx from 'clsx';
import css from './UserNav.module.scss';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const UserNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/diary':
        setActiveLink(0);
        break;
      case '/products':
        setActiveLink(1);
        break;
      case '/exercises':
        setActiveLink(2);
        break;
      default:
        setActiveLink(null);
        break;
    }
  }, [location.pathname]);

  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={css.navWrapper}>
        <NavLink to='/diary' className={clsx(css.NavLink, activeLink === 0 && css.active)}>
          Diary
        </NavLink>
        <NavLink to='/products' className={clsx(css.NavLink, activeLink === 1 && css.active)}>
          Products
        </NavLink>
        <NavLink to='/exercises' className={clsx(css.NavLink, activeLink === 2 && css.active)}>
          Exercises
        </NavLink>
      </nav>
      <button className={css.navBurgerMenu} onClick={toggleMenu}>
        <svg className={css.navBurgerMenuIcon}>
          <use href={sprite + '#burger_menu_icon'}></use>
        </svg>
      </button>
      {isMenuOpen && <BurgerMenu switcher={() => setMenuOpen(!isMenuOpen)} />}
    </>
  );
};

export default UserNav;
