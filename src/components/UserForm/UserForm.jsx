import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './UserForm.module.scss';
import sprite from '../../images/svg/sprite.svg';
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Це поле обов'язкове"),
  email: Yup.string().email('Невірний формат Email'),
  height: Yup.number().min(150, 'Мінімальна висота - 150 см').required("Це поле обов'язкове"),
  cur_height: Yup.number().min(35, 'Мінімальна вага - 35 кг').required("Це поле обов'язкове"),
  weight: Yup.number().min(35, 'Мінімальна вага - 35 кг').required("Це поле обов'язкове"),
  calendar: Yup.date().required("Це поле обов'язкове"),
  number: Yup.string().required('Оберіть опцію Blood'),
  sex: Yup.string().required('Оберіть стать'),
});

const UserForm = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        height: 0,
        cur_height: 0,
        weight: 0,
        date: 0,
        number: '1',
        sex: 'Male',
        radioText: '1',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
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
                <ErrorMessage name='name' component='div' className={css.error} />

                <Field
                  type='email'
                  id='email'
                  name='email'
                  className={`${css.inputBase} ${errors.email && touched.email ? css.error : ''}`}
                />
                <ErrorMessage name='email' component='div' className={css.error} />
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
                    <ErrorMessage name='height' component='div' className={css.error} />
                  </div>
                  <div className={css.column}>
                    <label htmlFor='cur_height' className={css.label}>
                      Desired Weight
                    </label>
                    <Field
                      type='number'
                      id='cur_height'
                      name='cur_height'
                      className={`${css.input} ${
                        errors.cur_height && touched.cur_height ? css.error : ''
                      }`}
                      min='35'
                      required
                    />
                    <ErrorMessage name='cur_height' component='div' className={css.error} />
                  </div>
                </div>
                <div className={css.group2}>
                  <div className={css.column}>
                    <label htmlFor='weight' className={css.label}>
                      Current Weight
                    </label>
                    <Field
                      type='number'
                      id='weight'
                      name='weight'
                      className={`${css.input} ${errors.weight && touched.weight ? css.error : ''}`}
                      min='35'
                      required
                    />
                    <ErrorMessage name='weight' component='div' className={css.error} />
                  </div>
                  <div className={css.column}>
                    <div className={css.forIcon}>
                      <label htmlFor='date' className={`${css.label} ${css.none}`}>
                        Date:
                      </label>

                      <Field name='date'>
  {() => (
    <DatePicker
      id='date'
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      className={css.inputDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      placeholderText='00.00.0000'
      closeOnScroll={true}
    />
  )}
</Field>
                      <svg className={css.calendarIcon}>
                        <use href={sprite + '#calendar_icon'}></use>
                      </svg>
                      <ErrorMessage name='date' component='div' />
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
                    name='number'
                    value={value.toString()}
                    className={`${css.inputRadio} ${
                      errors.number && touched.number ? css.error : ''
                    }`}
                  />
                  <span>{value}</span>
                </label>
              ))}
              <ErrorMessage name='number' component='div' className={css.error} />
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
                  name='radioText'
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
                <Field type='radio' name='radioText' value='2' className={css.inputRadioText} />
                <span className={css.spanName}>
                  Light activity (light exercises/sports 1-3 days per week)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} ${css.customRadio}`}>
                <Field type='radio' name='radioText' value='3' className={css.inputRadioText} />
                <span className={css.spanName}>
                  Moderately active (moderate exercises/sports 3-5 days per week)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} ${css.customRadio}`}>
                <Field type='radio' name='radioText' value='4' className={css.inputRadioText} />
                <span className={css.spanName}>
                  Very active (intense exercises/sports 6-7 days per week)
                </span>
              </label>
            </div>
            <div className={css.groupsLAbel}>
              <label className={`${css.labelText} ${css.customRadio}`}>
                <Field type='radio' name='radioText' value='5' className={css.inputRadioText} />
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
