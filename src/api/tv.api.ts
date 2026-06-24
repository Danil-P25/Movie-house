import { TMDB_CONFIG, TMDB_REVIEWS_CONFIG } from "./config";
import { tvSeriesCredits, tvSeriesDetails, tvSeriesReviews } from "../generated/api/tmdb";

export const getTvDetails = async (tvId: string | number) => {
  const response = await tvSeriesDetails(
    Number(tvId),
    TMDB_CONFIG
  );
  return response.data;
};

export const getTvCredits = async (
  tvId: string | number,
) => {
  const response = await tvSeriesCredits(
    Number(tvId),
    TMDB_CONFIG,
  );

  return response.data;
}

export const getTvReviews = async (
  tvId: string | number,
) => {
  const response = await tvSeriesReviews(
    Number(tvId),
    TMDB_REVIEWS_CONFIG,
  );

  return response.data.results ?? [];
}
