import React from 'react';

// import PropTypes from 'prop-types'

// import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';
import { ProductTable } from 'components/ProductsTable/ProductsTable';

const WelcomePage = () => {
  return (
    <div>
      {/* <ProductTableItem 
  title = 'marlin'
  category = 'fish'
  calories = '100'
  weight='112'
  recommend='Yes'
  first='true'
  />

<ProductTableItem 
  title = 'Danbo cheese'
  category = 'dairy'
  calories = '200'
  weight='340'
  recommend='No'
  first='false'
  /> */}

      <ProductTable />
    </div>
  );
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
