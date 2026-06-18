import { MovieDetails } from "@/shared/types/media";
import { MovieDetails200 } from "@/generated/api/types";

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

export function getYear (data: MovieDetails) {
  return (isMovie(data) ? data.release_date : data.first_air_date)?.slice(
    0,
    4,
  )
}

export function getGenres (data: MovieDetails) {
  return data.genres
    ?.slice(0, 2)
    .map((genre) => genre.name)
    .join(", ")
}