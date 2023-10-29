import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addYears, subYears } from 'date-fns';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './UserForm.module.scss';
import sprite from '../../images/svg/sprite.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { fetchCalculateDailyMetrics } from '../../redux/operations';
import { useDispatch } from 'react-redux';
// import customWeekdayFormatter from './ustomWeekdayFormatter';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required("Це поле обов'язкове"),
  email: Yup.string().email('Невірний формат Email'),
  height: Yup.number().min(150, 'Мінімальна висота - 150 см').required("Це поле обов'язкове"),
  currentWeight: Yup.number().min(35, 'Мінімальна вага - 35 кг').required("Це поле обов'язкове"),
  desiredWeight: Yup.number().min(35, 'Мінімальна вага - 35 кг').required("Це поле обов'язкове"),
  birthday: Yup.date().required("Це поле обов'язкове"),
  blood: Yup.string().required('Оберіть опцію Blood'),
  sex: Yup.string().required('Оберіть стать'),
});

const UserForm = () => {
  const [calendarIsClicked, setCalendarIsClicked] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const dispatch = useDispatch();
  const showCalendar = () => {
    setCalendarIsClicked(true);
  };

  const closeCalendar = () => {
    setCalendarIsClicked(false);
  };

  const onClickDay = (value) => {
    setCurrentDate(value);
    closeCalendar(); // Закрити календар після вибору дати
  };
  const customWeekdayFormatter = (locale, date) => {
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return weekdays[date.getDay()];
  };

  const handleSubmit = (values) => {
    dispatch(fetchCalculateDailyMetrics);
    console.log('Form submitted with values:', values);
  };
  // handleSubmit();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        height: 0,
        currentWeight: 0,
        desiredWeight: 0,
        birthday: currentDate.toISOString().split('T')[0],
        blood: '1',
        sex: 'Male',
        levelActivity: '1',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <span className={css.title}>Basic info</span>
            <div className={css.form}>
              <div className={css.tabletInput}>
                <Field
                  type='text'
                  id='name'
                  name='name'
                  className={`${css.inputBase} ${errors.name && touched.name ? css.error : ''}`}
                  required
                />
                <ErrorMessage name='name' component='div' className={css.errorName} />

                <Field
                  type='email'
                  id='email'
                  name='email'
                  className={`${css.inputBase} ${errors.email && touched.email ? css.error : ''}`}
                />
                <ErrorMessage name='email' component='div' className={css.errorEmail} />
              </div>
              <div className={css.groups}>
                <div className={css.group1}>
                  <div className={css.column}>
                    <label htmlFor='height' className={css.label}>
                      Height
                    </label>
                    <Field
                      type='number'
                      id='height'
                      name='height'
                      className={`${css.input} ${errors.height && touched.height ? css.error : ''}`}
                      min='150'
                      required
                    />
                    <ErrorMessage name='height' component='div' className={css.errorGroup1} />
                  </div>
                  <div className={css.column}>
                    <label htmlFor='currentWeight' className={css.label}>
                      Desired Weight
                    </label>
                    <Field
                      type='number'
                      id='currentWeight'
                      name='currentWeight'
                      className={`${css.input} ${
                        errors.cur_height && touched.cur_height ? css.error : ''
                      }`}
                      min='35'
                      required
                    />
                    <ErrorMessage
                      name='currentWeight'
                      component='div'
                      className={css.errorGroup1}
                    />
                  </div>
                </div>
                <div className={css.group2}>
                  <div className={css.column}>
                    <label htmlFor='desiredWeight' className={css.label}>
                      Current Weight
                    </label>
                    <Field
                      type='number'
                      id='desiredWeight'
                      name='desiredWeight'
                      className={`${css.input} ${
                        errors.currentWeight && touched.currentWeight ? css.error : ''
                      }`}
                      min='35'
                      required
                    />
                    <ErrorMessage
                      name='desiredWeight'
                      component='div'
                      className={css.errorGroup2}
                    />
                  </div>
                  <div className={css.column}>
                    <div className={css.forIcon}>
                      <label  className={`${css.label} ${css.none}`}>
                        Date:
                      </label>
                      <Field
                        type='date'
                        id='birthday'
                        name='birthday'
                        onClick={showCalendar}
                        className={`${css.input} ${css.inputDate} ${
                          errors.birthday && touched.birthday ? css.error : ''
                        }`}
                        value={currentDate.toISOString().split('T')[0]}
                        required
                      />
                      <svg onClick={showCalendar} className={css.calendarIcon}>
                        <use href={sprite + '#calendar_icon'}></use>
                      </svg>
                      {calendarIsClicked && (
                        <Calendar
                          onChange={onClickDay}
                          value={currentDate}
                          className={css.reactCalendar}
                          next2Label={null}
                          prev2Label={null}
                          locale='en'
                          defaultView='month'
                          formatShortWeekday={customWeekdayFormatter}
                          minDetail='month'
                          maxDate={addYears(new Date(), -18)} // Використовуємо addYears для вирахування 18 років назад
                          minDate={subYears(new Date(), 100)}
                          onClickDay={onClickDay}
                        />
                      )}
                      <ErrorMessage name='birthday' component='div' />
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className={css.blood}>Blood</p>
          <div className={css.radio}>
            <div className={css.radioNumber}>
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className={`${css.labelMargin} ${css.customRadio}`}>
                  <Field
                    type='radio'
                    name='blood'
                    value={value.toString()}
                    className={`${css.inputRadio} ${
                      errors.blood && touched.blood ? css.error : ''
                    }`}
                  />
                  <span>{value}</span>
                </label>
              ))}
              <ErrorMessage name='blood' component='div' className={css.error} />
            </div>
            <div className={css.sex}>
              {['Male', 'Female'].map((option) => (
                <label key={option} className={`${css.labelMargin} ${css.customRadio}`}>
                  <Field
                    type='radio'
                    name='sex'
                    value={option}
                    className={`${css.inputRadioSex} ${errors.sex && touched.sex ? css.error : ''}`}
                  />
                  <span>{option}</span>
                </label>
              ))}
              <ErrorMessage name='sex' component='div' className={css.error} />
            </div>
          </div>
          <div className={css.radioText}>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} ${css.customRadio}`}>
                <Field
                  type='radio'
                  name='levelActivity'
                  value='1'
                  className={css.inputRadioText}
                  checked
                />
                <span className={css.spanName}>
                  Sedentary lifestyle (little or no physical activity)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} ${css.customRadio}`}>
                <Field type='radio' name='levelActivity' value='2' className={css.inputRadioText} />
                <span className={css.spanName}>
                  Light activity (light exercises/sports 1-3 days per week)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} ${css.customRadio}`}>
                <Field type='radio' name='levelActivity' value='3' className={css.inputRadioText} />
                <span className={css.spanName}>
                  Moderately active (moderate exercises/sports 3-5 days per week)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} ${css.customRadio}`}>
                <Field type='radio' name='levelActivity' value='4' className={css.inputRadioText} />
                <span className={css.spanName}>
                  Very active (intense exercises/sports 6-7 days per week)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} ${css.customRadio}`}>
                <Field type='radio' name='levelActivity' value='5' className={css.inputRadioText} />
                <span className={css.spanName}>
                  Extremely active (very strenuous exercises/sports and physical work)
                </span>
              </label>
            </div>
          </div>
          <button type='submit' className={css.btn}>
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
