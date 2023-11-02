import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import React from 'react';
import css from './ProductsList.module.scss';
import { selectClient } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import InfiniteScroll from 'react-infinite-scroll-component';

export const ProductsList = ({ infiniteScrollHandler, currentProducts }) => {
  const { blood } = useSelector(selectClient);
  return (
    <>
      {currentProducts.length ? (
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
              return (
                <ProductsItem
                  key={product._id}
                  product={product}
                  recomendeProduct={product.groupBloodNotAllowed[blood]}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      ) : (
        <p style={{ color: 'white', fontSize: '25px' }}> product is not a found ;(</p>
      )}
    </>
  );
};
