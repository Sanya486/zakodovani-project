import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import styles from './ExercisesSubcategoriesList.module.scss';

const filters = [
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
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_arms_hvwarx.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628d',
    },
    filter: 'Body parts',
    name: 'lower legs',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_legs_thafch.jpg',
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
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/shoulders_deqz9d.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc6396290',
    },
    filter: 'Body parts',
    name: 'upper arms',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/upper_arms_xsndlt.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc6396291',
    },
    filter: 'Body parts',
    name: 'upper legs',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/upper_legs_dlkfwx.jpg',
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
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/assisted_gukduh.jpg',
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
  {
    _id: {
      $oid: '650f35ece3f5522fc6396296',
    },
    filter: 'Equipment',
    name: 'body weight',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/body_weight_ofngta.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc6396297',
    },
    filter: 'Equipment',
    name: 'bosu ball',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/bosu_ball_t8sjw4.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc6396298',
    },
    filter: 'Equipment',
    name: 'cable',
    imgURL: 'https://ftp.goit.study/img/power-pulse/filters/cable_awly7r.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc6396299',
    },
    filter: 'Equipment',
    name: 'dumbbell',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/dumbbell_uakfyd.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639629a',
    },
    filter: 'Equipment',
    name: 'elliptical machine',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/elliptical_machine_wgwuxq.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639629b',
    },
    filter: 'Equipment',
    name: 'ez barbell',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/ez_barbell_vjkcrp.jpg',
  },
];

//-Add getVisibleCards()
//-Add OnClick logic

const ExercisesSubcategoriesList = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ul className={styles['exercises-card-list']}>
      {filters.map((filter) => (
        <ExercisesSubcategoriesItem
          key={filter._id.$oid}
          name={capitalizeFirstLetter(filter.name)}
          category={filter.filter}
          imageURL={filter.imgURL}
        ></ExercisesSubcategoriesItem>
      ))}
    </ul>
  );
};

export default ExercisesSubcategoriesList;
