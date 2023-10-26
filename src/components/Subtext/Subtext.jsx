import React from 'react';
import { Link } from 'react-router-dom';
import css from './Subtext.module.scss';
import PropTypes from 'prop-types';

const Subtext = ({ page }) => {
  let cssClass = '';

  switch (page) {
    case 'SignInPage':
      cssClass = css.signIn;
      break;
    case 'SignUpPage':
      cssClass = css.signUp;
      break;
    case 'ProfilePage':
      cssClass = css.userPage;
      break;
    default:
      cssClass = '';
      break;
  }

  return (
    <>
      {page === 'SignInPage' && (
        <p className={cssClass}>
          Don’t have an account?{' '}
          <Link to='/signup' className={css.link}>
            Sign Up
          </Link>
        </p>
      )}
      {page === 'SignUpPage' && (
        <p className={cssClass}>
          Already have account?{' '}
          <Link to='/signin' className={css.link}>
            Sign In
          </Link>
        </p>
      )}
      {page === 'ProfilePage' && <p className={cssClass}>User</p>}
    </>
  );
};

Subtext.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Subtext;
