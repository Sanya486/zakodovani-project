import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDiarySaveProduct } from 'redux/operations';
import css from './AddProductForm.module.scss';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import toast from 'react-hot-toast';

const AddProductForm = ({ data, onClose }) => {
  const [amount, setAmount] = useState(100);
  const { _id, title, calories } = data;
  const dispatch = useDispatch();

  const calculatedCalories = Math.round((calories * amount) / 100);

  const handleAddToDiary = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      toast.error('The entered value should be greater than 0');
      return;
    }
    const date = new Date().toLocaleDateString('en-GB');
    dispatch(
      fetchDiarySaveProduct({
        date,
        productId: _id,
        amount: amount,
        calories: calculatedCalories,
      }),
    )
      .then(console.log(date, _id, amount, calculatedCalories))
      .catch((error) => {
        toast(error.message);
      });

    onClose();
  };

  return (
    <div className={css.container}>
      <form className={css.form}>
        <div className={css.inputsContainer}>
          <input type='text' value={title} disabled className={css.inputTitle}></input>
          <div style={{ position: 'relative' }}>
            <input
              className={css.inputAmount}
              type='number'
              min={1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
            <span className={css.amountLabel}>grams</span>
          </div>
        </div>
        <p className={css.calories}>
          Calories: <span className={css.caloriesSpan}>{calculatedCalories}</span>
        </p>
        <div className={css.btnContainer}>
          <Button title='Add to diary' classes={[css.button]} onClick={handleAddToDiary} />
          <Button
            title='Cancel'
            styled='transparent'
            classes={[css.buttonCancel]}
            onClick={onClose}
          />
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;

AddProductForm.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
