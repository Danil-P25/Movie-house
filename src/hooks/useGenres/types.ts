import { PartialMovie } from "@/shared/types/common";

export interface Genre {
  name: string;
  id: number;
}

export interface GenreSectionProps {
  title: string;
  items: PartialMovie[];
  getGenreNames: (genreIds: number[]) => string;
}