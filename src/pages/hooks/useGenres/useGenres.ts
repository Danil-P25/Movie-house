import { useState, useEffect } from "react";
import { getAllGenres } from "../../../api/helpers";
import { Genre } from "./types";

export const useGenre = () => {
  const [genresMap, setGenresMap] = useState<Record<number, string>>({});

  useEffect(() => {
    getAllGenres().then((genres) => {
      const genresByID: Record<number, string> = {};
      (genres as Genre[]).forEach((genre: Genre) => {
        genresByID[genre.id] = genre.name;
      });
      setGenresMap(genresByID);
    });
  }, []);

  const getGenreNames = (genreIds: number[]): string => {
    if (!genreIds || !genresMap) return "";
    return genreIds
      .map((id) => genresMap[id])
      .slice(0, 2)
      .filter(Boolean)
      .join(", ");
  };

  return { getGenreNames };
};
