import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DairyPage from 'pages/DiaryPage/DiaryPage';


const Layout = () => {

  
  return (
    <>
      <Header />
      <DairyPage/>
      <Outlet />
    </>
  );
};

export default Layout;
