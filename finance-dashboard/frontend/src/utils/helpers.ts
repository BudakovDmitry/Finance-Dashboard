export const handleApiResponse = (response: any) => {
  if (response?.err) {
    throw new Error(response?.err.message);
  }

  return response;
};

export const getHeaders = async (headers?: object) => ({
  ...headers
});
