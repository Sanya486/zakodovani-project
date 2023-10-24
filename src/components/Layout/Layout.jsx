import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types'

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

// Layout.propTypes = {

// }

export default Layout;
