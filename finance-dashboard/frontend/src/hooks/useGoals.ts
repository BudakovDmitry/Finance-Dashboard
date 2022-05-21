import axios from 'axios';
import useSWR from 'swr';

export const useGoals = (searchParams: string = '') => {
  const {
    data: goals,
    mutate,
    error
  } = useSWR(() => ['/api/goals', searchParams]);

  return { goals, mutate, error };
};
