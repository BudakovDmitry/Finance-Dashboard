import { useAppSelector } from 'src/hooks/hooks';
import { useGoals } from 'src/hooks/useGoals';

export const useGoalsPageItem = () => {
  const { darkTheme } = useAppSelector(state => state);

  return {
    darkTheme
  };
};
