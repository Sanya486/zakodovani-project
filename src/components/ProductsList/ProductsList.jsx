import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './ProductsList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { fetchProducts } from 'redux/operations';

 import InfiniteScroll from 'react-infinite-scroll-component';
import { clearProduct } from 'redux/productsSlice';

export const ProductsList = () => {
  // const [products, setProducts] = useState([]);
  // const [page, setPage] = useState(1);
  // const [fetching, setFetching] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await setProductPage(page);
  //     setPage((prev) => prev + 1);
  //     setProducts((prev) => [...prev, ...productByPage]);
  //     setFetching(false);
  //   };

  //   if (fetching) {
  //     fetchData();
  //   }
  // }, [fetching]);

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollHandler);

  //   return function () {
  //     window.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  // const scrollHandler = (e) => {
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //       100 &&
  //     products.length < productsTotalCount
  //   ) {
  //     setFetching(true);
  //   }
  // };

  const limit = 10

const dispatch = useDispatch()

  const products = useSelector(selectProducts);

  // const anchorRef = useRef(null)

  const [page, setPage] = useState(1);

  // const observerHandler = (entries) => {
  //   const [entry] = entries
  //   console.log(entry)
  // }
  
  // const observerOptions = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1.0
  // } 

  // useEffect(() => {
  //   const observer = new IntersectionObserver(observerHandler, observerOptions)
  //   if (anchorRef.current) observer.observe(anchorRef.current)
  //   return () => {
  //   if(anchorRef.current) observer.unobserve(anchorRef.current)
  //   }
  // }, [anchorRef, observerOptions])

  useEffect(() => {
    dispatch(fetchProducts({ page, limit }))
    return () => {
      dispatch(clearProduct())
    }
  },[])
  
  const infiniteScrollHandler = () => {
    setPage(prev => prev + 1)
    console.log(page)
    dispatch(fetchProducts({ page, limit }));
  }


  return (
    <div className={css.productsListContainer} id='scrollableDiv'>
      <InfiniteScroll
        dataLength={ products && products.length}
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

ProductsList.propTypes = {
  productByPage: PropTypes.array.isRequired,
  setProductPage: PropTypes.func.isRequired,
  productsTotalCount: PropTypes.number.isRequired,
};
