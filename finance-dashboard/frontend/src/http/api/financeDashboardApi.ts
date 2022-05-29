import * as api from 'src/http/index';
import { API } from 'src/utils/constants';
import { getHeaders } from 'src/utils/helpers';

export const get = async <T>(
  endpoint: string,
  searchParams: Record<string, string>
): Promise<T> =>
  api.get(API + endpoint, searchParams, {
    headers: await getHeaders()
  });

export const post = async <T>(
  endpoint: string,
  body: string,
  headers?: object
): Promise<T> =>
  api.post(API + endpoint, body, {
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
  api.remove(API + endpoint + '/' + id, {
    headers: await getHeaders({
      'Content-Type': 'application/json',
      ...headers
    })
  });
