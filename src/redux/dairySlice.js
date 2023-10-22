import { createSlice } from "@reduxjs/toolkit";

export const dairySlice = createSlice({
  name: "dairy",
  initialState: {
    products: [
      {
        title: "marlin",
        category: "fish",
        weight: 100,
        calories: 112,
        reccomendation: true,
      },
      {
        title: "Danbo cheese",
        category: "dairy",
        weight: 100,
        calories: 340,
        reccomendation: true,
      },
    ],
    exercises: [
      {
        bodyPart: "upper arms",
        equipment: "barbell",
        name: "barbell drag curl",
        target: "biceps",
        burnedCalories: 84,
        time: 3,
      },
      {
        bodyPart: "waist",
        equipment: "body weight",
        name: "air bike",
        target: "abs",
        burnedCalories: 312,
        time: 3,
        gifUrl: "https://ftp.goit.study/img/power-pulse/gifs/0003.gif",
      },
    ],
  },
  reducers: {},
  extraReducers: {},
});
