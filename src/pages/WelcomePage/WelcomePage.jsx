import ProductsFilters from 'components/ProductsFilters/ProductsFilters';
import React from 'react';
import DaySwitch from 'components/DaySwitch/DaySwitch';
// import PropTypes from 'prop-types'

const WelcomePage = () => {
  return (
    <div>
      <ProductsFilters />
      <DaySwitch />
    </div>
  );
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
