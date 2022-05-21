import { useAppSelector } from 'src/hooks/hooks';

export const useTransactionHistory = () => {
  const { transactions, darkTheme } = useAppSelector(state => state);

  return {
    transactions,
    darkTheme
  };
};
