import { useTransactions } from 'src/hooks/useTransactions';

export const useTransactionsPage = () => {
  const { transactions } = useTransactions();

  return {
    transactions
  };
};
