import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './ProductsFilters.module.scss';
import sprite from '../../images/svg/sprite.svg';
import { useSelector } from 'react-redux';
import { selectProductsCategories } from 'redux/selectors';
import clsx from 'clsx';
// import PropTypes from 'prop-types'

const ProductsFilters = () => {
  const [reccomendation, setReccomendation] = useState('');
  const [category, setCategory] = useState('');

  const [isRecOpen, setIsRecOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const productCategories = useSelector(selectProductsCategories);
    return (
        <>
            <div style={{width: 200, height: 200}}></div>
            <Formik initialValues={{ search: '', categories: '', recommendation: '' }} onSubmit={(values) => {console.log(values) }}>
      {() => (
        <Form className={css.formStyle}>
          <div className={css.searchWrapper}>
            <Field className={css.inputStyle} name='search' placeholder='Search' />
            <button className={css.btnIcon} type='submit'>
              <svg className={css.icon}>
                <use href={sprite + '#search_icon'}></use>
              </svg>
            </button>
          </div>
          <div className={css.selectorWrapper}>
            <div className={css.categoryWrap}>
              <Field
                className={clsx(css.inputStyle, css.categorySelector)}
                name='categories'
                placeholder='Categories'
                value={category}
                disabled
              />
              <svg
                onClick={() => setIsCategoryOpen((prev) => !prev)}
                className={css.chevronDownIcon}
              >
                <use href={sprite + '#icon-chevron-down'}></use>
              </svg>
              {isCategoryOpen && productCategories && (
                <div className={css.categoryOptionWrap}>
                 <div className={css.scrollWrap}>
                      <ul className={css.categoryOptionWrapList}>
                                          {productCategories.map((category, index) => {
                                              const formattedCategory = category
                                                .charAt(0)
                                                .toUpperCase() + category.slice(1)
                                              return (
                                                <li key={index}>
                                                  <p
                                                    onClick={() => {
                                                      setIsCategoryOpen(false);
                                                      setCategory(formattedCategory);
                                                    }}
                                                  >
                                                    {formattedCategory}
                                                  </p>
                                                </li>
                                              );
                                          })}
                      </ul>
                 </div>
                </div>
              )}
            </div>

            <div className={css.recommendationWrap}>
              <Field
                className={clsx(css.inputStyle)}
                disabled
                value={reccomendation}
                name='recommendation'
                placeholder='All'
              />
              <svg onClick={() => setIsRecOpen((prev) => !prev)} className={css.chevronDownIcon}>
                <use href={sprite + '#icon-chevron-down'}></use>
              </svg>
              {isRecOpen && (
                <div className={css.recommendationOptionWrap}>
                  <ul className={css.recommendationOptionWrapList}>
                    <li>
                      <p
                        onClick={() => {
                          setIsRecOpen(false);
                          setReccomendation('All');
                        }}
                      >
                        All
                      </p>
                    </li>
                    <li
                      onClick={() => {
                        setReccomendation('Recommended');
                        setIsRecOpen(false);
                      }}
                    >
                      <p>Recommended</p>
                    </li>
                    <li
                      onClick={() => {
                        setReccomendation('Not recommended');
                        setIsRecOpen(false);
                        console.log('object');
                      }}
                    >
                      <p>Not recommended</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
    </>
   
  );
};

// ProductsFilters.propTypes = {

// }

export default ProductsFilters;
