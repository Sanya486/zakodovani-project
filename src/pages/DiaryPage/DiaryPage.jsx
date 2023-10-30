import React from 'react';
// import PropTypes from 'prop-types'
import Container from 'components/Container/Container';
import DayExercises from 'components/DayExercises/DayExercises';
import TitlePage from 'components/TitlePage/TitlePage';
import DaySwitch from 'components/DaySwitch/DaySwitch';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import css from './DiaryPage.module.scss';
import { selectDiaryExercises, selectDiaryProducts } from 'redux/selectors';
import { fetchDiaryDateInfo } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import sprite from '../../images/svg/sprite.svg';
import { DayProducts } from 'components/DayProdcuts/DayProducts';
// import { LoaderIcon } from 'react-hot-toast';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const exerciseDone = useSelector(selectDiaryExercises);
  const consumedProduct = useSelector(selectDiaryProducts);
  useEffect(() => {
    dispatch(fetchDiaryDateInfo('2003-10-10'));
  }, [dispatch]);

  console.log(exerciseDone);
  console.log(consumedProduct);

  return (
    <Container>
      <div className={css.titlebox}>
        <TitlePage classes={[css.title]}>Diary</TitlePage>
        <DaySwitch />
      </div>
      <DayDashboard />
      <div className={css.exclamingbox}>
        <svg className={css.icon}>
          <use href={sprite + '#exclamation_mark_icon'}></use>
        </svg>
        <p className={css.exclamingtext}>
          Record all your meals in a calorie diary every day. This will help me be aware of my
          nutrition and make me responsible for my choices.
        </p>
      </div>
      <DayProducts products={consumedProduct} />
      <DayExercises exercises={exerciseDone} />
      
    </Container>
  );
};

// DairyPage.propTypes = {

// }

export default DiaryPage;
