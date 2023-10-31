import React from 'react';
import PropTypes from 'prop-types';
import css from './TitlePage.module.scss';
import clsx from 'clsx';


const TitlePage = ({ children,  classes=[]}) => {
  return <h2 className={clsx(css.titlePage,  ...classes)}>{children}</h2>;
};

export default TitlePage;

TitlePage.propTypes = {
  classes: PropTypes.array,
};
