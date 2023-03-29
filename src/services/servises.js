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
      query: () => "ads/me"
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
      }),
      transformResponse: (response) => {
        localStorage.setItem("avatar", response.access_token);
        return response;
      },
    }),

    uploaNewADVT: builder.mutation({
      query: (data) => {
        const searchParams = new URLSearchParams();
        searchParams.append('title', data.get('title'));
        searchParams.append('description', data.get('description'));
        searchParams.append('price', data.get('price'));

        const formData = new FormData();

        const arrData = [...data];
        const length = arrData.length;

        for (let i = 1; i < length - 2; i++) {
          formData.append('files', data.get(`image${i}`));
        }

        return {
          url: `ads?${searchParams.toString()}`,
          method: 'POST',
          body: formData,
        };
      },
    }),


    setComment: builder.mutation({
      query: ({ id, text }) => ({
        url: `ads/${id}/comments`,
        method: 'POST',
        body: { text },
      }),
    }),

    getAdvtById: builder.query({
      query: (id) => `ads/${id}`
    }),

    editAdvtData: builder.mutation({
      query: (formData) => ({
        url: `ads/${formData.id}`,
        method: 'PATCH',
        body: formData,
      }),
    }),

    addPhoto: builder.mutation({
      query: (addPhoto) => {
        const formData = new FormData();
        formData.append('file', addPhoto.image);
        return {
          url: `ads/${addPhoto.id}/image`,
          method: 'POST',
          body: formData,
        }
      }
    }),

    deletePhoto: builder.mutation({
      query: (data) => {
        const url = data.imgURL
        const new_url = url.replace("http://localhost:8090/", "")
        const searchParams = new URLSearchParams();
        searchParams.append('pk', data.id);
        searchParams.append('file_url', new_url);

        console.log(searchParams.get('file_url'), 'ссылка в параметрах')

        return {
          url: `ads/${data.id}/image`,
          method: 'DELETE',
          body: searchParams,
        }
      }
    }),

    getImg: builder.query({
      query: (id) => `images/${id}`
    }),

    deleteAdvt: builder.mutation({
      query: (id) => {
        console.log(id, 'ссылка в запросе')

        const searchParams = new URLSearchParams();
        searchParams.append('pk', id);

        return {
          url: `ads/${id}`,
          method: 'DELETE',
        }
      }
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
  useUploadUserAvatarMutation,
  useUploaNewADVTMutation,
  useSetCommentMutation,
  useGetAdvtByIdQuery,
  useEditAdvtDataMutation,
  useAddPhotoMutation,
  useDeletePhotoMutation,
  useGetImgQuery,
  useDeleteAdvtMutation
} = advtApi;