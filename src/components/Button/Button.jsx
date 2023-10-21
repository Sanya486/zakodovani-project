import React from "react";
import css from "./Button.module.scss";

const classNames = require("classnames");

const ButtonSingUP = ({ children}) => {
  
  const handleClick = () => {
    console.log("Клик по кнопке SingUP");
  }
  return (
    <div>
      <button className={classNames(css.buttonsingup, css.btn)} onClick={handleClick}>
        Sign Up
      </button>
    </div>
  );
};

const ButtonSingIn = ({ children
}) => {
  const handleClick = () => {
    console.log("Клик по кнопке SingIn");
  };
  return (
    <div>
      <button
        className={classNames(css.buttonsingin, css.btn)}
        onClick={handleClick}
      >
        Sign In
      </button>
    </div>
  );
};

const ButtonGoHome = ({ children
}) => {
  const handleClick = () => {
    console.log("Клик по кнопке GoHome");
  };
  return (
    <div>
      <button
        className={classNames(css.buttongohome, css.btn)}
        onClick={handleClick}
      >
        Go Home
      </button>
    </div>
  );
};

export { ButtonSingUP, ButtonSingIn, ButtonGoHome };
