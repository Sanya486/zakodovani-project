import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DayExercises from 'components/DayExercises/DayExercises';


const Layout = () => {
  return (
    <>
      <Header />
      <Container />
      <DayExercises/>
      <Outlet />
    </>
  );
};


export default Layout;
