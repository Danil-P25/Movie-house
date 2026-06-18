import { TMDB_CONFIG } from "./config";
import {
  moviePopularList,
  movieUpcomingList,
  movieDetails
} from "../generated/api/tmdb";


export const getPopularMovies = async () => {
  const response = await moviePopularList(TMDB_CONFIG);
  return response.data.results ?? [];
};

export const getUpcomingMovies = async () => {
  const response = await movieUpcomingList(TMDB_CONFIG);
  return response.data.results ?? [];
};

export const getMovieDetails = async (movieId: string | number) => {
  const response = await movieDetails(
    Number(movieId),
    TMDB_CONFIG
  );
  return response.data;
};