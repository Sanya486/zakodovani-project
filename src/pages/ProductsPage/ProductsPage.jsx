import TitlePage from 'components/TitlePage/TitlePage';
import React from 'react';
import Container from 'components/Container/Container';
import ProductsFilters from 'components/ProductsFilters/ProductsFilters';
import css from './ProductsPage.module.scss';
import { ProductsList } from 'components/ProductsList/ProductsList';

const ProductsPage = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <p className={css.filtersTitle}>Filters</p>
        <div className={css.topWrapper}>
          <TitlePage classes={[css.title]}>Products</TitlePage>
          <ProductsFilters />
        </div>
        <div className={css.listWrapper}>
          <ProductsList />
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
