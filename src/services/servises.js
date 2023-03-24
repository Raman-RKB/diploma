import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const advtApi = createApi({
  reducerPath: "advtApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
  }),

  endpoints: (builder) => ({

    getAlladvt: builder.query({
      query: () => "ads"
    }),

    getAdvtComments: builder.query({
      query: (advtId) => `ads/${advtId}/comments`
    }),

    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData
      })
    }),

    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData
      })
    })

  }),
});

export const { useGetAlladvtQuery, useGetAdvtCommentsQuery, useRegisterUserMutation, useLoginUserMutation } = advtApi;