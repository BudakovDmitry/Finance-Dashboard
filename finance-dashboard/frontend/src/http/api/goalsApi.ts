import * as api from 'src/http/index';

const getHeaders = async (headers?: object) => ({
  ...headers
});

export const getAllGoals = async <T>(
  endpoint: string,
  searchParams: Record<string, string>
): Promise<T> =>
  api.get('http://localhost:5000' + endpoint, searchParams, {
    headers: await getHeaders()
  });
