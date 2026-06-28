import { MovieCredits200, TvSeriesCredits200 } from "@/generated/api/types";

export function getActors(credits?: MovieCredits200 | TvSeriesCredits200) {
  if (!credits?.cast) return "—";
    const actors = credits.cast
    ?.slice(0, 8)
    .map((actor) => actor.name)
    .filter(Boolean)
    .join(", ");

  return actors ||  "—";
}

export function getDirector(
  credits?: MovieCredits200 | TvSeriesCredits200
) {
  const director = credits?.crew?.find(
    (person) => person.job === "Director",
  )?.name;
  
  return director || "—";
}

export function getReviewRating(
  rating: unknown,
) {
  return rating != null ? `${rating}/10` : "—";
}