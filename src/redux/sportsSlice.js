import { createSlice } from '@reduxjs/toolkit';

export const sportsSlice = createSlice({
  name: 'sports',
  initialState: {
    exercises: [
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f7f7',
        },
        bodyPart: 'chest',
        equipment: 'leverage machine',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
        name: 'assisted chest dip (kneeling)',
        target: 'pectorals',
        burnedCalories: 329,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f801',
        },
        bodyPart: 'upper arms',
        equipment: 'leverage machine',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0019.gif',
        name: 'assisted triceps dip (kneeling)',
        target: 'triceps',
        burnedCalories: 233,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f813',
        },
        bodyPart: 'upper arms',
        equipment: 'barbell',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0038.gif',
        name: 'barbell drag curl',
        target: 'biceps',
        burnedCalories: 84,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f7f4',
        },
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0003.gif',
        name: 'air bike',
        target: 'abs',
        burnedCalories: 312,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f819',
        },
        bodyPart: 'upper legs',
        equipment: 'barbell',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0044.gif',
        name: 'barbell good morning',
        target: 'hamstrings',
        burnedCalories: 335,
        time: 3,
      },
    ],
    filter: [
      {
        _id: {
          $oid: '650f35ece3f5522fc6396289',
        },
        filter: 'Body parts',
        name: 'back',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/back_wzzphw.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc639628a',
        },
        filter: 'Body parts',
        name: 'cardio',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/cardio_pkkceg.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc639628b',
        },
        filter: 'Body parts',
        name: 'chest',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/chest_rqs6fw.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc639628c',
        },
        filter: 'Body parts',
        name: 'lower arms',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/lower_arms_hvwarx.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc639628d',
        },
        filter: 'Body parts',
        name: 'lower legs',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/lower_legs_thafch.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc639628e',
        },
        filter: 'Body parts',
        name: 'neck',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/neck_t0fc1k.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc639628f',
        },
        filter: 'Body parts',
        name: 'shoulders',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/shoulders_deqz9d.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc6396290',
        },
        filter: 'Body parts',
        name: 'upper arms',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/upper_arms_xsndlt.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc6396291',
        },
        filter: 'Body parts',
        name: 'upper legs',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/upper_legs_dlkfwx.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc6396292',
        },
        filter: 'Body parts',
        name: 'waist',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/waist_i7kqzq.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc6396293',
        },
        filter: 'Equipment',
        name: 'assisted',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/assisted_gukduh.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc6396294',
        },
        filter: 'Equipment',
        name: 'band',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/band_ri4mww.jpg',
      },
      {
        _id: {
          $oid: '650f35ece3f5522fc6396295',
        },
        filter: 'Equipment',
        name: 'barbell',
        imgURL: 'https://ftp.goit.study/img/power-pulse/filters/barbell_tw7rra.jpg',
      },
    ],
  },
  reducers: {},
  extraReducers: {},
});
