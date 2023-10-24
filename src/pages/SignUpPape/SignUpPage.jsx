import SignUpForm from 'components/SignUpForm/SignUpForm';
import StatisticsInfo from 'components/StatisticsInfo/StatisticsInfo';
import Subtext from 'components/Subtext/Subtext';
import Text from 'components/Text/Text';
import TitlePage from 'components/TitlePage/TitlePage';
import React from 'react';
import css from './SignUpPage.module.scss'; // Використовуйте `import` для імпорту стилів

const SignUpPage = () => {
  return (
    <div className={css.pageContainer}>
      <div className={css.leftContent}>
        <TitlePage>SignUp</TitlePage>
        <Text>
          Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.
        </Text>
        <SignUpForm />
        <Subtext page="SignUpPage" />
      </div>
      <div className={css.rightContent}>
        <StatisticsInfo marginTopUp={true} />
      </div>
    </div>
  );
};

export default SignUpPage;