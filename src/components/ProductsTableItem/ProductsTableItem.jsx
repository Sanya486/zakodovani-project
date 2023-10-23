import { Field, Formik, Form } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

import css from './ProductsTableItem.module.scss';
import sprite from '../../images/svg/sprite.svg';
// import { clsx } from 'clsx';

export const ProductTableItem = ({ title, category, calories, weight, recommend }) => {
  return (
    <div>
      <Formik
        initialValues={{
          title: title,
          category: category,
          calories: calories,
          weight: weight,
          recommend: recommend,
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={css.form}>
          <div className={css.fieldWrap}>
            <label htmlFor='title' className={css.title}>
              Title
            </label>
            <Field id='title' name='title' className={css.field} />
          </div>
          <div className={css.fieldWrap}>
            <label htmlFor='category' className={css.title}>
              Category
            </label>
            <Field id='category' name='category' className={css.field} />
          </div>
          <div className={css.blockWrap}>
            <div className={css.fieldWrap}>
              <label htmlFor='calories' className={css.title}>
                Calories
              </label>
              <Field id='calories' name='calories' className={css.field} />
            </div>
            <div className={css.fieldWrap}>
              <label htmlFor='weight' className={css.title}>
                Weight
              </label>
              <Field id='weight' name='weight' className={css.field} />
            </div>
            <div className={css.fieldWrap}>
              <label htmlFor='recommend' className={css.title}>
                Recommend
              </label>
              <Field id='recommend' name='recommend' className={css.field} />
            </div>
            <button type='submit' className={css.button}>
              <svg className={css.icon}>
                <use href={sprite + '#trash_icon'}></use>
              </svg>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

ProductTableItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  recommend: PropTypes.bool.isRequired,
};
