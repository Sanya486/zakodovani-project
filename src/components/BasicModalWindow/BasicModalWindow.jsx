import PropTypes from "prop-types";

import { useEffect } from "react";
import sprite from "../../images/svg/sprite.svg";
import css from "./BasicModalWindow.module.scss";

const BasicModalWindow = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.modalCloseBtn} onClick={onClose}>
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

BasicModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
};
