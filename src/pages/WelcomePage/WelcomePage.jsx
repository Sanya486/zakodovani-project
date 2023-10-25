import React from 'react';

// import PropTypes from 'prop-types'

import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';

const WelcomePage = () => {
  return <div>

  <ProductTableItem 
  title = 'marlin'
  category = 'fish'
  calories = '100'
  weight='112'
  recommend='yes'
  first='true'
  />

<ProductTableItem 
  title = 'Danbo cheese'
  category = 'dairy'
  calories = '200'
  weight='340'
  recommend='no'
  first='false'
  />


  </div>;
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
