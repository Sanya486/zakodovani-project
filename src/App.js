import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.scss';
import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentUser } from 'redux/operations';
import { selectIsRefreshing } from 'redux/selectors';
import { Puff } from 'react-loader-spinner';
import { Suspense } from 'react';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const RestrictedRoute = lazy(() => import('components/Routes/RestrictedRoute'));
const PrivateRoute = lazy(() => import('components/Routes/PrivateRoute'));
const PrivateRouteExtended = lazy(() => import('components/Routes/PrivateRouteExtended'));
const SignUpPage = lazy(() => import('pages/SignUpPape/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('pages/ExercisesPage/ExercisesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const Layout = lazy(() => import('components/Layout/Layout'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
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
  ) : (
    <>
      <Routes>
        <Route
          path='/'
          element={
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
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<RestrictedRoute component={WelcomePage} redirectTo='/diary' />} />
          <Route
            path='/signup'
            element={<RestrictedRoute component={SignUpPage} redirectTo='/profile' />}
          />
          <Route
            path='/signin'
            element={<RestrictedRoute component={SignInPage} redirectTo='/diary' />}
          />
          <Route
            path='/profile'
            element={<PrivateRoute component={ProfilePage} redirectTo='/signin' />}
          />
          <Route
            path='/diary'
            element={<PrivateRouteExtended component={DiaryPage} redirectTo='/signin' />}
          />
          <Route
            path='/products'
            element={<PrivateRouteExtended component={ProductsPage} redirectTo='/signin' />}
          />
          <Route
            path='/exercises'
            element={<PrivateRouteExtended component={ExercisesPage} redirectTo='/signin' />}
          />
        </Route>
        <Route path='/error' element={<ErrorPage />} />
        <Route path='*' element={<Navigate to='/error' />} />
      </Routes>
      <Toaster
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#000',
            color: '#fff',
            border: '1px solid #e6533c',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </>
  );
}

export default App;
