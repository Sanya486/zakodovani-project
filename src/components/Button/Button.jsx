import React from 'react';
import css from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({ title="Title", styled ="accent", classes, ...props }) => {
  if (styled === 'accent') {
    return (
      <button {...props} className={clsx(css.accentButton, css.btn, ...classes)}>
        {title}
      </button>
    );
  }
  if (styled === 'transparent') {
    return (
      <button {...props} className={clsx(css.transparentButton, css.btn, ...classes)}>
        {title}
      </button>
    );
  }
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  styled: PropTypes.string.isRequired,
};

export default Button;
