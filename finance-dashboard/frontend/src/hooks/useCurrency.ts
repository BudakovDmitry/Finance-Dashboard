import { API_MONO } from 'src/utils/constants';
import useSWR from 'swr';

export const useCurrency = (searchParams: string = '') => {
  const {
    data: currency,
    mutate,
    error
  } = useSWR(() => [API_MONO, searchParams]);

  return { currency, mutate, error, isLoading: !error && !currency };
};
