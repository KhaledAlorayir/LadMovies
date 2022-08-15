import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getPopular, getTopRated, getUpcoming } from "./endpoints";

const getNextPage = (p) =>
  p.data.page < p.data.total_pages ? p.data.page + 1 : undefined;

export const usePopular = () => {
  return useInfiniteQuery(["popular"], getPopular, {
    getNextPageParam: getNextPage,
    onError: (e) => {
      console.log(e);
    },
  });
};

export const useTopRated = () => {
  return useInfiniteQuery(["topRated"], getTopRated, {
    getNextPageParam: getNextPage,
    onError: (e) => {
      console.log(e);
    },
  });
};

export const useUpcoming = () => {
  return useInfiniteQuery(["upcoming"], getUpcoming, {
    getNextPageParam: getNextPage,
    onError: (e) => {
      console.log(e);
    },
  });
};

export const useInfintie = (title) => {
  switch (title) {
    case "Popular":
      return usePopular();
    case "Upcoming":
      return useUpcoming();
    case "Top Rated":
      return useTopRated();
    default:
      return null;
  }
};
