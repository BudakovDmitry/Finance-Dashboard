import { useAppSelector } from 'src/hooks/hooks';
import { useGoals } from 'src/hooks/useGoals';
import { usePage } from 'src/hooks/usePage';
import { GoalType } from 'src/types/types';

export const useGoalsPage = () => {
  const { goals, addGoal, deleteGoal, mutate } = useGoals();
  const { darkTheme } = useAppSelector(state => state);
  const { addToast } = usePage();

  const addGoalHandle = async (values: any) => {
    try {
      await addGoal(values);

      mutate();

      addToast('Successfull create goal', {
        appearance: 'success',
        autoDismiss: true
      });
    } catch (error: any) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true
      });
    }
  };

  const removeGoal = async (id: string) => {
    try {
      await deleteGoal(id);

      mutate();

      addToast('Successfull delete goal', {
        appearance: 'success',
        autoDismiss: true
      });
    } catch (error: any) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true
      });
    }
  };

  return {
    addGoalHandle,
    addGoal,
    goals,
    darkTheme,
    removeGoal
  };
};
