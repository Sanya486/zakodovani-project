import css from './TitlePage.module.scss';

const TitlePage = ({ children }) => {
  return <h2 className={css.titlePage}>{children}</h2>;
};

export default TitlePage;
