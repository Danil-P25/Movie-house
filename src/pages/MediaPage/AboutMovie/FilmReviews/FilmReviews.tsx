import { useReviews } from "@/hooks/useReviews/useReviews";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard/ReviewCard";
import styles from "./FilmReviews.module.css";

interface FilmReviewsProps {
  mediaTitle: string;
}

function FilmReviews({ mediaTitle }: FilmReviewsProps) {
  const { id, type } = useParams();

  if (!id || (type !== "movie" && type !== "tv")) {
    return null;
  }

  const { data: reviews = [] } = useReviews(id, type);
  const visibleReviews = reviews.slice(0, 3);

  if (!reviews.length) {
    return <p>Рецензий пока нет</p>;
  }

  return (
    <div className={styles.containerReviews}>
      <h2>Рецензии</h2>
      {visibleReviews.map((review) => (
        <ReviewCard key={review.id} review={review} mediaTitle={mediaTitle} />
      ))}
    </div>
  );
}

export default FilmReviews;
