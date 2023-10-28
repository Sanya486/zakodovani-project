import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <>
      {isLoggedIn ? (
        <div className={css.headerWrapper}>
          <Link to={isLoggedIn ? '/diary' : '/'} className={css.logoWrapper}>
            <Logo />
          </Link>
          {isLoggedIn ? (
            <div className={css.userNavWrapper}>
              <UserNav />
              <UserBar />
              <LogoutBtn header className={css.logoutBtnWrapper} />
            </div>
          ) : null}
        </div>
      ) : (
        <div className={css.headerNoAuthenticatedWpapper}>
          <Link to={isLoggedIn ? '/diary' : '/'} className={css.logoWrapper}>
            <Logo />
          </Link>
        </div>
      )}
    </>
  );
};

// Header.propTypes = {

// }

export default Header;
