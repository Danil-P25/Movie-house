import { MovieInfoProps } from "../types";
import { getDurationInfo, getGenres, getYear } from "@/shared/utils/media";
import styles from "./MovieMeta.module.css";

function MovieMeta({ data }: MovieInfoProps) {
  const year = getYear(data);

  const genres = getGenres(data);

  const durationInfo = getDurationInfo(data);

  return (
    <div className={styles.containerMeta}>
      <span>{data.vote_average?.toFixed(1)}</span>
      <span>{year}</span>
      <span>{genres}</span>
      <span>{durationInfo}</span>
    </div>
  );
}

export default MovieMeta;
