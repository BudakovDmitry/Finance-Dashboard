import { useAppSelector } from 'src/hooks/hooks';
import { useGoals } from 'src/hooks/useGoals';

export const useGoalsPageItem = () => {
  const { deleteGoal } = useGoals();
  const { darkTheme } = useAppSelector(state => state);

  const deleteItem = (id: string) => {
    deleteGoal(id);
  };

  return {
    deleteItem,
    darkTheme
  };
};
