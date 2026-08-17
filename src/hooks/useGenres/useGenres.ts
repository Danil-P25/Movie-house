import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllGenres } from "@/api/catalog";

export const useGenre = () => {
  const { data: genres = [] } = useQuery({
    queryKey: ["genres"],
    queryFn: getAllGenres,
  });

  const genresMap = useMemo(
    () => Object.fromEntries(genres.map((genre) => [genre.id, genre.name])),
    [genres],
  );

  const getGenreNames = (genreIds: number[]) =>
    genreIds
      .map((id) => genresMap[id])
      .filter(Boolean)
      .slice(0, 2)
      .join(", ");

  return { getGenreNames };
};
