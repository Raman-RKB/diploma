import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const advtApi = createApi({
  reducerPath: "advtApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
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
      }),
      transformResponse: (response) => {
        localStorage.setItem("user_register_id", response.id);
        localStorage.setItem("user_register_email", response.email);
        localStorage.setItem("user_register_city", response.city);
        localStorage.setItem("user_register_name", response.name);
        localStorage.setItem("user_register_surname", response.surname);
        console.log(localStorage)
        console.log(response)
        return response;
      },
    }),

    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData
      }),

      transformResponse: (response) => {
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("refresh_token", response.refresh_token);
        console.log(localStorage)
        console.log(response)
        return response;
      },
    }),

    getCurrentUser: builder.mutation({
      query: () => 'user'
    }),

    refreshToken: builder.mutation({
      query: () => ({
        url: '/auth/login',
        method: 'PUT',
        body: {
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token")
        }
      }),
      transformResponse: (response) => {
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("refresh_token", response.refresh_token);
        return response;
      },
    }),

    getCurrentUserAdvt: builder.query({
      query: () => "user/ads"
    }),


    editUserData: builder.mutation({
      query: (userData) => ({
        url: 'user',
        method: 'PATCH',
        body: userData
      })
    }),

    uploadUserAvatar: builder.mutation({
      query: (formData) => ({
        url: 'user/avatar',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
        }
      })
    }),

  })
});

export const {
  useGetAlladvtQuery,
  useGetAdvtCommentsQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetCurrentUserMutation,
  useRefreshTokenMutation,
  useGetCurrentUserAdvtQuery,
  useEditUserDataMutation,
  useUploadUserAvatarMutation
} = advtApi;