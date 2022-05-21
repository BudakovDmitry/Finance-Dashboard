import { nanoid } from 'nanoid';
import { goalCreated } from 'src/actions/actions';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { useGoals } from 'src/hooks/useGoals';
import { GoalType } from 'src/types/types';

export const useGoalsPage = () => {
  const { goals } = useGoals();
  const { darkTheme } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const addGoal = (value: GoalType) => {
    const newItem = {
      ...value,
      id: nanoid()
    };
    dispatch(goalCreated(newItem));
  };

  return {
    addGoal,
    goals,
    darkTheme
  };
};
