import { goalDeleted } from 'src/actions/actions';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';

export const useGoalsPageItem = () => {
  const dispatch = useAppDispatch();
  const { darkTheme } = useAppSelector(state => state);

  const deleteItem = (id: number) => {
    dispatch(goalDeleted(id));
  };

  return {
    deleteItem,
    darkTheme
  };
};
