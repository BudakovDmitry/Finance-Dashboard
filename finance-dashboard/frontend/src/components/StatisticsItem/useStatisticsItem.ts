import { useAppSelector } from 'src/hooks/hooks';

export const useStatisticsItem = () => {
  const { darkTheme } = useAppSelector(state => state);

  return {
    darkTheme
  };
};
