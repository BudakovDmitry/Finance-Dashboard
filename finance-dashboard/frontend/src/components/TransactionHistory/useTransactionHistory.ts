import { useAppSelector } from 'src/hooks/hooks';
import { useTransactions } from 'src/hooks/useTransactions';

export const useTransactionHistory = () => {
  const { transactions } = useTransactions();
  const { darkTheme } = useAppSelector(state => state);

  return {
    transactions,
    darkTheme
  };
};
