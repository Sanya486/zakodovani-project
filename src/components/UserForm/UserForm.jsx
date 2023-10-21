import React from "react";
import css from "./UserForm.module.scss";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      height: 0,
      cur_height: 0,
      weight: 0,
      calendar: null,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={css["container"]}>
      <form onSubmit={formik.handleSubmit} className={css["form"]}>
        <label htmlFor="name" className={css["label"]}>
          Basic info
        </label>
        <input
          id="name"
          name="name"
          type="string"
          onChange={formik.handleChange}
          defaultValue={formik.values.name}
          className={css["inputBase"]}
          required
        />

        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          defaultValue={formik.values.email}
          className={css["inputBase"]}
        />
        <div className={css["group1"]}>
          <div className={css["column"]}>
            <label htmlFor="height" className={css["label"]}>
              Height
            </label>
            <div className={css["input-container"]}>
              <input
                id="height"
                name="height"
                type="number"
                onChange={formik.handleChange}
                defaultValue={formik.values.height}
                className={css["input"]}
                min="150"
                required
              />
            </div>
          </div>

          <div className={css["column"]}>
            <label htmlFor="cur_height" className={css["label"]}>
              Desired Weight
            </label>
            <div className={css["input-container"]}>
              <input
                id="cur_height"
                name="cur_height"
                type="number"
                onChange={formik.handleChange}
                defaultValue={formik.values.cur_height}
                className={css["input"]}
                min="35"
                required
              />
            </div>
          </div>
        </div>
        <div className={css["group2"]}>
          <div className={css["column"]}>
            <label htmlFor="weight" className={css["label"]}>
              Current Weight
            </label>
            <div className={css["input-container"]}>
              <input
                id="weight"
                name="weight"
                type="number"
                onChange={formik.handleChange}
                defaultValue={formik.values.weight}
                className={css["input"]}
                min="35"
                required
              />
            </div>
          </div>
          <div className={css["column"]}>
            <label htmlFor="calendar" className={css["label"]}>
              Calendar
            </label>
            <div className={css["calendar-input-container"]}>
              <DatePicker
                selected={formik.values.calendar}
                onChange={(date) => formik.setFieldValue("calendar", date)}
                dateFormat="dd/MM/yyyy"
                showWeekNumbers
                showIcon
                customInput={
                  <div className={css["calendar-custom-input"]}>
                    <input
                      id="calendar"
                      name="calendar"
                      type="text"
                      value={
                        formik.values.calendar
                          ? formik.values.calendar.toLocaleDateString()
                          : "00.00.0000"
                      }
                      className={css["calendar"]}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipSApplication0">
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                          <path
                            fill="#fff"
                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                          ></path>
                        </g>
                      </mask>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSApplication0)"
                      ></path>
                    </svg>
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <p className={css["label"]}>Blood</p>
        <div className={css["radio"]}>
          <div className={css["radioNumber"]}>
            <label className={css["labelMargin"]}>
              <input
                type="radio"
                name="number"
                defaultValue="1"
                className={css["inputRadio"]}
                checked={formik.values.number === "1"}
                onChange={() => formik.setFieldValue("number", "1")}
              />
              1
            </label>
            <label className={css["labelMargin"]}>
              <input
                type="radio"
                name="number"
                defaultValue="2"
                className={css["inputRadio"]}
                onChange={() => formik.setFieldValue("number", "2")}
              />
              2
            </label>
            <label className={css["labelMargin"]}>
              <input
                type="radio"
                name="number"
                defaultValue="3"
                className={css["inputRadio"]}
                onChange={() => formik.setFieldValue("number", "3")}
              />
              3
            </label>
            <label className={css["labelMargin"]}>
              <input
                type="radio"
                name="number"
                defaultValue="4"
                className={css["inputRadio"]}
                onChange={() => formik.setFieldValue("number", "4")}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                name="number"
                defaultValue="5"
                className={css["inputRadio"]}
                onChange={() => formik.setFieldValue("number", "5")}
              />
              5
            </label>
          </div>
          <div className={css["sex"]}>
            <label className={css["labelMargin"]}>
              <input
                type="radio"
                name="sex"
                defaultValue="Male"
                className={css["inputRadio"]}
                onChange={() => formik.setFieldValue("sex", "Male")}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                defaultValue="Female"
                className={css["inputRadio"]}
                onChange={() => formik.setFieldValue("sex", "Female")}
              />
              Female
            </label>
          </div>
        </div>
        <div className={css["radioText"]}>
          <label className={css["labelText"]}>
            <input type="radio" name="radioText" className={css["inputRadio"]} />
            Sedentary lifestyle (little or no physical activity)
          </label>
          <label className={css["labelText"]}>
            <input
              type="radio"
              name="radioText"
              className={css["inputRadio"]}
              onChange={() => formik.setFieldValue("number", "2")}
            />
            Light activity (light exercises/sports 1-3 days per week)
          </label>
          <label className={css["labelText"]}>
            <input
              type="radio"
              name="radioText"
              className={css["inputRadio"]}
              onChange={() => formik.setFieldValue("number", "3")}
            />
            Moderately active (moderate exercises/sports 3-5 days per week)
          </label>
          <label className={css["labelText"]}>
            <input
              type="radio"
              name="radioText"
              className={css["inputRadio"]}
              onChange={() => formik.setFieldValue("number", "4")}
            />
            Very active (intense exercises/sports 6-7 days per week)
          </label>
          <label className={css["labelText"]}>
            <input
              type="radio"
              name="radioText"
              className={css["inputRadio"]}
              onChange={() => formik.setFieldValue("number", "5")}
            />
            Extremely active (very strenuous exercises/sports and physical work)
          </label>
        </div>
        <button type="submit" className={css['btn']}>Save</button>
      </form>
    </div>
  );
};

export default UserForm;
