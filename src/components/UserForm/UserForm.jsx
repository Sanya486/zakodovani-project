import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addYears } from 'date-fns';
import css from './UserForm.module.scss';
import sprite from '../../images/svg/sprite.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { fetchCalculateDailyMetrics } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectClient } from '../../redux/selectors';
import formattingDate from 'utils/formattingDate';
import formattingDateForBackEnd from 'utils/formattingDateForBackEnd';


const UserForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required('Required'),
    email: Yup.string().email('Invalid Email format'),
    birthday: Yup.string().required('Required'),
    blood: Yup.number().required('Choose your blood'),
    currentWeight: Yup.number().min(35, 'Min weight - 35 kg').required('Required'),
    desiredWeight: Yup.number().min(35, 'Min weight - 35 kg').required('Required'),
    height: Yup.number().min(150, 'Min height - 150 sm').required('Required'),
    levelActivity: Yup.number().required('Choose your activity level'),
    sex: Yup.string().required('Choose your sex'),
  });
const formikRef = useRef()
  
  const allowedUserAge = addYears(new Date(), -18);

  const [calendarIsClicked, setCalendarIsClicked] = useState(false);
  // const [currentDate, setCurrentDate] = useState(formattingDate(allowedUserAge));

  const client = useSelector(selectClient);
  const dispatch = useDispatch();

  const showCalendar = () => {
    setCalendarIsClicked(true);
  };

  const closeCalendar = () => {
    setCalendarIsClicked(false);
  };

  const customWeekdayFormatter = (locale, date) => {
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return weekdays[date.getDay()];
  };

  const handleSubmit = (values) => {
    const backendValue = {...values}
    delete backendValue.name;
    delete backendValue.email;
    backendValue.blood = parseInt(values.blood);
    backendValue.levelActivity = parseInt(values.levelActivity);
    backendValue.birthday = formattingDateForBackEnd(backendValue.birthday);

    dispatch(fetchCalculateDailyMetrics(backendValue));
  };

  
  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        email: client.email,
        name: client.name,
        birthday: client.birthday ? formattingDate(new Date(client.birthday)) : '' ,
        blood: client.blood?.toString(),
        currentWeight: client.currentWeight,
        desiredWeight: client.desiredWeight,
        height: client.height,
        levelActivity: client.levelActivity?.toString(),
        sex: client.sex,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      enableReinitialize={true}
      initialTouched={{}}
      initialErrors={{}}
      validateOnMount={true}
    >
      {({ errors, touched, setFieldValue, handleChange, isValid, validateField }) => (
        <Form>
          <div>
            <span className={css.title}>Basic info</span>
            <div className={css.form}>
              <div className={css.tabletInput}>
                <Field
                  type='text'
                  id='name'
                  name='name'
                  onChange={handleChange}
                  className={`${css.inputBase} ${errors.name && touched.name ? css.error : ''}`}
                  required
                />

                {errors.name && touched.name && (
                  <div className={css.errorName}>
                    <svg width={16} height={16} fill='red'>
                      <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                    </svg>
                    <ErrorMessage name='name' component='div' />
                  </div>
                )}

                <Field
                  type='email'
                  id='email'
                  name='email'
                  onChange={handleChange}
                  className={`${css.inputBase} ${errors.email && touched.email ? css.error : ''}`}
                />

                {errors.email && touched.email && (
                  <div className={css.errorEmail}>
                    <svg width={16} height={16} fill='red'>
                      <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                    </svg>
                    <ErrorMessage name='email' component='div' />
                  </div>
                )}
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
                      className={`${css.inputHeight} ${
                        errors.height && touched.height && css.error
                      }`}
                      min='150'
                      required
                    />
                    {errors.height && touched.height && (
                      <div className={css.errorGroup1}>
                        <svg width={16} height={16} fill='red'>
                          <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                        </svg>
                        <ErrorMessage name='height' component='div' />
                      </div>
                    )}
                  </div>
                  <div className={css.column}>
                    <label htmlFor='desiredWeight' className={css.label}>
                      Desired Weight
                    </label>
                    <Field
                      type='number'
                      id='desiredWeight'
                      name='desiredWeight'
                      className={`${css.inputWeight} ${
                        errors.desiredWeight && touched.desiredWeight && css.error
                      }`}
                      min='35'
                      required
                    />
                    {errors.desiredWeight && touched.desiredWeight && (
                      <div className={css.errorGroup1}>
                        <svg width={16} height={16} fill='red'>
                          <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                        </svg>
                        <ErrorMessage name='desiredWeight' component='div' />
                      </div>
                    )}
                  </div>
                </div>
                <div className={css.group2}>
                  <div className={css.column}>
                    <label htmlFor='currentWeight' className={css.label}>
                      Current Weight
                    </label>
                    <Field
                      type='number'
                      id='currentWeight'
                      name='currentWeight'
                      className={`${css.inputDesireWeight} ${
                        errors.currentWeight && touched.currentWeight && css.error
                      }`}
                      min='35'
                      required
                    />
                    {errors.currentWeight && touched.currentWeight && (
                      <div className={css.errorGroup1}>
                        <svg width={16} height={16} fill='red'>
                          <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                        </svg>
                        <ErrorMessage name='currentWeight' component='div' />
                      </div>
                    )}
                  </div>
                  <div className={css.column}>
                    <Field
                      className={`${css.inputBirthday} ${css.inputDate} ${
                        errors.birthday && touched.birthday && css.error
                      }`}
                      id='birthday'
                      name='birthday'
                      placeholder='dd/mm/yyyy'
                    />
                    <svg onClick={showCalendar} className={css.calendarIcon}>
                      <use href={sprite + '#calendar_icon'}></use>
                    </svg>

                    {errors.birthday && touched.birthday && (
                      <div className={css.errorGroup3}>
                        <svg width={16} height={16} fill='red'>
                          <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                        </svg>
                        <ErrorMessage name='birthday' component='div' />
                      </div>
                    )}

                    {calendarIsClicked && (
                      <Calendar
                        onChange={async (date) => {
                          const correctDate = formattingDate(date);
                          closeCalendar();
                          setFieldValue('birthday', correctDate);
                          setTimeout(()=> {validateField('birthday')},1)
                        }}
                        next2Label={null}
                        value={allowedUserAge}
                        prev2Label={null}
                        locale='en'
                        defaultView='month'
                        formatShortWeekday={customWeekdayFormatter}
                        minDetail='decade'
                        maxDate={new Date(allowedUserAge)}
                        formatMonth={(locale, date) => {
                          const monthNames = [
                            'Jan',
                            'Feb',
                            'Mar',
                            'Apr',
                            'May',
                            'Jun',
                            'Jul',
                            'Aug',
                            'Sep',
                            'Oct',
                            'Nov',
                            'Dec',
                          ];
                          return monthNames[date.getMonth()];
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className={css.blood}>Blood</p>
          <div className={css.radio}>
            <div className={css.radioNumber}>
              <label className={`${css.labelMargin} `}>
                <Field
                  type='radio'
                  name='blood'
                  id='radio1'
                  value='1'
                  onChange={handleChange}
                  className={`${css.inputRadio} ${css.realRadio} ${
                    errors.blood && touched.blood ? css.error : ''
                  }`}
                />
                <span className={css.customRadio}></span>1
              </label>
              <label className={`${css.labelMargin} `}>
                <Field
                  type='radio'
                  name='blood'
                  value='2'
                  id='radio2'
                  onChange={handleChange}
                  className={`${css.inputRadio} ${css.realRadio} ${
                    errors.blood && touched.blood ? css.error : ''
                  }`}
                />
                <span className={css.customRadio}></span>2
              </label>
              <label className={`${css.labelMargin} `}>
                <Field
                  type='radio'
                  name='blood'
                  value='3'
                  id='radio3'
                  onChange={handleChange}
                  className={`${css.inputRadio} ${css.realRadio} ${
                    errors.blood && touched.blood ? css.error : ''
                  }`}
                />
                <span className={css.customRadio}></span>3
              </label>
              <label className={`${css.labelMargin} `}>
                <Field
                  type='radio'
                  name='blood'
                  id='radio4'
                  value='4'
                  onChange={handleChange}
                  className={`${css.inputRadio} ${css.realRadio} ${
                    errors.blood && touched.blood ? css.error : ''
                  }`}
                />
                <span className={css.customRadio}></span>4
              </label>
            </div>

            <div className={css.sex}>
              {['Male', 'Female'].map((option) => (
                <label key={option} className={`${css.labelMargin} `}>
                  <Field
                    type='radio'
                    name='sex'
                    value={option.charAt(0).toLowerCase() + option.slice(1)}
                    className={`${css.inputRadioSex} ${css.realRadio}`}
                  />
                  <span className={css.customRadio}></span>
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={css.radioText}>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field
                  type='radio'
                  name='levelActivity'
                  value='1'
                  className={`${css.inputRadioText} ${css.realRadio}`}
                />
                <span className={css.customRadio}></span>
                <span className={css.spanName}>
                  Sedentary lifestyle (little or no physical activity)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field
                  type='radio'
                  name='levelActivity'
                  value='2'
                  className={`${css.inputRadioText} ${css.realRadio}`}
                />
                <span className={css.customRadio}></span>
                <span className={css.spanName}>
                  Light activity (light exercises/sports 1-3 days per week)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field
                  type='radio'
                  name='levelActivity'
                  value='3'
                  className={`${css.inputRadioText} ${css.realRadio}`}
                />
                <span className={css.customRadio}></span>
                <span className={css.spanName}>
                  Moderately active (moderate exercises/sports 3-5 days per week)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field
                  type='radio'
                  name='levelActivity'
                  value='4'
                  className={`${css.inputRadioText} ${css.realRadio}`}
                />
                <span className={css.customRadio}></span>
                <span className={css.spanName}>
                  Very active (intense exercises/sports 6-7 days per week)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field
                  type='radio'
                  name='levelActivity'
                  value='5'
                  className={`${css.inputRadioText} ${css.realRadio}`}
                />
                <span className={css.customRadio}></span>
                <span className={css.spanName}>
                  Extremely active (very strenuous exercises/sports and physical work)
                </span>
              </label>
            </div>
          </div>
          <button type='submit' className={css.btn} disabled={!isValid}>
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
