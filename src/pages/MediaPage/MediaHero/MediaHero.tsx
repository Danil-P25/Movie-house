import styles from "./MediaHero.module.css";
import MovieInfo from "./MovieInfo/MovieInfo";
import { MediaHeroProps } from "./types";

function MediaHero({ data }: MediaHeroProps) {
  return (
    <section className={styles.hero}>
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        }}
      ></div>

      <MovieInfo data={data} />
    </section>
  );
}

export default MediaHero;
