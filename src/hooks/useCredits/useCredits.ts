import { getMovieCredits } from "@/api/movie.api";
import { getTvCredits } from "@/api/tv.api";
import { useQuery } from "@tanstack/react-query";

export const useCredits = (id: string, type: "movie" | "tv") => {
  return useQuery({
    queryKey: ["credits", type, id],
    queryFn: () => (type === "movie" ? getMovieCredits(id) : getTvCredits(id)),
  });
};
