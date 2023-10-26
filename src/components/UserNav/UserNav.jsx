import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';
import clsx from 'clsx';
import css from './UserNav.module.scss';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const UserNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <nav className={css.navWrapper}>
        <NavLink
          to='/diary'
          className={clsx(css.NavLink, activeLink === 0 && css.active)}
          onClick={() => handleLinkClick(0)}
        >
          Diary
        </NavLink>
        <NavLink
          to='/products'
          className={clsx(css.NavLink, activeLink === 1 && css.active)}
          onClick={() => handleLinkClick(1)}
        >
          Products
        </NavLink>
        <NavLink
          to='/exercises'
          className={clsx(css.NavLink, activeLink === 2 && css.active)}
          onClick={() => handleLinkClick(2)}
        >
          Exercises
        </NavLink>
      </nav>
      <button className={css.navBurgerMenu} onClick={toggleMenu}>
        <svg className={css.navBurgerMenuIcon}>
          <use href={sprite + '#burger_menu_icon'}></use>
        </svg>
      </button>
      {isMenuOpen && <BurgerMenu switcher={toggleMenu} />}
    </>
  );
};

export default UserNav;
