import React from 'react';
// import PropTypes from 'prop-types'
import Container from 'components/Container/Container';
import DayExercises from 'components/DayExercises/DayExercises';
import TitlePage from 'components/TitlePage/TitlePage';
import DaySwitch from 'components/DaySwitch/DaySwitch';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import css from './DiaryPage.module.scss';
// import { ProductTable } from 'components/ProductsTable/ProductsTable';



const DiaryPage = () => {
  return (
    <Container>
      <TitlePage classes={[css.title]}>Diary</TitlePage>
      <DaySwitch />
      <DayDashboard />
      {/* <ProductTable /> */}
      <DayExercises />
    </Container>
  );
};

// DairyPage.propTypes = {

// }

export default DiaryPage;
