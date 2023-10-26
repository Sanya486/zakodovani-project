import TitlePage from 'components/TitlePage/TitlePage';
import React from 'react';
// import PropTypes from 'prop-types'
import Container from 'components/Container/Container';
import ProductsFilters from 'components/ProductsFilters/ProductsFilters';
import css from './ProductsPage.module.scss';

const ProductsPage = () => {
  return (
    <Container>
      <TitlePage classes={[css.title]}>Products</TitlePage>
      <ProductsFilters />
    </Container>
  );
};

// ProductsPage.propTypes = {

// }

export default ProductsPage;
