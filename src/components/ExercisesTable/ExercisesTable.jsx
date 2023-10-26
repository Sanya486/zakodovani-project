import React from 'react';
import css from './ExercisesTable.module.scss';
import { selectExercises } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ExercisesTableItem from 'components/ExercisesTableItem/ExercisesTableItem';
import clsx from 'clsx';

// import React from 'react';

const ExercisesTable = () => {
  const exercises = useSelector(selectExercises);

  return (
    <>
      <div className={clsx(css.bodybox)}>
        {exercises.map(({ bodyPart, equipment, name, target, burnedCalories, time }) => (
          <ExercisesTableItem
            key
            bodyPart={bodyPart}
            equipment={equipment}
            name={name}
            target={target}
            burnedCalories={burnedCalories}
            time={time}
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
            {exercises.map(({bodyPart, equipment, name, target, burnedCalories, time }) => (
              <ExercisesTableItem
                key
                bodyPart={bodyPart}
                equipment={equipment}
                name={name}
                target={target}
                burnedCalories={burnedCalories}
                time={time}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExercisesTable;
