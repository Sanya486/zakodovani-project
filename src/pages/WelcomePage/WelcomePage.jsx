import React from 'react';

// import PropTypes from 'prop-types'

// import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';
import { ProductTable } from 'components/ProductsTable/ProductsTable';

import { useSelector } from "react-redux";

import { selectDiaryProducts } from "redux/selectors";

const WelcomePage = () => {
  const products = useSelector(selectDiaryProducts);
  return (
    <div>
    {/* //   <ProductTableItem
    //     title='marlin'
    //     category='fish'
    //     calories='100'
    //     weight='112'
    //     recommend='Yes'
    //     first='true'
    //   />

    //   <ProductTableItem
    //     title='Danbo cheese'
    //     category='dairy'
    //     calories='200'
    //     weight='340'
    //     recommend='No'
    //     first='false'
    //   /> */}

      <ProductTable products={products}/>
    </div>
  );
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
