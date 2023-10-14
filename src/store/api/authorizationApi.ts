import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../types';

export interface IUserRegistration {
  firstName: string;
  secondName: string;
  middleName?: string;
  email: string;
  password: string;
  rPassword: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export const userApi = createApi({
  reducerPath: 'userAPI',
  tagTypes: ['Authorization'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "same-origin", mode: "no-cors" }),
  endpoints: (build) => ({
    signUp: build.mutation<unknown, IUserRegistration>({
      query: (body) => ({
        url: '/user/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Authorization' }]
    }),
    logIn: build.mutation<unknown, IUserLogin>({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Authorization' }]
    }),
  })
});

export const { useSignUpMutation, useLogInMutation } = userApi;