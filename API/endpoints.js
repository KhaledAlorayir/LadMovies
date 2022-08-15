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
