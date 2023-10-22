import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    _id: "65341806adcbac0f2bea5f8a",
    email: "test@gmail.com",
    name: "mykolka",
    password: "$2b$11$PeThk3io4wQO4fxA6ZHcqOjUj4bWhIEdb1zHKESH2mbBPolDfathC",
    __v: 0,
    birthday: "2003-10-10T00:00:00.000Z",
    blood: 1,
    currentWeight: 55,
    desiredWeight: 55,
    height: 155,
    levelActivity: 4,
    sex: "male",
    avatar:
      "https://res.cloudinary.com/dvmmkonxh/image/upload/v1697958203/power-pulse/avatars/65341806adcbac0f2bea5f8a.jpg",
    token:
      "09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611",
  },
  reducers: {},
  extraReducers: {},
});


