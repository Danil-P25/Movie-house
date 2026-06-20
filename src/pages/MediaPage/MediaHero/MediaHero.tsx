import styles from "./MediaHero.module.css";
import MovieInfo from "./MovieInfo/MovieInfo";
import { MediaHeroProps } from "./types";
import { getBackdropUrl } from "@/shared/utils/media";

function MediaHero({ data }: MediaHeroProps) {
  return (
    <section className={styles.hero}>
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `url(${getBackdropUrl(data.backdrop_path)})`,
        }}
      ></div>

      <MovieInfo data={data} />
    </section>
  );
}

export default MediaHero;
