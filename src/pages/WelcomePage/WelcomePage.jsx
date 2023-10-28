import React from 'react';
// import PropTypes from 'prop-types'

import { useSelector } from "react-redux";
import { selectDiaryProducts } from "redux/selectors";

// import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';
// import { ProductTable } from 'components/ProductsTable/ProductsTable';
import { DayProducts } from 'components/DayProdcuts/DayProducts';

// import Header from 'components/Header/Header';

import css from './WelcomePage.module.scss'


const WelcomePage = () => {
  const products = useSelector(selectDiaryProducts);
  return (
    <div className={css.cont}>
          {/* <Header/> */}
    <div>
            <DayProducts products={products} />
      {/* <ProductTable products={products}/> */}
      {/* <ProductTableItem 
          id='5d51694902b2373622ff5773'
              weight={100}
              calories={340}
              category='dairy'
              title='Danbo cheese'
              recommend='Yes'
              first='true'
/> */}
    </div>
    </ div>

  );

};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
