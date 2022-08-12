import { post, remove } from 'src/http/api/financeDashboardApi';
import { API } from 'src/utils/constants';
import { Endpoints } from 'src/utils/endpoints';
import { handleApiResponse } from 'src/utils/helpers';
import useSWR from 'swr';

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
