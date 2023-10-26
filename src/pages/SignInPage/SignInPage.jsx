import React from 'react';
import SignInForm from 'components/SignInForm/SignInForm';
import Subtext from 'components/Subtext/Subtext';
import StatisticsInfo from 'components/StatisticsInfo/StatisticsInfo';
import TitlePage from 'components/TitlePage/TitlePage';
import css from "./SignInPage.module.scss";
import Text from "../../components/Text/Text";
// import PropTypes from 'prop-types'

const SignInPage = () => {
  return (
          <>
          <div className={css.background}>
            <div className={css.containerWrapper}>
              <div className={css.signUpBlockWrapper}>
                <TitlePage>SignIn</TitlePage>
                <Text>Welcome! Please enter your credentials to login to the platform:</Text>
                <SignInForm />
                <Subtext page="SignInPage" />
              </div>
              <StatisticsInfo />
            </div>
          </div>
          </>);
};

// SignInPage.propTypes = {

// }

export default SignInPage;
