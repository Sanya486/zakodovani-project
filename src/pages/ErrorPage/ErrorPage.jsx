import React, { useEffect, useState } from 'react';
import css from './ErrorPage.module.scss';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from 'components/Logo/Logo';

const ErrorPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    axios
      .get('/check-auth')
      .then((response) => {
        setIsAuthenticated(response.data.isAuthenticated);
        setToken(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isAuthenticated, token]);

  const handleClick = () => {
    const destination = isAuthenticated ? '/diary' : '/';
    if (token) {
      axios
        .get(destination, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={css.container}>
      <Link to={isAuthenticated ? '/diary' : '/'} onClick={handleClick} className={css.logoWrapper}>
        <Logo iconColor={'white-color'} />
      </Link>
      <div className={css.leftContainer}>
        <h2 className={css.title}>404</h2>
        <p className={css.text}>
          Sorry, you have reached a page that we could not find. It seems that you are lost among
          the numbers and letters of our virtual space. Perhaps this page went on vacation or
          decided to disappear into another dimension. We apologize for this inconvenience.
        </p>
        <div>
          <Button
            title='Go Home'
            styled='transparent'
            classes={[css.button]}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
