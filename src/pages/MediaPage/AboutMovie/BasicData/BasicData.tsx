import { MediaDataProps } from "@/shared/types/media";
import styles from "./BasicData.module.css";
import { getDurationLabel } from "@/shared/utils/media";

function BasicData({ data }: MediaDataProps) {
  const durationLabel = getDurationLabel(data);
  const genres = data.genres?.map((genre) => genre.name).join(", ");

  console.log(data);

  return (
    <div className={styles.containerBasic}>
      <p className={styles.row}>
        <span className={styles.label}>Рейтинг IMDb:</span>
        <span>{data.vote_average}</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Рейтинг Кинопоиска:</span>
        <span>—</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Жанр:</span>
        <span>{genres}</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Режиссёр:</span>
        <span>—</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Актёрский состав:</span>
        <span>—</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Страна:</span>
        <span>{data.origin_country?.join(", ")}</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>{durationLabel}:</span>
        <span>—</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Аудиодорожки:</span>
        <span>—</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Субтитры:</span>
        <span>—</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Награды:</span>
        <span>—</span>
      </p>
    </div>
  );
}

export default BasicData;
