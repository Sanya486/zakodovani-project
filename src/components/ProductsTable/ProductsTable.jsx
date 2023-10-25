import React from 'react';

// import css from "./ProductsTable.module.scss"
import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';
import { useDispatch, useSelector } from "react-redux";

import { selectDiaryProducts } from "redux/selectors";
import { fetchDiaryDateInfo } from "redux/operations";
import { useEffect } from "react";

// import { useSelector } from "react-redux";

// import productlist from './products';

export const ProductTable = () => {
  const dispatch = useDispatch();

    // const products = JSON.stringify(newProducts);

  const products = useSelector(selectDiaryProducts);

  useEffect(() => {
      dispatch(fetchDiaryDateInfo());
  }, [dispatch]);

  console.log(products);

  return (
    <>
      {products.map(({ $oid: id, title, category, calories, weight, recommend }) => {
        <div key={id}>
          <ProductTableItem
            title={title}
            category={category}
            calories={calories}
            weight={weight}
            recommend={recommend}
            first='Yes'
            //   first={elem.indexOf(elem) === 0 ? "Yes" : "No"}
          />
        </div>;
      })}

      {/* {products.map((elem) => {
        <div key={elem._id.$oid}>
          <ProductTableItem
            title={elem.title}
            category={elem.category}
            calories={elem.calories}
            weight={elem.weight}
            recommend={elem.recommend}
            first='Yes'
            //   first={elem.indexOf(elem) === 0 ? "Yes" : "No"}
          />
        </div>;
      })} */}
    </>
  );
};
