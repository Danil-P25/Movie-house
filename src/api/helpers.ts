import { 
  moviePopularList,
  movieUpcomingList,
  genreMovieList,
  genreTvList,
  discoverMovie,
  discoverTv,
  movieDetails,
  tvSeriesDetails
} from "../generated/api/tmdb";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const LANGUAGE_RU = { api_key: API_KEY, language: "ru-RU" };

export const getPopularMovies = () => moviePopularList(LANGUAGE_RU);
export const getUpcomingMovies = () => movieUpcomingList(LANGUAGE_RU);

export const getAllGenres = async () => {
  const [movies, tv] = await Promise.all([
    genreMovieList(LANGUAGE_RU),
    genreTvList(LANGUAGE_RU)
  ]);

  const allGenres = [...movies.data.genres!, ...tv.data.genres!];
  return Array.from(new Map(allGenres.map(g => [g.id, g])).values());
};

export const getContentByGenre = async (genreId: number) => {
  const [movies, tvShows] = await Promise.all([
    discoverMovie({ ...LANGUAGE_RU, with_genres: String(genreId) }),
    discoverTv({ ...LANGUAGE_RU, with_genres: String(genreId) })
  ]);

  const moviesWithType = movies.data.results!.map((movie) => ({ ...movie, type: "movie" }));
  const tvWithType = tvShows.data.results!.map((tv) => ({ ...tv, type: "tv" }));
  const allContent = [...moviesWithType, ...tvWithType];
  return allContent.sort(() => Math.random() - 0.5);
};

export const getMovieDetails = async (movieId: string | number) => {
  const response = await movieDetails(
    Number(movieId),
    LANGUAGE_RU
  );
  return response.data;
};

export const getTvDetails = async (tvId: string | number) => {
  const response = await tvSeriesDetails(
    Number(tvId),
    LANGUAGE_RU
  );
  return response.data;
};