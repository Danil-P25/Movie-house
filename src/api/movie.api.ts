import { TMDB_CONFIG, TMDB_REVIEWS_CONFIG } from "./config";
import {
  moviePopularList,
  movieUpcomingList,
  movieDetails,
  movieCredits,
  movieReviews,
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
  const response = await movieDetails(Number(movieId), TMDB_CONFIG);
  return response.data;
};

export const getMovieCredits = async (movieId: string | number) => {
  const response = await movieCredits(Number(movieId), TMDB_CONFIG);

  return response.data;
};

export const getMovieReviews = async (movieId: string | number) => {
  const response = await movieReviews(Number(movieId), TMDB_REVIEWS_CONFIG);

  return response.data.results ?? [];
};
