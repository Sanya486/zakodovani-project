import AddExerciseSuccess from 'components/AddExerciseSuccess/AddExerciseSuccess';
import BasicModalWindow from 'components/BasicModalWindow/BasicModalWindow';
import React from 'react';
// import PropTypes from 'prop-types'

const WelcomePage = () => {
  return (
    <div>
      <BasicModalWindow>
        <AddExerciseSuccess data={{ time: '3', burnedCalories: 150 }} />
      </BasicModalWindow>
    </div>
  );
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
