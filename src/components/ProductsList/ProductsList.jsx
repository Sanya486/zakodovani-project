import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import React, { useEffect } from 'react';
import css from './ProductsList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { fetchProducts } from 'redux/operations';

export const ProductsList = () => {
  //   const exampleProductArr = [
  //     {
  //       isRecommend: true,
  //       title: 'Rice semolina Garnets gluten-free',
  //       calories: '340',
  //       category: 'Cereals',
  //       weight: '100',
  //     },
  //     {
  //       isRecommend: false,
  //       title: 'Venison . stew Special',
  //       calories: '81',
  //       category: 'Meat',
  //       weight: '100',
  //     },
  //     {
  //       isRecommend: true,
  //       title: 'Rice semolina Garnets gluten-free',
  //       calories: '300',
  //       category: 'Cereals',
  //       weight: '100',
  //     },
  //     {
  //       isRecommend: true,
  //       title: 'Rice semolina Garnets gluten-free',
  //       calories: '300',
  //       category: 'Cereals',
  //       weight: '100',
  //     },
  //     {
  //       isRecommend: true,
  //       title: 'Rice semolina Garnets gluten-free',
  //       calories: '340',
  //       category: 'Cereals',
  //       weight: '100',
  //     },
  //     {
  //       isRecommend: false,
  //       title: 'Venison . stew Special',
  //       calories: '81',
  //       category: 'Meat',
  //       weight: '100',
  //     },
  //     {
  //       isRecommend: true,
  //       title: 'Rice semolina Garnets gluten-free',
  //       calories: '340',
  //       category: 'Cereals',
  //       weight: '100',
  //     },
  //     {
  //       isRecommend: false,
  //       title: 'Venison . stew Special',
  //       calories: '81',
  //       category: 'Meat',
  //       weight: '100',
  //     },
  //   ];

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={css.productsListContainer}>
      <ul className={css.productList}>
        {products.map((product) => (
          <ProductsItem key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};
