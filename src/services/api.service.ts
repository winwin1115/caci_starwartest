import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { config } from "../config";

const baseQuery = fetchBaseQuery({
  baseUrl: config.api.baseURL,
});

export const apiService = createApi({
  reducerPath: "starwarsservice",
  baseQuery: baseQuery,
  tagTypes: ["starwars"],
  endpoints: (builder) => ({
    getStarShips: builder.query<any, void>({
      query: () => "starships",
    }),
  }),
});

export const { useGetStarShipsQuery } = apiService;
