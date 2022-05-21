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

export const post = async <T>(
  endpoint: string,
  body: string,
  headers?: object
): Promise<T> =>
  api.post('http://localhost:5000' + endpoint, body, {
    headers: await getHeaders({
      'Content-Type': 'application/json',
      ...headers
    })
  });

export const remove = async <T>(
  endpoint: string,
  id: string,
  headers?: object
): Promise<T> =>
  api.remove('http://localhost:5000' + endpoint + '/' + id, {
    headers: await getHeaders({
      'Content-Type': 'application/json',
      ...headers
    })
  });
