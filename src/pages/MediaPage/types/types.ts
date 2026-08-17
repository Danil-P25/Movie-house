import {
  MovieCredits200,
  MovieDetails200,
  TvSeriesCredits200,
  TvSeriesDetails200,
} from "@/generated/api/types";

export interface MoviePageProps {
  movieId: string | undefined;
}

export interface MovieDataProps {
  data: MovieDetails;
  credits?: MovieCredits200 | TvSeriesCredits200;
}

export interface RelatedMoviesProps extends MoviePageProps {
  type: "movie" | "tv";
}

export type MovieDetails = MovieDetails200 | TvSeriesDetails200;
