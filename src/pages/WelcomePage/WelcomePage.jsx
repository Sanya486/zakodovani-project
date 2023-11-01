import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './WelcomePage.module.scss';
import TitleMain from 'components/TitleMain/TitleMain';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import StatisticsInfo from 'components/StatisticsInfo/StatisticsInfo';

const WelcomePage = () => {
  const navigate = useNavigate();

  const redirectToSignUp = () => {
    navigate('/signup');
  };

  const redirectToSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className={css.background}>
      <Container>
        <TitleMain />
        <div className={css.buttonWrapper}>
          <Button title='Sign Up' styled='accent' onClick={redirectToSignUp} />
          <Button title='Sign In' styled='transparent' onClick={redirectToSignIn} />
        </div>
        <div>
          <StatisticsInfo />
        </div>
      </Container>
    </div>
  );
};

export default WelcomePage;
