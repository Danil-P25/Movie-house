import { MovieDetails200, TvSeriesDetails200 } from "../../../generated/api/types";

export interface MoviePageProps {
  movieId: string | undefined; 
}

export interface MovieDataProps {
  data: MovieDetails | null;
}

export interface RelatedMoviesProps extends MoviePageProps {
  type: "movie" | "tv";
}

export type MovieDetails = MovieDetails200 | TvSeriesDetails200;