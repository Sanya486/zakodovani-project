import { useState } from "react";
import css from "./AddProductForm.module.scss";

const AddProductForm = ({ data, onClose }) => {
  const [amount, setAmount] = useState(100);
  const { title, calories } = data;

  const calculatedCalories = Math.round((calories * amount) / 100);

  const handleAddToDiary = () => {};

  return (
    <div className={css.container}>
      <form className={css.form}>
        <div className={css.inputsContainer}>
          <input
            type="text"
            value={title}
            disabled
            className={css.inputTitle}
          ></input>
          <div style={{ position: "relative" }}>
            <input
              className={css.inputAmount}
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
            <span className={css.amountLabel}>grams</span>
          </div>
        </div>
        <p className={css.calories}>
          Calories:{" "}
          <span className={css.caloriesSpan}>{calculatedCalories}</span>
        </p>
        <div className={css.btnContainer}>
          <button onClick={handleAddToDiary}>Add to diary</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
