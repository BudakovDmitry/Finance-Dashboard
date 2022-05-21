import { post, remove } from 'src/http/api/goalsApi';
import useSWR from 'swr';

export const handleApiResponse = (response: any) => {
  if (response?.err) {
    throw new Error(response?.err.message);
  }

  return response;
};

export const useGoals = (searchParams: string = '') => {
  const {
    data: goals,
    mutate,
    error
  } = useSWR(() => ['/api/goals', searchParams]);

  const addGoal = (goal: any) => post('/api/goals', JSON.stringify(goal));

  const deleteGoal = (id: string) =>
    remove('/api/goals', id).then(handleApiResponse);

  return { goals, mutate, error, addGoal, deleteGoal };
};
