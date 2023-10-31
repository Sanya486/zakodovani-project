import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../images/svg/sprite.svg';
import css from './Logo.module.scss';

const Logo = ({ iconColor }) => {
  let addColor = '';

  switch (iconColor) {
    case 'white-color':
      addColor = css.logoIconColor;
      break;
    default:
      addColor = css.logoIcon;
  }

  return (
    <div className={css.logoWrapper}>
      <svg className={addColor}>
        <use href={sprite + '#logo_icon'}></use>
      </svg>
      <svg className={css.logoText}>
        <use href={sprite + '#logo_text'}></use>
      </svg>
    </div>
  );
};

Logo.propTypes = {
  iconColor: PropTypes.string,
};

export default Logo;
