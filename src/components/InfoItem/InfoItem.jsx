import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import clsx from "clsx";

import css from "./InfoItem.module.scss";

export const InfoItem = ({value}) => {
    return (
    <div>
        <p className={css.one}>SVG</p>
        <p className={css.two}>Daily calorie intake</p>
        <h2 className={css.three}> {value}</h2>
    </div>
    );
}
