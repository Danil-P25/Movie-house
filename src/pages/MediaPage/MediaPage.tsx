import { useParams } from "react-router-dom";
import AboutMovie from "./AboutMovie/AboutMovie";
import RelatedMovies from "./RelatedMovies/RelatedMovies";
import MediaHero from "./MediaHero/MediaHero";
import { useMediaDetails } from "@/hooks/useMediaDetails/useMediaDetails";
import styles from "./MediaPage.module.css";
import { useCredits } from "@/hooks/useCredits/useCredits";
import MediaHeroSkeleton from "./MediaHero/MediaHeroSkeleton";

function MediaPage() {
  const { id, type } = useParams();

  if (!id || (type !== "movie" && type !== "tv")) {
    return <div>Ошибка 404</div>;
  }
  const { data, isLoading, error } = useMediaDetails(id, type);
  const { data: credits } = useCredits(id, type);

  if (isLoading) {
    return (
      <div className={styles.mediaPage}>
        <MediaHeroSkeleton />
      </div>
    );
  }
  if (error || !data) {
    return <div>Ошибка загрузки</div>;
  }
  return (
    <div className={styles.mediaPage}>
      <MediaHero data={data} />
      <AboutMovie data={data} credits={credits} />
      <RelatedMovies movieId={id} type={type} />
    </div>
  );
}

export default MediaPage;
