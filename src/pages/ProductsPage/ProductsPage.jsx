import TitlePage from 'components/TitlePage/TitlePage';
import React, { useEffect, useState } from 'react';
import Container from 'components/Container/Container';
import ProductsFilters from 'components/ProductsFilters/ProductsFilters';
import css from './ProductsPage.module.scss';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { fetchProducts } from 'redux/operations';
const ProductsPage = () => {
  const limit = 20;
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [page, setPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [recommendation, setReccomendation] = useState('all');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [formdata, setFormData] = useState({ search, category, recommendation });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      search,
      category,
      recommendation,
    });
    setCurrentProducts([]);
    setPage(1);
    dispatch(fetchProducts({ page: 1, limit, category, recommendation }));
  };
  useEffect(() => {
    console.log(formdata);
    dispatch(fetchProducts({ page, limit, category, recommendation }));
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
        <div className={css.listWrapper}>
          <ProductsList
            infiniteScrollHandler={infiniteScrollHandler}
            currentProducts={currentProducts}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
