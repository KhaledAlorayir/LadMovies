import axios from "axios";
import env from "../config";

const baseUrl = "https://api.themoviedb.org/3/movie";
const key = `?api_key=${env.API_KEY}`;

export const getPopular = ({ pageParam = 1 }) => {
  return axios.get(
    baseUrl + "/popular" + key + `&language=en-US&page=${pageParam}`
  );
};

export const getTopRated = ({ pageParam = 1 }) => {
  return axios.get(
    baseUrl + "/top_rated" + key + `&language=en-US&page=${pageParam}`
  );
};

export const getUpcoming = ({ pageParam = 1 }) => {
  return axios.get(
    baseUrl + "/upcoming" + key + `&language=en-US&page=${pageParam}&region=US`
  );
};

export const getSearch = ({ pageParam = 1, queryKey: [_, query] }) => {
  return axios.get(
    "https://api.themoviedb.org/3/search/movie" +
      key +
      `&language=en-US&page=${pageParam}&include_adult=true&query=${query}`
  );
};

export const getMovie = ({ queryKey: [_, mid] }) => {
  return axios.get(baseUrl + "/" + mid + key + "&language=en-US");
};

export const getCredits = ({ queryKey: [_, mid] }) => {
  return axios.get(`${baseUrl}/${mid}/credits${key}&language=en-US`);
};

export const getSimilar = ({ queryKey: [_, mid] }) => {
  return axios.get(`${baseUrl}/${mid}/similar${key}&language=en-US&page=1`);
};

export const getPersonImgs = ({ queryKey: [_, pid] }) => {
  return axios.get(`https://api.themoviedb.org/3/person/${pid}/images${key}`);
};

export const getPerson = ({ queryKey: [_, pid] }) => {
  return axios.get(
    `https://api.themoviedb.org/3/person/${pid}${key}&language=en-US`
  );
};

export const getPersonCredits = ({ queryKey: [_, pid] }) => {
  return axios.get(
    `https://api.themoviedb.org/3/person/${pid}/movie_credits${key}&language=en-US`
  );
};
