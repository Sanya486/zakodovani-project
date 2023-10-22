import Header from 'components/Header/Header';
import React from 'react'
import { Outlet } from "react-router-dom";
// import PropTypes from 'prop-types'
import Button from 'components/Button/Button';

const Layout = props => {
  return (
    <>
      <Header />
      <Outlet />
      <Button title="Sign Up" />
    </>
  );
}

// Layout.propTypes = {

// }

export default Layout
