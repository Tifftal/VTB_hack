import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../types';

export interface User {
    firstname: string;
    secondname: string;
    email: string;
    password1: string;
    password2: string;
}

export const userApi = createApi({
    reducerPath: 'userAPI',
    tagTypes: ['Authorization'],
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL, credentials: "same-origin", mode: "no-cors"}),
    endpoints: (build) => ({
        // unknow получаем, User отсылаем
        signUp: build.mutation<unknown, User>({
            query: (body) => ({
                url: '/user/register',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Authorization'}] // без get теги смысла не имеют
        }),
    })
});

export const {useSignUpMutation} = userApi;