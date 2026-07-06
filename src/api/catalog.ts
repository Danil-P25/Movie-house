import { genreMovieList, genreTvList, discoverMovie, discoverTv } from "../generated/api/tmdb";
import { CatalogItem } from "@/shared/types/common";

import { TMDB_CONFIG } from "./config";

export const getAllGenres = async () => {
  const [movies, tv] = await Promise.all([genreMovieList(TMDB_CONFIG), genreTvList(TMDB_CONFIG)]);

  const allGenres = [...movies.data.genres!, ...tv.data.genres!];
  return Array.from(new Map(allGenres.map((g) => [g.id, g])).values());
};

export const getContentByGenre = async (genreId: number): Promise<CatalogItem[]> => {
  const [movies, tvShows] = await Promise.all([
    discoverMovie({ ...TMDB_CONFIG, with_genres: String(genreId) }),
    discoverTv({ ...TMDB_CONFIG, with_genres: String(genreId) }),
  ]);

  const moviesWithType = movies.data.results!.map((movie) => ({
    ...movie,
    type: "movie" as const,
  }));
  const tvWithType = tvShows.data.results!.map((tv) => ({ ...tv, type: "tv" as const }));
  const allContent = [...moviesWithType, ...tvWithType];
  return allContent.sort(() => Math.random() - 0.5);
};
