import React from "react";
import sprite from "../../images/svg/sprite.svg";
import css from "./WarningText.module.scss";


const WarningText = ({page}) => {
    return (
    <div className={css.wrapper}>
        <svg className={css.warningIcon} width="24" height="24">
            <use href={sprite + "#exclamation_mark_icon"}></use>
        </svg>
        {page === "userPage" && <p className={css.warningTextUserPage}>We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.</p>}
        {page === "dairyPage" && <p className={css.warningTextDairyPage}>Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices.</p>}
    </div>
    )
};

export default WarningText;