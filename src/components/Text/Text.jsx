import css from "./Text.module.scss";

const Text = ({ children }) => {
  return <p className={css.text}>{children}</p>;
};

export default Text;
