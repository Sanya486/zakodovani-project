import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import css from './UserForm.module.scss';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Це поле обов'язкове"),
  email: Yup.string().email('Невірний формат Email'),
  height: Yup.number()
    .min(150, 'Мінімальна висота - 150 см')
    .required("Це поле обов'язкове"),
  cur_height: Yup.number()
    .min(35, 'Мінімальна вага - 35 кг')
    .required("Це поле обов'язкове"),
  weight: Yup.number()
    .min(35, 'Мінімальна вага - 35 кг')
    .required("Це поле обов'язкове"),
  calendar: Yup.date().required("Це поле обов'язкове"),
  number: Yup.string().required('Оберіть опцію Blood'),
  sex: Yup.string().required('Оберіть стать'),
});

const CalendarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      stroke="#FF0000" // змініть на білий колір//
      stroke-linecap="round"
      stroke-linejoin="round"
      className={css['inputWithIcon']}
      stroke-width="1.5"
      d="M14.25 3H3.75a1.5 1.5 0 0 0-1.5 1.5V15a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V4.5a1.5 1.5 0 0 0-1.5-1.5ZM12 1.5v3M6 1.5v3M2.25 7.5h13.5"
    />
  </svg>
);

const UserForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        height: 0,
        cur_height: 0,
        weight: 0,
        calendar: null,
        number: '1',
        sex: 'Male',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form>
          <div className={css['container']}>
            <span className={css['title']}>Basic info</span>
            <div className={css['form']}>
              <div className={css['tabletInput']}>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`${css['inputBase']} ${
                    errors.name && touched.name ? css['error'] : ' '
                  }`}
                  required
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css['errorName']}
                />

                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`${css['inputBase']} ${
                    errors.email && touched.email ? css['error'] : ''
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css['errorEmail']}
                />
              </div>

              <div className={css['group']}>
                <div className={css['group1']}>
                  <div className={css['column']}>
                    <label htmlFor="height" className={css['label']}>
                      Height
                    </label>
                    <Field
                      type="number"
                      id="height"
                      name="height"
                      className={`${css['input']} ${
                        errors.height && touched.height ? css['error'] : ''
                      }`}
                      min="150"
                      required
                    />
                    <ErrorMessage
                      name="height"
                      component="div"
                      className={css['errorGroup1']}
                    />
                  </div>
                  <div className={css['column']}>
                    <label htmlFor="cur_height" className={css['label']}>
                      Desired Weight
                    </label>
                    <Field
                      type="number"
                      id="cur_height"
                      name="cur_height"
                      className={`${css['input']} ${
                        errors.cur_height && touched.cur_height
                          ? css['error']
                          : ''
                      }`}
                      min="35"
                      required
                    />
                    <ErrorMessage
                      name="cur_height"
                      component="div"
                      className={css['errorGroup1']}
                    />
                  </div>
                </div>
                <div className={css['group2']}>
                  <div className={css['column']}>
                    <label htmlFor="weight" className={css['label']}>
                      Current Weight
                    </label>
                    <Field
                      type="number"
                      id="weight"
                      name="weight"
                      className={`${css['input']} ${
                        errors.weight && touched.weight ? css['error'] : ''
                      }`}
                      min="35"
                      required
                    />
                    <ErrorMessage
                      name="weight"
                      component="div"
                      className={css['errorGroup2']}
                    />
                  </div>
                  <div className={css['column']}>
                    <div className={css['calendar-input-container']}>
                      <DatePicker
                        name="calendar"
                        selected={values.calendar}
                        onChange={date => setFieldValue('calendar', date)}
                        customInput={
                          <div className={css['calendar-wrapper']}>
                            <Field
                              id="calendar"
                              type="text"
                              name="calendar"
                              className={`${css['calendar']} ${
                                errors.calendar && touched.calendar
                                  ? css['error']
                                  : ''
                              }`}
                              value={
                                values.calendar
                                  ? values.calendar.toLocaleDateString('en-US')
                                  : ''
                              }
                            />
                            {CalendarIcon}
                          </div>
                        }
                        dateFormat="MM/dd/yyyy"
                      />
                      <ErrorMessage
                        name="calendar"
                        component="div"
                        className={css['errorCalendar']}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <span className={css['blood']}>Blood</span>
              <div className={css['radio']}>
                <div className={css['radioNumber']}>
                  <label className={css['labelMargin']}>
                    <Field
                      type="radio"
                      name="number"
                      value="1"
                      className={`${css['inputRadio']} ${
                        errors.number && touched.number ? css['error'] : ''
                      }`}
                    />
                    1
                  </label>
                  <label className={css['labelMargin']}>
                    <Field
                      type="radio"
                      name="number"
                      value="2"
                      className={`${css['inputRadio']} ${
                        errors.number && touched.number ? css['error'] : ''
                      }`}
                    />
                    2
                  </label>
                  <label className={css['labelMargin']}>
                    <Field
                      type="radio"
                      name="number"
                      value="3"
                      className={`${css['inputRadio']} ${
                        errors.number && touched.number ? css['error'] : ''
                      }`}
                    />
                    3
                  </label>
                  <label className={css['labelMargin']}>
                    <Field
                      type="radio"
                      name="number"
                      value="4"
                      className={`${css['inputRadio']} ${
                        errors.number && touched.number ? css['error'] : ''
                      }`}
                    />
                    4
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="number"
                      value="5"
                      className={`${css['inputRadio']} ${
                        errors.number && touched.number ? css['error'] : ''
                      }`}
                    />
                    5
                  </label>
                  <ErrorMessage
                    name="number"
                    component="div"
                    className={css['error']}
                  />
                </div>
                <div className={css['sex']}>
                  <label className={css['labelMargin']}>
                    <Field
                      type="radio"
                      name="sex"
                      value="Male"
                      className={`${css['inputRadio']} ${
                        errors.sex && touched.sex ? css['error'] : ''
                      }`}
                    />
                    Male
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="sex"
                      value="Female"
                      className={`${css['inputRadio']} ${
                        errors.sex && touched.sex ? css['error'] : ''
                      }`}
                    />
                    Female
                  </label>
                  <ErrorMessage
                    name="sex"
                    component="div"
                    className={css['error']}
                  />
                </div>
              </div>
              <div className={css['radioText']}>
                <label className={css['labelText']}>
                  <Field
                    type="radio"
                    name="radioText"
                    className={css['inputRadio']}
                  />
                  Sedentary lifestyle (little or no physical activity)
                </label>
                <label className={css['labelText']}>
                  <Field
                    type="radio"
                    name="radioText"
                    className={css['inputRadio']}
                    value="2"
                  />
                  Light activity (light exercises/sports 1-3 days per week)
                </label>
                <label className={css['labelText']}>
                  <Field
                    type="radio"
                    name="radioText"
                    className={css['inputRadio']}
                    value="3"
                  />
                  Moderately active (moderate exercises/sports 3-5 days per
                  week)
                </label>
                <label className={css['labelText']}>
                  <Field
                    type="radio"
                    name="radioText"
                    className={css['inputRadio']}
                    value="4"
                  />
                  Very active (intense exercises/sports 6-7 days per week)
                </label>
                <label className={css['labelText']}>
                  <Field
                    type="radio"
                    name="radioText"
                    className={css['inputRadio']}
                    value="5"
                  />
                  Extremely active (very strenuous exercises/sports and physical
                  work)
                </label>
              </div>
              <button type="submit" className={css['btn']}>
                Save
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
