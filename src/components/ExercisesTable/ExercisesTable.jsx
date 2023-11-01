import React from 'react';
import css from './ExercisesTable.module.scss';
import ExercisesTableItem from 'components/ExercisesTableItem/ExercisesTableItem';
import clsx from 'clsx';

export const ExercisesTable = ({ exercises }) => {
  return (
    <>
      <div className={clsx(css.tableContainer)}>
        <div className={css.tableList}>
          {exercises.map((exercise) => (
            <div key={exercise.id} className={css.tableElement}>
              <ExercisesTableItem
                id={exercise.id}
                bodyPart={exercise.bodyPart}
                equipment={exercise.equipment}
                name={exercise.name}
                target={exercise.target}
                time={exercise.time}
                burnedCalories={exercise.burnedCalories}
                first={exercises.indexOf(exercise) === 0 ? true : false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExercisesTable;
