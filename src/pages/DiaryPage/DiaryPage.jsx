import React from 'react';
// import PropTypes from 'prop-types'
import Container from 'components/Container/Container';
// import DayExercises from 'components/DayExercises/DayExercises';
import TitlePage from 'components/TitlePage/TitlePage';
import DaySwitch from 'components/DaySwitch/DaySwitch';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import css from './DiaryPage.module.scss';
// import { ProductTable } from 'components/ProductsTable/ProductsTable';
import { selectDiaryExercises } from 'redux/selectors';
import { fetchDiaryDateInfo } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';





const DiaryPage = () => {

   const dispatch = useDispatch();
   const exercises = useSelector(selectDiaryExercises);

   useEffect(() => {
     dispatch(fetchDiaryDateInfo('2003-10-10'));
   }, [dispatch]);
  
  console.log(exercises);
  

  return (
    <Container>
      <TitlePage classes={[css.title]}>Diary</TitlePage>
      <DaySwitch />
      <DayDashboard />
      {/* <ProductTable /> */}
      {/* <DayExercises exercises={exercises} /> */}
    </Container>
  );
};

// DairyPage.propTypes = {

// }

export default DiaryPage;
