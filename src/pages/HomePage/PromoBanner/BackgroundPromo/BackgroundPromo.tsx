import { getPopularMovies } from "../../../../api/helpers";
import { useState, useEffect } from "react";
import styles from "./BackgroundPromo.module.css";
import { ReactNode } from "react";
import type { moviePopularListResponse } from "../../../../generated/api/tmdb";

function BackgroundPromo({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    getPopularMovies().then((data: moviePopularListResponse) => {
      setMovies(data.data.results!.slice(0, 9));
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        {movies.map((movie: any) => (
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
