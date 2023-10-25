// import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DayExercises from 'components/DayExercises/DayExercises';
// import ExercisesTableItem from 'components/ExercisesTableItem/ExercisesTableItem';
// import ExercisesTable from 'components/ExercisesTable/ExercisesTable';


const Layout = () => {

  
  return (
    <>
      <Header />
      <DayExercises />

      <Outlet />
    </>
  );
};


export default Layout;
