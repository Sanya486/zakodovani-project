import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from 'components/Logo/Logo';
import UserNav from '../../components/UserNav/UserNav';
import UserBar from '../../components/UserBar/UserBar';
import LogoutBtn from '../../components/LogoutBtn/LogoutBtn';
import css from './Header.module.scss';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import PropTypes from 'prop-types'

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/check-auth') // URL для перевірки аутентифікації
      .then((response) => {
        setIsAuthenticated(response.data.isAuthenticated);
        setToken(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isAuthenticated, token]);

  const handleLogoClick = () => {
    const destination = isAuthenticated ? '/diary' : '/welcome';
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

  const handleLogout = async () => {
    try {
      await axios.post('/identification/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setToken('');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className={css.headerWrapper}>
          <Link
            to={isAuthenticated ? '/diary' : '/welcome'}
            onClick={handleLogoClick}
            className={css.logoWrapper}
          >
            <Logo />
          </Link>
          {!isAuthenticated ? (
            <div className={css.userNavWrapper}>
              <UserNav />
              <UserBar onLogout={handleLogout} />
              <LogoutBtn className={css.logoutBtnWrapper} onLogout={handleLogout} />
            </div>
          ) : null}
        </div>
      ) : (
        <div className={css.headerNoAuthenticatedWpapper}>
          <Logo />
        </div>
      )}
    </>
  );
};

// Header.propTypes = {

// }

export default Header;
