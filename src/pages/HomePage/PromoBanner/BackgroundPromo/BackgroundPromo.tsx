import { getPopularMovies } from "@/api/movie.api";
import styles from "./BackgroundPromo.module.css";
import { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

function BackgroundPromo({ children }: { children: ReactNode }) {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  const movies = data.slice(0, 9);

  if (isLoading) return <div className={styles.content}>{children}</div>;
  if (error) return <div>Ошибка</div>;

  // Скелетон не забыть

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
            alt=""
            className={styles.bgImage}
          />
        ))}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default BackgroundPromo;
