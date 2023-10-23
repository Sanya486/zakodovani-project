import React from 'react';
// import PropTypes from 'prop-types'

import { InfoItem } from "components/InfoItem/InfoItem";
import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';

const WelcomePage = () => {
  return <div>
    <InfoItem name="Daily calorie intake" value="2000" variant="success"/>
    <ProductTableItem 
    title="Bread Hercules grain" 
    category="Flour"
    calories="289"
    weight="100"
    recommend="yes"
    />
    </div>;
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
