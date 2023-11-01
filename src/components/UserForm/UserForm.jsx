import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addYears, subYears } from 'date-fns';
import css from './UserForm.module.scss';
import sprite from '../../images/svg/sprite.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { fetchCalculateDailyMetrics, fetchCurrentUser } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectClient } from '../../redux/selectors';




const UserForm = () => {

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required("Це поле обов'язкове"),
    email: Yup.string().email('Невірний формат Email'),
    birthday: Yup.date().required("Це поле обов'язкове"),
    blood: Yup.number().required('Оберіть опцію Blood'),
    currentWeight: Yup.number().min(35, 'Мінімальна вага - 35 кг').required("Це поле обов'язкове"),
    desiredWeight: Yup.number().min(35, 'Мінімальна вага - 35 кг').required("Це поле обов'язкове"),
    height: Yup.number().min(150, 'Мінімальна висота - 150 см').required("Це поле обов'язкове"),
    levelActivity: Yup.number().required('Оберіть опцію levelActivity'),
    sex: Yup.string().required('Оберіть стать'),
  });

  const [calendarIsClicked, setCalendarIsClicked] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const client = useSelector(selectClient);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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
    delete values.name;
    delete values.email;
    values.blood = parseInt(values.blood);
    values.levelActivity = parseInt(values.levelActivity);
    dispatch(fetchCalculateDailyMetrics(values));
    console.log(values);
  };


  return (
    <Formik
      initialValues={{
        email: client.email,
        name: client.name,
        birthday: client.birthday,
        blood: client.blood,
        currentWeight: client.currentWeight,
        desiredWeight: client.desiredWeight,
        height: client.height,
        levelActivity: client.levelActivity,
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
      {({ errors, touched, setFieldValue , handleChange}) => (
        <Form>
          <div>
            <span className={css.title}>Basic info</span>
            <div className={css.form}>
              <div className={css.tabletInput}>
                <Field
                  type='text'
                  id='name'
                  name='name'
                  // value={name}
                  onChange={handleChange}
                  className={`${css.inputBase} ${errors.name && touched.name ? css.error : ''}`}
                  required
                />
                <ErrorMessage name='name' component='div' className={css.errorName} />

                <Field
                  type='email'
                  id='email'
                  name='email'
                  onChange={handleChange}
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
                      <label className={`${css.label} ${css.none}`}>Date:</label>
                      <Field
                        // onClick={showCalendar}
                        className={`${css.input} ${css.inputDate} ${
                          errors.birthday && touched.birthday ? css.error : ''
                        }`}
                        value={currentDate === null ? '00.00.00' : currentDate}
                        id='birthday'
                        name='birthday'
                      />
                      <svg onClick={showCalendar} className={css.calendarIcon}>
                        <use href={sprite + '#calendar_icon'}></use>
                      </svg>
                      {calendarIsClicked && (
                        <Calendar
                          onChange={async (date) => {
                            const isoDate = await date.toISOString().split('T')[0];
                            setCurrentDate(isoDate);
                            closeCalendar();
                            setFieldValue('birthday', isoDate);
                          }}
                          // className={css.reactCalendar}
                          next2Label={null}
                          value={currentDate}
                          prev2Label={null}
                          locale='en'
                          defaultView='month'
                          formatShortWeekday={customWeekdayFormatter}
                          minDetail='month'
                          maxDate={addYears(new Date(), -18)} // Використовуємо addYears для вирахування 18 років назад
                          minDate={subYears(new Date(), 100)}
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
              <label className={`${css.labelMargin} `}>
                <Field
                  type='radio'
                  name='blood'
                  id='radio1'
                  value='1'
                  onChange={handleChange}
                  // onChange={(e) => setFieldValue('blood', e.target.value)}
                  className={`${css.inputRadio} ${css.realRadio} ${errors.blood && touched.blood ? css.error : ''}`}
                  
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
                  // onChange={(e) => setFieldValue('blood', e.target.value)}
                  className={`${css.inputRadio} ${css.realRadio} ${errors.blood && touched.blood ? css.error : ''}`}
                  
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
                  // onChange={(e) => setFieldValue('blood', e.target.value)}
                  className={`${css.inputRadio} ${css.realRadio} ${errors.blood && touched.blood ? css.error : ''}`}
                  
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
                  // onChange={(e) => setFieldValue('blood', e.target.value)}
                  className={`${css.inputRadio} ${css.realRadio} ${errors.blood && touched.blood ? css.error : ''}`}
                />
                <span className={css.customRadio}></span>4
              </label>
            </div>
            <ErrorMessage name='blood' component='div' className={css.error} />
            <div className={css.sex}>
              {['male', 'female'].map((option) => (
                <label key={option} className={`${css.labelMargin} `}>
                  <Field
                    type='radio'
                    name='sex'
                    value={option}
                    className={`${css.inputRadioSex} ${css.realRadio}${errors.sex && touched.sex ? css.error : ''}`}
                  
                  />
                  <span className={css.customRadio}></span>
                  <span>{option}</span>
                  
                </label>
              ))}
              <ErrorMessage name='sex' component='div' className={css.error} />
            </div>
          </div>

          <div className={css.radioText}>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field type='radio' name='levelActivity' value='1' className={`${css.inputRadioText} ${css.realRadio}`} />
                <span className={css.customRadio}></span>
                <span className={css.spanName}>
                  Sedentary lifestyle (little or no physical activity)
                </span>
               
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field type='radio' name='levelActivity' value='2' className={`${css.inputRadioText} ${css.realRadio}`} />
                
                <span className={css.customRadio}></span><span className={css.spanName}>
                  Light activity (light exercises/sports 1-3 days per week)
                </span>
                
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field type='radio' name='levelActivity' value='3' className={`${css.inputRadioText} ${css.realRadio}`} />
                
                <span className={css.customRadio}></span><span className={css.spanName}>
                  Moderately active (moderate exercises/sports 3-5 days per week)
                </span>
               
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field type='radio' name='levelActivity' value='4' className={`${css.inputRadioText} ${css.realRadio}`} />
                <span className={css.customRadio}></span><span className={css.spanName}>
                  Very active (intense exercises/sports 6-7 days per week)
                </span>
                
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} `}>
                <Field type='radio' name='levelActivity' value='5' className={`${css.inputRadioText} ${css.realRadio}`} />
                <span className={css.customRadio}></span>
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
