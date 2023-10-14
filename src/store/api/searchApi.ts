import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../types';

interface ISearch {
    query: string;
}

export interface IBranch {
    id: number,
    salePointName: string,
    address: string,
    status: string,
    openHours: [
        days: string,
        hours: string,
    ],
    rko: string,
    openHoursIndividual: [
        days: string,
        hours: string,
    ],
    officeType: string,
    salePointFormat: string,
    suoAvailability: string,
    hasRamp: string,
    latitude: number,
    longitude: number,
    metroStation?: string,
    distance: number,
    kep?: boolean,
    myBranch: boolean,
}

export const searchApi = createApi({
    reducerPath: 'searchPath',
    tagTypes: ['Search'],
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'same-origin', mode: "no-cors" }),
    endpoints: (build) => ({
        getBranches: build.query<IBranch[], ISearch>({
            query: (searchParams) => ({
                url: `/api/branches/get-branch-by-search/${searchParams.query}`,
            }),
        }),
    }),
});

export const { useGetBranchesQuery } = searchApi;
