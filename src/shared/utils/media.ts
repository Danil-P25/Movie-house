import { MovieDetails } from "@/shared/types/media";
import { MovieDetails200 } from "@/generated/api/types";
import { TMDB_BACKDROP_ORIGINAL_URL, TMDB_BACKIMAGE_URL, TMDB_IMAGE_AVATAR, TMDB_IMAGE_URL } from "../constants/tmdb";
import { format } from "date-fns";

export function getMediaTitle(data: MovieDetails) {
  return (
    ("title" in data ? data.title : undefined) ??
    ("name" in data ? data.name : undefined) ??
    "Без названия"
  );
}

export function isMovie(
  data: MovieDetails,
): data is MovieDetails200 {
  return "original_title" in data;
}

export function getDurationInfo(data: MovieDetails) {
  return isMovie(data)
    ? `${data.runtime ?? "—"} мин`
    : `${data.number_of_seasons ?? "—"} сез.`;
}

export function getDurationLabel(data:MovieDetails) {
  return isMovie(data)
  ? "Время"
  : "Количество сезонов";
}

export function getYear(data: MovieDetails) {
  const date = isMovie(data)
    ? data.release_date
    : data.first_air_date;

  return date ? format(new Date(date), "yyyy") : "—";
}

export function getGenres (data: MovieDetails) {
  return data.genres
    ?.slice(0, 2)
    .map((genre) => genre.name)
    .join(", ")
}

export function getPosterUrl(path?: string) {
  return path
    ? `${TMDB_IMAGE_URL}${path}`
    : "/images/zagluchka.jpg";
}

export function getBackUrl(path?: string) {
  return path
    ? `${TMDB_BACKIMAGE_URL}${path}`
    : "/images/zagluchka.jpg";
}

export function getBackdropUrl(path?: string) {
  return path
    ? `${TMDB_BACKDROP_ORIGINAL_URL}${path}`
    : "/images/zagluchka.jpg";
}

export const getAvatarUrl = (path: string) =>
  `${TMDB_IMAGE_AVATAR}${path}`;