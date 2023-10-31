import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './ProductsList.module.scss';

export const ProductsList = ({ productByPage, setProductPage, productsTotalCount }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await setProductPage(page);
      setPage((prev) => prev + 1);
      setProducts((prev) => [...prev, ...productByPage]);
      setFetching(false);
    };

    if (fetching) {
      fetchData();
    }
  }, [fetching]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return function () {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      products.length < productsTotalCount
    ) {
      setFetching(true);
    }
  };

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

ProductsList.propTypes = {
  productByPage: PropTypes.array.isRequired,
  setProductPage: PropTypes.func.isRequired,
  productsTotalCount: PropTypes.number.isRequired,
};
