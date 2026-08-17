import styles from "./MovieCard.module.css";
import { getPosterUrl } from "@/shared/utils/media";

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  type: "movie" | "tv";
  genres: string;
}

function MovieCard({ title, image, rating, type, genres }: MovieCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.imgCatalog} src={getPosterUrl(image)} alt={title} />
      <div className={styles.catalogContent}>
        <span> {rating.toFixed(1)}</span>
        <span>{type === "movie" ? "Фильм" : "Сериал"}</span>
        <span>{genres}</span>
      </div>
      <h4>{title}</h4>
    </div>
  );
}

export default MovieCard;
