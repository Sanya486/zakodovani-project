import SignUpForm from 'components/SignUpForm/SignUpForm';
import StatisticsInfo from 'components/StatisticsInfo/StatisticsInfo';
import Subtext from 'components/Subtext/Subtext';
import Text from 'components/Text/Text';
import TitlePage from 'components/TitlePage/TitlePage';
import React from 'react';
import css from './SignUpPage.module.scss';
// import Container from 'components/Container/Container';

const SignUpPage = () => {
  return (
    <>
      <div className={css.background}>
        <div className={css.containerWrapper}>
          <div className={css.signUpBlockWrapper}>
          <TitlePage>SignUp</TitlePage>
          <Text>
            Thank you for your interest in our platform. To complete the registration process, please
            provide us with the following information.
          </Text>
          <SignUpForm />
          <Subtext page='SignUpPage' />
          </div>
          <div>
          <StatisticsInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
