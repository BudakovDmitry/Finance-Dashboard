import { useAppSelector } from 'src/hooks/hooks';

export const useNewTransaction = () => {
  const { darkTheme } = useAppSelector(state => state);

  return {
    darkTheme
  };
};
