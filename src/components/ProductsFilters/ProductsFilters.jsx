import React, { useEffect, useState } from 'react';
import css from './ProductsFilters.module.scss';
import sprite from '../../images/svg/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductsCategories } from 'redux/selectors';
import clsx from 'clsx';
import { fetchProductsCategories } from 'redux/operations';

const ProductsFilters = () => {
  const dispatch = useDispatch();

  const [reccomendation, setReccomendation] = useState('All');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [isCloseIconShown, setIsCloseIconShown] = useState(false);
  const [isRecOpen, setIsRecOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const productCategories = useSelector(selectProductsCategories);
  useEffect(() => {
    if (search) setIsCloseIconShown(true);
    else setIsCloseIconShown(false);
  }, [search]);

  useEffect(() => {
    dispatch(fetchProductsCategories());
  }, [dispatch]);

  return (
    <>
      <form className={css.formStyle} onSubmit={handleSubmit}>
        <div className={css.searchWrapper}>
          <input
            className={css.inputStyle}
            name='search'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {isCloseIconShown && (
            <button className={css.btnClearIcon} type='button' onClick={() => setSearch('')}>
              <svg className={css.clearIcon}>
                <use href={sprite + '#close_icon'}></use>
              </svg>
            </button>
          )}

          <button className={css.btnSearchIcon} type='submit'>
            <svg className={css.searchIcon}>
              <use href={sprite + '#search_icon'}></use>
            </svg>
          </button>
        </div>
        <div className={css.selectorWrapper}>
          <div
            className={css.categoryWrap}
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <div
              style={{ position: 'relative', zIndex: 100, backgroundColor: 'transparent' }}
              onMouseOver={() => setIsCategoryOpen(true)}
            >
              <input
                className={clsx(css.inputStyle, css.categorySelector)}
                name='categories'
                placeholder='Categories'
                value={category}
                disabled
              />
            </div>
            <svg onClick={() => setIsCategoryOpen((prev) => !prev)} className={css.chevronDownIcon}>
              <use href={sprite + '#icon-chevron-down'}></use>
            </svg>
            {isCategoryOpen && productCategories && (
              <div className={css.categoryOptionWrap} onMouseLeave={() => setIsCategoryOpen(false)}>
                <div className={css.scrollWrap}>
                  <ul className={css.categoryOptionWrapList}>
                    {productCategories.map((category, index) => {
                      const formattedCategory =
                        category.charAt(0).toUpperCase() + category.slice(1);
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
            <input
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
                    }}
                  >
                    <p>Not recommended</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductsFilters;
