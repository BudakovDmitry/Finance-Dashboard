import { post, remove } from 'src/http/api/goalsApi';
import { API } from 'src/utils/constants';
import { Endpoints } from 'src/utils/endpoints';
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
  } = useSWR(() => [API + Endpoints.GOALS, searchParams]);

  const addGoal = (goal: any) => post(Endpoints.GOALS, JSON.stringify(goal));

  const deleteGoal = (id: string) =>
    remove(Endpoints.GOALS, id).then(handleApiResponse);

  return { goals, mutate, error, addGoal, deleteGoal };
};
