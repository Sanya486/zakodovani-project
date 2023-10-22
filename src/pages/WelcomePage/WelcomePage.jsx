import AddExerciseSuccess from "components/AddExerciseSuccess/AddExerciseSuccess";
import AddProductForm from "components/AddProductForm/AddProductForm";
import AddProductSuccess from "components/AddProductSuccess/AddProductSuccess";
import BasicModalWindow from "components/BasicModalWindow/BasicModalWindow";
import React from "react";
// import PropTypes from 'prop-types'

const WelcomePage = (props) => {
  return (
    <div>
      <BasicModalWindow>
        <AddExerciseSuccess />
      </BasicModalWindow>
    </div>
  );
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
