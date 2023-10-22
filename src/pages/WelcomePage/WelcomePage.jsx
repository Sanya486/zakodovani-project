import ExercisesSubcategoriesList from 'components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { InfoItem } from 'components/InfoItem/InfoItem';
import React from 'react';
// import PropTypes from 'prop-types'

const WelcomePage = (props) => {
  return (
    <div>
      <InfoItem name="Daily calorie intake" value="2000" variant="1" />
      <ExercisesSubcategoriesList></ExercisesSubcategoriesList>
    </div>
  );
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
