import styles from "./GenreCatalog.module.css";
import { PartialMovie } from "../../../../shared/types/common";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface GenreSectionProps {
  title: string;
  items: PartialMovie[];
  getGenreNames: (genreIds: number[]) => string;
}

function GenreSection({ title, items, getGenreNames }: GenreSectionProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % items.length;
      visible.push(items[index]);
    }
    return visible;
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={styles.boxGenre}>
      <h3>{title}</h3>
      <div className={styles.catalogBox}>
        <ul className={styles.catalogList}>
          {getVisibleItems().map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(`/${item.type}/${item.id}`)}
            >
              <img
                className={styles.imgCatalog}
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title || item.name}
              />
              <div className={styles.catalogContent}>
                <span> {item.vote_average?.toFixed(1)}</span>
                <span>{item.type === "movie" ? "Фильм" : "Сериал"}</span>
                <span>{getGenreNames(item.genre_ids!)}</span>
              </div>
              <h4>{item.title || item.name}</h4>
            </li>
          ))}
        </ul>
        <button className={styles.buttonList} onClick={handleNext}>
          ⮕
        </button>
      </div>
    </div>
  );
}

export default GenreSection;
