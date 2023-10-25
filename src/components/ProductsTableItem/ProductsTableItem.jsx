// import { Field, Formik, Form } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

// import css from './ProductsTableItem.module.scss';
import css from './ProductsTableItem-copy.module.scss';
import sprite from '../../images/svg/sprite.svg';
import { clsx } from 'clsx';

export const ProductTableItem = ({ title, category, calories, weight, recommend }) => {
  const productTableItem = {
    title: title,
    category: category,
    calories: calories,
    weight: weight,
    recommend: recommend,
  };
  return (
    // <div>
    //   <Formik
    //     initialValues={{
    //       title: title,
    //       category: category,
    //       calories: calories,
    //       weight: weight,
    //       recommend: recommend,
    //     }}
    //     onSubmit={async (values) => {
    //       await new Promise((r) => setTimeout(r, 500));
    //       alert(JSON.stringify(values, null, 2));
    //     }}
    //   >
    //     <Form className={css.form}>
    //       <div className={css.fieldWrap}>
    //         <label htmlFor='title' className={css.title}>
    //           Title
    //         </label>
    //         <Field id='title' name='title' className={clsx(css.field, css.titleField)} readOnly />
    //       </div>
    //       <div className={css.fieldWrap}>
    //         <label htmlFor='category' className={css.title}>
    //           Category
    //         </label>
    //         <Field id='category' name='category' className={clsx(css.field, css.categoriesField)} readOnly />
    //       </div>

    //       <div className={css.blockWrap}>
    //         <div className={css.subBlockWrap}>
    //           <div className={css.fieldWrap}>
    //             <label htmlFor='calories' className={css.title}>
    //               Calories
    //             </label>
    //             <Field
    //               id='calories'
    //               name='calories'
    //               className={clsx(css.field, css.caloriesField)}
    //               readOnly
    //             />
    //           </div>
    //           <div className={css.fieldWrap}>
    //             <label htmlFor='weight' className={css.title}>
    //               Weight
    //             </label>
    //             <Field
    //               id='weight'
    //               name='weight'
    //               className={clsx(css.field, css.weightField)}
    //               readOnly
    //             />
    //           </div>
    //           <div className={css.fieldWrap}>
    //             <label htmlFor='recommend' className={css.title}>
    //               Recommend
    //             </label>
    //             <Field
    //               id='recommend'
    //               name='recommend'
    //               className={clsx(css.field, css.recommendField)}
    //               readOnly
    //             />
    //           </div>
    //         </div>
    //         <div className={css.buttonWrap}>
    //           <button type='submit' className={css.button}>
    //             <svg className={css.icon}>
    //               <use href={sprite + '#trash_icon'}></use>
    //             </svg>
    //           </button>
    //         </div>
    //       </div>

    //     </Form>
    //   </Formik>
    // </div>

    <div className={css.container}>
      <div className={clsx(css.element, css.titleElement)}>
        <p className={css.title}>Title</p>
        <p className={css.field}>{productTableItem.title}</p>
      </div>

      <div className={clsx(css.element, css.categoriesElement)}>
        <p className={css.title}>Category</p>
        <p className={css.field}>{productTableItem.category}</p>
      </div>

      <div className={css.blockWrap}>
        <div className={css.subBlockWrap}>
        <div className={clsx(css.element, css.caloriesElement)}>
          <p className={css.title}>Calories</p>
          <p className={css.field}>{productTableItem.calories}</p>
        </div>

        <div className={clsx(css.element, css.weightElement)}>
          <p className={css.title}>Weight</p>
          <p className={css.field}>{productTableItem.weight}</p>
        </div>

        <div className={clsx(css.element, css.recommendElement)}>
          <p className={css.title}>Recommend</p>
          <p className={css.field}>{productTableItem.recommend}</p>
        </div>
       </div>

        <div className={css.buttonWrap}>
          <button type='submit' className={css.button}>
            <svg className={css.icon}>
              <use href={sprite + '#trash_icon'}></use>
            </svg>
          </button>
        </div>
      </div>

      {/* <Form className={css.form}>
        <div className={css.fieldWrap}>
          <label htmlFor='title' className={css.title}>
            Title
          </label>
          <Field id='title' name='title' className={clsx(css.field, css.titleField)} readOnly />
        </div>
        <div className={css.fieldWrap}>
          <label htmlFor='category' className={css.title}>
            Category
          </label>
          <Field id='category' name='category' className={clsx(css.field, css.categoriesField)} readOnly />
        </div>



        <div className={css.blockWrap}>
          <div className={css.subBlockWrap}>
            <div className={css.fieldWrap}>
              <label htmlFor='calories' className={css.title}>
                Calories
              </label>
              <Field
                id='calories'
                name='calories'
                className={clsx(css.field, css.caloriesField)}
                readOnly
              />
            </div>
            <div className={css.fieldWrap}>
              <label htmlFor='weight' className={css.title}>
                Weight
              </label>
              <Field
                id='weight'
                name='weight'
                className={clsx(css.field, css.weightField)}
                readOnly
              />
            </div>
            <div className={css.fieldWrap}>
              <label htmlFor='recommend' className={css.title}>
                Recommend
              </label>
              <Field
                id='recommend'
                name='recommend'
                className={clsx(css.field, css.recommendField)}
                readOnly
              />
            </div>
          </div> */}
      {/* <div className={css.buttonWrap}>
        <button type='submit' className={css.button}>
          <svg className={css.icon}>
            <use href={sprite + '#trash_icon'}></use>
          </svg>
        </button>
      </div> */}
    </div>

    //   </Form>

    //   </div>
  );
};

ProductTableItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  recommend: PropTypes.string.isRequired,
};
