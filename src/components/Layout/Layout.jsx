import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types'

const Layout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

// Layout.propTypes = {

// }

export default Layout;
