import { MediaDataProps } from "@/shared/types/media";
import styles from "./BasicData.module.css";
import { getDurationInfo, getDurationLabel } from "@/shared/utils/media";
import { getActors, getDirector } from "@/pages/MediaPage/utils/utils";

function BasicData({ data, credits }: MediaDataProps) {
  const durationLabel = getDurationLabel(data);
  const actors = getActors(credits);
  const director = getDirector(credits);

  const rating = data.vote_average ?? "—";
  const genres = data.genres?.map((genre) => genre.name).join(", ") || "—";
  const countries = data.production_countries?.map((c) => c.name).join(", ") || "—";
  const duration = getDurationInfo(data);
  const languages = data.spoken_languages?.map((l) => l.name).join(", ") || "—";

  return (
    <div className={styles.containerBasic}>
      <p className={styles.row}>
        <span className={styles.label}>Рейтинг IMDb:</span>
        <span>{rating}</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Жанр:</span>
        <span>{genres}</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Режиссёр:</span>
        <span>{director}</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Актёрский состав:</span>
        <span>{actors}</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Страна:</span>
        <span>{countries}</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>{durationLabel}:</span>
        <span>{duration}</span>
      </p>

      <p className={styles.row}>
        <span className={styles.label}>Аудиодорожки:</span>
        <span>{languages}</span>
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
