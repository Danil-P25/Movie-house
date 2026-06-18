import { TMDB_CONFIG } from "./config";
import { tvSeriesDetails } from "../generated/api/tmdb";

export const getTvDetails = async (tvId: string | number) => {
  const response = await tvSeriesDetails(
    Number(tvId),
    TMDB_CONFIG
  );
  return response.data;
};