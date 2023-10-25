import React from 'react';
import sprite from '../../images/svg/sprite.svg';
import css from './WarningText.module.scss';
import PropTypes from 'prop-types';

const WarningText = ({ page }) => {
  return (
    <div className={css.wrapper}>
      <svg className={css.warningIcon} width='24' height='24'>
        <use href={sprite + '#exclamation_mark_icon'}></use>
      </svg>
      {page === 'userPage' && (
        <p className={css.warningTextUserPage}>
          We understand that each individual is unique, so the entire approach to diet is relative
          and tailored to your unique body and goals.
        </p>
      )}
      {page === 'diaryPage' && (
        <p className={css.warningTextDiaryPage}>
          Record all your meals in a calorie diary every day. This will help me be aware of my
          nutrition and make me responsible for my choices.
        </p>
      )}
    </div>
  );
};

WarningText.propTypes = {
  page: PropTypes.string.isRequired,
};

export default WarningText;
