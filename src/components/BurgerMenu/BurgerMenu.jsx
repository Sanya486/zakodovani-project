import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './BurgerMenu.module.scss';
import sprite from '../../images/svg/sprite.svg';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const BurgerMenu = ({ switcher }) => {
  const navigate = useNavigate();

  const redirectToDiary = () => {
    navigate('/diary');
  };

  const redirectToProducts = () => {
    navigate('/products');
  };

  const redirectToExercises = () => {
    navigate('/exercises');
  };

  const redirectToWelcome = () => {
    navigate('/');
  };

  return (
    <div className={css.burgerMenu}>
      <svg className={css.closeIcon} onClick={() => switcher()}>
        <use href={sprite + '#close_icon'}></use>
      </svg>
      <nav>
        <ul className={css.navList}>
          <li>
            <Button
              classes={[css.btn]}
              title='Diary'
              styled='transparent'
              onClick={redirectToDiary}
            />
          </li>
          <li>
            {' '}
            <Button
              classes={[css.btn]}
              title='Products'
              styled='transparent'
              onClick={redirectToProducts}
            />
          </li>
          <li>
            <Button
              classes={[css.btn]}
              title='Exercises'
              styled='transparent'
              onClick={redirectToExercises}
            />
          </li>
        </ul>
      </nav>
      <LogoutBtn
        styled='transparent'
        classes={['logoutBtnPosition', 'icon']}
        onClick={redirectToWelcome}
      />
    </div>
  );
};

BurgerMenu.propTypes = {
  switcher: PropTypes.func.isRequired,
};

export default BurgerMenu;
