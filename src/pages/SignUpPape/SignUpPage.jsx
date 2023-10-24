import SignUpForm from 'components/SignUpForm/SignUpForm';
import StatisticsInfo from 'components/StatisticsInfo/StatisticsInfo';
import Subtext from 'components/Subtext/Subtext';
import Text from 'components/Text/Text';
import TitlePage from 'components/TitlePage/TitlePage';
import React from 'react';
import './SignUpPage.module.scss'

const SignUpPage = () => {
  return <><TitlePage>SignUp</TitlePage>
  <Text>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</Text>
  <SignUpForm/>
  <Subtext page="SignUpPage"/>
  
  <StatisticsInfo marginTopUp={true}/>

  </>;
};



export default SignUpPage;
