import sprite from "../../images/svg/sprite.svg";
import css from "./BasicModalWindow.module.scss";

const BasicModalWindow = ({ children }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.modalCloseBtn}>
          <svg className={css.modalCloseIcon}>
            <use href={sprite + "#close_icon"}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default BasicModalWindow;
