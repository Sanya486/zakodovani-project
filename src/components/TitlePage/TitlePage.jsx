import React from 'react';
import css from './TitlePage.module.scss';
import clsx from 'clsx';

const TitlePage = ({ children, marg, classes=[]}) => {
  return <h2 className={clsx(css.titlePage, marg && css.place,  ...classes)}>{children}</h2>;
};

export default TitlePage;
