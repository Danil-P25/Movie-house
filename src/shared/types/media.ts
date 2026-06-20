import {
  MovieDetails200,
  TvSeriesDetails200,
} from "@/generated/api/types";

export type MovieDetails =
  | MovieDetails200
  | TvSeriesDetails200;

export interface MediaDataProps {
  data: MovieDetails;
}