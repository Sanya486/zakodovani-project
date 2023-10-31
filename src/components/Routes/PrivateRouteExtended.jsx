import React from 'react';
import toast from 'react-hot-toast';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectBMR, selectIsLoggedIn, selectIsRefreshing } from 'redux/selectors';

const PrivateRouteExtended = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isBMRAvailable = useSelector(selectBMR);
  if (isLoggedIn && !isRefreshing && !isBMRAvailable) {
    toast.error('Please, fill out the form 🤔');
    return <Navigate to='/profile' />;
  } else if (!isLoggedIn && !isRefreshing) {
    return <Navigate to={redirectTo} />;
  } else {
    return <Component />;
  }
};

// PrivateRoute.propTypes = {
//   component: PropTypes.func.isRequired,
//   redirectTo: PropTypes.string,
// };

export default PrivateRouteExtended;
