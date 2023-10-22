// import React from "react";
// import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn, selectIsRefreshing } from "redux/selectors";

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  //   const isRedirect = !isLoggedIn && !isRefreshing;
  //   return isRedirect ? <Component /> : <Navigate to={redirectTo} />;
};

// RestrictedRoute.propTypes = {
//   component: PropTypes.func.isRequired,
//   redirectTo: PropTypes.string,
// };

export default RestrictedRoute;
