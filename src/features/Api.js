import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Link, useParams } from "react-router-dom";


export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5550/api/v1",
  }),

  endpoints: (builder) => {
    const API_KEY = "";
    return {
      getDiscover: builder.query({
        query: () => ({
          url: `/movie`,
          method: "GET",
        }),
      }),

      getTopRated: builder.query({
        query: () => ({
          url: `/movie`,
          method: "GET",
        }),
      }),

      getTrending: builder.query({
        query: () => ({
          url: `/movie`,
          method: "GET",
        }),
      }),

      getComedy: builder.query({
        query: () => ({
          url: `/movie`,
          method: "GET",
        }),
      }),

      getTvShow: builder.query({
        query: () => ({
          url: `/movie`,
          method: "GET",
        }),
      }),

      getPopular: builder.query({
        query: () => {
          return {
            url: `/movie`,
            method: "GET",
          };
        },
      }),

      getById: builder.query({
        query: (info) => {
          const { id, type } = info;
          return {
            url: `/movie/${id}`,
            method: "GET",
          };
        },
      }),

      getSearch: builder.query({
        query: (query) => {
          return {
            url: `/movie?query=${query}`,
            method: "GET",
          };
        },
      }),

      getRomance: builder.query({
        query: () => {
          return {
            url: `/movie`,
            method: "GET",
          };
        },
      }),

      getHorror: builder.query({
        query: () => {
          return {
            url: `/movie`,
            method: "GET",
          };
        },
      }),

      getlinkmovie: builder.query({
        query: (info1) => {
          const { id } = info1;
          return {
            url: `/movie/${id}`,
            method: "GET",
          };
        },
      }),

      getDocumentaries: builder.query({
        query: () => {
          return {
            url: `/movie`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useGetDiscoverQuery,
  useGetComedyQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetTvShowQuery,
  useGetPopularQuery,
  useGetByIdQuery,
  useGetSearchQuery,
  useGetHorrorQuery,
  useGetlinkmovieQuery,
  useGetDocumentariesQuery,
  useGetRomanceQuery,
} = moviesApi;
