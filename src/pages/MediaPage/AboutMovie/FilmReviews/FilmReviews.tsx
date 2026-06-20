import { FilmReviewsProps } from "../types";
import AuthorReviews from "./AuthorReviews/AuthorReviews";
import EvaluationsReviews from "./EvaluationsReviews/EvaluationsReviews";
import TextReviews from "./TextReviews/TextReviews";

function FilmReviews({ movieId }: FilmReviewsProps) {
  return (
    <div>
      <h2>Рецензии</h2>
      <AuthorReviews />
      <TextReviews />
      <EvaluationsReviews />
    </div>
  );
}

export default FilmReviews;
