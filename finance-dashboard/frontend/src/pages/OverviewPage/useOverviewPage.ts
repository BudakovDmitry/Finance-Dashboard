import { useAppSelector } from 'src/hooks/hooks';

export const useOverviewPage = () => {
  const { mail } = useAppSelector(state => state);

  return {
    mail
  };
};
