import styles from "./Premiere.module.css";
import { getUpcomingMovies } from "../../../../api/helpers";
import { useState, useEffect } from "react";
import { Movie } from "../../../../shared/types/common";
import { useNavigate } from "react-router-dom";

function Premiere() {
  const [movies, setMovies] = useState<Partial<Movie>[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    getUpcomingMovies().then((response) => {
      const results = response.data.results || [];
      const shuffled = [...results].sort(() => Math.random() - 0.5);
      setMovies(shuffled.slice(0, 6));
    });
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % movies.length);
  };

  const visibleMovies = [...Array(3)].map(
    (_, i) => movies[(startIndex + i) % movies.length],
  );

  const getItemStyle = (position: 0 | 1 | 2): React.CSSProperties => {
    switch (position) {
      case 0:
        return {
          transform: "translateX(0) scale(1)",
          zIndex: 3,
          opacity: 1,
          marginRight: "0",
        };
      case 1:
        return {
          transform: "translateX(-20px) scale(0.85)",
          zIndex: 2,
          opacity: 0.7,
          filter: "blur(5px)",
          marginLeft: "-60px",
        };
      case 2:
        return {
          transform: "translateX(-40px) scale(0.7)",
          zIndex: 1,
          opacity: 0.4,
          filter: "blur(5px)",
          marginLeft: "-60px",
        };
      default:
        return {};
    }
  };

  if (movies.length === 0) return null;

  return (
    <div className={styles.contentRelease}>
      <button onClick={handleNext} className={styles.nextButton}>
        ⬅
      </button>
      <ul className={styles.releaseList}>
        {visibleMovies.map((movie, index) => (
          <li
            key={movie.id}
            className={styles.releaseItem}
            onClick={() => navigate(`/${movie.type}/${movie.type}`)}
            style={getItemStyle(index as 0 | 1 | 2)}
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Premiere;
