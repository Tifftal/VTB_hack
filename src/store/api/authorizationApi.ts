import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../types';

export interface IUserRegistration {
  FirstName: string;
  SecondName: string;
  MiddleName?: string;
  Email: string;
  Password: string;
  rPassword: string;
  LegalEntity: boolean;
}

export interface IUserLogin {
  Email: string;
  Password: string;
}

export interface IConfirmRegister {
  confirmationCode: string
}

export interface IResendCode {
  Email: string;
}

export const userApi = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "same-origin", mode: "no-cors" }),
  tagTypes: ['Authorization'],
  endpoints: (build) => ({
    signUp: build.mutation<unknown, IUserRegistration>({
      query: (body) => ({
        url: '/user/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Authorization' }],
    }),
    logIn: build.mutation<unknown, IUserLogin>({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Authorization' }]
    }),
    confirmRegister: build.mutation<unknown, IConfirmRegister>({
      query: (body) => ({
        url: "/user/confirm-registration",
        method: "POST",
        body,
      })
    }),
    resendCode: build.mutation<unknown, IResendCode>({
      query: (body) => ({
        url: "/user/resend-code",
        method: "POST",
        body,
      })
    })
  })
});

export const { useSignUpMutation, useLogInMutation, useResendCodeMutation, useConfirmRegisterMutation } = userApi;