import { MovieDataProps } from "../types/types";
import BasicData from "./BasicData/BasicData";
import Description from "./Description/Description";
import FilmReviews from "./FilmReviews/FilmReviews";
import styles from "./AboutMovie.module.css";

function AboutMovie({ data }: MovieDataProps) {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <Description data={data} />
        <FilmReviews movieId={data.id} />
      </div>

      <aside className={styles.sidebar}>
        <BasicData data={data} />
      </aside>
    </section>
  );
}

export default AboutMovie;
