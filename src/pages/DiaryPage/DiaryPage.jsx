import React, { useState } from 'react';
// import PropTypes from 'prop-types'
import Container from 'components/Container/Container';
import DayExercises from 'components/DayExercises/DayExercises';
// import TitlePage from 'components/TitlePage/TitlePage';
import DaySwitch from 'components/DaySwitch/DaySwitch';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import css from './DiaryPage.module.scss';
// import { selectDiaryExercises, selectDiaryProducts } from 'redux/selectors';
import { selectDiaryExercises, selectDiaryProducts, selectDiaryMetrics } from 'redux/selectors';
import { fetchDiaryDateInfo } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import sprite from '../../images/svg/sprite.svg';
import { DayProducts } from 'components/DayProdcuts/DayProducts';
import formattingDate from 'utils/formattingDate';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const exerciseDone = useSelector(selectDiaryExercises);
  const consumedProduct = useSelector(selectDiaryProducts);
  const { timeForSport, BMR, caloriesBurned, caloriesConsumed, caloriesRest, restSport } =
    useSelector(selectDiaryMetrics);
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    dispatch(fetchDiaryDateInfo(formattingDate(currentDate)));
  }, [dispatch, currentDate]);

  return (
    <Container>
      <div>
        <div className={css.titlebox}>
          <h2 className={css.pageTitle}>Diary</h2>
          <div className={css.daySwitchWrap}>
            <DaySwitch currentDate={currentDate} setCurrentDate={setCurrentDate} />
          </div>
        </div>
        <div className={css.changebox}>
          <div className={css.changebox1}>
            <DayDashboard
              BMR={BMR}
              timeOfSport={timeForSport}
              caloriesConsumed={caloriesConsumed}
              caloriesBurned={caloriesBurned}
              caloriesRest={caloriesRest}
              restSport={restSport}
            />
            <div className={css.exclamingbox}>
              <svg className={css.icon}>
                <use href={sprite + '#exclamation_mark_icon'}></use>
              </svg>
              <p className={css.exclamingtext}>
                Record all your meals in a calorie diary every day. This will help me be aware of my
                nutrition and make me responsible for my choices.
              </p>
            </div>
          </div>
          <div className={css.changebox2}>
            <DayProducts products={consumedProduct} />

            <DayExercises exercises={exerciseDone} />
          </div>
        </div>
      </div>
    </Container>
  );
};

// DairyPage.propTypes = {

// }

export default DiaryPage;
