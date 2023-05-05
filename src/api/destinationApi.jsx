import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
  reducerPath: "apiDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    // QUERY -> GET
    // MUTATION -> POST, PUT, DELETE
    getAllDestination: builder.query({
      query: () => "destination",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Destinations"],
    }),
    addDestinaton: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    updateDestinaton: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    deleteDestinaton: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destinations"],
    }),
  }),
});

export const {
  useGetAllDestinationQuery,
  useAddDestinatonMutation,
  useUpdateDestinatonMutation,
  useDeleteDestinatonMutation,
} = destinationApi;
