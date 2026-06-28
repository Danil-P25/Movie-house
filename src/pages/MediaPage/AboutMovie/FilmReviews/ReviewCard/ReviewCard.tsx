import { MovieReviews200ResultsItem } from "@/generated/api/types";
import { getReviewRating } from "@/pages/MediaPage/utils/utils";
import ReactMarkdown from "react-markdown";
import styles from "./ReviewCard.module.css";
import { getAvatarUrl } from "@/shared/utils/media";
import AppButton from "@/components/UI/AppButton/AppButton";
import { format } from "date-fns";

interface ReviewCardProps {
  review: MovieReviews200ResultsItem;
  mediaTitle: string;
}

function ReviewCard({ review, mediaTitle }: ReviewCardProps) {
  const rating = getReviewRating(review.author_details?.rating);

  return (
    <div className={styles.review}>
      <div className={styles.header}>
        {review.author_details?.avatar_path ? (
          <img
            className={styles.avatar}
            src={getAvatarUrl(review.author_details.avatar_path)}
            alt={review.author ?? "Author"}
          />
        ) : (
          <div className={styles.avatarPlaceholder}>👤</div>
        )}
        <div className={styles.authorInfo}>
          <span className={styles.author}>{review.author}</span>

          <span className={styles.date}>
            {review.created_at
              ? format(new Date(review.created_at), "d.MM.yyyy")
              : "—"}
          </span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <span className={styles.rating}>{rating}</span>«{mediaTitle}»
        </h3>

        <ReactMarkdown>{review.content ?? ""}</ReactMarkdown>
      </div>
      <div className={styles.actions}>
        <AppButton className={styles.actionButton}>
          <img src="/images/comment.svg" alt="коменты" />
        </AppButton>
        <AppButton className={styles.actionButton}>
          <img src="/images/like.svg" alt="лайки" />
        </AppButton>
        <AppButton className={styles.actionButton}>
          <img src="/images/dislike.svg" alt="дизлайки" />
        </AppButton>
      </div>
    </div>
  );
}

export default ReviewCard;
