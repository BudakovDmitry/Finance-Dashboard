import { useAppSelector } from 'src/hooks/hooks';

export const useHeader = () => {
  const { darkTheme, mail } = useAppSelector(state => state);

  return {
    darkTheme,
    mail
  };
};
