import { useAppSelector } from 'src/hooks/hooks';
import { useGoals } from 'src/hooks/useGoals';
import { GoalType } from 'src/types/types';

export const useGoalsPage = () => {
  const { goals, addGoal } = useGoals();
  const { darkTheme } = useAppSelector(state => state);

  const addGoalHandle = (values: any) => {
    addGoal(values);
  };

  return {
    addGoalHandle,
    addGoal,
    goals,
    darkTheme
  };
};
