import { getPopularMovies } from "@/api/movie.api";
import styles from "./BackgroundPromo.module.css";
import { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBackUrl } from "@/shared/utils/media";

function BackgroundPromo({ children }: { children: ReactNode }) {
  const { data = [] } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  const movies = data.slice(0, 9) ?? [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={getBackUrl(movie.backdrop_path)}
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
