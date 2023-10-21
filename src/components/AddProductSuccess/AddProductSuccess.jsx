import avocado from "../../images/svg/food_Icon.svg";
import sprite from "../../images/svg/sprite.svg";
import css from "./AddProductSuccess.module.scss";
import { Link } from "react-router-dom";

const AddProductSuccess = (props) => {
  const { amount } = props;
  //   const amount = 1000;
  return (
    <div className={css.container}>
      <img src={avocado} alt="avocado" className={css.image} />
      <h2 className={css.title}>Well done</h2>
      <p className={css.text}>
        Calories: <span className={css.span}>{amount}</span>
      </p>
      <Link to="/products">
        <button className={css.button}>Next product</button>
      </Link>
      <Link to="/diary">
        <p className={css.text}>
          To the diary{" "}
          <svg className={css.arrowIcon}>
            <use href={sprite + "#arrow_add_icon"}></use>
          </svg>
        </p>
      </Link>
    </div>
  );
};

export default AddProductSuccess;
