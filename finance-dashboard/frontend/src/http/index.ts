export const post = async <T>(
  url: string,
  body: string,
  config: object = {}
): Promise<T> => {
  const options = {
    method: 'POST',
    body: body,
    ...config
  };
  try {
    const res = await fetch(url, options);

    return res.json();
  } catch (e: any) {
    throw new Error(e);
  }
};

export const get = async <T>(
  url: string,
  searchParams?: Record<string, string>,
  config: object = {}
): Promise<T> => {
  const options = {
    method: 'GET',
    ...config
  };

  try {
    const res = searchParams
      ? await fetch(`${url}?${new URLSearchParams(searchParams)}`, options)
      : await fetch(url);

    return res.json();
  } catch (e: any) {
    throw new Error(e);
  }
};

export const remove = async <T>(
  url: string,
  config: object = {}
): Promise<T> => {
  const options = {
    method: 'DELETE',
    ...config
  };

  try {
    const res = await fetch(`${url}`, options);

    return res.json();
  } catch (e: any) {
    throw new Error(e);
  }
};

export const put = async <T>(
  url: string,
  body: string | FormData,
  config: object = {}
): Promise<T> => {
  const options = {
    method: 'PUT',
    body: body,
    ...config
  };
  try {
    const res = await fetch(url, options);

    return res.json();
  } catch (e: any) {
    throw new Error(e);
  }
};

export const patch = async <T>(
  url: string,
  config: object = {}
): Promise<T> => {
  const options = {
    method: 'PATCH',
    ...config
  };
  try {
    const res = await fetch(url, options);

    return res.json();
  } catch (e: any) {
    throw new Error(e);
  }
};
