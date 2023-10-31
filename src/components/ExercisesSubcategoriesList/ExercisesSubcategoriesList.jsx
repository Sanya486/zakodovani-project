import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import 'swiper/css';
import 'swiper/css/grid';
import Swiper from 'swiper/bundle';

const ExercisesSubcategoriesList = ({ activeFilter, setChosenCard, exerciseFilters }) => {
  const visibleCards = exerciseFilters[activeFilter];

  const onCardClick = (bodyPart) => {
    setChosenCard(bodyPart);
  };

  useEffect(() => {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        rows: 9,
        fill: 'row',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      },

      breakpoints: {
        768: {
          direction: 'horizontal',
          slidesPerView: 3,
          spaceBetween: 32,
          grid: {
            rows: 3,
            fill: 'row',
          },
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 32,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    });
  }, [activeFilter]);

  return (
    <>
      <div className='swiper'>
        <div className='swiper-wrapper'>
          {visibleCards &&
            visibleCards.map((filter) => (
              <div key={filter._id} className='swiper-slide'>
                <ExercisesSubcategoriesItem
                  name={filter.name}
                  category={filter.filter}
                  imageURL={filter.imgURL}
                  handleClick={onCardClick}
                ></ExercisesSubcategoriesItem>
              </div>
            ))}
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </>
  );
};

ExercisesSubcategoriesList.propTypes = {
  activeFilter: PropTypes.string,
  setChosenCard: PropTypes.func.isRequired,
  exerciseFilters: PropTypes.object.isRequired,
};

export default ExercisesSubcategoriesList;
