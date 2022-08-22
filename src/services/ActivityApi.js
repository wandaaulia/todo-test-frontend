import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const activityApi = createApi({
  reducerPath: 'activityApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://floating-mountain-35184.herokuapp.com/' }),
   tagTypes: ["ActivityTags", "TodoTags"],
  endpoints: (builder) => ({
    getAllActivity: builder.query({
      query: () => `/activity-groups/`,
        providesTags: ["ActivityTags"]
    }),
  getOneActivity : builder.query({
    query: (id) => `/activity-groups/${id}`
  }),
 addNewActivity: builder.mutation({
      query: (payload) => ({
        url: '/activity-groups/',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
   invalidatesTags: ["ActivityTags"]
    }),
    deleteActivity: builder.mutation({
      query: (id) => ({
        url: `/activity-groups/${id}`,
        method: 'DELETE',
      }),
       invalidatesTags: ["ActivityTags"]
    }),
    editActivity: builder.mutation({
      query: post => ({
        url: `/activity-groups/${post.id}`,
        method: 'PATCH',
        body: post
      }),
 invalidatesTags: ["ActivityTags"]
    }),
    getTodoList: builder.query({
      query: () => `/todo-items?activity_group_id=999999`,
        providesTags: ["TodoTags"]
    }),
  getAllTodo : builder.query({
    query: (id) => `todo-items?activity_group_id=${id}`
  }),
})
})

export const {useGetAllActivityQuery, useGetOneActivityQuery, useAddNewActivityMutation,
  useDeleteActivityMutation,  useEditActivityMutation, useGetTodoListQuery, useGetAllTodoQuery} = activityApi