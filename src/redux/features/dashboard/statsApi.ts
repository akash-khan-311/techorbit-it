/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query<any, void>({
      query: () => "/api/admin/stats",
    }),
  }),
});

export const { useGetStatsQuery } = statsApi;
