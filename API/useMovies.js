import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  getPopular,
  getTopRated,
  getUpcoming,
  getSearch,
  getMovie,
  getCredits,
  getSimilar,
  getPersonImgs,
  getPerson,
  getPersonCredits,
} from "./endpoints";

import { useAlert } from "../Store";

const getNextPage = (p) =>
  p.data.page < p.data.total_pages ? p.data.page + 1 : undefined;

const ErrorHandler = (message) => {
  useAlert.getState().setAlert("ops! looks like a server issue!", 0);
};

export const usePopular = () => {
  return useInfiniteQuery(["popular"], getPopular, {
    getNextPageParam: getNextPage,
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
    },
  });
};

export const useTopRated = () => {
  return useInfiniteQuery(["topRated"], getTopRated, {
    getNextPageParam: getNextPage,
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
    },
  });
};

export const useUpcoming = () => {
  return useInfiniteQuery(["upcoming"], getUpcoming, {
    getNextPageParam: getNextPage,
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
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

export const useSearch = (query) => {
  return useInfiniteQuery(["search", query], getSearch, {
    getNextPageParam: getNextPage,
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
    },
    enabled: !!query,
  });
};

export const useMovie = (mid) => {
  return useQuery(["movie", mid], getMovie, {
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
    },
    select: (data) => data.data,
  });
};

export const useCredits = (mid) => {
  return useQuery(["cast", mid], getCredits, {
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
    },
    select: (data) => {
      let director = [];
      director = data.data.crew.filter((c) => c.job === "Director");
      return { ...data.data, director };
    },
  });
};

export const useSimilar = (mid) => {
  return useQuery(["similar", mid], getSimilar, {
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
    },
    select: (data) => data.data.results,
  });
};

export const usePersonImgs = (pid) => {
  return useQuery(["imgs", pid], getPersonImgs, {
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
    },
    select: (res) => res.data.profiles,
  });
};

export const usePerson = (pid) => {
  return useQuery(["person", pid], getPerson, {
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
    },
    select: (res) => res.data,
  });
};

export const usePersonCredits = (pid) => {
  return useQuery(["credit", pid], getPersonCredits, {
    onError: (e) => {
      console.log(e);
      ErrorHandler(e.message);
    },
    select: (res) => {
      let director = [];
      director = res.data.crew.filter((c) => c.job === "Director");
      return { ...res.data, director };
    },
  });
};
