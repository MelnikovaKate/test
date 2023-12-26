import axios from 'axios';

export const setAuthorizationHeaders = (token: string) => {
  axios.interceptors.request.use(
    async (request) => {
      if (request.headers) {
        request.headers['Authorization'] = `Bearer ${token}`;
      }

      return request;
    },
    (err) => Promise.reject(err),
  );
};
