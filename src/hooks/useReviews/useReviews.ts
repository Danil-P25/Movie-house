import { getMovieReviews } from "@/api/movie.api";
import { getTvReviews } from "@/api/tv.api";
import { useQuery } from "@tanstack/react-query";

export const useReviews = (
  id: string,
  type: "movie" | "tv",
) => {
  return useQuery({
    queryKey: ["reviews", type, id],
    queryFn: () =>
      type === "movie"
        ? getMovieReviews(id)
        : getTvReviews(id),
  });
};