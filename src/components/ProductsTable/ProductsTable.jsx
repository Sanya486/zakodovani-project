import React from 'react';

import css from "./ProductsTable.module.scss"
import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';
// import { useSelector } from "react-redux";

// import { selectDiaryProducts } from "redux/selectors";
// import { fetchDiaryDateInfo } from "redux/operations";
// import { useEffect } from "react";

export const ProductTable = ({products}) => {
  // const dispatch = useDispatch();

// const products = useSelector(selectDiaryProducts);

  // useEffect(() => {
  //     dispatch(fetchDiaryDateInfo());
  // }, [dispatch]);

  console.log(products);

  return (
    <>
      {/* {products.map(({ $oid: id, title, category, calories, weight, recommend }) => { */}

      <ul>
      {products.map((product) => {
        <li key={product._id.$oid} className={css.element}>
          <ProductTableItem
            title={product.title}
            category={product.category}
            calories={product.calories}
            weight={product.weight}
            recommend={product.recommend}
            first={products.indexOf(product) === 0 ? "Yes" : "No"}
          />
        </li>;
      })}
      </ul>
    </>
  );
};
