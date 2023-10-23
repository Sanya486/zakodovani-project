import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import css from './SignUpForm.module.scss';
import Button from 'components/Button/Button';

import sprite from '../../images/svg/sprite.svg';

// import PropTypes from 'prop-types'

const SignUpFrom = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        email: Yup.string()
          .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, { message: 'Invalid email address' })
          .required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={() => {}}
    >
      {({ errors, touched }) => (
        <Form className={css.formWrapper}>
          <div className={clsx(css.inputsWrapper, errors.email && touched.email && css.noGap)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Field
                name='name'
                type='text'
                placeholder='Name'
                className={clsx(
                  css.inputStyle,
                  errors.name && touched.name && css.errorInput,
                  touched.name && !errors.name && css.successInput,
                )}
              />
              {errors.name && touched.name && (
                <div className={css.messageWrap}>
                  <svg width={16} height={16} fill='red'>
                    <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                  </svg>
                  <ErrorMessage component='p' className={css.errorMessage} name='email' />
                </div>
              )}
            </div>
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
                  <p className={css.successMessage}>Success email</p>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Field
                name='password'
                type='text'
                placeholder='Password'
                className={clsx(
                  css.inputStyle,
                  errors.password && touched.password && css.errorInput,
                  touched.password && !errors.password && css.successInput,
                )}
              />
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
                  <p className={css.successMessage}>Success password</p>
                </div>
              )}
            </div>
          </div>

          <Button classes={[css.btn]} title='Sign Up' styled='accent' />
        </Form>
      )}
    </Formik>
  );
};

// SignInForm.propTypes = {

// }

export default SignUpFrom;
