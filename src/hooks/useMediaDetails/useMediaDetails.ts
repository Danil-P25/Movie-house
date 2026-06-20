import { useQuery } from "@tanstack/react-query";
import { getTvDetails } from "@/api/tv.api";
import { getMovieDetails } from "@/api/movie.api";

export const useMediaDetails = (
  id: string,
  type: "movie" | "tv",
) => {
  return useQuery({
    queryKey: ["media", type, id],
    queryFn: () =>
      type === "movie"
        ? getMovieDetails(id)
        : getTvDetails(id),
  });
};