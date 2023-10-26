import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import css from './SsignInForm.module.scss';
import Button from 'components/Button/Button';

import sprite from '../../images/svg/sprite.svg';
import { useDispatch } from 'react-redux';
import { fetchLogin } from 'redux/operations';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={(values) => {
        dispatch(fetchLogin(values));
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.formWrapper}>
          <div className={clsx(css.inputsWrapper, errors.email && touched.email && css.noGap)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Field
                name='email'
                type='email'
                placeholder='Email'
                className={clsx(
                  css.inputStyle,
                  errors.email && touched.email && css.errorInput,
                  touched.email && !errors.email && css.successInput,
                )}
              />
              {errors.email && touched.email && (
                <div className={css.messageWrap}>
                  <svg width={16} height={16} fill='red'>
                    <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                  </svg>
                  <ErrorMessage component='p' className={css.errorMessage} name='email' />
                </div>
              )}
              {!errors.email && touched.email && (
                <div className={css.messageWrap}>
                  <svg className={css.successIcon}>
                    <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                  </svg>
                  <p className={css.successMessage}>Email</p>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div className={css.passwordWrapper}>
                <Field
                  name='password'
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder='Password'
                  className={clsx(
                    css.inputStyle,
                    errors.password && touched.password && css.errorInput,
                    touched.email && !errors.email && css.successInput,
                  )}
                />
                {isPasswordVisible ? (
                  <svg className={css.eyeIcon} onClick={() => setIsPasswordVisible(false)}>
                    <use href={sprite + '#icon-eye'}></use>
                  </svg>
                ) : (
                  <svg className={css.eyeIcon} onClick={() => setIsPasswordVisible(true)}>
                    <use href={sprite + '#icon-eye-off'}></use>
                  </svg>
                )}
              </div>
              {errors.password && touched.password && (
                <div className={css.messageWrap}>
                  <svg className={css.errorIcon}>
                    <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                  </svg>
                  <ErrorMessage component='p' className={css.errorMessage} name='password' />
                </div>
              )}
              {!errors.password && touched.password && (
                <div className={css.messageWrap}>
                  <svg className={css.successIcon}>
                    <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                  </svg>
                  <p className={css.successMessage}>Password</p>
                </div>
              )}
            </div>
          </div>

          <Button classes={[css.btn]} title='Sign In' styled='accent' />
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
