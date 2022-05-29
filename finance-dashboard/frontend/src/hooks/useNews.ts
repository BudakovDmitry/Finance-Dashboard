import { API_NEWS } from 'src/utils/constants';
import useSWR from 'swr';

export const useNews = (searchParams: string = '') => {
  const { data: news, mutate, error } = useSWR(() => [API_NEWS, searchParams]);

  return { news, mutate, error };
};
