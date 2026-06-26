import { SearchMulti200ResultsItem } from "@/generated/api/types";
import { getPosterUrl } from "@/shared/utils/media";
import { useNavigate } from "react-router-dom";
import styles from "./SearchResultCard.module.css";

interface SearchResultCardProps {
  item: SearchMulti200ResultsItem;
  onClose: () => void;
}

function SearchResultCard({ item, onClose }: SearchResultCardProps) {
  const navigate = useNavigate();

  const title = item.title ?? item.name ?? "Без названия";

  const year = item.release_date?.slice(0, 4) ?? "";

  const mediaType = item.media_type === "movie" ? "Фильм" : "Сериал";

  const handleClick = () => {
    navigate(`/media/${item.media_type}/${item.id}`);

    onClose();
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img
        className={styles.poster}
        src={getPosterUrl(item.poster_path)}
        alt={title}
      />

      <div className={styles.info}>
        <h3>{title}</h3>

        <span>
          {mediaType}
          {year && ` • ${year}`}
        </span>
      </div>
    </div>
  );
}

export default SearchResultCard;
