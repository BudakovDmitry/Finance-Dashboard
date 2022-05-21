import { goalDeleted } from 'src/actions/actions';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { useGoals } from 'src/hooks/useGoals';

export const useGoalsPageItem = () => {
  // const dispatch = useAppDispatch();
  const { deleteGoal } = useGoals();
  const { darkTheme } = useAppSelector(state => state);

  const deleteItem = (id: string) => {
    deleteGoal(id);
  };

  // const deleteItem = (id: number) => {
  //   dispatch(goalDeleted(id));
  // };

  return {
    deleteItem,
    darkTheme
  };
};
