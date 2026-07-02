import { useNavigate } from "react-router-dom";
import { SearchMulti200ResultsItem } from "@/generated/api/types";
import { getPosterUrl } from "@/shared/utils/media";
import styles from "./SearchResultCard.module.css";
import AppButton from "@/components/UI/AppButton/AppButton";

interface Props {
  item: SearchMulti200ResultsItem;
  onClose: () => void;
}

function SearchResultCard({ item, onClose }: Props) {
  const navigate = useNavigate();
  const title = item.title ?? item.name ?? "Без названия";
  const year = item.release_date?.slice(0, 4) ?? "—";
  const mediaType = item.media_type === "movie" ? "Фильм" : "Сериал";

  const handleClick = () => {
    navigate(`/media/${item.media_type}/${item.id}`);
    onClose();
  };

  return (
    <AppButton className={styles.card} onClick={handleClick}>
      <img
        className={styles.poster}
        src={getPosterUrl(item.poster_path)}
        alt={title}
      />
      <div className={styles.info}>
        <h3>{title}</h3>
        <span>
          {mediaType} • {year}
        </span>
      </div>
    </AppButton>
  );
}

export default SearchResultCard;
