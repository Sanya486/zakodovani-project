import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import ExercisesTableItem from 'components/ExercisesTableItem/ExercisesTableItem';

const Layout = () => {
  return (
    <>
      <Header />
      <ExercisesTableItem />
      <Outlet />
    </>
  );
};

// Layout.propTypes = {

// }

export default Layout;
