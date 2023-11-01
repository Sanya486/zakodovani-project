import TitlePage from 'components/TitlePage/TitlePage';
import React, { useEffect, useState } from 'react';
import Container from 'components/Container/Container';
import ProductsFilters from 'components/ProductsFilters/ProductsFilters';
import css from './ProductsPage.module.scss';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { fetchProducts } from 'redux/operations';
import { Puff } from 'react-loader-spinner';

const ProductsPage = () => {
  const limit = 20;
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [page, setPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [recommendation, setReccomendation] = useState('All');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentProducts([]);
    setPage(1);
    dispatch(
      fetchProducts({ page: 1, limit, category: category.toLocaleLowerCase(), recommendation }),
    );
  };
  useEffect(() => {
    dispatch(
      fetchProducts({ page, limit, category: category.toLocaleLowerCase(), recommendation }),
    );
  }, [page, limit]);

  useEffect(() => {
    if (
      products &&
      products.length > 0 &&
      currentProducts[currentProducts.length - 1]?._id !== products[products.length - 1]?._id
    ) {
      setCurrentProducts((prevX) => [...prevX, ...products]);
    }
  }, [products]);

  const infiniteScrollHandler = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <Container>
      <div className={css.wrapper}>
        <p className={css.filtersTitle}>Filters</p>
        <div className={css.topWrapper}>
          <TitlePage classes={[css.title]}>Products</TitlePage>
          <ProductsFilters
            handleSubmit={handleSubmit}
            recommendation={recommendation}
            search={search}
            category={category}
            setReccomendation={setReccomendation}
            setCategory={setCategory}
            setSearch={setSearch}
          />
        </div>
        {currentProducts.length ? (
          <div className={css.listWrapper}>
            <ProductsList
              infiniteScrollHandler={infiniteScrollHandler}
              currentProducts={
                search
                  ? currentProducts.filter((e) => {
                      return e.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
                    })
                  : currentProducts
              }
            />
          </div>
        ) : (
          <Puff
            height='100'
            width='100'
            color='#e6533c'
            ariaLabel='line-wave'
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '50vh',
            }}
            wrapperClass=''
            visible={true}
            firstLineColor=''
            middleLineColor=''
            lastLineColor=''
          />
        )}
      </div>
    </Container>
  );
};

export default ProductsPage;
