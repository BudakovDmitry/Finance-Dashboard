import { useAppSelector } from 'src/hooks/hooks';

export const useGoalsItem = () => {
  const { darkTheme } = useAppSelector(state => state);

  return {
    darkTheme
  };
};
