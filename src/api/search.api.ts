import { searchMulti } from "@/generated/api/tmdb";
import { TMDB_CONFIG } from "./config";

export const getSearchResults = async (query: string) => {
  const response = await searchMulti({
    query,
    ...TMDB_CONFIG,
  });
  return response.data.results ?? [];
};
