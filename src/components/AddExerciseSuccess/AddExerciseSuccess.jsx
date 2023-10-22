import thumbUp from "../../images/svg/thumb_up.svg";
import sprite from "../../images/svg/sprite.svg";
import css from "./AddExerciseSuccess.module.scss";
import { Link } from "react-router-dom";

const AddExerciseSuccess = (props) => {
  //   const { time, burnedCalories } = props;
  const time = "3 minutes";
  const burnedCalories = 150;

  return (
    <div className={css.container}>
      <img src={thumbUp} alt="thumb up" className={css.image} />
      <h2 className={css.title}>Well done</h2>
      <div className={css.infoText}>
        <p className={css.text}>
          Your time: <span className={css.span}>{time}</span>
        </p>
        <p className={css.text}>
          Burned calories: <span className={css.span}>{burnedCalories}</span>
        </p>
      </div>
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

export default AddExerciseSuccess;
