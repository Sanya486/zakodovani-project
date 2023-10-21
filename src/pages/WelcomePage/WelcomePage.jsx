import AddProductForm from "components/AddProductForm/AddProductForm";
import BasicModalWindow from "components/BasicModalWindow/BasicModalWindow";
import React from "react";
// import PropTypes from 'prop-types'

const WelcomePage = (props) => {
  return (
    <div>
      <BasicModalWindow>
        <AddProductForm />
      </BasicModalWindow>
    </div>
  );
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
