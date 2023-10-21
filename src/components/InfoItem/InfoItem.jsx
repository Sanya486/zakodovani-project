import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import clsx from "clsx";
import css from "./InfoItem.module.scss";
import sprite from "../../images/svg/sprite.svg";

export const InfoItem = ({name, value}) => {
    return (
    <div className={css.infoItemContainer}>
        <div className={css.wrap}>
        <svg className={css.icon}>
            <use href={sprite + "#fluent_food_icon"}></use>
        </svg>
        <p className={css.itemName}>{name}</p>
        </div>
        <h2 className={css.itemValue}> {value}</h2>
    </div>
    );
}
