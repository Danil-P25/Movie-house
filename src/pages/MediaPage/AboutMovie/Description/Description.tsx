import { MediaDataProps } from "@/shared/types/media";
import { isMovie } from "@/shared/utils/media";
import styles from "./Description.module.css";

function Description({ data }: MediaDataProps) {
  const title = isMovie(data) ? `О фильме` : `О сериале`;

  return (
    <div className={styles.containerDescription}>
      <h2>{title}</h2>
      <span>{data.overview}</span>
    </div>
  );
}

export default Description;
