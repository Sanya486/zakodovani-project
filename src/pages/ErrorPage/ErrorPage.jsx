import React from 'react';
import css from './ErrorPage.module.scss';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const ErrorPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <Link to={isLoggedIn ? '/diary' : '/'} className={css.linkLogo}>
        <Logo iconColor={'white-color'} />
      </Link>
      <div className={css.leftContainer}>
        <h2 className={css.title}>404</h2>
        <p className={css.text}>
          Sorry, you have reached a page that we could not find. It seems that you are lost among
          the numbers and letters of our virtual space. Perhaps this page went on vacation or
          decided to disappear into another dimension. We apologize for this inconvenience.
        </p>

        <Link to={isLoggedIn ? '/diary' : '/'} className={css.linkBtn}>
          <Button title='Go Home' styled='transparent' classes={[css.button]} />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
