import styles from "./Premiere.module.css";
import { getUpcomingMovies } from "@/api/movie.api";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PremiereSkeleton from "./PremiereSkeleton";

function Premiere() {
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: getUpcomingMovies,
  });
  const navigate = useNavigate();

  if (isLoading) return <PremiereSkeleton />;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <div className={styles.contentRelease}>
      <button className={styles.customPrev}>⮜</button>
      <Swiper
        className={styles.releaseList}
        modules={[Navigation]}
        navigation={{
          prevEl: `.${styles.customPrev}`,
          nextEl: `.${styles.customNext}`,
        }}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        spaceBetween={-30}
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className={styles.releaseItem}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              className={styles.imgPromo}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <div className={styles.contentApi}>
              <span className={styles.TextDate}>Премьера</span>
              <span>{movie.release_date}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={styles.customNext}>⮞</button>
    </div>
  );
}

export default Premiere;
