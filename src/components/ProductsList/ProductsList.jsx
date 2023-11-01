import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import React, { useEffect, useState } from 'react';
import css from './ProductsList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { fetchProducts } from 'redux/operations';

import InfiniteScroll from 'react-infinite-scroll-component';
import { clearProduct } from 'redux/productsSlice';

export const ProductsList = () => {
  const limit = 10;

  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts({ page, limit }));
    return () => {
      dispatch(clearProduct());
    };
  }, []);

  const infiniteScrollHandler = () => {
    setPage((prev) => prev + 1);

    dispatch(fetchProducts({ page, limit }));
  };

  return (
    <div className={css.productsListContainer} id='scrollableDiv'>
      <InfiniteScroll
        dataLength={products && products.length}
        next={infiniteScrollHandler}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        className={css.productList}
        scrollableTarget='scrollableDiv'
      >
        {products.map((product) => (
          <ProductsItem key={product._id} product={product} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
