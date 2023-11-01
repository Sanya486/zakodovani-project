import Header from '../../components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Puff } from 'react-loader-spinner';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Puff
            height='100'
            width='100'
            color='#e6533c'
            ariaLabel='line-wave'
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100vh',
            }}
            wrapperClass=''
            visible={true}
            firstLineColor=''
            middleLineColor=''
            lastLineColor=''
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
