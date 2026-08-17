import { MovieDataProps } from "../types/types";
import BasicData from "./BasicData/BasicData";
import Description from "./Description/Description";
import FilmReviews from "./FilmReviews/FilmReviews";
import styles from "./AboutMovie.module.css";
import { getMediaTitle } from "@/shared/utils/media";

function AboutMovie({ data, credits }: MovieDataProps) {
  const mediaTitle = getMediaTitle(data);

  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <Description data={data} />
        <FilmReviews mediaTitle={mediaTitle} />
      </div>

      <aside className={styles.sidebar}>
        <BasicData data={data} credits={credits} />
      </aside>
    </section>
  );
}

export default AboutMovie;
