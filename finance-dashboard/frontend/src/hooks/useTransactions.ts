import { API } from 'src/utils/constants';
import { Endpoints } from 'src/utils/endpoints';
import useSWR from 'swr';

export const useTransactions = (searchParams: string = '') => {
  const {
    data: transactions,
    mutate,
    error
  } = useSWR(() => [API + Endpoints.TRANSACTIONS, searchParams]);

  return { transactions, mutate, error };
};
