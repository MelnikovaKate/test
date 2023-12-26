import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

import { environment } from 'environments';

type ReturnBaseQueryFn = BaseQueryFn<BaseQueryFnParams>;

type BaseQueryFnParams = {
  url: string;
  method: AxiosRequestConfig['method'];
  body?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
};

export const baseQuery: ReturnBaseQueryFn = async ({ url, method, body, params }) => {
  try {
    const response = await axios({ url: environment.baseApiUrl + url, method, data: body, params });

    return { data: response.data, meta: response.headers };
  } catch (axiosError) {
    const error = axiosError as AxiosError;

    return {
      error: {
        status: error.response?.status,
        data: error.response?.data || error.message,
      },
    };
  }
};
