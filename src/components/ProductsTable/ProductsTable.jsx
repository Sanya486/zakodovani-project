import React from "react";
import PropTypes from "prop-types";

import css from "./ProductsTable.module.scss"
import { ProductTableItem } from "components/ProductsTableItem/ProductsTableItem";
import { useDispatch, useSelector } from "react-redux";
import { selectDiaryProducts } from "redux/selectors";
import { fetchDiaryDateInfo } from "redux/operations";
import { useEffect } from "react";



export const ProductTable = () => {
const dispatch = useDispatch();
const productsRedux = useSelector(selectDiaryProducts);

useEffect(() => {
    dispatch(fetchDiaryDateInfo());
}, [dispatch]);



    return (
        <>
        <ProductTableItem></ProductTableItem>
        </>
    )
};