import css from "./AddProductForm.module.scss";

const AddProductForm = (props) => {
  const { title, amount } = props;
  return (
    <form className={css.form}>
      <div className={css.inputsContainer}>
        <input type="text" value={title} disabled></input>
        <div style={{ position: "relative" }}>
          <input className={css.inputWeight} type="number" min={1}></input>
          <span className={css.weightLabel}>grams</span>
        </div>
      </div>
      <p className={css.calories}>
        Calories: <span className={css.caloriesSpan}>{amount}</span>
      </p>
      <div className={css.btnContainer}>
        <button>Add to diary</button>
        <button>Cancel</button>
      </div>
    </form>
  );
};

export default AddProductForm;
