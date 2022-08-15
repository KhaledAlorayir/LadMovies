import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getPopular, getTopRated, getUpcoming } from "./endpoints";

export const usePopular = () => {
  return useQuery(["popular"], getPopular, {
    onError: (e) => {
      console.log(e);
    },
  });
};

export const useTopRated = () => {
  /*   return useQuery(["topRated"], getTopRated, {
    onError: (e) => {
      console.log(e);
    },
  }); */

  return useInfiniteQuery(["topRated"], getTopRated, {
    onError: (e) => {
      console.log(e);
    },
  });
};

export const useUpcoming = () => {
  return useQuery(["upcoming"], getUpcoming, {
    onError: (e) => {
      console.log(e);
    },
  });
};
