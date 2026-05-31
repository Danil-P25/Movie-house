export interface Movie {
  id: number;
  title: string;
  name?: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  overview: string;
  type?: string;
}

export type PartialMovie = Partial<Movie>

export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
