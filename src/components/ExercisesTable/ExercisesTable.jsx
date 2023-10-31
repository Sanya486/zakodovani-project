import React from 'react';
import css from './ExercisesTable.module.scss';

import ExercisesTableItem from 'components/ExercisesTableItem/ExercisesTableItem';
import clsx from 'clsx';
// import sport from '../../redux-example.json';

// import React from 'react';

const ExercisesTable = ({ exercises }) => {
  console.log(exercises);
  
  return (
    <>
      <div className={clsx(css.bodybox)}>
        {exercises.map((exercise) => (
          <ExercisesTableItem
            key={exercise.id}
            bodyPart={exercise.bodyPart}
            equipment={exercise.equipment}
            name={exercise.name}
            target={exercise.target}
            burnedCalories={exercise.burnedCalories}
            time={exercise.time}
          />
        ))}
      </div>
      <div className={clsx(css.bodyboxTable)}>
        <table className={css.exercisestablehead}>
          <thead>
            <tr className={css.exercisename}>
              <th>Body Part</th>
              <th>Equipment</th>
              <th>Name</th>
              <th>Target</th>
              <th>Burned Calories</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody className={css.exercisestablebody}>
            {exercises.map((exercise) => (
              <ExercisesTableItem
                key={exercise.id}
                bodyPart={exercise.bodyPart}
                equipment={exercise.equipment}
                name={exercise.name}
                target={exercise.target}
                burnedCalories={exercise.burnedCalories}
                time={exercise.time}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExercisesTable;
