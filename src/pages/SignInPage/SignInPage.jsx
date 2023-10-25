import React from 'react';
import SignInForm from 'components/SignInForm/SignInForm';
import Subtext from 'components/Subtext/Subtext';
import StatisticsInfo from 'components/StatisticsInfo/StatisticsInfo';
import Container from 'components/Container/Container';
// import PropTypes from 'prop-types'

const SignInPage = () => {
  return (
          <>
          <Container />
          <SignInForm />
          <Subtext page="SignInPage" />
          <StatisticsInfo />
          </>);
};

// SignInPage.propTypes = {

// }

export default SignInPage;
