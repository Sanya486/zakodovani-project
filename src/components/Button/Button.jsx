import React from 'react';
import css from './Button.module.scss';

const classNames = require('classnames');

// Кнопка изменяется в зависимости от пропcа который придет в title

// Работает на 3-х title
// title = "Sign Up"
// title = "Go Home"
// title = "Sign In"

const Button = ({ childern, title }) => {
  if (title === 'Go Home') {
    const handleClick = () => {
      console.log('Клик по кнопке GoHome');
    };
    return (
      <div>
        <button className={classNames(css.buttongohome, css.btn)} onClick={handleClick}>
          {title}
        </button>
      </div>
    );
  } else if (title === 'Sign Up') {
    const handleClick = () => {
      console.log('Клик по кнопке SingUP');
    };
    return (
      <div>
        <button className={classNames(css.buttonsingup, css.btn)} onClick={handleClick}>
          Sign Up
        </button>
      </div>
    );
  } else if (title === 'Sign In') {
    const handleClick = () => {
      console.log('Клик по кнопке SingIn');
    };
    return (
      <div>
        <button className={classNames(css.buttonsingin, css.btn)} onClick={handleClick}>
          {title}
        </button>
      </div>
    );
  }
};

export default Button;
