import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import Logo from 'components/Logo/Logo';
import UserNav from '../../components/UserNav/UserNav';
import UserBar from '../../components/UserBar/UserBar';
import LogoutBtn from '../../components/LogoutBtn/LogoutBtn';
import css from './Header.module.scss';
import { fetchLogout } from 'redux/operations';
// import PropTypes from 'prop-types'

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      dispatch(fetchLogout());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.headerWrapper}>
      <Link to={isLoggedIn ? '/diary' : '/'} className={css.logoWrapper}>
        <Logo />
      </Link>
      {!isLoggedIn ? (
        <div className={css.userNavWrapper}>
          <UserNav />
          <UserBar onLogout={handleLogout} />
          <LogoutBtn onLogout={handleLogout} />
        </div>
      ) : null}
    </div>
  );
};

// Header.propTypes = {

// }

export default Header;
