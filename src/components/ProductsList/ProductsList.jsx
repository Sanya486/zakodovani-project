import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import React from 'react';
import css from './ProductsList.module.scss';

import InfiniteScroll from 'react-infinite-scroll-component';

export const ProductsList = ({ infiniteScrollHandler, currentProducts }) => {
  return (
    <div className={css.productsListContainer} id='scrollableDiv'>
      <InfiniteScroll
        dataLength={currentProducts && currentProducts.length}
        next={infiniteScrollHandler}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        className={css.productList}
        scrollableTarget='scrollableDiv'
      >
        {currentProducts.map((product) => {
          return <ProductsItem key={product._id} product={product} />;
        })}
      </InfiniteScroll>
    </div>
  );
};
