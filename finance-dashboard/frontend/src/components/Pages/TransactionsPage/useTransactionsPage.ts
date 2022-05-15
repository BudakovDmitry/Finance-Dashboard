import { useAppSelector } from 'src/hooks/hooks';

export const useTransactionsPage = () => {
  const { transactions } = useAppSelector(state => state);

  return {
    transactions
  };
};
