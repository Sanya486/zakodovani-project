import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/grid';
import Swiper from 'swiper/bundle';

const ExercisesSubcategoriesList = ({ activeFilter, setChosenCard }) => {
  const exerciseCards = useSelector((state) => state.sports.filter);

  const visibleCards = exerciseCards.filter((card) => card.filter === activeFilter);

  const onCardClick = (bodyPart) => {
    setChosenCard(bodyPart);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      new Swiper('.swiper', {
        breakpoints: {
          768: {
            direction: 'horizontal',
            slidesPerView: 3,
            spaceBetween: 32,
            grid: {
              rows: 3,
              fill: 'row',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            },
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 32,
            grid: {
              rows: 2,
              fill: 'row',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            },
          },
        },
      });
    }
  }, []);

  return (
    <>
      {window.innerWidth >= 768 && (
        <div className='swiper'>
          <div className='swiper-wrapper'>
            {visibleCards.map((filter) => (
              <div key={filter._id.$oid} className='swiper-slide'>
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
      )}

      {window.innerWidth < 768 && (
        <div>
          {visibleCards.map((filter) => (
            <ExercisesSubcategoriesItem
              key={filter._id.$oid}
              name={filter.name}
              category={filter.filter}
              imageURL={filter.imgURL}
              handleClick={onCardClick}
            ></ExercisesSubcategoriesItem>
          ))}
        </div>
      )}
    </>
  );
};

ExercisesSubcategoriesList.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setChosenCard: PropTypes.func.isRequired,
};

export default ExercisesSubcategoriesList;
